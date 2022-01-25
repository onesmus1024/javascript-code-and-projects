import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Appbar from './components/appbar';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Appbar></Appbar>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
        </Routes>
        <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
