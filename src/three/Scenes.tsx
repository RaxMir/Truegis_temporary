/**
 * 3D-сцены сайта (отдельный чанк, грузится после первой отрисовки).
 * Модели собраны из геометрии three.js в цветах бренда — без внешних файлов и лицензий.
 *  - TrueGisScene: глянцевая метка над маленьким городом, вокруг по орбите — продукты экосистемы (Shifo24 — самый крупный).
 *  - ShifoScene: стеклянное сердце с линией пульса и плавающими «таблетками».
 */
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BLUE = "#4f7bff";
const BLUE_LIGHT = "#8a9bff";
const TEAL = "#2fb5d6";

/** Мягкий наклон сцены за курсором (на телефоне — почти неподвижно). */
function useTilt(strength = 0.25) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    const g = ref.current;
    if (!g) return;
    const k = 1 - Math.pow(0.002, dt);
    g.rotation.y += (state.pointer.x * strength - g.rotation.y) * k;
    g.rotation.x += (-state.pointer.y * strength * 0.5 - g.rotation.x) * k;
  });
  return ref;
}

function Studio() {
  return (
    <Environment resolution={256}>
      <Lightformer form="rect" intensity={3} position={[0, 5, -6]} scale={[10, 4, 1]} />
      <Lightformer form="rect" intensity={2} position={[-6, 2, 2]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} color="#c7d2ff" />
      <Lightformer form="rect" intensity={1.5} position={[6, 1, 3]} rotation-y={-Math.PI / 2} scale={[8, 3, 1]} color="#ffffff" />
      <Lightformer form="circle" intensity={2} position={[0, 6, 4]} scale={3} />
    </Environment>
  );
}

/* ---------- TrueGis ---------- */

function MapPin() {
  const geom = useMemo(() => {
    // профиль капли: дуга головки + сужение к острию; вращаем вокруг оси Y
    const pts: THREE.Vector2[] = [];
    const r = 0.62;
    const cy = 0.35;
    const steps = 40;
    pts.push(new THREE.Vector2(0, -1.15));
    for (let i = steps; i >= 0; i--) {
      const a = (i / steps) * Math.PI * 0.78; // 0 — верх, 0.78π — низ головки
      pts.push(new THREE.Vector2(Math.sin(a) * r, cy + Math.cos(a) * r));
    }
    pts.reverse();
    return new THREE.LatheGeometry(pts, 64);
  }, []);
  return (
    <group>
      <mesh geometry={geom} castShadow>
        <meshPhysicalMaterial color={BLUE} metalness={0.15} roughness={0.18} clearcoat={1} clearcoatRoughness={0.08} />
      </mesh>
      <mesh position={[0, 0.35, 0.56]} scale={[1, 1, 0.18]}>
        <sphereGeometry args={[0.21, 32, 32]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.25} clearcoat={1} />
      </mesh>
    </group>
  );
}

/** Детерминированный «город»: кварталы на круглой площадке, центр свободен под метку. */
function City() {
  const blocks = useMemo(() => {
    const out: { x: number; z: number; h: number; c: string; w: number }[] = [];
    const palette = ["#e9edff", "#d7defc", "#c3cdf8", "#f4f6ff", "#aebcf5"];
    let seed = 7;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    for (let ix = -4; ix <= 4; ix++) {
      for (let iz = -4; iz <= 4; iz++) {
        const x = ix * 0.46;
        const z = iz * 0.46;
        const d = Math.hypot(x, z);
        if (d > 2.05 || d < 0.75 || ix === 0 || iz === 0) continue; // улицы по осям и площадь в центре
        if (rnd() < 0.18) continue;
        out.push({ x, z, h: 0.12 + rnd() * (d < 1.3 ? 0.55 : 0.32), c: palette[Math.floor(rnd() * palette.length)], w: 0.3 + rnd() * 0.08 });
      }
    }
    return out;
  }, []);
  return (
    <group position={[0, -1.35, 0]}>
      <mesh receiveShadow position={[0, -0.09, 0]}>
        <cylinderGeometry args={[2.45, 2.55, 0.18, 96]} />
        <meshPhysicalMaterial color="#1a1d2b" roughness={0.5} clearcoat={0.4} />
      </mesh>
      <mesh position={[0, 0.005, 0]} rotation-x={-Math.PI / 2}>
        <circleGeometry args={[2.38, 96]} />
        <meshStandardMaterial color="#262b3f" roughness={0.9} />
      </mesh>
      {blocks.map((b, i) => (
        <RoundedBox key={i} args={[b.w, b.h, b.w]} radius={0.04} smoothness={3} position={[b.x, b.h / 2, b.z]} castShadow>
          <meshStandardMaterial color={b.c} roughness={0.55} />
        </RoundedBox>
      ))}
      {/* деревья в центральном сквере */}
      {[
        [0.45, 0.2],
        [-0.42, -0.3],
        [0.3, -0.48],
        [-0.5, 0.35],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.12, z]}>
          <sphereGeometry args={[0.11, 20, 20]} />
          <meshStandardMaterial color="#3ccf7a" roughness={0.6} />
        </mesh>
      ))}
      {/* «пульс» метки на земле */}
      <PulseRing />
    </group>
  );
}

function PulseRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const t = (clock.elapsedTime % 2.4) / 2.4;
    m.scale.setScalar(0.4 + t * 1.6);
    (m.material as THREE.MeshBasicMaterial).opacity = 0.55 * (1 - t);
  });
  return (
    <mesh ref={ref} position={[0, 0.02, 0]} rotation-x={-Math.PI / 2}>
      <ringGeometry args={[0.42, 0.5, 64]} />
      <meshBasicMaterial color={BLUE_LIGHT} transparent />
    </mesh>
  );
}

function HeartMesh({ color, glass = false, scale = 1 }: { color: string; glass?: boolean; scale?: number }) {
  const geom = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, -0.9);
    s.bezierCurveTo(-0.15, -0.72, -1.05, -0.2, -1.05, 0.32);
    s.bezierCurveTo(-1.05, 0.82, -0.6, 1.05, -0.32, 1.05);
    s.bezierCurveTo(-0.12, 1.05, 0, 0.9, 0, 0.78);
    s.bezierCurveTo(0, 0.9, 0.12, 1.05, 0.32, 1.05);
    s.bezierCurveTo(0.6, 1.05, 1.05, 0.82, 1.05, 0.32);
    s.bezierCurveTo(1.05, -0.2, 0.15, -0.72, 0, -0.9);
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.36, bevelEnabled: true, bevelThickness: 0.16, bevelSize: 0.14, bevelSegments: 10, curveSegments: 48 });
    g.center();
    return g;
  }, []);
  return (
    <mesh geometry={geom} scale={scale}>
      {glass ? (
        <meshPhysicalMaterial color={color} transmission={0.75} thickness={1.2} roughness={0.08} ior={1.4} clearcoat={1} attenuationColor={color} attenuationDistance={1.5} />
      ) : (
        <meshPhysicalMaterial color={color} roughness={0.18} clearcoat={1} clearcoatRoughness={0.1} />
      )}
    </mesh>
  );
}

function ChatBubble() {
  return (
    <group>
      <RoundedBox args={[0.62, 0.44, 0.2]} radius={0.12} smoothness={4}>
        <meshPhysicalMaterial color="#9b7bff" roughness={0.2} clearcoat={1} />
      </RoundedBox>
      <mesh position={[-0.2, -0.26, 0]} rotation-z={0.6}>
        <coneGeometry args={[0.09, 0.18, 16]} />
        <meshPhysicalMaterial color="#9b7bff" roughness={0.2} clearcoat={1} />
      </mesh>
      {[-0.14, 0, 0.14].map((x) => (
        <mesh key={x} position={[x, 0, 0.11]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}

function Bars() {
  return (
    <group>
      {[0.22, 0.38, 0.56].map((h, i) => (
        <RoundedBox key={i} args={[0.15, h, 0.15]} radius={0.04} position={[(i - 1) * 0.2, h / 2 - 0.28, 0]}>
          <meshPhysicalMaterial color="#3ccf7a" roughness={0.25} clearcoat={1} />
        </RoundedBox>
      ))}
    </group>
  );
}

function Bag() {
  return (
    <group>
      <RoundedBox args={[0.5, 0.48, 0.28]} radius={0.07} smoothness={4}>
        <meshPhysicalMaterial color="#ffb547" roughness={0.25} clearcoat={1} />
      </RoundedBox>
      <mesh position={[0, 0.3, 0]}>
        <torusGeometry args={[0.13, 0.03, 12, 32, Math.PI]} />
        <meshPhysicalMaterial color="#ffb547" roughness={0.25} clearcoat={1} />
      </mesh>
    </group>
  );
}

/**
 * Продукты экосистемы парят вокруг метки: Shifo24 (сердце) — крупнее всех, справа сверху.
 * Слева/справа, не перед меткой — ничего не закрывает друг друга. Кольцо — «орбита» экосистемы.
 */
function Satellites() {
  const items: { node: React.ReactNode; pos: [number, number, number]; speed: number }[] = [
    { node: <HeartMesh color={TEAL} scale={0.62} />, pos: [1.95, 1.55, 0.3], speed: 1.6 },
    { node: <group scale={1.35}><ChatBubble /></group>, pos: [-2.0, 1.35, 0.2], speed: 2.1 },
    { node: <group scale={1.3}><Bag /></group>, pos: [-2.15, 0.05, 1.1], speed: 1.8 },
    { node: <group scale={1.3}><Bars /></group>, pos: [2.2, 0.15, 1.1], speed: 2.3 },
  ];
  const ring = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ring.current) ring.current.rotation.z += dt * 0.15;
  });
  return (
    <group>
      <mesh ref={ring} rotation-x={Math.PI / 2.25} position={[0, 0.45, 0]}>
        <torusGeometry args={[2.35, 0.008, 8, 200]} />
        <meshBasicMaterial color={BLUE_LIGHT} transparent opacity={0.4} />
      </mesh>
      {items.map((it, i) => (
        <Float key={i} speed={it.speed} rotationIntensity={0.7} floatIntensity={0.9}>
          <group position={it.pos}>{it.node}</group>
        </Float>
      ))}
    </group>
  );
}

export function TrueGisScene({ frameloop }: { frameloop: "always" | "never" }) {
  return (
    <Canvas frameloop={frameloop} dpr={[1, 1.75]} camera={{ position: [0, 2.8, 9.2], fov: 36 }} gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }} shadows={false}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 6, 4]} intensity={1.6} />
      <Studio />
      <TrueGisRig />
    </Canvas>
  );
}

