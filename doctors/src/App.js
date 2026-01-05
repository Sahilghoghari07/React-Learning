import { Route, Routes } from "react-router-dom";
import Doctors from "./containers/Doctors";
import DoctorDetails from "./containers/DoctorDetails";
import Login from "./containers/Login";
import Register from "./containers/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
      </Routes>
    </>
  );
}

export default App;