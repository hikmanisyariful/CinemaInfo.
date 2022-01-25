import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button(props) {
  // Setup className
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  // untuk memastikan button menerima props onClick
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // Cek apakah botton menerima props isDisabled atau isLoading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");

    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // Mengecek props.type = "link" apakah akan ngelink ke eternal atau ke dalam app
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_black" : undefined} //Jika kita menerima target perlu menyertakan rel, jika tidak akan ada warning
          rel={props.target === "_blank" ? "noopener norefferer" : undefined} // fungsi dari noopener dan norefferer salah satunya untuk SEO
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick} //Untuk menjalankan function setelah kita klik
        >
          {props.children}
        </Link>
      );
    }
  }

  // Default jika props.type = "button"
  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "link"]), //type dari button akan menerima "button" atau "link"
  onClick: PropTypes.func, //Memastikan onClick menerima function
  target: PropTypes.string, // untuk link external biasanya
  href: PropTypes.string,
  className: PropTypes.string,
  isPrimary: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  hasShadow: PropTypes.bool
};
