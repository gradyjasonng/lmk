import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FramedFullScreenImage(props) {
  const {
    img,
    title,
    subheading,
    imgPosition = "top left",
    children,
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0 p-5"
        style={{
          display: "grid",
          gridTemplate: "2rem 1fr 2rem / 2rem 1fr 2rem",
          boxSizing: "border-box",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1 / 1 / 4 / 4",
              height: "100%",
              width: "100%",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1 / 1 / 4 / 4",
              height: "100%",
              width: "100%",
            }}
            layout="fullWidth"
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading || children) && (
          <div
            style={{
              // Use the inner grid
              gridArea: "2/2/3/3",
              position: "relative",
              // Position the title to the bottom right,
              placeSelf: "end left",
              // Poistion the other elements inside the hero component
              placeItems: "end left",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {children}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  color: "white",
                  lineHeight: "1",
                  marginLeft: "1rem",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FramedFullScreenImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  children: PropTypes.node,
};
