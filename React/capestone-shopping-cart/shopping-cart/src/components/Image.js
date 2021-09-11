import React, { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "./ContextProvider";
import useHover from "../hooks/useHover";
function Image({ className, img }) {
  const [hovered, ref] = useHover(false);
  const { toggleFavorite } = useContext(Context);
  const { addFavImage } = useContext(Context);
  const {isPresentCart} = useContext(Context)
  return (
    <div ref={ref}
     
      className={`${className} image-container`}
    >
      {hovered && !img.isFavorite && (
        <i
          onClick={() => {
            toggleFavorite(img.id);
          }}
          className="ri-heart-line favorite"
        ></i>
      )}
      {hovered && img.isFavorite && (
        <i
          onClick={() => {
            toggleFavorite(img.id);
          }}
          className="ri-heart-fill favorite"
        ></i>
      )}

      {hovered &&  !isPresentCart(img.id) && (
        <i
          onClick={() => {
            addFavImage(img);
          }}
          className="ri-add-circle-line cart"
        ></i>
      )}

      {hovered && isPresentCart(img.id) && (
        <i
          onClick={() => {
            addFavImage(img);
          }}
          className="ri-shopping-cart-fill cart"
        ></i>
      )}
      <img src={img.url} className="image-grid" />
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Image;
