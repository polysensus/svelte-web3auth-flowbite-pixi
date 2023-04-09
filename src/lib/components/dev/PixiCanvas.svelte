<script>
// --- lib deps
import * as PIXI from 'pixi.js'
// --- framework
import { onMount, getContext } from 'svelte'
import { Application } from "svelte-pixi";
// --- external components
// --- components
// --- app lib
// --- app stores
// --- constants
// --- data imports
// --- component properties
export let render = 'demand'
export let canvasId = 0;
export let canvasHeight=400;
export let canvasWidth=400;

let instance

// --- component state properties
// --- svelte bound variables
// let instance = undefined
// --- svelte lifecycle callbacks
// test support hook
function getPixiApp() { return instance; }
onMount(async () => {
    // @ts-ignore
    window.getPixiApp = getPixiApp; /** test support hook */
 })
// --- on dom event callbacks
// --- contract state callbacks
// --- component helpers
</script>
<slot name="canvas-before"></slot>
<div class="flex-container" id="canvas-parent-{canvasId}">
{#if $$slots.canvas}
<Application width={canvasWidth} height={canvasHeight} render={render} bind:instance data-testid='pixi-application-{canvasId}'>
  <slot name="canvas"></slot>
</Application>
{/if}
<div style="width:20px"><!-- spacer --></div>
<slot name="canvas-right"></slot>
</div>
<slot name="canvas-after"></slot>
<style>
  .flex-container {
    display: flex;
    margin: 10px;
    align-items: top;
  }
</style>
