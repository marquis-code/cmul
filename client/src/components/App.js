import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import  DetailsPage from './DetailsPage';
import NimasiteSignup from './NimasiteSignup';
import NimasiteSignin from './NimasiteSignin';
import SignUp from './SignUp';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import PartnerSignup from './PartnerSignup';
import Publish from './Publish';
import PublishForm from './PublishForm';
import NimsaDatabase from './NimsaDatabase';

const App = () => (
  <Router>
    <Navbar />
     <Routes>
       <Route exact path='/' element={<Home />} />  
       <Route exact path='/signin' element={<Login />} />
       <Route exact path='/signup' element={<SignUp />} />
       <Route exact path='/signup-option' element={<PartnerSignup />} />
       <Route exact path='/more-details' element={<DetailsPage />} />
       <Route exact path='/publish' element={<Publish />} />
       <Route exact path='/publish-edit' element={<PublishForm />} />
       <Route exact path='/nimasite_register' element={<NimasiteSignup />} />
       <Route exact path='/nimasite_login' element={<NimasiteSignin />} />
       <Route exact path='/nimsa-database' element={<NimsaDatabase />} />
       <Route path="*" element={<NotFound/>}/>
     </Routes>
  </Router>
);

export default App;