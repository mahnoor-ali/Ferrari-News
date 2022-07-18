import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/general"  element={<News key="general" category="general" country="us" pageSize={9} />}  />
          <Route path="/sports"  element={<News key="sports" category="sports" country="us" pageSize={9} />} />
          <Route path="/business"  element={<News key="business" category="business" country="us" pageSize={9} />} />
          <Route path="/entertainment"  element={<News key="entertainment" category="entertainment" country="us" pageSize={9} />} />
          <Route path="/health"  element={<News key="health" category="health" country="us" pageSize={9} />} />
          <Route path="/science"  element={<News key="science" category="science" country="us" pageSize={9} />} />
          <Route path="/technology"  element={<News key="technology" category="technology" country="us" pageSize={9} />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;