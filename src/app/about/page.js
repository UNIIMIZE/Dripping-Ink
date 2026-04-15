export const metadata = {
  title: 'About | Dripping Ink',
  description: 'About the author of Dripping Ink.',
};

export default function About() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>About</h1>
      <div className="post-content">
        <p>
          Welcome to Dripping Ink, a minimalist sanctuary for poetry, thoughts, and short stories born under the vast and quiet sky.
        </p>
        <p>
          This publication is dedicated to exploring the subtle emotions, fleeting moments of connection, and the quiet spaces between our words. Written for those who seek solace in lines and verses.
        </p>
        <p>
          Everything hosted here is powered purely by the passion for writing, utilizing zero-backend static architectures to prioritize readability, speed, and elegance above all.
        </p>
      </div>
    </div>
  );
}
