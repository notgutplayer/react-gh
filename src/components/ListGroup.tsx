import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelecItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelecItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div id="list-group" style={{ backgroundColor: "#f8f9fa" }}>
      <h1 style={{ textAlign: "center" }}>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-active"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelecItem(item);
            }}
            style={{ textAlign: "center" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
