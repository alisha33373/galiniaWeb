

export default function Terms() {
  return (
    <div className="privacy-terms-container" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>Terms & Conditions</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      </div>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>1. About Our Meditation App</h2>
        <p>
          Welcome to our meditation application. This app provides guided meditation sessions, 
          mindfulness exercises, and wellness content to help users achieve mental clarity and relaxation. 
          Our service includes email and Google authentication for secure access to personalized meditation experiences.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>2. Acceptance of Terms</h2>
        <p>
          By creating an account, logging in, or using our meditation services, you agree to be bound by these Terms & Conditions. 
          If you do not agree to these terms, please do not use our application.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>3. User Accounts</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>You may create an account using your email address or Google account</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials</li>
          <li>You must provide accurate and complete information when creating your account</li>
          <li>You are responsible for all activities that occur under your account</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>4. Permitted Use</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Use the app for personal meditation and wellness purposes</li>
          <li>Access meditation content for your own use</li>
          <li>Participate in guided meditation sessions</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>5. Prohibited Activities</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Reproducing, distributing, or sharing meditation content without permission</li>
          <li>Using the service for commercial purposes without authorization</li>
          <li>Attempting to reverse engineer or copy our meditation algorithms</li>
          <li>Sharing your account credentials with others</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>6. Health Disclaimer</h2>
        <p>
          Our meditation app is designed for wellness and relaxation purposes. It is not intended to replace 
          professional medical advice, diagnosis, or treatment. Please consult with healthcare professionals 
          for any mental health concerns.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>7. Limitation of Liability</h2>
        <p>
          We provide the meditation service "as is" and cannot guarantee specific outcomes. 
          We are not liable for any indirect, incidental, or consequential damages arising from your use of the app.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Users will be notified of significant changes 
          via email or in-app notifications.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>9. Contact Information</h2>
        <p>
          If you have questions about these Terms & Conditions, please contact us through the app's support feature 
          or via email.
        </p>
      </section>
    </div>
  );
}
