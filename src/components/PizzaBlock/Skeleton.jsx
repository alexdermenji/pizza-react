import React from "react";
import ContentLoader from "react-content-loader";

function Skeleton(props) {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="139" cy="108" r="88" />
      <rect x="0" y="215" rx="6" ry="6" width="280" height="42" />
      <rect x="-2" y="372" rx="5" ry="5" width="120" height="27" />
      <rect x="142" y="371" rx="5" ry="5" width="135" height="30" />
      <rect x="0" y="274" rx="5" ry="5" width="275" height="77" />
    </ContentLoader>
  );
}

export default Skeleton;
