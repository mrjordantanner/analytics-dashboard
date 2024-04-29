import AnalyticsMockupOverlay from '/assets/AnalyticsMockupOverlay.png'

interface Props{
  isMobile: boolean;
}

// Displays semi-transparent overlay of design mockup for reference during development
export default function MockupOverlay({ isMobile }: Props) {
  return (
    <div
      style={{

        // Adjust opacity to view mockup
        opacity: 0,  

        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
        display: isMobile ? 'none' : 'flex',
      }}
    >

      <img
        src={AnalyticsMockupOverlay}
        alt="Mockup Overlay"
        style={{ left: '50%', width: '100%', height: '100%', flex: '1' }}
      />
    </div>
  );
};
