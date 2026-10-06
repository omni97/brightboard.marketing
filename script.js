// TRANSLATIONS
const translations = {
    nl: {
        nav_home: 'Home',
        nav_proleague: 'Pro League',
        nav_reddevils: "Rode Duivels",
        home_h1: "ADVERTEREN IN HET BELGISCHE VOETBAL",
        home_sub: "Kies je voetbalpartnership: LED-boarding bij Pro League-clubs of virtuele reclame (VBR) tijdens de wedstrijden van de Rode Duivels.",
        home_cta_proleague: 'Pro League partnerships',
        home_cta_reddevils: "Rode Duivels VBR partnerships",
        pl_h1: "Adverteren op LED-boarding bij Pro League-clubs",
        pl_cta_offer: 'Bekijk ons aanbod',
        pl_cta_contact: 'Contacteer ons →',
        pl_h2_reach: 'Bereik voetbalfans in heel België',
        pl_p_reach: "Bereik een van de meest betrokken doelgroepen in het land via LED-boarding in de stadions van Pro League-clubs. Tijdens wedstrijden bevindt je merk zich in een context van maximale aandacht, waar fans niet alleen kijken, maar actief meeleven. Door zichtbaar te zijn op cruciale momenten — goals, herhalingen, beslissende fases — bouw je sterke merkherkenning op met hoge contactfrequentie.",
        pl_h2_clubs: "Clubs waar je kunt adverteren",
        pl_h2_contact: 'Neem contact op',
        rd_h1: "ADVERTEREN TIJDENS DE RODE DUIVELS",
        rd_sub: "Breng jouw merk naar het hart van het stadion. Met VBR bereikt jouw boodschap de fans van de Rode Duivels, de Belgische nationale voetbalploeg, via LED-boarding — maximale zichtbaarheid, onmiddellijke impact.",
        rd_cta_readmore: 'Lees meer',
        rd_cta_contact: 'Contact',
        rd_h2_vbr: "Wat is VBR? Voor en na",
        rd_p_vbr: "Met VBR (Virtual Boarding Replacement) breng je jouw merk rechtstreeks bij de fans van de Rode Duivels, waar ze ook spelen. Zelfs tijdens uitwedstrijden van de Rode Duivels worden de advertenties van partners specifiek getoond aan het Belgische publiek, zonder kwaliteitsverlies.",
        rd_title_overlay: 'Verhoog zichtbaarheid met<br class="title-break"> virtuele overlay',
        rd_p_overlay: 'Virtuele overlaytechnologie laat je toe om de content op LED-boarding dynamisch aan te passen aan verschillende doelgroepen, momenten en platformen. Door virtuele advertenties te integreren in de live-uitzending, kun je jouw boodschap lokaliseren en personaliseren — zonder de beleving in het stadion te veranderen.',
        rd_h3_fixtures: "Aankomende uitwedstrijden van de Rode Duivels",
        fx_it_match: 'Italië vs België',
        fx_it_meta: 'Italië · 25 september 2026 · 20:45 CET',
        fx_fr_match: 'Frankrijk vs België',
        fx_fr_meta: 'Frankrijk · 5 oktober 2026 · 20:45 CET',
        fx_tr_match: 'Turkije vs België',
        fx_tr_meta: 'Turkije · 12 november 2026 · 18:00 CET',
        cd_days: 'dagen',
        cd_hrs: 'uur',
        cd_min: 'min',
        cd_sec: 'sec',
        match_won: 'GEWONNEN',
        match_lost: 'VERLOREN',
        rd_partner_cta: "Laten we samenwerken!",
        rd_h2_gettouch: 'Neem contact op',
        form_firstname: 'Voornaam',
        form_lastname: 'Naam',
        form_email: 'E-mailadres',
        form_phone: 'Telefoon',
        form_company: 'Bedrijfsnaam',
        form_region: 'Regio',
        form_region_placeholder: 'Selecteer een regio',
        region_vlbrabant: 'Vlaams-Brabant',
        region_limburg: 'Limburg',
        region_antwerpen: 'Antwerpen',
        region_oostvl: 'Oost-Vlaanderen',
        region_westvl: 'West-Vlaanderen',
        region_brussel: 'Brussel',
        form_comment: 'Commentaar',
        form_toelichting: 'Toelichting',
        form_submit: 'Verzenden',
        footer_copyright: '© 2026 BrightBoard Marketing. Alle rechten voorbehouden.',
        modal_title: 'Gratis brochure',
        modal_subtitle: 'VBR tijdens de Nations League',
        modal_desc: 'Ben je benieuwd naar onze aanpak voor de VBR tijdens de Nations League? Vul hieronder je gegevens in en ontvang de brochure als gratis download.',
        modal_phone: 'Telefoonnummer',
        modal_company: 'Bedrijf',
        modal_submit: 'Ontvang de brochure',
        ripopup_title: 'Contacteer me',
        ripopup_desc: 'en we bespreken samen de opties.',
        ripopup_mail: '✉ Mail me',
        ripopup_call: '☎ Bel me',
        home_h2_intro: "Adverteren op LED-boarding en tijdens de Rode Duivels",
        home_p_intro: "BrightBoard brengt jouw merk in beeld in het Belgische topvoetbal. Bij Pro League-clubs zoals Royal Antwerp FC, KRC Genk, KV Mechelen en Union Saint-Gilloise adverteer je op de LED-boarding in het stadion, op de momenten dat fans het meest betrokken zijn. Tijdens de wedstrijden van de Rode Duivels zorgt Virtual Boarding Replacement (VBR) ervoor dat het Belgische publiek jouw reclame ziet, ook bij uitwedstrijden.",
        pl_h2_faq: "Veelgestelde vragen over adverteren bij Pro League-clubs",
        pl_faq1_q: "Bij welke clubs kan ik adverteren?",
        pl_faq1_a: "Via BrightBoard adverteer je bij Royal Antwerp FC, Royale Union Saint-Gilloise, Sint-Truidense VV, SK Beveren, SV Zulte Waregem, K.A.A. Westerlo, Lommel SK, KRC Genk, KV Kortrijk, KV Mechelen en OH Leuven.",
        pl_faq2_q: "Hoe werkt adverteren op LED-boarding in het stadion?",
        pl_faq2_a: "Jouw reclame verschijnt tijdens de wedstrijden op de LED-boarding langs het veld. Zo ben je zichtbaar op de cruciale momenten — goals, herhalingen en beslissende fases — wanneer fans het meest betrokken zijn.",
        pl_faq3_q: "Hoe vraag ik een voorstel aan?",
        pl_faq3_a: "Vul het contactformulier op deze pagina in, of neem rechtstreeks contact op met Ri Verspecht (ri@brightboard.eu, +32 478 92 21 52).",
        rd_h2_faq: "Veelgestelde vragen over adverteren bij de Rode Duivels",
        rd_faq1_q: "Wat is Virtual Boarding Replacement (VBR)?",
        rd_faq1_a: "Met VBR wordt de reclame op de LED-boarding in de live-uitzending virtueel vervangen. Zo ziet het Belgische tv-publiek de advertenties van partners, terwijl de beleving in het stadion onveranderd blijft.",
        rd_faq2_q: "Kan ik ook adverteren tijdens uitwedstrijden van de Rode Duivels?",
        rd_faq2_a: "Ja. Ook tijdens uitwedstrijden worden de advertenties van partners via VBR specifiek aan het Belgische publiek getoond, zonder kwaliteitsverlies.",
        rd_faq3_q: "Hoe word ik partner?",
        rd_faq3_a: "Vul het contactformulier op deze pagina in of vraag de gratis brochure over VBR tijdens de Nations League aan. Je kunt ook rechtstreeks contact opnemen met Ri Verspecht (ri@brightboard.eu, +32 478 92 21 52)."
    },
    fr: {
        nav_home: 'Accueil',
        nav_proleague: 'Pro League',
        nav_reddevils: "Diables Rouges",
        home_h1: "LA PUBLICITÉ DANS LE FOOTBALL BELGE",
        home_sub: "Choisissez votre partenariat football : panneaux LED dans les clubs de Pro League ou publicité virtuelle (VBR) pendant les matchs des Diables Rouges.",
        home_cta_proleague: 'Partenariats Pro League',
        home_cta_reddevils: "Partenariats VBR Diables Rouges",
        pl_h1: "Publicité sur panneaux LED dans les clubs de Pro League",
        pl_cta_offer: 'Découvrez notre offre',
        pl_cta_contact: 'Contactez-nous →',
        pl_h2_reach: 'Touchez les fans de football dans toute la Belgique',
        pl_p_reach: "Touchez l'une des audiences les plus engagées du pays grâce aux panneaux LED dans les stades des clubs de Pro League. Pendant les matchs, votre marque se trouve dans un contexte d'attention maximale, où les fans ne se contentent pas de regarder, mais vivent le match activement. En étant visible aux moments cruciaux — buts, ralentis, phases décisives — vous construisez une forte reconnaissance de marque avec une fréquence de contact élevée.",
        pl_h2_clubs: "Les clubs où vous pouvez faire de la publicité",
        pl_h2_contact: 'Contactez-nous',
        rd_h1: "LA PUBLICITÉ PENDANT LES MATCHS DES DIABLES ROUGES",
        rd_sub: "Amenez votre marque au cœur du stade. Avec le VBR, votre message atteint les fans des Diables Rouges, l'équipe nationale belge de football, via les panneaux LED — visibilité maximale, impact immédiat.",
        rd_cta_readmore: 'En savoir plus',
        rd_cta_contact: 'Contact',
        rd_h2_vbr: "Qu'est-ce que le VBR ? Avant et après",
        rd_p_vbr: "Avec le VBR (Virtual Boarding Replacement), vous amenez votre marque directement chez les fans des Diables Rouges, où qu'ils jouent. Même lors des matchs à l'extérieur des Diables Rouges, les publicités des partenaires sont spécifiquement diffusées pour le public belge, sans aucune perte de qualité.",
        rd_title_overlay: 'Améliorez la visibilité avec<br class="title-break"> l\'overlay virtuel',
        rd_p_overlay: "La technologie d'overlay virtuel vous permet d'adapter dynamiquement le contenu affiché sur les panneaux LED à différents publics, moments et plateformes. En intégrant des publicités virtuelles dans le flux de diffusion en direct, vous pouvez localiser et personnaliser votre message — sans modifier l'expérience dans le stade.",
        rd_h3_fixtures: "Prochains matchs à l'extérieur des Diables Rouges",
        fx_it_match: 'Italie vs Belgique',
        fx_it_meta: 'Italie · 25 septembre 2026 · 20h45 CET',
        fx_fr_match: 'France vs Belgique',
        fx_fr_meta: 'France · 5 octobre 2026 · 20h45 CET',
        fx_tr_match: 'Turquie vs Belgique',
        fx_tr_meta: 'Turquie · 12 novembre 2026 · 18h00 CET',
        cd_days: 'jours',
        cd_hrs: 'h',
        cd_min: 'min',
        cd_sec: 'sec',
        match_won: 'REMPORTÉ',
        match_lost: 'PERDU',
        rd_partner_cta: 'Devenons partenaires !',
        rd_h2_gettouch: 'Contactez-nous',
        form_firstname: 'Prénom',
        form_lastname: 'Nom',
        form_email: 'Adresse e-mail',
        form_phone: 'Téléphone',
        form_company: "Nom de l'entreprise",
        form_region: 'Région',
        form_region_placeholder: 'Sélectionnez une région',
        region_vlbrabant: 'Brabant flamand',
        region_limburg: 'Limbourg',
        region_antwerpen: 'Anvers',
        region_oostvl: 'Flandre-Orientale',
        region_westvl: 'Flandre-Occidentale',
        region_brussel: 'Bruxelles',
        form_comment: 'Commentaire',
        form_toelichting: 'Détails supplémentaires',
        form_submit: 'Envoyer',
        footer_copyright: '© 2026 BrightBoard Marketing. Tous droits réservés.',
        modal_title: 'Brochure gratuite',
        modal_subtitle: 'Le VBR pendant la Ligue des Nations',
        modal_desc: 'Curieux de découvrir notre approche du VBR pendant la Ligue des Nations ? Complétez vos coordonnées ci-dessous et recevez la brochure en téléchargement gratuit.',
        modal_phone: 'Numéro de téléphone',
        modal_company: 'Entreprise',
        modal_submit: 'Recevoir la brochure',
        ripopup_title: 'Contactez-moi',
        ripopup_desc: 'et discutons ensemble des options.',
        ripopup_mail: '✉ Écrivez-moi',
        ripopup_call: '☎ Appelez-moi',
        home_h2_intro: "Publicité sur panneaux LED et pendant les matchs des Diables Rouges",
        home_p_intro: "BrightBoard met votre marque en avant dans le football belge de haut niveau. Dans les clubs de Pro League comme le Royal Antwerp FC, le KRC Genk, le KV Mechelen et l'Union Saint-Gilloise, vous faites de la publicité sur les panneaux LED du stade, aux moments où les fans sont les plus engagés. Pendant les matchs des Diables Rouges, le Virtual Boarding Replacement (VBR) permet au public belge de voir votre publicité, même lors des matchs à l'extérieur.",
        pl_h2_faq: "Questions fréquentes sur la publicité dans les clubs de Pro League",
        pl_faq1_q: "Dans quels clubs puis-je faire de la publicité ?",
        pl_faq1_a: "Avec BrightBoard, vous faites de la publicité au Royal Antwerp FC, Royale Union Saint-Gilloise, Sint-Truidense VV, SK Beveren, SV Zulte Waregem, K.A.A. Westerlo, Lommel SK, KRC Genk, KV Kortrijk, KV Mechelen et à OH Leuven.",
        pl_faq2_q: "Comment fonctionne la publicité sur les panneaux LED du stade ?",
        pl_faq2_a: "Votre publicité apparaît pendant les matchs sur les panneaux LED au bord du terrain. Vous êtes ainsi visible aux moments cruciaux — buts, ralentis et phases décisives — quand les fans sont les plus engagés.",
        pl_faq3_q: "Comment demander une proposition ?",
        pl_faq3_a: "Remplissez le formulaire de contact sur cette page, ou contactez directement Ri Verspecht (ri@brightboard.eu, +32 478 92 21 52).",
        rd_h2_faq: "Questions fréquentes sur la publicité pendant les matchs des Diables Rouges",
        rd_faq1_q: "Qu'est-ce que le Virtual Boarding Replacement (VBR) ?",
        rd_faq1_a: "Avec le VBR, la publicité sur les panneaux LED est remplacée virtuellement dans la retransmission en direct. Le public belge voit ainsi les publicités des partenaires, sans que l'expérience dans le stade ne change.",
        rd_faq2_q: "Puis-je aussi faire de la publicité pendant les matchs à l'extérieur des Diables Rouges ?",
        rd_faq2_a: "Oui. Même lors des matchs à l'extérieur, les publicités des partenaires sont spécifiquement diffusées pour le public belge grâce au VBR, sans aucune perte de qualité.",
        rd_faq3_q: "Comment devenir partenaire ?",
        rd_faq3_a: "Remplissez le formulaire de contact sur cette page ou demandez la brochure gratuite sur le VBR pendant la Ligue des Nations. Vous pouvez aussi contacter directement Ri Verspecht (ri@brightboard.eu, +32 478 92 21 52)."
    },
    en: {
        nav_home: 'Home',
        nav_proleague: 'Pro League',
        nav_reddevils: 'Red Devils',
        home_h1: "ADVERTISING IN BELGIAN FOOTBALL",
        home_sub: "Choose your football partnership: LED boarding at Pro League clubs or virtual advertising (VBR) during Belgian Red Devils matches.",
        home_cta_proleague: 'Pro League partnerships',
        home_cta_reddevils: 'Red Devils VBR partnerships',
        pl_h1: "LED boarding advertising at Pro League clubs",
        pl_cta_offer: 'View our offer',
        pl_cta_contact: 'Contact us →',
        pl_h2_reach: 'Reach football fans across Belgium',
        pl_p_reach: "Reach one of the most engaged audiences in the country through LED boarding in the stadiums of Pro League clubs. During matches, your brand is placed in a context of maximum attention, where fans don't just watch — they actively engage. By being visible at crucial moments — goals, replays, decisive phases — you build strong brand recognition with high contact frequency.",
        pl_h2_clubs: "Clubs where you can advertise",
        pl_h2_contact: 'Get in touch',
        rd_h1: "ADVERTISE DURING RED DEVILS MATCHES",
        rd_sub: "Bring your brand to the heart of the stadium. With VBR, your message reaches fans of the Red Devils, Belgium's national football team, via LED boarding — maximum visibility, immediate impact.",
        rd_cta_readmore: 'Read more',
        rd_cta_contact: 'Contact',
        rd_h2_vbr: "What is VBR? Before and after",
        rd_p_vbr: "With VBR (Virtual Boarding Replacement), you can bring your brand directly to the Red Devils' fans, wherever they're playing. Even during the Red Devils' away matches, partners' adverts are specifically shown to the Belgian audience, without any loss of quality.",
        rd_title_overlay: 'Enhance visibility with<br class="title-break"> virtual overlay',
        rd_p_overlay: "Virtual overlay technology allows you to dynamically adapt the content shown on LED boarding to different audiences, moments, and platforms. By integrating virtual ads into the live broadcast feed, you can localize and personalize your messaging — without altering the in-stadium experience.",
        rd_h3_fixtures: 'Upcoming Red Devils Away Fixtures',
        fx_it_match: 'Italy vs Belgium',
        fx_it_meta: 'Italy · 25 September 2026 · 20:45 CET',
        fx_fr_match: 'France vs Belgium',
        fx_fr_meta: 'France · 5 October 2026 · 20:45 CET',
        fx_tr_match: 'Türkiye vs Belgium',
        fx_tr_meta: 'Türkiye · 12 November 2026 · 18:00 CET',
        cd_days: 'days',
        cd_hrs: 'hrs',
        cd_min: 'min',
        cd_sec: 'sec',
        match_won: 'WON',
        match_lost: 'LOST',
        rd_partner_cta: "Let's partner up!",
        rd_h2_gettouch: 'Get in Touch',
        form_firstname: 'First name',
        form_lastname: 'Surname',
        form_email: 'E-mail address',
        form_phone: 'Phone',
        form_company: 'Company name',
        form_region: 'Region',
        form_region_placeholder: 'Select a region',
        region_vlbrabant: 'Flemish Brabant',
        region_limburg: 'Limburg',
        region_antwerpen: 'Antwerp',
        region_oostvl: 'East Flanders',
        region_westvl: 'West Flanders',
        region_brussel: 'Brussels',
        form_comment: 'Comment',
        form_toelichting: 'Additional information',
        form_submit: 'Submit',
        footer_copyright: '© 2026 BrightBoard Marketing. All rights reserved.',
        modal_title: 'Free brochure',
        modal_subtitle: 'VBR during the Nations League',
        modal_desc: 'Curious about our approach to VBR during the Nations League? Fill in your details below and receive the brochure as a free download.',
        modal_phone: 'Phone number',
        modal_company: 'Company',
        modal_submit: 'Get the brochure',
        ripopup_title: 'Contact me',
        ripopup_desc: "and we'll discuss the options together.",
        ripopup_mail: '✉ Mail me',
        ripopup_call: '☎ Call me',
        home_h2_intro: "LED boarding advertising and Red Devils partnerships",
        home_p_intro: "BrightBoard puts your brand in the spotlight of top-level Belgian football. At Pro League clubs such as Royal Antwerp FC, KRC Genk, KV Mechelen and Union Saint-Gilloise, you advertise on the stadium's LED boarding at the moments fans are most engaged. During Belgian Red Devils matches, Virtual Boarding Replacement (VBR) makes sure the Belgian audience sees your ad, even at away games.",
        pl_h2_faq: "Frequently asked questions about advertising at Pro League clubs",
        pl_faq1_q: "Which clubs can I advertise with?",
        pl_faq1_a: "Through BrightBoard you can advertise with Royal Antwerp FC, Royale Union Saint-Gilloise, Sint-Truidense VV, SK Beveren, SV Zulte Waregem, K.A.A. Westerlo, Lommel SK, KRC Genk, KV Kortrijk, KV Mechelen and OH Leuven.",
        pl_faq2_q: "How does LED boarding advertising in the stadium work?",
        pl_faq2_a: "Your ad appears on the LED boarding along the pitch during matches. That makes you visible at the crucial moments — goals, replays and decisive phases — when fans are most engaged.",
        pl_faq3_q: "How do I request a proposal?",
        pl_faq3_a: "Fill in the contact form on this page, or contact Ri Verspecht (ri@brightboard.eu, +32 478 92 21 52) directly.",
        rd_h2_faq: "Frequently asked questions about advertising during Red Devils matches",
        rd_faq1_q: "What is Virtual Boarding Replacement (VBR)?",
        rd_faq1_a: "With VBR, the advertising on the LED boarding is virtually replaced in the live broadcast. The Belgian TV audience sees the partners' ads, while the experience in the stadium stays the same.",
        rd_faq2_q: "Can I also advertise during the Red Devils' away matches?",
        rd_faq2_a: "Yes. Even during away matches, partners' ads are specifically shown to the Belgian audience through VBR, without any loss of quality.",
        rd_faq3_q: "How do I become a partner?",
        rd_faq3_a: "Fill in the contact form on this page or request the free brochure on VBR during the Nations League. You can also contact Ri Verspecht (ri@brightboard.eu, +32 478 92 21 52) directly."
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-options [data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const currentLabel = document.getElementById('langCurrentLabel');
    if (currentLabel) currentLabel.textContent = lang.toUpperCase();

    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('bb-lang', lang);
    closeLangDropdown();
}

// LANGUAGE DROPDOWN
function toggleLangDropdown() {
    const el = document.getElementById('langSwitch');
    if (!el) return;
    const isOpen = el.classList.toggle('open');
    el.querySelector('.lang-current').setAttribute('aria-expanded', isOpen);
}

function closeLangDropdown() {
    const el = document.getElementById('langSwitch');
    if (!el) return;
    el.classList.remove('open');
    el.querySelector('.lang-current').setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', function(e) {
    const el = document.getElementById('langSwitch');
    if (el && el.classList.contains('open') && !el.contains(e.target)) {
        closeLangDropdown();
    }
});

// BROCHURE POPUP
let brochureModalTimer = null;
let redDevilsFormBeingFilled = false;

// Show the brochure lead-capture popup 15 seconds after landing on the
// Red Devils page — but not if the visitor is already filling in the
// contact form there, since interrupting them with a popup loses the lead.
function initBrochureModalTimer() {
    if (!document.getElementById('page-red-devils')) return;
    brochureModalTimer = setTimeout(() => {
        if (!redDevilsFormBeingFilled) openModal();
    }, 15000);
}

// MOBILE NAV
function toggleMobileNav() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
}

