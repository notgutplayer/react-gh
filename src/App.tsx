import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
function App() {
  let items = ["Warszawa", "Kraków", "Rybnik", "Katowice", "Wrocław"];
  const handleSelecItem = (item: string) => {
    if (item === "Katowice")
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };
  useEffect(() => {
    document.title = "Strona główna";
  });
  return (
    <div>
      <NavBar heading="Mocna strona"></NavBar>
      <ListGroup
        items={items}
        heading="Cities"
        onSelecItem={handleSelecItem}
      ></ListGroup>
    </div>
  );
}

export default App;
