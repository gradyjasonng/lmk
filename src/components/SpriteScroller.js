import * as React from "react";
import PropTypes from "prop-types";

const SpriteScroller = ({ sprite, nframes, width, aspectRatio, progress }) => {
	return (
		<div
			style={{
				width: width,
				height: `calc(${width} / ${aspectRatio})`,
				overflow: "hidden",
			}}
		>
					<img
						src={sprite}
						alt=""
						formats={["auto", "webp", "avif"]}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "none",
              transform: `translateY(-${
                (Math.floor((nframes - 1) * progress) * 100) / nframes
              }%)`,
            }}
					/>
		</div>
	);
};

SpriteScroller.propTypes = {
	sprite: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	width: PropTypes.string,
	aspectRatio: PropTypes.number,
	nframes: PropTypes.number,
	progress: PropTypes.number,
};

export default SpriteScroller;
