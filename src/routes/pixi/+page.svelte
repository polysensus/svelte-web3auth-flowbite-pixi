<PixiCanvas>
  <div slot="canvas">
    <HelloPixi {x} {y}/>
  </div>
</PixiCanvas>
<PixiCanvas canvasId={2}>
  <div slot="canvas">
    <HelloPixi {x} {y} text="Hello 2"/>
  </div>
</PixiCanvas>

<script>
  import PixiCanvas from "../../lib/components/dev/PixiCanvas.svelte";
  import HelloPixi from "../../lib/components/dev/HelloPixi.svelte";
  let x=200;
  let y=200;
</script>