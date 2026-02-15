import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>React Practice</h2>

      <nav style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Link to="/filter">Filter</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/fetching">Fetching</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/datatable">DataTable</Link>
        <Link to="/namelist">NameList</Link>
        <Link to="/login">LoginForm</Link>
        <Link to="/input">InputDisplay</Link>
        <Link to="/demo1">Demo1</Link>
        <Link to="/demo2">Demo2</Link>
        <Link to="/demo3">Demo3</Link>
        <Link to="/demo4">Demo4</Link>
        <Link to="/demo5">Demo5</Link>
        <Link to="/demo6">Demo6</Link>
        <Link to="/demo7">Demo7</Link>
        <Link to="/demo8">Demo8</Link>
        <Link to="/demo9">Demo9</Link>
        <Link to="/demo10">Demo10</Link>
        <Link to="/test1">Debounced</Link>
        <Link to="/test2">Modal</Link>
        <Link to="/test3">Infinite Scroll</Link>

      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
