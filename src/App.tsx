import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { Info } from "./components/Info";
function App() {
  let items = ["Warszawa", "Kraków", "Rybnik", "Katowice", "Wrocław"];
  const handleSelecItem = (item: string) => {};
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
