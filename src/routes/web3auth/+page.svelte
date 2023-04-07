<Button on:click={async () => {await connect()}}>Connect</Button>
<p>{connected ? "Connected": "Not Connected"}</p>
<p>{JSON.stringify(cfg, null, '  ')}</p>

<script>
  import { browser } from '$app/environment';
  import { Button } from 'flowbite-svelte';
  // XXX: web3auth/modal dependencies get very confused, an expect node globals, this horror seems to be 'the way'
  import * as node_process from "process";
  import * as crypto_browserfify from "crypto";
  import { Buffer as FerrosBuffer } from  "buffer/";
	import { onMount } from 'svelte';

  let Web3Auth;

  onMount(async () => {
    /*
    window.global = window;
    window.process = node_process;
    if (typeof crypto === 'undefined') {
      // Only if we must
      window.crypto = crypto_browserfify;
    }
    if (typeof Buffer && typeof window.Buffer === 'undefined') {
      window.Buffer = FerrosBuffer;
    }
    */
    const pkg = await import("@web3auth/modal");
    Web3Auth = pkg.Web3Auth;
    console.log(Web3Auth.constructor.name);
  })

  let connected=false;
  let cfg = {};
  let web3auth;

  async function connect() {
    if (!browser) return;

    connected = !connected;
    const resp = await fetch(`/api/providers/mumbai`);
    cfg = await resp.json();
    web3auth = new Web3Auth({
      chainConfig: {...cfg.chainConfig},
      clientId: cfg.web3auth.clientId
    });
    await web3auth.initModal();
  }
</script>
