export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Image background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Subtle blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.15),transparent_60%)]" />
    </div>
  );
}
