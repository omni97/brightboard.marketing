"""Build the French and English pages from the Dutch ones.

The Dutch pages (index.html, proleague.html, rode-duivels.html) are the source.
The translations live in script.js. After changing either, run:

    python build.py

This refreshes the SEO block in every page and (re)writes fr/ and en/,
sitemap.xml included. Never edit the files in fr/ or en/ by hand.
"""
import html
import json
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = "https://www.brightboard.marketing"
OG_IMAGE = SITE + "/Rode-Duivels-3-scaled-Bewerkt-Bewerkt.jpg"
LANGS = ["nl", "fr", "en"]
OG_LOCALE = {"nl": "nl_BE", "fr": "fr_BE", "en": "en_GB"}

PAGES = {
    "home": {
        "src": "index.html",
        "path": {"nl": "/", "fr": "/fr/", "en": "/en/"},
        "file": {"nl": "index.html", "fr": "fr/index.html", "en": "en/index.html"},
        "title": {
            "nl": "Adverteren in het Belgische voetbal | BrightBoard",
            "fr": "Publicité dans le football belge | BrightBoard",
            "en": "Football advertising in Belgium | BrightBoard",
        },
        "desc": {
            "nl": "Adverteer bij Pro League-clubs of bereik de fans van de Rode Duivels via Virtual Boarding Replacement (VBR). Vraag een voorstel aan.",
            "fr": "Faites de la publicité auprès des clubs de Pro League ou touchez les supporters des Diables Rouges grâce au Virtual Boarding Replacement (VBR). Demandez une proposition.",
            "en": "Advertise with Pro League clubs or reach fans of the Belgian Red Devils through Virtual Boarding Replacement (VBR). Request a proposal.",
        },
    },
    "pro-league": {
        "src": "proleague.html",
        "path": {"nl": "/proleague", "fr": "/fr/proleague", "en": "/en/proleague"},
        "file": {"nl": "proleague.html", "fr": "fr/proleague.html", "en": "en/proleague.html"},
        "crumb": {"nl": "Pro League", "fr": "Pro League", "en": "Pro League"},
        "title": {
            "nl": "Adverteren bij Pro League-clubs | BrightBoard",
            "fr": "Publicité auprès des clubs de Pro League | BrightBoard",
            "en": "Advertising with Pro League clubs | BrightBoard",
        },
        "desc": {
            "nl": "Adverteer via mediaruimte bij Pro League-clubs zoals Royal Antwerp FC, KRC Genk, KV Mechelen en OH Leuven en bereik voetbalfans in heel België.",
            "fr": "Faites de la publicité via l'espace média des clubs de Pro League comme le Royal Antwerp FC, le KRC Genk, le KV Mechelen et OH Leuven, et touchez les fans de football dans toute la Belgique.",
            "en": "Advertise through media space at Pro League clubs such as Royal Antwerp FC, KRC Genk, KV Mechelen and OH Leuven, and reach football fans across Belgium.",
        },
        "service": {
            "nl": ("Stadionreclame bij Pro League-clubs", "Mediaruimte bij voetbalclubs"),
            "fr": ("Publicité dans les stades des clubs de Pro League", "Espace média auprès de clubs de football"),
            "en": ("Stadium advertising with Pro League clubs", "Media space at football clubs"),
        },
    },
    "red-devils": {
        "src": "rode-duivels.html",
        "path": {"nl": "/rode-duivels", "fr": "/fr/diables-rouges", "en": "/en/red-devils"},
        "file": {"nl": "rode-duivels.html", "fr": "fr/diables-rouges.html", "en": "en/red-devils.html"},
        "crumb": {"nl": "Rode Duivels", "fr": "Diables Rouges", "en": "Red Devils"},
        "title": {
            "nl": "Adverteren bij de Rode Duivels met VBR | BrightBoard",
            "fr": "Publicité auprès des Diables Rouges avec le VBR | BrightBoard",
            "en": "Advertising with the Belgian Red Devils via VBR | BrightBoard",
        },
        "desc": {
            "nl": "Breng je merk bij de fans van de Rode Duivels, ook tijdens uitwedstrijden. Met Virtual Boarding Replacement (VBR) ziet het Belgische tv-publiek jouw reclame op de LED-boarding.",
            "fr": "Présentez votre marque aux supporters des Diables Rouges, même lors des matchs à l'extérieur. Grâce au Virtual Boarding Replacement (VBR), le public belge voit votre publicité sur les panneaux LED.",
            "en": "Put your brand in front of Red Devils fans, even during away matches. With Virtual Boarding Replacement (VBR), the Belgian TV audience sees your ad on the LED boards.",
        },
        "service": {
            "nl": ("Virtual Boarding Replacement (VBR) tijdens wedstrijden van de Rode Duivels", "Virtuele stadionreclame"),
            "fr": ("Virtual Boarding Replacement (VBR) pendant les matchs des Diables Rouges", "Publicité virtuelle dans les stades"),
            "en": ("Virtual Boarding Replacement (VBR) during Belgian Red Devils matches", "Virtual stadium advertising"),
        },
    },
}
HOME_CRUMB = {"nl": "Home", "fr": "Accueil", "en": "Home"}
COUNTRY = {"nl": "België", "fr": "Belgique", "en": "Belgium"}

