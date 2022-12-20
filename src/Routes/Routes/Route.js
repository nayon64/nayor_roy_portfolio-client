import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Contacts from "../../Pages/Contacts/Contacts";
import Home from "../../Pages/Home/Home/Home";
import ProjectDetails from "../../Pages/ProjectDetails/ProjectDetails";
import Projects from "../../Pages/Projects/Projects";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/porjectDetails/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
    ],
  },
]);
export default route