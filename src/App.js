import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import "./App.scss";
import Profile from "./Pages/Profile/Profile";
import MyWell from "./Pages/Profile/MyWell/MyWell";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper-layout-outside">
          <div className="wrapper-layout-inside">
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />}>
                  <Route path="my-well" element={<MyWell />} />
                  <Route path="my-well" element={<MyWell />} />
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
