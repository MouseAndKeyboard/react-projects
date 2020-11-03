import React from "react";

const Menu = ({items}) => {
  const menuItems = items.map((item) => (
    <div key={item.id} className="menu-item">
      <img className="photo" alt={item.title} src={item.img} />
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <h4 className="price">{item.price}</h4>
        </header>

        <p className="item-text">{item.desc}</p>
      </div>
    </div>
  ));

  return <div className="section-center">{menuItems}</div>;
};

export default Menu;
