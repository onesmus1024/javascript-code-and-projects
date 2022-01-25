import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appbar from './components/appbar';
import Blog from './pages/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar></Appbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='blog' element={<Blog></Blog>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
