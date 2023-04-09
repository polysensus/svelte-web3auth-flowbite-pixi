<Graphics
  data-pixi={{...dataPixiProps}}
  interactive={true}
  hitArea={new PIXI.Circle(0, 0, radius)}
  x={x}
  y={y}
  on:pointerdown={(...args) => pointerDown(...args)}
  draw={(g) => {
    g.clear()
    g.beginFill(colour)
    g.drawCircle(0, 0, radius)
    g.endFill()
  }}
  />

<Text
  data-pixi={{...dataPixiProps}}
  text="{text}"
  style={{fill: "white", fontSize: fontSize}}
  x={x} y={y}
  anchor={0.5}
/>

<style>
</style>
<script>
import * as PIXI from 'pixi.js'
import { Graphics, Text } from "svelte-pixi";
const blue = 0x007dcf;
export let x, y
export let radius = 50
export let colour = blue
export let text = "Hello Canvas"
export let fontSize = 12
export let pointerDown = (...args) => console.log(`HelloPixi pointerDown`)
export let dataPixiProps = {}
</script>