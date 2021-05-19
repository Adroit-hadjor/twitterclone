import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.scss';
import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev, FaSearch} from 'react-icons/fa';
import {GrImage} from 'react-icons/gr';
import {BsThreeDots} from 'react-icons/bs'
import{AiOutlineSetting} from 'react-icons/ai'
import DATA from "../api/tweets";
import LeftColumn from '../components/leftColumn'
import RightColumn from '../components/rightColumn'
import QuotedRepliesComponents from '../components/quotedRepliesComponents'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function OpenedQuotedReplies() {
	const [ icon_color, seticon_color ] = useState('grey');
	const [ focus, setFocus ] = useState(false);

  return (
   
      <Container className="whole" style={{backgroundColor:"#15202B",color:"white"}} fluid>
     <Row  className="columnContainer">
        <LeftColumn/>
        <Col xs="9" className="big_middle">
        <QuotedRepliesComponents />
        <RightColumn/>
        </Col>
       
     </Row>
     </Container>
 
  );
}

export default OpenedQuotedReplies;
