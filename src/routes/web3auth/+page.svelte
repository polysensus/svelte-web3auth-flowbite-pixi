<Button on:click={async () => {await connect()}}>Connect</Button>
<p>{address ? `Connected: ${address}`: "Not Connected"}</p>
<!--<p>{JSON.stringify(cfg, null, '  ')}</p> -->

<script>
  import { browser } from '$app/environment';
  import { Button } from 'flowbite-svelte';
  import { Web3Auth } from "@web3auth/modal";
  import { ethers } from "ethers";

  let web3authProvider=undefined;
  let provider=undefined;
  let connected=false;
  let address=undefined;
  let cfg = {};
  let web3auth;

  async function connect() {
    if (!browser) return;

    connected = !connected;
    const resp = await fetch(`/api/providers/mumbai`);
    cfg = await resp.json();
    web3auth = new Web3Auth({
      clientId: cfg.web3auth.clientId,
      web3AuthNetwork: cfg.web3auth.web3AuthNetwork,
      chainConfig: {...cfg.chainConfig},
    });
    await web3auth.initModal();
    web3authProvider = await web3auth.connect();
    console.log('----------');
    console.log(web3authProvider);
    provider = new ethers.providers.Web3Provider(web3authProvider);
    console.log(provider);
    const signer = await provider.getSigner();
    address = await signer?.getAddress();
  }
</script>
