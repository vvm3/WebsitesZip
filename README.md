# Seratek Website

Marketing and product website for **Seratek** — a unified ERP platform for affiliated colleges, autonomous institutions, and universities. The site covers product overview, solutions (school / college / university Webdesk), industries served, careers, contact, demo requests, and related content.

Built with **Next.js 15** (App Router + Pages API), **React 19**, **TypeScript**, and **Tailwind CSS**. Transactional email is sent through **ZeptoMail**.

---

## Features

- Public marketing pages (home, about, product, features, solutions, industries, blog, careers, contact, privacy)
- Contact, career, and demo request forms → `/api/sendMail`
- Site modes driven by env:
  - `UNDER_DEVELOPMENT` — full-site under-development screen + route lock to `/`
  - `UNDER_MAINTENANCE` — hides header / redirects non-home routes (client)
- Notify Me waitlist on the under-development page → `/api/notifyMe`
- Origin / referer checks and in-memory rate limiting on mail APIs

---

## Prerequisites

- **Node.js** 18.18+ (Node 20 LTS recommended)
- **npm** (project uses `package-lock.json`)

---

## Setup

1. **Clone the repository** and open the project root.

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a local env file**

   Copy the example below into a `.env` file in the project root (same folder as `package.json`). Never commit real secrets.

4. **Run the app** (see [Running the app](#running-the-app)).

---

## Environment variables

Create `.env` in the project root:

```env
# --- ZeptoMail (server-only) ---
ZEPTO_SEND_MAIL_TOKEN=Zoho-enczapikey <your-zeptomail-token>
MAIL_DOMAIN=serateksys.com
MAIL_API=https://api.zeptomail.com/v1.1/email

# --- Mailboxes ---
MAIL_FROM_ADDRESS=info@serateksys.com
SUPPORT_EMAIL_ADDRESS=support@serateksys.com
NOTIFY_ME_EMAIL_TO_ADDRESS=info@serateksys.com
HR_EMAIL_ADDRESS=hr@serateksys.com
SALES_EMAIL_ADDRESS=sales@serateksys.com

# --- Security ---
# Comma-separated list of allowed browser origins for mail APIs
ALLOWED_ORIGIN=http://localhost:3000,https://serateksys.com,https://www.serateksys.com

# --- Site modes ---
# true | 1 → show under-development page and lock routes to /
UNDER_DEVELOPMENT=false
# true | 1 → maintenance behavior (header hidden; non-/ routes bounce home)
UNDER_MAINTENANCE=false
```

### Variable reference

| Variable | Required | Description |
| --- | --- | --- |
| `ZEPTO_SEND_MAIL_TOKEN` | Yes (for mail) | ZeptoMail send token. Used only on the server. |
| `MAIL_API` | No | ZeptoMail API URL. Defaults in code if unset. |
| `MAIL_DOMAIN` | No | Domain used for fallback addresses. Default: `serateksys.com`. |
| `MAIL_FROM_ADDRESS` | No | From address for outbound mail. |
| `SUPPORT_EMAIL_ADDRESS` | No | Support inbox (contact form + under-dev “Contact Support”). |
| `NOTIFY_ME_EMAIL_TO_ADDRESS` | No | Recipient for Notify Me waitlist emails. |
| `HR_EMAIL_ADDRESS` | No | Careers form recipient. |
| `SALES_EMAIL_ADDRESS` | No | Demo form recipient. |
| `ALLOWED_ORIGIN` | Recommended | Allowed `Origin` / Referer hosts for `/api/sendMail` and `/api/notifyMe`. Comma-separated. Include `http://localhost:3000` for local testing. |
| `UNDER_DEVELOPMENT` | No | `true` / `1` enables the under-development experience. |
| `UNDER_MAINTENANCE` | No | `true` / `1` enables maintenance-related layout behavior. |

Restart the dev server after changing env values so Next.js and middleware pick them up.

---

## Running the app

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project structure (high level)

```
├── src/app/              # App Router pages & root layout
├── src/components/       # UI and page sections
├── src/layout/           # App shell (header, footer, layout)
├── src/context/          # AppContext (theme, site modes)
├── pages/api/            # API routes (sendMail, notifyMe)
├── lib/                  # Config, validations, mail templates, guards
├── public/               # Static assets & local fonts
└── .env                  # Local secrets (do not commit)
```

---

## Useful notes

- **Under development mode:** set `UNDER_DEVELOPMENT=true`, restart, then visit `/`. Middleware keeps other page routes on `/`; `/api/notifyMe` and static assets remain available.
- **Mail APIs:** require `POST` with `Content-Type: application/json`, pass origin checks, and use a honeypot field (`hp`) on forms.
- **Secrets:** keep `ZEPTO_SEND_MAIL_TOKEN` and any captcha/Redis credentials out of git. Prefer hosting-provider env config in production.

---

## License

Private — Seratek. All rights reserved.
