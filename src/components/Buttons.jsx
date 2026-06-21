import { Leaf } from "lucide-react";

function PortfolioButton({ children, download, href, onClick, target, variant = "primary" }) {
  const content = (
    <>
      <Leaf size={16} aria-hidden="true" />
      <span>{children}</span>
      <Leaf size={16} aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <a className={`luxury-button luxury-button-${variant}`} href={href} target={target} download={download}>
        {content}
      </a>
    );
  }

  return (
    <button className={`luxury-button luxury-button-${variant}`} onClick={onClick} type="button">
      {content}
    </button>
  );
}

export default PortfolioButton;
