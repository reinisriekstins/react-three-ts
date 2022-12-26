import { useRef } from 'react'
import { OrbitControls, TorusKnot, Environment, ContactShadows } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

export default function App() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <Thing />

      <OrbitControls />
      
      <Environment preset='city' />

      <ContactShadows
        position={[0, -3, 0]}
        scale={30}
        blur={2}
        far={4.5}
      />
    </Canvas>
  )
}

function Thing() {
  const ref = useRef()
  useFrame(() => ((ref as any).current.rotation.y += 0.01))
  return (
    <TorusKnot ref={ref} args={[1, 0.3, 128, 16]}>
      <meshNormalMaterial />
    </TorusKnot>
  )
}