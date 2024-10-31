import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Warszawa", "Kraków", "Rybnik", "Katowice", "Wrocław"];
  const handleSelecItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelecItem={handleSelecItem}
      ></ListGroup>
    </div>
  );
}

export default App;
