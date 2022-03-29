import './App.css';
import Header from './layout/header'
import Footer from './layout/footer'
import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Header />
            <Footer />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
