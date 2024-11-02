import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
function App() {
  let items = ["Warszawa", "Kraków", "Rybnik", "Katowice", "Wrocław"];
  const handleSelecItem = (item: string) => {
    console.log(item);
  };
  useEffect(() => {
    document.title = "Strona główna";
  });
  return (
    <div>
      <NavBar heading="Mocna strona"></NavBar>
      <ListGroup
        items={items}
        heading="Miasta"
        onSelecItem={handleSelecItem}
      ></ListGroup>
    </div>
  );
}

export default App;
