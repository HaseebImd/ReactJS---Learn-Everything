import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="page-shell">
      <p className="page-kicker">About</p>
      <h1 className="page-title">Who We Are</h1>
      <p className="page-copy">
        This page demonstrates programmatic navigation using{" "}
        <code>useNavigate</code>
        along with a lightweight page layout.
      </p>
      <div className="page-actions">
        <button
          className="page-btn page-btn-secondary"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default About;
