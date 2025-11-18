import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: '10px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '15px',
          background: '#f8f9fa',
          border: 'none',
          textAlign: 'left',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div style={{ padding: '15px' }}>
          {children}
        </div>
      )}
    </div>
  );
}