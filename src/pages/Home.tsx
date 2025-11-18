import { useState } from "react";
import Auth from "../components/Auth";
import Logo from "../components/Logo";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [meditation, setMeditation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateMeditation = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setMeditation(`🧘‍♀️ Personalized Meditation Session

Based on your request for "${prompt}", here's your guided meditation:

Find a comfortable position and close your eyes. Take three deep breaths, inhaling peace and exhaling tension.

As you breathe naturally, imagine yourself in a serene space where ${prompt.toLowerCase()} flows through you like gentle waves.

With each breath, feel yourself becoming more centered, more at peace. Let this moment of tranquility wash over you completely.

When you're ready, slowly open your eyes and carry this sense of calm with you.`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          color: '#2c3e50', 
          fontSize: '2.5rem', 
          marginBottom: '10px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
            <Logo size={60} />
            <span>Meditation Generator</span>
          </div>
        </h1>
        <p style={{ 
          color: '#7f8c8d', 
          fontSize: '1.1rem' 
        }}>Create personalized guided meditations for your wellness journey</p>
      </div>

      <Auth />

      <div style={{ 
        background: '#f8f9fa', 
        padding: '30px', 
        borderRadius: '10px',
        marginTop: '30px'
      }}>
        <h3 style={{ 
          color: '#34495e', 
          marginBottom: '15px' 
        }}>What would you like to focus on today?</h3>
        
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. stress relief, better sleep, focus, anxiety management"
          className="meditation-input"
          style={{ 
            padding: '15px', 
            width: '100%', 
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '16px',
            marginBottom: '20px',
            boxSizing: 'border-box'
          }}
          onKeyPress={(e) => e.key === 'Enter' && generateMeditation()}
        />

        <button 
          onClick={generateMeditation} 
          disabled={!prompt.trim() || isGenerating}
          style={{ 
            padding: '15px 30px',
            backgroundColor: isGenerating ? '#bdc3c7' : '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          {isGenerating ? <span className="loading-dots">Creating Your Meditation</span> : 'Generate Meditation'}
        </button>
      </div>

      {meditation && (
        <div className="meditation-card" style={{ 
          marginTop: '30px', 
          padding: '25px', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '20px' }}>Your Personalized Meditation</h3>
          <div style={{ 
            whiteSpace: 'pre-line', 
            lineHeight: '1.8',
            fontSize: '16px'
          }}>
            {meditation}
          </div>
          <button
            onClick={() => setMeditation('')}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Create New Meditation
          </button>
        </div>
      )}
    </div>
  );
}
