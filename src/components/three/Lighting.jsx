export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.7} />

      <directionalLight position={[5, 8, 5]} intensity={2} castShadow />

      <pointLight position={[-5, 2, -2]} intensity={40} color="#00F5FF" />

      <pointLight position={[4, 4, 2]} intensity={20} color="#7C3AED" />
    </>
  );
}
