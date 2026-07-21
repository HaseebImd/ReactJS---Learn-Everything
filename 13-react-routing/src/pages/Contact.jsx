import { Link } from "react-router";

const Contact = () => {
  return (
    <section className="page-shell">
      <p className="page-kicker">Contact</p>
      <h1 className="page-title">Let&apos;s Connect</h1>
      <p className="page-copy">
        Reach out for collaboration, questions, or feedback on your React
        journey.
      </p>

      <div className="contact-grid">
        <article className="info-card">
          <h2>Email</h2>
          <p>hello@example.com</p>
        </article>
        <article className="info-card">
          <h2>Location</h2>
          <p>Remote, Worldwide</p>
        </article>
      </div>

      <div className="page-actions">
        <Link to="/about" className="page-btn page-btn-secondary">
          Learn More About Us
        </Link>
      </div>
    </section>
  );
};

export default Contact;
