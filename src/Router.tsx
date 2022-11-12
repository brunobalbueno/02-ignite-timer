import { Routes, Route } from "react-router-dom";
import { Default } from "./layouts/DefaultLayout/Default";
import { History } from "./pages/History/History";
import { Home } from "./pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
