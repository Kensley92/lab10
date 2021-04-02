import logo from './logo.svg';
import './App.css';
import NameSearch from "./components/NameSearch";
import ReportingSearch from "./components/ReportingArea";
import ScoreSearch from "./components/ScoreSearch";

function App() {
  return (
    <div className="App">
      <NameSearch/>
      <ScoreSearch/>
      <ReportingArea/>
    </div>
  );
}

export default App;
