import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProtectedRoute from "./Routes/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Rental from "./Pages/Rental/Rental";
import ListCar from "./Pages/ListCar/ListCar";
import AddCar from "./Pages/AddCar/AddCar";
import Detail from "./Pages/Detail/Detail";
import Invoice from "./Pages/Invoice/Invoice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route element={<ProtectedRoute />}>
            <Route index element={<Rental />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="listcar" element={<ListCar />} />
            <Route path="add_car" element={<AddCar />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="invoice" element={<Invoice />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
