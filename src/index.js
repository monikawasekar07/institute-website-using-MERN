
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar';
import GoToTop from './components/GoToTop';
import Footer from './components/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import SliderComponent from './components/Slider';


import Services from './components/Services';
import Fullstackdevelopment from './components/services/Fullstackdevelopment';
import Appdevelopment from './components/services/Appdevelopment';

import About from './components/About';
import Contact from './components/Contact';
import Bookseat from './components/Bookseat';


import Ourmission from './components/about/Ourmission';


import {BrowserRouter  as Router,Route, Routes} from 'react-router-dom';
import Pagenotfound from './components/Pagenotfound';


import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Downloadpdf from './components/Authentication/Downloadpdf';


import Datascience from './components/services/Datascience';
import Cloudcomputing from './components/services/Cloudcomputing';
import Devopsdeveloper from './components/services/Devopsdeveloper';
import Uiuxdesign from './components/services/Uiuxdesign';
import Dotnet from './components/services/Dotnet';
import Manualtesting from './components/services/Manualtesting';
import Bigdata from './components/services/Bigdata';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   
  <Router>
   <Navbar/>
      <Routes>
            <Route path='' element={<SliderComponent/>} />
            <Route path='Home' element={<SliderComponent/>} />
            <Route path='About' element={<About/>} >
            <Route path='Ourmission & Vision' element={<Ourmission/>} />
            </Route> 

            <Route path='Services' element={<Services/>}/> 
            <Route path='/services/full-stack-development' element={<Fullstackdevelopment/>}/>
            <Route path='/services/app-development' element={<Appdevelopment/>}/>
            <Route path='/services/data-science' element={<Datascience/>}/>
            <Route path='/services/cloud-computing' element={<Cloudcomputing/>}/>
            <Route path='/services/devops-developer' element={<Devopsdeveloper/>}/>
            <Route path='/services/uiux-design' element={<Uiuxdesign/>}/>
            <Route path='/services/dot-net' element={<Dotnet/>}/>
            <Route path='/services/manual-testing' element={<Manualtesting/>}/>
            <Route path='/services/big-data' element={<Bigdata/>}/>
          



            <Route path='Contact' element={<Contact/>} />
            <Route path='Bookseat' element={<Bookseat/>}/>

            <Route path='Register' element={<Register/>} /> 
            <Route path='Login' element={<Login/>} /> 

            <Route path='Downloadpdf' element={<Downloadpdf/>} />

            <Route path='*' element={<Pagenotfound/>} />  
                   
      </Routes>
      <GoToTop/>
      <Footer/>
   </Router>

  
   </div>

  
);






  



