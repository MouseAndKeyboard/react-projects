import React, {useState} from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(
    items
      .map((item) => item.category)
      .filter((value, index, self) => self.indexOf(value) === index)
  );

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filter={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
