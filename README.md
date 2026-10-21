# Top Taklif · Local Deals Explorer

**Browse Tashkent offers through searchable cards and an interactive city map.**

Top Taklif is a React/TypeScript product prototype for local deal discovery. It combines offer filtering, map browsing, account interfaces and theme controls, giving the same collection several ways to be explored.

## Interface features

- Switch between grid and map views.
- Filter offers by category, price, discount and district.
- Explore deal details, notification panels and summary cards.
- Use multilingual interface resources and light/dark themes.
- Request location access for map-related interactions.
- Explore guest mode and Firebase-backed authentication components.

The application initializes its offers from [src/data/mockDeals.ts](src/data/mockDeals.ts). Displayed deals, account statistics and notifications are prototype data rather than a verified live merchant feed or a record of real savings.

## Run locally

Use Node.js/npm from the repository root:

```bash
npm install
npm run dev
```

Open the URL printed by Vite. For a production bundle, use `npm run build`; `npm run preview` serves the generated bundle locally.

## Authentication configuration

Google, Facebook and email/password paths use Firebase Authentication. Configure your own Firebase project and the providers required by [src/config/firebase.ts](src/config/firebase.ts), then set the permitted application domains in that project.

The Telegram login widget has a separate client path. Its current handler creates local user state and does not provide a complete server-verified Telegram login. A bot token belongs on a server and should not be placed in the frontend.

## Repository guide

| Location | Role |
|---|---|
| [src/App.tsx](src/App.tsx) | Deal views, filters and application state |
| [src/components](src/components/) | Cards, map, account and notification interfaces |
| [src/contexts](src/contexts/) | Authentication and theme state |
| [src/data/mockDeals.ts](src/data/mockDeals.ts) | Example offer collection |
| [src/i18n](src/i18n/) | Translation resources |

## Prototype scope

The project focuses on discovery and interface interaction. It does not include a merchant ingestion service, payment processing or a booking backend. Some controls, including distance sorting, still contain placeholder behavior; evaluate those separately from the implemented card/map presentation.
