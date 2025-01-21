import PropTypes from "prop-types"; // Import PropTypes
import "./ResultSection.css";

const ResultSection = ({ result }) => {
  if (!result) return null;

  return (
    <section className="results-section">
      <h2>Detection Results</h2>
      <p>
        <strong>Disease:</strong> {result.disease}
      </p>
      <p>
        <strong>Treatment/Cure:</strong> {result.treatment}
      </p>
    </section>
  );
};

// Define PropTypes
ResultSection.propTypes = {
  result: PropTypes.shape({
    disease: PropTypes.string.isRequired,
    treatment: PropTypes.string.isRequired,
  }),
};

// Default props (optional)
ResultSection.defaultProps = {
  result: null,
};

export default ResultSection;
