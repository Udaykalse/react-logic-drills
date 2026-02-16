import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";

import Counter from "./components/Buttons/Counter";
import Filter from "./components/Filter/filter";
import Fetching from "./components/API/Fetching";
import Todo from "./assignment/Todo";
import LoginForm from "./components/Form/LoginForm";
import InputDisplay from "./components/Form/InputDisplay";
import NameList from "./components/map/NameList";
import DataTable from "./components/Table/Table";
import Demo9 from "./D2/Demo9";
import Demo8 from "./D2/Demo8";
import Demo10 from "./D2/Demo10";
import Demo2 from "./D2/Demo2";
import Demo1 from "./D2/Demo1";
import Demo4 from "./D2/Demo4";
import Demo3 from "./D2/Demo3";
import Demo5 from "./D2/Demo5";
import Demo6 from "./D2/Demo6";
import Demo7 from "./D2/Demo7";
import Test1 from "./D3/Test1";
import Test2 from "./D3/Test2";
import { useState } from "react";
import Test3 from "./D3/Test3";
import Pdemo1 from "./D4/Pdemo1";
import Pdemo2 from "./D4/Pdemo2";
import Pdemo3 from "./D4/Pdemo3";
import Pdemo4 from "./D4/Pdemo4";
import Pdemo5 from "./D4/Pdemo5";
import Pdemo6 from "./D4/Pdemo6";
import Pdemo7 from "./D4/Pdemo7";
import Pdemo8 from "./D4/Pdemo8";
import Pdemo9 from "./D4/Pdemo9";
import Pdemo10 from "./D4/Pdemo10";

export default function App() {
  const [open, setOpen] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        {/* https://react-logic-drills.vercel.app/todo */}
        <Route path="/" element={<Layout />}>
          {/* Default Route */}
          <Route index element={<Navigate to="/filter" />} />
          {/* Nested Routes */}
          <Route path="filter" element={<Filter />} />
          <Route path="counter" element={<Counter />} />
          <Route path="fetching" element={<Fetching />} />
          <Route path="todo" element={<Todo />} />
          <Route path="datatable" element={<DataTable />} />
          <Route path="namelist" element={<NameList />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="input" element={<InputDisplay />} />
          <Route path="demo9" element={<Demo9 />} />
          <Route path="demo8" element={<Demo8 />} />
          <Route path="demo10" element={<Demo10 />} />
          <Route path="demo2" element={<Demo2 />} />{" "}
          <Route path="demo1" element={<Demo1 />} />
          <Route path="demo4" element={<Demo4 />} />
          <Route path="demo3" element={<Demo3 />} />
          <Route path="demo5" element={<Demo5 />} />{" "}
          <Route path="demo6" element={<Demo6 />} />
          <Route path="demo7" element={<Demo7 />} />
          <Route path="test1" element={<Test1 />} />
          <Route
            path="test2"
            element={<Test2 open={open} onClose={() => setOpen(false)} />}
          />
          <Route path="test3" element={<Test3 />} />
          <Route path="p-demo1" element={<Pdemo1 />} />
          <Route path="p-demo2" element={<Pdemo2 />} />
          <Route path="p-demo3" element={<Pdemo3 />} />
          <Route path="p-demo4" element={<Pdemo4 />} />
          <Route path="p-demo5" element={<Pdemo5 />} />
          <Route path="p-demo6" element={<Pdemo6 />} />
          <Route path="p-demo7" element={<Pdemo7 />} />
          <Route path="p-demo8" element={<Pdemo8 />} />
          <Route path="p-demo9" element={<Pdemo9 />} />
          <Route path="p-demo10" element={<Pdemo10 />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
