

export default function PrivacyPolicy() {
  return (
    <div className="privacy-terms-container" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>Privacy Policy</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      </div>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>1. Information We Collect</h2>
        <h3 style={{ color: '#7f8c8d', marginBottom: '10px' }}>Account Information</h3>
        <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
          <li>Email address (when you sign up with email)</li>
          <li>Google account information (when you sign up with Google)</li>
          <li>Profile information you choose to provide</li>
        </ul>
        
        <h3 style={{ color: '#7f8c8d', marginBottom: '10px' }}>Usage Data</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Meditation prompts and preferences</li>
          <li>Session duration and frequency</li>
          <li>App usage patterns and features accessed</li>
          <li>Device information and IP address</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>2. How We Use Your Information</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Personalization:</strong> Create customized meditation experiences based on your preferences</li>
          <li><strong>Account Management:</strong> Maintain your account and provide customer support</li>
          <li><strong>Service Improvement:</strong> Analyze usage patterns to enhance our meditation content</li>
          <li><strong>Communication:</strong> Send important updates about your account and our services</li>
          <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>3. Information Sharing and Disclosure</h2>
        <p style={{ marginBottom: '15px' }}>
          <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
        </p>
        
        <h3 style={{ color: '#7f8c8d', marginBottom: '10px' }}>We may share information only in these limited circumstances:</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
          <li><strong>Service providers:</strong> Trusted partners who help us operate our service (under strict confidentiality agreements)</li>
          <li><strong>Legal requirements:</strong> When required by law or to protect our rights and safety</li>
          <li><strong>Business transfers:</strong> In the event of a merger or acquisition (with continued privacy protection)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>4. Data Security</h2>
        <p style={{ marginBottom: '15px' }}>We implement industry-standard security measures to protect your information:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Encryption of data in transit and at rest</li>
          <li>Secure authentication systems</li>
          <li>Regular security audits and updates</li>
          <li>Limited access to personal data on a need-to-know basis</li>
          <li>Secure cloud infrastructure with AWS/Google Cloud security standards</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>5. Your Privacy Rights</h2>
        <p style={{ marginBottom: '15px' }}>You have the following rights regarding your personal information:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
          <li><strong>Correction:</strong> Update or correct inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Portability:</strong> Receive your data in a portable format</li>
          <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
        </ul>
        <p style={{ marginTop: '15px' }}>
          To exercise these rights, contact us through the app's settings or email support.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>6. Cookies and Tracking</h2>
        <p style={{ marginBottom: '15px' }}>We use cookies and similar technologies to:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Remember your login status and preferences</li>
          <li>Analyze app performance and usage patterns</li>
          <li>Provide personalized meditation recommendations</li>
        </ul>
        <p style={{ marginTop: '15px' }}>You can control cookie settings through your browser preferences.</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>7. Third-Party Services</h2>
        <p style={{ marginBottom: '15px' }}>Our app integrates with:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Google Sign-In:</strong> For authentication (governed by Google's Privacy Policy)</li>
          <li><strong>Analytics services:</strong> To understand app usage (anonymized data only)</li>
        </ul>
        <p style={{ marginTop: '15px' }}>These services have their own privacy policies that govern their use of your information.</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>8. Children's Privacy</h2>
        <p>
          Our service is not intended for children under 13 years of age. We do not knowingly collect 
          personal information from children under 13. If you are a parent and believe your child has 
          provided us with personal information, please contact us to have it removed.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>9. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your own. 
          We ensure appropriate safeguards are in place to protect your privacy rights in accordance 
          with applicable data protection laws.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material changes 
          by posting the new Privacy Policy in the app and sending you an email notification. 
          Your continued use of the service after changes become effective constitutes acceptance of the new policy.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>11. Contact Us</h2>
        <p style={{ marginBottom: '15px' }}>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
        <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
          <li>📧 Email: eunoialabs.dev@gmail.com</li>
          <li>📱 In-app: Settings → Help & Support → Privacy</li>
        </ul>
      </section>

      <div style={{ 
        background: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '40px',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0', color: '#7f8c8d', fontSize: '14px' }}>
          🔒 Your privacy and peace of mind are our top priorities. 
          We're committed to protecting your personal information while helping you on your meditation journey.
        </p>
      </div>
    </div>
  );
}
