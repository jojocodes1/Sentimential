import React, { useState } from 'react';

const TermsAndConditions = () => {
    const [message, setMessage] = useState('');

    const handleAgree = () => {
        alert('You have agreed to the terms and conditions.');
        // Add your logic for when the user agrees
    };

    const handleNotAgree = () => {
        alert('You have not agreed to the terms and conditions.');
        // Add your logic for when the user does not agree
    };

    const handleSend = () => {
        alert(`Message sent: ${message}`);
        // Add your logic for sending the message
        setMessage(''); // Clear the message box after sending
    };

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Terms and Conditions</h1>
            <div className="terms">
                <h2>1. Introduction</h2>
                <p>Welcome to our service. By using our service, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>
                
                <h2>2. Information Collection</h2>
                <p>We collect the following information from your Spotify account:</p>
                <ul>
                    <li>Tracks</li>
                    <li>Artists</li>
                    <li>Audiobooks</li>
                    <li>Music genres</li>
                    <li>Podcasts</li>
                    <li>Most recent tracks and saved tracks</li>
                    <li>Lyrics from said tracks</li>
                </ul>
                
                <h2>3. Service Disclaimer</h2>
                <p>Our service DOES NOT provide diagnosis and is designed to be used in concert with talk therapy. It is not a substitute for professional medical advice, diagnosis, or treatment.</p>
                
                <h2>4. Data Protection</h2>
                <p>Azure services are implemented while maintaining appropriate technical and organizational measures to protect customer data in the cloud. Custom text classification does not collect or store any customer data to improve its machine-learned models or for product improvement purposes. Microsoft uses aggregate telemetry, such as which APIs are used and the number of calls from each subscription and resource, for service monitoring purposes. To learn more about Microsoft's privacy and security commitments, see the <a href="https://www.microsoft.com/en-us/trust-center" target="_blank" rel="noopener noreferrer">Microsoft Trust Center</a></p>
                
                <h2>5. Changes to Terms and Conditions</h2>
                <p>We reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the service will signify your acceptance of the updated terms.</p>
                

            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleAgree} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Agree</button>
                <button onClick={handleNotAgree} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Not Agree</button>
            </div>
            <footer style={{ marginTop: '20px' }}>
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns about these terms and conditions, please contact us.</p>
                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Your message" 
                        rows="4" 
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    />
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>Send</button>
                </form>
            </footer>
        </div>
    );
};

export default TermsAndConditions;
