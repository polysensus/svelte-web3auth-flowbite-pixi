<Button on:click={async () => {await connect()}}>Connect</Button>
<p>{connected ? "Connected": "Not Connected"}</p>
<p>{provider}</p>

<script>
  import { Button } from 'flowbite-svelte';
  let connected=false
  let provider=""

  async function connect() {
    connected = !connected;
    const resp = await fetch(`/api/providers/mumbai`);
    provider = await resp.json();
    provider = JSON.stringify(provider, null, '  ');
    console.log(provider);
  }
</script>
