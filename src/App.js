import "./App.css";
import DateTime from "./components/timer";
import RenderTodos from "./components/renderItems";
import HeaderTitle from "./components/HeaderTitle";
import WatchCount from "./components/watchCount";

function App() {
  return (
    <>
      <div className="header">
        <HeaderTitle />   
        <WatchCount />
        <RenderTodos />
        <DateTime />
        </div>
    </>
  );
}
export default App;