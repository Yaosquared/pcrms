# PCRMS

### View Live Preview Here

[PCRMS](https://pcrms.vercel.app)

### Description

A reworked version of my undergraduate thesis project, this solution aims to facilitate pet carrier rentals and enhance services within the pet industry.

## Getting Started

### Pre-Requisites

- Node.js
- PostgresSQL

### Install Dependencies

```bash
npm install
```

### Set Environment Variables

```bash
DATABASE_URL=<tour_database_url>
DATABASE_URL_UNPOOLED=<your_database_url_unpooled>
PGDATABASE=<your_pgdatabase>
PGHOST=<your_pghost>
PGHOST_UNPOOLED=<your_pghost_unpooled>
PGPASSWORD=<your_pgpassword>
PGUSER=<your_pguser>
POSTGRES_DATABASE=<your_postgres_database>
POSTGRES_HOST=<your_postgres_host>
POSTGRES_PASSWORD=<your_postgress_password>
POSTGRES_PRISMA_URL=<your_postgres_prisma_url>
POSTGRES_URL=<your_postgres_url>
POSTGRES_URL_NON_POOLING=<your_postgres_url_non_pooling>
POSTGRES_URL_NO_SSL=<your_postgres_url_no_ssl>
POSTGRES_USER=<your_postgres_user>
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
