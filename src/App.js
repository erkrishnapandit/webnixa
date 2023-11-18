import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import {Home, Blog, Services, Project, About, Contact} from "./pages";
import {Navbar, Footer} from "./components";

function App() {
  const Layout = ()=>{
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {path:'/', element:<Layout/>,children:[
      {path:'/', element:<Home/>},
      {path:'/services', element:<Services/>},
      {path:'/blog', element:<Blog/>},
      {path:'/project', element:<Project/>},
      {path:'/about', element:<About/>},
      {path:'/contact', element:<Contact/>},
    ]}
  ])
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
