# Go Fractional — website

Marketingsite voor Go Fractional. Zelfde stack en hosting als visstick.ai:
**Astro + sitemap**, gehost op **Cloudflare Pages**. De site is volledig
statisch, dus (anders dan Visstick) geen SSR-adapter nodig — `astro build`
levert statische HTML in `dist/` die Pages serveert.

## Lokaal draaien

```bash
npm install
npm run dev        # http://localhost:4321
```

## Bouwen

```bash
npm run build      # output naar ./dist
npm run preview    # bekijk de productie-build lokaal
```

## Deployen naar Cloudflare Pages

Net als bij Visstick — via de Cloudflare dashboard/Pages of Wrangler:

1. Maak in Cloudflare een **Pages**-project, koppel de git-repo (of upload).
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Voeg later het custom domain **go-fractional.nl** toe onder *Custom domains*.

`wrangler.toml` bevat `pages_build_output_dir = "dist"` en `nodejs_compat`.

## Structuur

```
src/
  layouts/Layout.astro     # <head>, design-tokens (rood/wit), globale CSS
  components/
    Logo.astro             # GF-monogram (light/dark varianten)
    Header.astro           # sticky nav + mobiel menu
    Footer.astro
  pages/index.astro        # homepage (alle secties)
public/
  favicon.svg
  og-image.png
  robots.txt
```

## Merk

- Rood: `#d2001c` (identiek aan de advertentie), donkerrood `#b00017`
- Koppen: Space Grotesk · Body: Inter
- Logo: GF-monogram — witte plaat met rode "G", losse "F"
