<?php

declare(strict_types=1);

$plans = [
    'underdog' => [
        'label' => 'Underdog',
        'amount' => 49,
        'currency' => 'EUR',
        'appId' => 'plan_49hNNBiCu8FpNvYydZ',
    ],
    'gladiator' => [
        'label' => 'Gladiator',
        'amount' => 99,
        'currency' => 'EUR',
        'appId' => 'plan_GaBQ2VGrXjYmNWDq3H',
    ],
    'terminator' => [
        'label' => 'Terminator',
        'amount' => 199,
        'currency' => 'EUR',
        'appId' => 'plan_5apuSyU1QLCgGgCGye',
    ],
];

$planKey = strtolower(trim((string) ($_GET['plan'] ?? '')));

if (!isset($plans[$planKey])) {
    http_response_code(400);
    echo 'Invalid plan.';
    exit;
}

$plan = $plans[$planKey];

$serverUrl = 'https://btcpay.bitfit.club';
$apiKey = '83fd660ce26998b1b7d60acc704b1e591a7c9f29';
$storeId = 'Cm8asN2k7weaKkyeyXvnbutzkLhGyrFaKqM48BvVUQMb';

if ($serverUrl === '') {
    $serverUrl = 'https://btcpay.bitfit.club';
}

$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$baseUrl = $scheme . '://' . $host;

$redirectUrl = $baseUrl . '/index.html?checkout=' . urlencode($planKey) . '#pricing';
$orderId = sprintf('bitfit-%s-%s', $planKey, bin2hex(random_bytes(6)));

if ($serverUrl !== '' && $apiKey !== '' && $storeId !== '') {
    $endpoint = $serverUrl . '/api/v1/stores/' . rawurlencode($storeId) . '/invoices';

    $payload = [
        'amount' => $plan['amount'],
        'currency' => $plan['currency'],
        'metadata' => [
            'orderId' => $orderId,
            'itemDesc' => $plan['label'] . ' Plan',
            'itemCode' => $planKey,
        ],
        'checkout' => [
            'redirectURL' => $redirectUrl,
            'redirectAutomatically' => true,
        ],
    ];

    $ch = curl_init($endpoint);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: token ' . $apiKey,
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

    $responseBody = curl_exec($ch);
    $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($responseBody !== false && $httpCode >= 200 && $httpCode < 300) {
        $response = json_decode($responseBody, true);
        $checkoutLink = $response['checkoutLink'] ?? null;

        if (is_string($checkoutLink) && $checkoutLink !== '') {
            header('Location: ' . $checkoutLink);
            exit;
        }
    }

    if ($curlError !== '') {
        error_log('BTCPay bridge cURL error: ' . $curlError);
    } else {
        error_log('BTCPay bridge invoice creation failed with HTTP ' . $httpCode . '.');
    }
}

http_response_code(500);
echo 'BTCPay checkout could not be created.';
