## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# How this project was setup

## Follow the Svelte Kit starter steps

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Follow the Flowbite-svelte guide

But use --save-dev for all installs

https://flowbite-svelte.com/pages/getting-started

## Tweaks

Force use of latest svelte-preprocess if you get dependency conflicts for

```bash
npm install svetelpreprocess@latest --save-dev
```

Install the vite-plugin-node-polyfills

```bash

npm install vite-plugin-node-polyfills --save-dev
```

And update `vite.config.js` to look like this

```javascript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	plugins: [
		sveltekit(),
		nodePolyfills({protocolImports: true})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
```

Force use of ethers 5.x

```bash
npm install ethers@5.7 --save-dev
```

## Envioronment and config

* Make a testnet app here https://dashboard.web3auth.io
* Copy dotenv-example to .env
* Set PUBLIC_WEB3AUTH_CLIENT_ID in your .env to your  web3authh project CLIENT_ID