# Dutch nav links point at /home (the address the team wants to share);
# the other languages link to their own home.
LINK_TARGETS = {"/home": "home", "/proleague": "pro-league", "/rode-duivels": "red-devils"}


def read(name):
    with open(os.path.join(ROOT, name), encoding="utf-8") as f:
        return f.read()


def write(name, text):
    path = os.path.join(ROOT, name)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(text)


def load_translations():
    js = read("script.js")
    starts = {lang: js.index("    %s: {" % lang) for lang in LANGS}
    ends = {"nl": starts["fr"], "fr": starts["en"], "en": js.index("\n};", starts["en"])}
    out = {}
    for lang in LANGS:
        block = js[starts[lang]:ends[lang]]
        out[lang] = {
            m.group(1): m.group(3).replace("\\'", "'").replace('\\"', '"')
            for m in re.finditer(r"^\s*(\w+):\s*(['\"])(.*?)(?<!\\)\2,?\s*$", block, re.M)
        }
    return out


def bake(text, strings):
    """Put the copy for one language straight into the HTML, so crawlers see it without JS."""
    for attr, as_html in (("data-i18n", False), ("data-i18n-html", True)):
        pattern = re.compile(r'(<(\w+)\b[^>]*\b%s="(\w+)"[^>]*>)(.*?)(</\2>)' % attr, re.S)

        def replace(m):
            key = m.group(3)
            if key not in strings:
                return m.group(0)
            inner = strings[key] if as_html else html.escape(strings[key], quote=False)
            return m.group(1) + inner + m.group(5)

        text = pattern.sub(replace, text)
    return text


def json_ld(page_key, lang):
    page = PAGES[page_key]
    org = {
        "@type": "Organization",
        "@id": SITE + "/#organization",
        "name": "BrightBoard",
        "url": SITE + "/",
        "logo": SITE + "/favicon.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+32478922152",
            "email": "ri@brightboard.eu",
            "contactType": "sales",
            "areaServed": "BE",
            "availableLanguage": LANGS,
        },
        "sameAs": [
            "https://www.linkedin.com/company/brightboard-advertising",
            "https://www.facebook.com/BrightensYourBrand",
            "https://www.instagram.com/brightboard",
        ],
    }
    graph = [org]
    if page_key == "home":
        graph.append({
            "@type": "WebSite",
            "@id": SITE + "/#website",
            "url": SITE + "/",
            "name": "BrightBoard Marketing",
            "inLanguage": LANGS,
            "publisher": {"@id": SITE + "/#organization"},
        })
    else:
        name, service_type = page["service"][lang]
        graph.append({
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": HOME_CRUMB[lang],
                 "item": SITE + PAGES["home"]["path"][lang]},
                {"@type": "ListItem", "position": 2, "name": page["crumb"][lang],
                 "item": SITE + page["path"][lang]},
            ],
        })
        graph.append({
            "@type": "Service",
            "name": name,
            "serviceType": service_type,
            "areaServed": {"@type": "Country", "name": COUNTRY[lang]},
            "provider": {"@id": SITE + "/#organization"},
            "url": SITE + page["path"][lang],
        })
    data = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, indent=2)
    return "\n".join("    " + line for line in data.split("\n"))


