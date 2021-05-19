import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev, FaSearch} from 'react-icons/fa';
import {GrImage} from 'react-icons/gr';
import {BsThreeDots} from 'react-icons/bs'
import{AiOutlineSetting} from 'react-icons/ai'
import DATA from "./api/tweets";
import LeftColumn from './components/leftColumn'
import RightColumn from './components/rightColumn'
import MiddleColumn from './components/middleColumn'
import QuotedReplies from './pages/QuotedReplies'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Main from './pages/Main'
import OpenedTweet from './pages/OpenedTweet';
function App() {
	const [ icon_color, seticon_color ] = useState('grey');
	const [ focus, setFocus ] = useState(false);

  return (
   
   <Router >
   
   <Switch>
           
         
            <Route
             exact 
             path={"/"}
           
             >
             {<Main />}
              </Route>
              
              <Route
          
             path={"/tweet" }
             component={<OpenedTweet />}
             >
             {<OpenedTweet />}
              </Route>

              <Route
          
          path={"/quotes" }
          component={<QuotedReplies />}
          >
          {<QuotedReplies />}
           </Route>

             
           </Switch>
     
           </Router>
 
  );
}

export default App;
