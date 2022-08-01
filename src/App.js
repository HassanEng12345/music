import logo from './logo.svg';
import './App.css';
import Songs from './componets/songs';
import Info from './componets/info';
import Jinfo from './componets/Jinfo';
import Jsong from './componets/jsong';

function App() {
  return (
    <div>
      <h1>90s&2000s</h1>
      <div id='eminem'>
        <Info />
        <Songs />
      </div>
      <div id='oasis-body'>
        <Jinfo />
        <Jsong />
      </div>
    </div>
  );
}

export default App;
