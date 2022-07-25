import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Channels from "./pages/channels";
import Home from "./components/home";
import Chat from "./components/chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/channels" element={<Channels />}>
          <Route path="@me" element={<Home />} />
          <Route path="@me/:id" element={<Chat />} />
        </Route>
        <Route path="*" element={<Navigate to="/channels/@me" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function Sample({ title }: { title : string}) {
  return (
    <h1>{title}</h1>
  )
}
export default App;
