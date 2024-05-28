import ReactDOM from "react-dom";
import "./style/App.scss";
import Navbar from "./components/Navbar";
import Background from "./effects/Background";
import ToggleTheme from "./effects/ToggleTheme";
import MouseParticles from "react-mouse-particles";
import Index from "./pages/Index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MouseParticles
      g={0}
      num={1}
      radius={2}
      life={5}
      v={0}
      color="var(--primary-color)"
      alpha={2}
      level={0}
    />
      <Background />
      <header>
        <Navbar />
        <ToggleTheme />
      </header>
      <main>
       <Index />
      </main>
  </>
);
