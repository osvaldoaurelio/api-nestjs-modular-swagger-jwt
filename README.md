## Technologies

<p style="display:flex;align-items:center;gap:1rem">
<span>Docker</span>
  <a href="https://www.docker.com/" target="blank">
    <img src="https://www.docker.com/wp-content/uploads/2024/01/icon-docker-square.svg" width="32" alt="Docker Logo" />
  </a>
  <span>Docker helps developers build, share, run, and verify applications anywhere — without tedious environment configuration or management.</span>
</p>

---

<p style="display:flex;align-items:center;gap:1rem">
<span>Prisma</span>
  <a href="https://www.prisma.io/" target="blank">
    <img src="https://prismalens.vercel.app/header/logo-white.svg" width="32" alt="Prisma Logo" />
  </a>
  <span>Prisma provides the best experience for your team to work and interact with databases.</span>
</p>

---

<p style="display:flex;align-items:center;gap:1rem">
<span>NestJS</span>
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="32" alt="Nest Logo" />
  </a>
  <span>A progressive <a href="https://nodejs.org" target="_blank">Node.js</a> framework for building efficient, reliable and scalable server-side applications.</span>
</p>

---
---

## Docker

### Basic commmands

```bash
# List containers
$ docker ps -a

# Create and start containers (first command to run the app)
# option [--build] build images before starting containers
# service [dev-db] create a postgreSQL container
$ docker compose up  [OPTIONS] [SERVICE...]
```

### Package.json commmands

```bash
# restart developmment db (removes, creates and update db)
$ yarn db:dev:restart

# restart test db (removes, creates and update db)
$ yarn db:test:restart
```

---
---

## Prisma

### Package.json commmands

```bash
# Prisma migrate - development
$ yarn prisma:dev

# Prisma migrate - test env
$ yarn prisma:test

# Open Prisma Studio
$ yarn prisma:studio
```

---
---

## NestJS

### Installation

```bash
$ yarn
```

### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

---
---
