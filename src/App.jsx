import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="AppLayout" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
