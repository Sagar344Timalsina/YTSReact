import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DetailPage from "./Pages/DetailPage.jsx"
import HomePage from "./Pages/HomePage.jsx"
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import AllMovies from './Pages/AllMovies';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/allmovies' element={<AllMovies/>}></Route>
        <Route path='/details/:id' element={<DetailPage/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
