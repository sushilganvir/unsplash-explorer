import { Outlet } from "react-router-dom";
import "./App.css";
import Topnav from "./components/Topnav";
// import { useGetAllPhotosQuery } from "./services/query/photos";

function App() {
  // const { data: menu } = useGetAllPhotosQuery();
  // console.log(menu);

  return (
    <>
      <Topnav />
      <Outlet />
    </>
  );
}

export default App;
