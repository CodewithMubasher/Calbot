# CalBot - Personal Ai Teammate

CalBot is a personal AI teammate workspace. This repository holds the full
project (frontend, backend, docs).

## Structure

| Folder      | Description                                          |
| ----------- | ---------------------------------------------------- |
| `Frontend/` | React + TypeScript + Vite web app (this project)     |
| `Backend/`  | API / services                                       |
| `Andriod/`  | Android app                                          |
| `Docs/`     | Project documentation                                |

## Frontend

Stack: React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui (Base UI),
Hugeicons, TanStack Router.

### Commands

All package management in this project uses **pnpm**.

```bash
cd Frontend
pnpm install      # install dependencies
pnpm dev          # start the dev server
pnpm build        # typecheck + production build
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint
pnpm format       # prettier
```

### Routing

Client-side routing is handled by TanStack Router (`src/router.ts` +
`src/routes/`), so navigating the sidebar never triggers a full page reload.
The sidebar lives in the root route and is rendered on every page.

| Path          | Page         |
| ------------- | ------------ |
| `/`           | redirects to `/inbox` |
| `/inbox`      | Inbox        |
| `/connectors` | Connectors   |
| `/bots`       | Manage Bots  |
| `/settings`   | Settings     |

New route: add a file in `Frontend/src/routes/`, register it in
`Frontend/src/router.ts`, and add a nav entry in the root route
(`Frontend/src/routes/__root.tsx`).

### Adding shadcn components

```bash
cd Frontend
npx shadcn@latest add <component>
```

Then import it:

```tsx
import { Button } from "@/components/ui/button"
```
