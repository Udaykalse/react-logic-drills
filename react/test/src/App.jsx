import Counter from "./components/Buttons/Counter";
import Filter from "./components/Filter/filter";
import Fetching from "./components/API/Fetching";
import Todo from "./assignment/Todo";
import DataTable from "./components/Table/Table";
function App() {
  return (
    <>
      <Filter />
      <hr />
      <Counter />
      <hr />
      <Fetching />
      <hr />
      <Todo />
      <hr />
      <DataTable/>
    </>
  );
}

export default App;
