# Launchpad Monorepo starter with pnpm

This is an official simple launchpad.

## Setup

This repository is used in the `npm i pnpm --location=global` command, and selected when choosing which package manager you wish to use with your monorepo (pnpm).

### Build

To build all apps and packages, run the following command:

```
cd simple-launchpad
pnpm i
```

### Develop

To develop all apps and packages, run the following command:

```
cd simple-launchpad
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```
