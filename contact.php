<?php
$to = 'info@bitfit.club';
$subject = 'Bitfit Contact Form';

$name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING) ?? '');
$email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) ?? '');
$message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING) ?? '');

$errors = [];

if ($name === '') {
    $errors[] = 'Name fehlt.';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Ungueltige E-Mail.';
}

if ($message === '') {
    $errors[] = 'Nachricht fehlt.';
}

$body = "Name: {$name}\nEmail: {$email}\n\nNachricht:\n{$message}\n";
$headers = "From: {$name} <{$email}>\r\n";
$headers .= "Reply-To: {$email}\r\n";

$status = 'error';

if (count($errors) > 0) {
    $status = 'invalid';
} else {
    $status = mail($to, $subject, $body, $headers) ? 'success' : 'error';
}

header("Location: index.html?contact={$status}#contact");
exit;
