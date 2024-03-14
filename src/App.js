import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper-layout-outside">
          <div className="wrapper-layout-inside">
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />}>
                <Route path="id" />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
