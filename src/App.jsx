import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Professional from "./components/Professional";
import Humanitarian from "./components/Humanitarian";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/humanitarian" element={<Humanitarian />} />
    </Routes>
  );
}

export default App;
