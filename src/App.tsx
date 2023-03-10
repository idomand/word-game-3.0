import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AllWords from "./Components/AllWords";
import ScoreBoard from "./Components/ScoreBoard";
import GameContextComponent from "./lib/GameContextComponent";
import GameBoard from "./Components/GameBoard";

function App() {
  return (
    <GameContextComponent>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/allWords" element={<AllWords />} />
          <Route path="/score-board" element={<ScoreBoard />} />
          <Route path="/" element={<GameBoard />} />
        </Routes>
      </BrowserRouter>
    </GameContextComponent>
  );
}

export default App;
