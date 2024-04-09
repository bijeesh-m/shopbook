import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Homelayout from "./layout/Homelayout";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Homelayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
