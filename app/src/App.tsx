import Login from "./components/Login";
import SessionStorageManager from './components/SessionStorageManager'

const App = () => {
  return (
    <div>
      {<SessionStorageManager/> /}
      <Login />
    </div>
  );
};

export default App;
