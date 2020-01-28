import React from "react";

const StockImage = props => (
  <div className="ggplot-img">
    <img src={props.imageUrl} alt={props.imageUrl} />
  </div>
);

export default StockImage;
