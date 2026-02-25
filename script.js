let currentLanguage = localStorage.getItem('bitfitLanguage') || 'en';

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('bitfitLanguage', lang);
  const t = translations[lang];

  if (!t) {
    return;
  }

  // Update nav links
  document.querySelectorAll('.nav-links a').forEach((link, index) => {
    const keys = ['x', 'instagram', 'nostr', 'about', 'contact'];
    if (index < keys.length) {
      link.textContent = t.nav[keys[index]];
    }
  });


  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    if (mobileMenuLinks[0]) mobileMenuLinks[0].textContent = t.nav.instagram;
    if (mobileMenuLinks[1]) mobileMenuLinks[1].textContent = t.nav.x;
    if (mobileMenuLinks[2]) mobileMenuLinks[2].textContent = t.nav.nostr;
    if (mobileMenuLinks[3]) mobileMenuLinks[3].textContent = t.nav.about;
    if (mobileMenuLinks[4]) mobileMenuLinks[4].textContent = t.nav.contact;
  }

  const isHomePage = Boolean(document.getElementById('hero'));

  if (isHomePage) {
    // Hero section
    document.querySelector('.hero .eyebrow').textContent = t.hero.eyebrow;
    const h1 = document.querySelector('.hero h1');
    h1.innerHTML = t.hero.h1 + '<br><span class="accent">' + t.hero.accent + '</span>';
    document.querySelector('.hero .hero-inner h1 + p').textContent = t.hero.description;
    document.querySelector('.hero-actions .btn-primary').innerHTML = t.hero.startNow + ' <img class="btn-icon" src="assets/img/black-arrow.png" alt="">';

    // About section
    document.querySelector('#about .section-title p').textContent = 'I Make The Difference';
    const aboutH2 = document.querySelector('#about .section-title h2');
    aboutH2.innerHTML = t.about.title + ' <span class="accent">' + t.about.accent + '</span>';
    document.querySelectorAll('#about .card').forEach((card, i) => {
      const keys = ['card1', 'card2', 'card3', 'card4'];
      const cardData = t.about[keys[i]];
      card.querySelector('h3').textContent = cardData.h3;
      card.querySelector('p').textContent = cardData.p;
    });

    // Pricing section
    document.querySelector('#pricing .section-title p').textContent = 'Pricing Plans';
    const pricingH2 = document.querySelector('#pricing .section-title h2');
    pricingH2.innerHTML = t.pricing.title + ' <span class="accent">' + t.pricing.accent + '</span>';

    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards[0].querySelector('h3').textContent = t.pricing.underdog.name;
    pricingCards[0].querySelector('.sub').textContent = t.pricing.underdog.sub;
    pricingCards[0].querySelector('.price').textContent = t.pricing.underdog.price;
    pricingCards[0].querySelector('.price + span').textContent = t.pricing.underdog.period;
    pricingCards[0].querySelectorAll('.list li').forEach((li, i) => (li.textContent = t.pricing.underdog.features[i]));
    pricingCards[0].querySelector('.btn').innerHTML = t.pricing.underdog.btn + ' <img class="btn-icon btn-arrow-white" src="assets/img/white-arrow.png" alt="">';

    pricingCards[1].querySelector('.badge').textContent = t.pricing.gladiator.badge;
    pricingCards[1].querySelector('h3').textContent = t.pricing.gladiator.name;
    pricingCards[1].querySelector('.sub').textContent = t.pricing.gladiator.sub;
    pricingCards[1].querySelector('.price').textContent = t.pricing.gladiator.price;
    pricingCards[1].querySelector('.price + span').textContent = t.pricing.gladiator.period;
    pricingCards[1].querySelectorAll('.list li').forEach((li, i) => (li.textContent = t.pricing.gladiator.features[i]));
    pricingCards[1].querySelector('.btn').innerHTML = t.pricing.gladiator.btn + ' <img class="btn-icon" src="assets/img/black-arrow.png" alt="">';

    pricingCards[2].querySelector('h3').textContent = t.pricing.terminator.name;
    pricingCards[2].querySelector('.sub').textContent = t.pricing.terminator.sub;
    pricingCards[2].querySelector('.price').textContent = t.pricing.terminator.price;
    pricingCards[2].querySelector('.price + span').textContent = t.pricing.terminator.period;
    pricingCards[2].querySelectorAll('.list li').forEach((li, i) => (li.textContent = t.pricing.terminator.features[i]));
    pricingCards[2].querySelector('.btn').innerHTML = t.pricing.terminator.btn + ' <img class="btn-icon btn-arrow-white" src="assets/img/white-arrow.png" alt="">';

    // How It Works
    document.querySelector('#how-it-works .section-title p').textContent = 'The Process';
    const howH2 = document.querySelector('#how-it-works .section-title h2');
    howH2.innerHTML = t.howItWorks.title + ' <span class="accent">' + t.howItWorks.accent + '</span>';

    const steps = document.querySelectorAll('.step');
    steps[0].querySelector('.step-num').textContent = t.howItWorks.step1.num;
    steps[0].querySelector('h3').textContent = t.howItWorks.step1.h3;
    steps[0].querySelector('p').textContent = t.howItWorks.step1.p;
    steps[1].querySelector('.step-num').textContent = t.howItWorks.step2.num;
    steps[1].querySelector('h3').textContent = t.howItWorks.step2.h3;
    steps[1].querySelector('p').textContent = t.howItWorks.step2.p;
    steps[2].querySelector('.step-num').textContent = t.howItWorks.step3.num;
    steps[2].querySelector('h3').textContent = t.howItWorks.step3.h3;
    steps[2].querySelector('p').textContent = t.howItWorks.step3.p;

    // Testimonials
    document.querySelector('#testimonials .section-title p').textContent = 'Success Stories';
    const testH2 = document.querySelector('#testimonials .section-title h2');
    testH2.innerHTML = t.testimonials.title + ' <span class="accent">' + t.testimonials.accent + '</span>';

    const testimonials = document.querySelectorAll('.testimonial');
    testimonials[0].querySelector('p').textContent = t.testimonials.testimonial1.text;
    testimonials[0].querySelector('.person strong').textContent = t.testimonials.testimonial1.name;
    testimonials[0].querySelector('.result').textContent = t.testimonials.testimonial1.result;
    testimonials[1].querySelector('p').textContent = t.testimonials.testimonial2.text;
    testimonials[1].querySelector('.person strong').textContent = t.testimonials.testimonial2.name;
    testimonials[1].querySelector('.result').textContent = t.testimonials.testimonial2.result;
    testimonials[2].querySelector('p').textContent = t.testimonials.testimonial3.text;
    testimonials[2].querySelector('.person strong').textContent = t.testimonials.testimonial3.name;
    testimonials[2].querySelector('.result').textContent = t.testimonials.testimonial3.result;

    // Contact section
    document.querySelector('#contact .eyebrow').textContent = t.contact.eyebrow;
    document.querySelector('#contact .contact-title').innerHTML = t.contact.h2.replace('Start', '<span class="accent">Start</span>').replace('?', '</span>?');
    document.querySelector('#contact .lead').textContent = t.contact.p;
    document.querySelector('#contact .response-note').textContent = t.contact.response;
    document.querySelector('input[name="name"]').placeholder = t.contact.name;
    document.querySelector('input[name="email"]').placeholder = t.contact.email;
    document.querySelector('textarea[name="message"]').placeholder = t.contact.message;
    document.querySelector('#contact-form .btn').textContent = t.contact.submit;

  }

  // Footer
  const footerMuted = document.querySelector('footer .muted');
  if (footerMuted) {
    footerMuted.textContent = t.footer.copyright;
  }

  const footerLinks = document.querySelectorAll('.footer-links a');
  if (footerLinks.length > 0) {
    footerLinks[0].textContent = t.footer.privacy;
    if (footerLinks[1]) {
      footerLinks[1].textContent = t.footer.legal;
    }
  }

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) btn.classList.add('active');
  });

  // Update legal pages
  const policyContent = document.getElementById('policy-content');
  const imprintContent = document.getElementById('imprint-content');

  if (policyContent) {
    policyContent.innerHTML = translations[currentLanguage].privacy;
  }

  if (imprintContent) {
    imprintContent.innerHTML = translations[currentLanguage].imprint;
  }

  const policySubtitle = document.querySelector('.policy-subtitle');
  if (policySubtitle) {
    policySubtitle.textContent = currentLanguage === 'en' ? 'Legal' : 'Rechtliches';
  }

  const contactStatus = document.querySelector('#contact-status');
  if (contactStatus) {
    const statusKey = contactStatus.dataset.statusKey;
    const statusMessages = t.messages || translations.en.messages;

    if (statusKey && statusMessages[statusKey]) {
      contactStatus.textContent = statusMessages[statusKey];
      contactStatus.classList.add('is-visible');
    }
  }

  const purchaseModalTitle = document.querySelector('#purchase-modal-title');
  const purchaseModalSubtitle = document.querySelector('.purchase-modal__subtitle');
  const purchaseBtcPay = document.querySelector('#purchase-btcpay');
  const purchaseStandard = document.querySelector('#purchase-standard');
  const purchaseModalTranslations = t.purchaseModal || translations.en.purchaseModal;

  if (purchaseModalTitle && purchaseModalTranslations) {
    purchaseModalTitle.textContent = purchaseModalTranslations.title;
  }

  if (purchaseModalSubtitle && purchaseModalTranslations) {
    purchaseModalSubtitle.textContent = purchaseModalTranslations.subtitle;
  }

  if (purchaseBtcPay && purchaseModalTranslations) {
    purchaseBtcPay.textContent = purchaseModalTranslations.btcpay;
  }

  if (purchaseStandard && purchaseModalTranslations) {
    purchaseStandard.textContent = purchaseModalTranslations.standard;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('language-toggle')) {
    changeLanguage(currentLanguage);
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });
  }

  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
      });
    });
  }

  const header = document.querySelector('.nav');
  const aboutCards = document.querySelectorAll('#about .card');
  const pricingSection = document.querySelector('#pricing');
  const aboutVideoSources = {
    'card-1': ['assets/videos/explanation1.mov', 'assets/videos/explanation2.mov'],
    'card-2': ['assets/videos/explanation.mov', 'assets/videos/double-session.mov'],
    'card-3': ['assets/videos/flex-arms.mov', 'assets/videos/nauris-flex.mov'],
    'card-4': ['assets/videos/push-training.mov', 'assets/videos/back-training.mov', 'assets/videos/facepull-training.mov']
  };

  const syncHeaderState = () => {
    if (!header) {
      return;
    }

    if (window.scrollY > 0) {
      header.classList.add('nav-scrolled');
      return;
    }

    header.classList.remove('nav-scrolled');
  };

  syncHeaderState();
  window.addEventListener('scroll', syncHeaderState, { passive: true });

  if (pricingSection) {
    const pricingVideoSources = [
      'assets/videos/push-training.mov',
      'assets/videos/ball-training.mov',
      'assets/videos/facepull-training.mov',
      'assets/videos/flex-arms.mov'
    ];

    const pricingBgWrap = document.createElement('div');
    pricingBgWrap.className = 'pricing-bg-video-wrap';

    const pricingBgVideo = document.createElement('video');
    pricingBgVideo.className = 'pricing-bg-video';
    pricingBgVideo.muted = true;
    pricingBgVideo.playsInline = true;
    pricingBgVideo.autoplay = true;
    pricingBgVideo.preload = 'metadata';
    pricingBgVideo.setAttribute('aria-hidden', 'true');

    let pricingVideoIndex = 0;

    const playPricingVideo = () => {
      pricingBgVideo.src = pricingVideoSources[pricingVideoIndex];
      pricingBgVideo.load();
      pricingBgVideo.play().catch(() => {
        return;
      });
    };

    pricingBgVideo.addEventListener('loadedmetadata', () => {
      pricingBgVideo.playbackRate = 0.5;
    });

    pricingBgVideo.addEventListener('ended', () => {
      pricingVideoIndex = (pricingVideoIndex + 1) % pricingVideoSources.length;
      playPricingVideo();
    });

    pricingBgVideo.addEventListener('error', () => {
      pricingVideoIndex = (pricingVideoIndex + 1) % pricingVideoSources.length;
      playPricingVideo();
    });

    pricingBgWrap.appendChild(pricingBgVideo);
    pricingSection.prepend(pricingBgWrap);
    playPricingVideo();
  }

  if (aboutCards.length > 0) {
    const fallbackVideos = Object.values(aboutVideoSources).flat();

    aboutCards.forEach((card, cardIndex) => {
      const cardKey = card.dataset.card ?? `card-${cardIndex + 1}`;
      const cardVideos = aboutVideoSources[cardKey] ?? fallbackVideos;

      if (!cardVideos || cardVideos.length === 0) {
        return;
      }

      const mediaWrap = document.createElement('div');
      mediaWrap.className = 'card-media';

      const player = document.createElement('div');
      player.className = 'video-player';

      const video = document.createElement('video');
      video.className = 'card-video';
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.preload = 'metadata';
      video.setAttribute('aria-hidden', 'true');

      let currentVideoIndex = 0;

      const playCurrentVideo = () => {
        video.src = cardVideos[currentVideoIndex];
        video.play().catch(() => {
          return;
        });
      };

      video.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % cardVideos.length;
        playCurrentVideo();
      });

      card.addEventListener('mouseenter', () => {
        if (video.paused) {
          video.play().catch(() => {
            return;
          });
        }
      });

      playCurrentVideo();

      player.appendChild(video);
      mediaWrap.appendChild(player);
      card.appendChild(mediaWrap);
    });
  }

  const contactStatus = document.querySelector('#contact-status');

  if (contactStatus) {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('contact');

    const statusMessages = translations[currentLanguage].messages || translations.en.messages;

    if (status && statusMessages[status]) {
      contactStatus.dataset.statusKey = status;
      contactStatus.textContent = statusMessages[status];
      contactStatus.classList.add('is-visible');
    }
  }

  const purchaseModal = document.getElementById('purchase-modal');
  const purchaseStandard = document.getElementById('purchase-standard');
  const purchaseBtcPay = document.getElementById('purchase-btcpay');
  const purchaseModalClose = document.getElementById('purchase-modal-close');
  const purchaseModalOverlay = purchaseModal ? purchaseModal.querySelector('[data-close-purchase-modal]') : null;

  const btcpayPlanLinks = {
    underdog: 'btcpay-checkout.php?plan=underdog',
    gladiator: 'btcpay-checkout.php?plan=gladiator',
    terminator: 'btcpay-checkout.php?plan=terminator'
  };

  const closePurchaseModal = () => {
    if (!purchaseModal) {
      return;
    }

    purchaseModal.classList.remove('is-open');
    purchaseModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const openPurchaseModal = (standardUrl, btcpayUrl) => {
    if (!purchaseModal || !purchaseStandard || !purchaseBtcPay) {
      return;
    }

    purchaseStandard.setAttribute('href', standardUrl);
    purchaseBtcPay.setAttribute('href', btcpayUrl);

    purchaseModal.classList.add('is-open');
    purchaseModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  document.querySelectorAll('.pricing-card .btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      const plan = button.dataset.plan;
      const standardUrl = (button.getAttribute('href') || '').trim();
      const btcpayUrl = btcpayPlanLinks[plan];

      if (!plan || !standardUrl || !btcpayUrl) {
        return;
      }

      event.preventDefault();
      openPurchaseModal(standardUrl, btcpayUrl);
    });
  });

  if (purchaseModalClose) {
    purchaseModalClose.addEventListener('click', closePurchaseModal);
  }

  if (purchaseModalOverlay) {
    purchaseModalOverlay.addEventListener('click', closePurchaseModal);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePurchaseModal();
    }
  });
});
