import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Bannar from './Components/Bannar.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './RootLayout.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Blog from './Pages/Blog.jsx'
import Testimonials from './Pages/Testimonials.jsx'
import Awards from './Pages/Awards.jsx'
import Home from './Pages/Home.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "awwards", Component: Awards },
      { path: "testimonial", Component: Testimonials },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
