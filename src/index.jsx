import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Leva } from 'leva'

const root = ReactDOM.createRoot(document.querySelector('#root'))
// Check if #debug is present in the DOM
const debug = window.location.hash === '#debug'
console.log(debug)

root.render(
    <>
        <Leva hidden={!debug} />
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4],
            }}
        >
            <Experience />
        </Canvas>
    </>
)
