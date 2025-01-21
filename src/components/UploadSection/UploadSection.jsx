import PropTypes from "prop-types"; // Import PropTypes
import "./UploadSection.css";

const UploadSection = ({ onImageUpload, image }) => {
  return (
    <section className="upload-section">
      <h2>Upload Crop Image</h2>
      <input type="file" accept="image/*" onChange={onImageUpload} />
      {image && (
        <div className="uploaded-image-container">
          <img src={image} alt="Uploaded Crop" className="uploaded-image" />
        </div>
      )}
    </section>
  );
};

// Define PropTypes
UploadSection.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
  image: PropTypes.string,
};

// Default props (optional)
UploadSection.defaultProps = {
  image: null,
};

export default UploadSection;
