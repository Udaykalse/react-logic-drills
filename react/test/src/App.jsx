import Counter from "./components/Buttons/Counter";
import Filter from "./components/Filter/filter";
import Fetching from "./components/API/Fetching";
import Todo from "./assignment/Todo";
import LoginForm from "./components/Form/LoginForm";
import InputDisplay from "./components/Form/InputDisplay";
import NameList from "./components/map/NameList";
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
      <DataTable />
      <hr />
      <NameList/>
      <hr />
      <LoginForm/>
      <hr />
      <InputDisplay/>
    </>
  );
}

export default App;
