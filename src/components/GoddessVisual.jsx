import goddessImage from "../assets/goddess-june-16.png";
import leafyBranch from "../assets/leafy-branch.png";
import ProcessSteps from "./ProcessSteps.jsx";

function GoddessVisual() {
  return (
    <div className="goddess-visual" aria-label="Marble Greek goddess portfolio artwork">
      <div className="goddess-halo" aria-hidden="true" />
      <div className="temple-columns" aria-hidden="true" />
      <img className="hero-leafy-branch" src={leafyBranch} alt="" />
      <img className="goddess-bust" src={goddessImage} alt="Marble Greek goddess statue with glasses and laurel crown" />
      <ProcessSteps />
    </div>
  );
}

export default GoddessVisual;
