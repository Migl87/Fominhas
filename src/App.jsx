import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import AddExperience from "./pages/AddExperience.jsx";
import ExperienceList from "./pages/ExperienceList.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/adicionar" element={<AddExperience />} />
      <Route path="/experiencias" element={<ExperienceList />} />
    </Routes>
  );
}
