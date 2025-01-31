# PCRMS

### View Live Preview Here

[Pet Carrier Rental Management System (PCRMS)](https://pcrms.vercel.app)

### Description

A reworked version of my undergraduate thesis project, this solution aims to facilitate pet carrier rentals and enhance services within the pet industry.

### Features

- Responsive Design: Fully responsive design that ensures optimal usability across various devices.
- Record Management: Create, Read, Update, and Delete records for pet carrier management system with Next.js' Server Actions, Prisma and PostgreSQL.
- Search and Pagination Functionality: Easily search and naviagte through large datasets for quick record retrieval.
- Dynamic Visuals: Real-time data visualizations powered by Material UI.
- Authentication: Securely track and modify records with Auth.js' OAuth and Credential-Based Authentication.
- Deployment: Deployed with Vercel for reliable and scalable hosting.

### Unimplemented Feature

- Real-time Location Monitoring (WebSocket & Google Maps API Integration)

## Getting Started

### Pre-Requisites

- Node.js
- PostgresSQL
- GitHub (OAuth Credentials)

### Install Dependencies

```bash
npm install
# or
pnpm install
```

### Set Environment Variables

```bash
DATABASE_URL=<your_database_url>
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

AUTH_SECRET=<your_auth_secret>
AUTH_GITHUB_ID=<your_auth_github_id>
AUTH_GITHUB_SECRET=<your_auth_github_secret>
AUTH_TRUST_HOST=true
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
