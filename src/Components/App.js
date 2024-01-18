import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./packingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handlAddItems(item) {
    // data add hora is func se
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // data delete hora is func se
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    // data earase hora or line arri us per
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    if (items.length === 0) return;
    const confirm = window.confirm("Are you sure you want to delte all items?");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handlAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
