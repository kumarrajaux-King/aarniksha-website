# Aarniksha Solutions - website

Next.js 14 (App Router) site, exported as static HTML and hosted on Hostinger.
Every push builds in GitHub Actions and uploads over FTP - nothing is edited on the server.

## Branches

| Branch    | Deploys to                  | Purpose                     |
| --------- | --------------------------- | --------------------------- |
| `staging` | staging.<your-domain>       | Review changes here first   |
| `main`    | <your-domain> (live)        | Production. Merge to publish |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Secrets to add in GitHub (Settings -> Secrets and variables -> Actions)

| Secret            | Value                                              |
| ----------------- | -------------------------------------------------- |
| `FTP_HOST`        | Hostinger FTP hostname (hPanel -> Files -> FTP Accounts) |
| `FTP_USER`        | FTP username                                        |
| `FTP_PASSWORD`    | FTP password                                        |
| `FTP_DIR_PROD`    | `/public_html/`                                     |
| `FTP_DIR_STAGING` | `/public_html/staging/` (or the staging subdomain folder) |

## Where things live

```
app/                 one folder per URL - page.jsx + metadata
components/          every section of the site, one file each
lib/config.js        form endpoint + site URL
public/assets/       images
public/contact.php   form handler (emails enquiries)
public/.htaccess     HTTPS redirect, caching, 404
```

## Contact form

Forms POST to `/contact.php`. Set `$TO` in `public/contact.php` to the inbox
that should receive enquiries. It only works on the server (PHP), not in `npm run dev`.
