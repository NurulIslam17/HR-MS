import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Fqa from './pages/Fqa';
import FaqDetails from './pages/FaqDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element={<Fqa/>} />
        <Route path='/faq/details/:id' element={<FaqDetails/>} />
      </Routes>
    </>
  );
}

export default App;
