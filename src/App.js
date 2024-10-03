import {AllRoutes} from "./routes/AllRoutes"
import './App.css';
import {Header,Footer} from "./components"


function App() {
  return (
    <div className="App dark:bg-violet-950">
      <Header/>
     <AllRoutes/>
     <Footer/>  
    </div>
  );
}

export default App;
