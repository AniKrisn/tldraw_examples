import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

const data = {
  screens: [
    {
      corners: [ {x:0,y:0}, {x:50,y:50}, {x:100,y:100}, {x:200,y:200} ]
    },
    {
      corners: [ {x:20,y:20}, {x:70,y:70}, {x:250,y:300}, {x:400,y:400} ]
    }
  ]
}

function toGeoShape(screen) {
  const xs = screen.corners.map(p => p.x)
  const ys = screen.corners.map(p => p.y)
  const w = Math.max(...xs) - Math.min(...xs)
  const h = Math.max(...ys) - Math.min(...ys)

  return {
    type: 'geo',
    x: (Math.min(...xs) + Math.max(...xs)) / 2,
    y: (Math.min(...ys) + Math.max(...ys)) / 2,
    rotation: 0,
    props: {
      geo: 'rectangle',
      w,
      h
      /* styling fields are optional; defaults are fine */
    }
  }
}

export default function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw
        onMount={editor => {
          editor.createShapes(data.screens.map(toGeoShape))
        }}
      />
    </div>
  )
}
