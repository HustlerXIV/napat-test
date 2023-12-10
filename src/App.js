import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import AthletesModule from "./modules/Home/AthletesModule";
import PlayersModule from "./modules/Home/PlayersModule";

function App() {
  return (
    <>
      <AthletesModule />
      <PlayersModule />
    </>
  );
}

export default App;
