import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Life from "./views/Life";
import CoinFlip from "./views/CoinFlip";
import Counters from "./views/Counters";
import Layout from "./views/Layout";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Life />} />
          <Route path="coinflip" element={<CoinFlip />} />
          <Route path="counters" element={<Counters />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
