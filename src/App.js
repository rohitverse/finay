import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import "./App.scss";
import Profile from "./Components/Pages/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper-layout-outside">
          <div className="wrapper-layout-inside">
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route index element={<Profile />}>
                  
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
