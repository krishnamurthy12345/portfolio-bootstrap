import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Bg } from './components/bg';



function App() {
  return (
  <>
    <Home/>
    <About />
    <Skills/>
    <Certificates/>
    <Contact/>
    <Bg/>
    
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Certificates' element={<Certificates/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    <Bg/> */}

    </>
  );
}

export default App;
