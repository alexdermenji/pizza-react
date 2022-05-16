import React from "react";
import { menuItems } from "../data/menu";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {menuItems.map((item, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            key={item.id}
            className={activeIndex === index ? "active" : " "}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
