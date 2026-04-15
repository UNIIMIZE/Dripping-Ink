export const metadata = {
  title: 'Contact | Dripping Ink',
  description: 'Reach out to the author of Dripping Ink.',
};

export default function Contact() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Contact</h1>
      <div className="post-content" style={{ marginBottom: '40px' }}>
        <p>
          I would love to hear your thoughts. Whether you want to discuss a poem, share your own story, or just say hello, feel free to reach out.
        </p>
      </div>

      <div style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '30px', borderRadius: '8px' }}>
        <form action="https://formspree.io/f/your_form_id_here" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontWeight: '600', fontSize: '0.9rem' }}>Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              className="search-input"
              placeholder="hello@example.com"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="message" style={{ fontWeight: '600', fontSize: '0.9rem' }}>Message</label>
            <textarea 
              id="message" 
              name="message" 
              required
              className="search-input"
              rows="6"
              placeholder="Your thoughts..."
              style={{ resize: 'vertical' }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={{ 
              padding: '12px 24px', 
              backgroundColor: 'var(--text-color)', 
              color: 'var(--bg-color)', 
              border: 'none', 
              borderRadius: '4px',
              fontFamily: 'var(--font-sans)',
              fontWeight: '600',
              cursor: 'pointer',
              alignSelf: 'flex-start'
            }}
          >
            Send Message
          </button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          * To enable this functional form without a backend, replace 'your_form_id_here' with an ID from <a href="https://formspree.io" style={{textDecoration:'underline'}}>Formspree.io</a> (Free). Alternatively, just email me at <a href="mailto:hello@example.com" style={{textDecoration:'underline', color:'var(--text-color)'}}>hello@example.com</a>.
        </p>
      </div>
    </div>
  );
}
