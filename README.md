# Team admin panel

**Live demo:** https://admin-test-6.netlify.app

An admin page for managing a team's users and their access rights, built with React, TypeScript and Redux Toolkit. The interface is in Russian.

## Features

- **Team table** with each member's avatar, name, email and permission badges (administrators are highlighted).
- **Invite a member** in a modal form: email and a multi-select of permissions (promotions, ad moderation, tech support, customer requests, administrator), followed by an "invitation sent" confirmation.
- **Row actions menu:** change access rights (the same form, prefilled), resend the code, or delete the member.
- **Redux data flow:** users are loaded with RTK Query and edited through a Redux Toolkit slice (add, edit, delete).
- **Custom UI kit:** inputs, dropdowns, tooltips, titles and modals built from scratch with Tailwind CSS and the Futura font.

## Stack

React 18 · TypeScript · Vite 5 · Redux Toolkit · RTK Query · React Hook Form · React Router · Tailwind CSS

## Run locally

```bash
yarn install
yarn dev      # http://localhost:5173
yarn build    # type-check and production build
yarn lint
```

The demo data lives in `public/users.json`.
