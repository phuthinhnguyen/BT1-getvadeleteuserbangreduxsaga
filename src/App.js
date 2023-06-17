import logo from './logo.svg';
import './App.css';
import Click from "./components/Click";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";

function App() {
  return(
    <Provider store={store}>
      <Click/>
      <User/>
    </Provider>
  )
 
}

export default App;
