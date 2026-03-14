import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import PlaceholderPage from "./components/PlaceholderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
      { path: "get-quote", Component: GetQuote },
      { path: "*", element: <PlaceholderPage title="404 - Not Found" /> },
    ],
  },
]);
