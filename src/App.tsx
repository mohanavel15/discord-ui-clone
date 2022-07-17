import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Channels from "./pages/channels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/channels/:id" element={<Channels />} />
        <Route path="*" element={<Navigate to="/channels/@me" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
