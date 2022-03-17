import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.components";
import Navigation from "./naviagation/navigation.component";
const Shop = () => {
  return <h1>i am the shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
