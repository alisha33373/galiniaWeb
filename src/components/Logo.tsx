export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      <img 
        src="/image 44.png" 
        alt="Galinia Logo" 
        style={{
          width: size,
          height: size,
          objectFit: 'contain'
        }}
      />
      <span style={{
        fontSize: size * 0.5,
        fontWeight: 'bold',
        color: 'inherit'
      }}>
        Galinia
      </span>
    </div>
  );
}