function TrueGisRig() {
  const tilt = useTilt(0.3);
  return (
    <group ref={tilt} position={[0, 0.25, 0]}>
      <City />
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.6}>
        <group position={[0, 0.55, 0]}>
          <SpinY speed={0.5}>
            <MapPin />
          </SpinY>
        </group>
      </Float>
      <Satellites />
    </group>
  );
}

function SpinY({ children, speed }: { children: React.ReactNode; speed: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = Math.sin(clock.elapsedTime * speed) * 0.6;
  });
  return <group ref={ref}>{children}</group>;
}

/* ---------- Shifo24 ---------- */

function PulseLine() {
  const ref = useRef<THREE.Mesh>(null);
  const geom = useMemo(() => {
    const p = [
      [-1.6, 0],
      [-0.55, 0],
      [-0.32, 0.42],
      [-0.05, -0.6],
      [0.22, 0.7],
      [0.42, 0],
      [1.6, 0],
    ].map(([x, y]) => new THREE.Vector3(x, y, 0));
    const path = new THREE.CurvePath<THREE.Vector3>();
    for (let i = 0; i < p.length - 1; i++) path.add(new THREE.LineCurve3(p[i], p[i + 1]));
    return new THREE.TubeGeometry(path, 200, 0.055, 12, false);
  }, []);
  useFrame(({ clock }) => {
    const m = ref.current;
    if (!m) return;
    const t = (clock.elapsedTime % 1.6) / 1.6;
    const beat = t < 0.15 ? Math.sin((t / 0.15) * Math.PI) : 0;
    (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.2 + beat * 2.5;
  });
  return (
    <mesh ref={ref} geometry={geom} position={[0, 0.05, 0.42]}>
      <meshStandardMaterial color="#ffffff" emissive="#bff4ff" emissiveIntensity={1.2} roughness={0.3} />
    </mesh>
  );
}

function Capsule({ color, position, rotation }: { color: string; position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <Float speed={2.2} rotationIntensity={1.2} floatIntensity={1.1}>
      <group position={position} rotation={rotation}>
        <mesh position={[0, 0.16, 0]}>
          <capsuleGeometry args={[0.16, 0.32, 8, 24]} />
          <meshPhysicalMaterial color={color} roughness={0.2} clearcoat={1} />
        </mesh>
      </group>
    </Float>
  );
}

function Cross({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.8} rotationIntensity={1} floatIntensity={1}>
      <group position={position}>
        <RoundedBox args={[0.44, 0.15, 0.15]} radius={0.05}>
          <meshPhysicalMaterial color="#ffffff" roughness={0.2} clearcoat={1} />
        </RoundedBox>
        <RoundedBox args={[0.15, 0.44, 0.15]} radius={0.05}>
          <meshPhysicalMaterial color="#ffffff" roughness={0.2} clearcoat={1} />
        </RoundedBox>
      </group>
    </Float>
  );
}

function ShifoRig() {
  const tilt = useTilt(0.35);
  const heart = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const g = heart.current;
    if (!g) return;
    const t = (clock.elapsedTime % 1.6) / 1.6;
    const beat = t < 0.12 ? Math.sin((t / 0.12) * Math.PI) * 0.06 : t > 0.2 && t < 0.3 ? Math.sin(((t - 0.2) / 0.1) * Math.PI) * 0.035 : 0;
    g.scale.setScalar(1 + beat);
    g.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.35;
  });
  return (
    <group ref={tilt}>
      <group ref={heart}>
        <HeartMesh color={TEAL} glass scale={1.15} />
        <PulseLine />
      </group>
      <Capsule color="#ffffff" position={[-1.9, 0.9, -0.4]} rotation={[0, 0, 0.8]} />
      <Capsule color={TEAL} position={[1.95, -0.8, -0.2]} rotation={[0.4, 0, -0.6]} />
      <Capsule color="#8fe3f5" position={[1.7, 1.15, -0.8]} rotation={[0, 0.3, 1.9]} />
      <Cross position={[-1.75, -1.0, 0.1]} />
    </group>
  );
}

export function ShifoScene({ frameloop }: { frameloop: "always" | "never" }) {
  return (
    <Canvas frameloop={frameloop} dpr={[1, 1.75]} camera={{ position: [0, 0, 6], fov: 40 }} gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 5]} intensity={1.4} />
      <Studio />
      <ShifoRig />
    </Canvas>
  );
}