def seo_block(page_key, lang):
    page = PAGES[page_key]
    url = SITE + page["path"][lang]
    title = html.escape(page["title"][lang])
    desc = html.escape(page["desc"][lang])
    alternates = "\n".join(
        '    <link rel="alternate" hreflang="%s" href="%s">' % (l, SITE + page["path"][l]) for l in LANGS
    )
    locale_alts = "\n".join(
        '    <meta property="og:locale:alternate" content="%s">' % OG_LOCALE[l] for l in LANGS if l != lang
    )
    return f"""<!-- SEO (generated by build.py) -->
    <title>{title}</title>
    <meta name="description" content="{desc}">
    <link rel="canonical" href="{url}">
{alternates}
    <link rel="alternate" hreflang="x-default" href="{SITE + page["path"]["nl"]}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="BrightBoard Marketing">
    <meta property="og:locale" content="{OG_LOCALE[lang]}">
{locale_alts}
    <meta property="og:url" content="{url}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <meta property="og:image" content="{OG_IMAGE}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{desc}">
    <meta name="twitter:image" content="{OG_IMAGE}">
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="apple-touch-icon" href="/favicon.png">
    <script type="application/ld+json">
{json_ld(page_key, lang)}
    </script>
    <!-- /SEO -->"""


SEO_RE = re.compile(
    r"<!-- SEO \(generated by build\.py\) -->.*?<!-- /SEO -->"
    r"|<title>.*?<script type=\"application/ld\+json\">.*?</script>",
    re.S,
)
SWITCHER_RE = re.compile(r'<div class="lang-options" id="langOptions">.*?</div>', re.S)
HASH_REDIRECT_RE = re.compile(r"\s*<script>\s*// Pro League and Red Devils used to live.*?</script>", re.S)
# Relative asset/page references; made root-absolute so pages in /fr/ and /en/ resolve them.
RELATIVE_RE = re.compile(r'\b(src|href|poster)="(?!https?:|/|#|mailto:|tel:|data:|javascript:)([^"]+)"')


def build_page(page_key, lang, strings):
    page = PAGES[page_key]
    text = read(page["src"])

    text, n = SEO_RE.subn(lambda m: seo_block(page_key, lang), text, count=1)
    assert n == 1, "SEO block not found in " + page["src"]
    text = re.sub(r'<html lang="\w+">', '<html lang="%s">' % lang, text, count=1)
    text = RELATIVE_RE.sub(lambda m: '%s="/%s"' % (m.group(1), m.group(2)), text)

    # Nav, logo and call-to-action links go to the page in the same language.
    def relink(m):
        target = LINK_TARGETS[m.group(1)]
        path = "/home" if (lang == "nl" and target == "home") else PAGES[target]["path"][lang]
        return 'href="%s"' % path
    text = re.sub(r'href="(/home|/proleague|/rode-duivels)"', relink, text)

    # Language switcher: real links to this page in the other languages.
    options = "\n".join(
        '                        <a href="%s" data-lang="%s" hreflang="%s" lang="%s"%s>%s</a>'
        % (page["path"][l], l, l, l, ' class="active"' if l == lang else "", l.upper())
        for l in LANGS
    )
    text = SWITCHER_RE.sub(
        lambda m: '<div class="lang-options" id="langOptions">\n%s\n                    </div>' % options, text, count=1
    )
    text = re.sub(r'(<span id="langCurrentLabel">)\w+(</span>)', r"\g<1>%s\g<2>" % lang.upper(), text)

    if lang != "nl":
        text = HASH_REDIRECT_RE.sub("", text)

    return bake(text, strings)


def build_sitemap():
    urls = []
    for page in PAGES.values():
        links = "\n".join(
            '    <xhtml:link rel="alternate" hreflang="%s" href="%s"/>' % (l, SITE + page["path"][l]) for l in LANGS
        )
        links += '\n    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>' % (SITE + page["path"]["nl"])
        for lang in LANGS:
            urls.append("  <url>\n    <loc>%s</loc>\n%s\n  </url>" % (SITE + page["path"][lang], links))
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + "\n".join(urls)
        + "\n</urlset>\n"
    )


def main():
    translations = load_translations()
    for page_key, page in PAGES.items():
        used = set(re.findall(r'data-i18n(?:-html)?="(\w+)"', read(page["src"])))
        for lang in LANGS:
            missing = sorted(used - set(translations[lang]))
            if missing:
                print("warning: %s has no %s translation for %s" % (page["src"], lang, ", ".join(missing)))
    # Dutch last: the other languages are built from the Dutch source as it was read.
    for lang in ["fr", "en", "nl"]:
        for page_key, page in PAGES.items():
            write(page["file"][lang], build_page(page_key, lang, translations[lang]))
    write("sitemap.xml", build_sitemap())
    print("built %d pages + sitemap.xml" % (len(PAGES) * len(LANGS)))


if __name__ == "__main__":
    main()