function closeMobileNav() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
}

// MODAL FUNCTIONS
function openModal() {
    document.getElementById('vbrModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('vbrModal').classList.remove('show');
    document.body.style.overflow = '';
}

// BEFORE/AFTER SLIDER
function initSlider() {
    const slider = document.querySelector('.slider-wrapper');
    const afterImg = document.querySelector('.slider-img.after');
    const divider = document.querySelector('.slider-divider');
    let isActive = false;

    if (!slider) return;

    // Cap both clips at 10 seconds and keep them perfectly in sync.
    // One video is the "master" clock; the other is corrected to
    // match it whenever they drift apart (independent playback
    // otherwise slowly desyncs the two clips over time).
    const [videoA, videoB] = slider.querySelectorAll('video');

    if (videoA && videoB) {
        videoA.addEventListener('timeupdate', () => {
            if (videoA.currentTime >= 10) {
                videoA.currentTime = 0;
                videoB.currentTime = 0;
            } else if (Math.abs(videoA.currentTime - videoB.currentTime) > 0.15) {
                videoB.currentTime = videoA.currentTime;
            }
        });

        // Start both clips together, once they're both ready
        Promise.all([
            new Promise(res => videoA.readyState >= 2 ? res() : videoA.addEventListener('canplay', res, { once: true })),
            new Promise(res => videoB.readyState >= 2 ? res() : videoB.addEventListener('canplay', res, { once: true }))
        ]).then(() => {
            videoA.currentTime = 0;
            videoB.currentTime = 0;
            videoA.play();
            videoB.play();
        });
    }

    function setPosition(percentage) {
        // clip-path is purely percentage-based, so it's correct even
        // while the page is still hidden (display: none) and doesn't
        // rely on measuring pixel widths.
        afterImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        divider.style.left = percentage + '%';
    }

    let cachedRect = null;

    function updateSlider(e) {
        if (!isActive) return;

        if (!cachedRect) cachedRect = slider.getBoundingClientRect();
        const rect = cachedRect;
        let x = e.clientX - rect.left;

        if (e.type.includes('touch')) {
            x = e.touches[0].clientX - rect.left;
        }

        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;

        setPosition((x / rect.width) * 100);
    }

    // AUTO-SWEEP ANIMATION
    // Sweeps the handle from left (0%) to a maximum of 75% and back,
    // giving a preview of both videos until the visitor drags it themselves.
    const AUTO_MAX = 75;
    const AUTO_SPEED = 0.25; // percentage points per animation frame
    let autoPercentage = 0;
    let autoDirection = 1;
    let autoRAF = null;

    function autoStep() {
        autoPercentage += AUTO_SPEED * autoDirection;

        if (autoPercentage >= AUTO_MAX) {
            autoPercentage = AUTO_MAX;
            autoDirection = -1;
        } else if (autoPercentage <= 0) {
            autoPercentage = 0;
            autoDirection = 1;
        }

        setPosition(autoPercentage);
        autoRAF = requestAnimationFrame(autoStep);
    }

    function stopAutoSweep() {
        if (autoRAF !== null) {
            cancelAnimationFrame(autoRAF);
            autoRAF = null;
        }
    }

    slider.style.cursor = 'col-resize';
    slider.addEventListener('mousedown', (e) => { isActive = true; stopAutoSweep(); cachedRect = null; updateSlider(e); });
    slider.addEventListener('touchstart', (e) => { isActive = true; stopAutoSweep(); cachedRect = null; updateSlider(e); });
    slider.addEventListener('mousemove', updateSlider);
    slider.addEventListener('touchmove', updateSlider, { passive: true });
    document.addEventListener('mouseup', () => { isActive = false; cachedRect = null; });
    document.addEventListener('touchend', () => { isActive = false; cachedRect = null; });

    // Kick off the automatic sweep
    autoRAF = requestAnimationFrame(autoStep);
}

// FIXTURE COUNTDOWNS
function initFixtureCountdowns() {
    const cards = document.querySelectorAll('.fixture-card');
    if (!cards.length) return;

    function pad(n) {
        return String(n).padStart(2, '0');
    }

    function tick() {
        const now = Date.now();

        cards.forEach(card => {
            // Skip fixture cards that are already played (have fixture-card--played class)
            if (card.classList.contains('fixture-card--played')) {
                return;
            }

            const kickoff = new Date(card.dataset.kickoff).getTime();
            const diff = kickoff - now;

            if (diff <= 0) {
                card.classList.add('is-live');
                card.querySelector('.cd-days').textContent = '00';
                card.querySelector('.cd-hours').textContent = '00';
                card.querySelector('.cd-mins').textContent = '00';
                card.querySelector('.cd-secs').textContent = '00';
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const mins = Math.floor((diff / (1000 * 60)) % 60);
            const secs = Math.floor((diff / 1000) % 60);

            card.querySelector('.cd-days').textContent = pad(days);
            card.querySelector('.cd-hours').textContent = pad(hours);
            card.querySelector('.cd-mins').textContent = pad(mins);
            card.querySelector('.cd-secs').textContent = pad(secs);
        });
    }

    tick();
    setInterval(tick, 1000);
}

// UTM TRACKING
function initUTMFields() {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign'];

    const utms = {};
    utmKeys.forEach(key => {
        const fromUrl = params.get(key);
        if (fromUrl) {
            utms[key] = fromUrl;
        }
    });

    // Persist whatever we found so it survives a later page reload
    // (e.g. the visitor lands via a campaign link but only fills in
    // the form after browsing around for a while).
    if (Object.keys(utms).length) {
        sessionStorage.setItem('bb-utms', JSON.stringify(utms));
    }

    let stored = {};
    try {
        stored = JSON.parse(sessionStorage.getItem('bb-utms')) || {};
    } catch (e) {
        stored = {};
    }

    utmKeys.forEach(key => {
        const value = stored[key] || '';
        document.querySelectorAll(`input.utm-field[name="${key}"]`).forEach(input => {
            input.value = value;
        });
    });
}

// FLOATING CONTACT POPUP
// The floating popup and the footer's Ri figure should never both be
// visible at the same time — track both conditions and only show the
// popup once the 10s timer fired AND the footer figure is off-screen.
let riPopupTimerFired = false;
let footerRiVisible = false;
let riPopupUserClosed = false;

function updateRiPopupVisibility() {
    const popup = document.getElementById('riPopup');
    if (!popup) return;

    const shouldShow = riPopupTimerFired && !footerRiVisible && !riPopupUserClosed;
    popup.classList.toggle('show', shouldShow);
}

function initRiPopup() {
    const popup = document.getElementById('riPopup');
    if (!popup) return;

    setTimeout(() => {
        riPopupTimerFired = true;
        updateRiPopupVisibility();
    }, 10000);

    const footerPhoto = document.querySelector('.contact-person img');
    if (footerPhoto && 'IntersectionObserver' in window) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                footerRiVisible = entry.isIntersecting;
                updateRiPopupVisibility();
            });
        }, { threshold: 0.15 });

        footerObserver.observe(footerPhoto);
    }
}

