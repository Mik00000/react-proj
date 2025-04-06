import "./App.css";
import Test from "./components/Test";

import Contents from "./sections/Contents";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hook from "./components/Hook";
import Form from "./components/Form";
import Timer from "./components/Timer";
import Planer from "./components/Planer";
import { BrowserRouter } from "react-router-dom";

const siteName = "Redmonkey";

const siteMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

const phone = "+380 99 999 99 99";
const email = "example@example.com";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header name={siteName} menu={siteMenu} />

      {/* <Contents/> */}
      {/* <Test/> */}
      {/* <Hook /> */}
      {/* <Form/> */}
      {/* <Timer/> */}
      <Planer/>
      <Footer name={siteName} menu={siteMenu} phone={phone} email={email} />
    </div>
  );
}

export default App;
