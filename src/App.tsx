import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayoutClient from "./layout/LayoutClient";
import Blog from "./pages/Blog";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