function closeRiPopup() {
    riPopupUserClosed = true;
    updateRiPopupVisibility();
}

// FOOTER CONTACT PHOTO REVEAL
function initContactPhotoReveal() {
    const photo = document.querySelector('.contact-person img');
    if (!photo || !('IntersectionObserver' in window)) {
        if (photo) photo.classList.add('in-view');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                photo.classList.add('in-view');
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(photo);
}

// FORM HANDLING
document.addEventListener('DOMContentLoaded', function() {
    // Each language has its own URL (/, /fr/, /en/); the page's lang attribute says which one this is.
    setLanguage(document.documentElement.lang || 'nl');
    initUTMFields();
    initSlider();
    initFixtureCountdowns();
    initContactPhotoReveal();
    initRiPopup();
    initBrochureModalTimer();

    const proLeagueForm = document.getElementById('proLeagueForm');
    const redDevilsForm = document.getElementById('redDevilsForm');
    const vbrBrochureForm = document.getElementById('vbrBrochureForm');

    // Mark the Red Devils form as "being filled in" on first interaction,
    // so the 15s brochure popup timer (see initBrochureModalTimer) skips opening over it.
    if (redDevilsForm) {
        redDevilsForm.addEventListener('focusin', function() {
            redDevilsFormBeingFilled = true;
        });
    }

    const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/11005955/4hn5h0l/';

    function submitToZapier(form, sourceLabel, redirectTo) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const data = Object.fromEntries(new FormData(form).entries());
            data.form_source = sourceLabel;
            data.submitted_at = new Date().toISOString();

            // Sent as x-www-form-urlencoded (not JSON): this is a CORS
            // "simple request", so the browser sends it directly without
            // a preflight OPTIONS call — which is what was silently
            // dropping the POST body before, leaving only the (empty)
            // querystring visible on the Zapier side.
            fetch(ZAPIER_WEBHOOK_URL, {
                method: 'POST',
                body: new URLSearchParams(data)
            }).catch(err => {
                console.error('Zapier webhook failed:', err);
            }).finally(() => {
                window.location.href = redirectTo;
            });
        });
    }

    if (vbrBrochureForm) {
        submitToZapier(vbrBrochureForm, 'VBR brochure popup', '/thank-you?source=brochure');
    }

    if (proLeagueForm) {
        submitToZapier(proLeagueForm, 'Pro League contactformulier', '/thank-you');
    }

    if (redDevilsForm) {
        submitToZapier(redDevilsForm, 'Red Devils contactformulier', '/thank-you');
    }
});

// GTAG / ANALYTICS
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GTM-5KXZGF');
