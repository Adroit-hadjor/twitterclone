import React,{useState,useEffect} from 'react'


import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev, FaSearch} from 'react-icons/fa';
import {GrImage} from 'react-icons/gr';
import {BsThreeDots} from 'react-icons/bs'
import{AiOutlineSetting} from 'react-icons/ai'
import DATA from "../api/tweets";
function RightColumn() {
  const [icon_color,seticon_color] = useState("grey")
  const [focus,setFocus] = useState(false)

  return (
   

 
  
       <div className="right_side"  >
        <div className="search_container"> 
       <FaSearch className="search_icon"  size={18}  color={icon_color}/>
        <input onBlur={()=>{seticon_color("grey")}}  onFocus={()=>{seticon_color("rgb(29, 161, 242)")}} type="text" className="search"   placeholder={"Search Twitter"}/>
         </div>
       
        <div className="minitab" > 
          <div className="topics_to_follow">
            <div className="topics">
            Trends for you
              </div>
              <div>
              <AiOutlineSetting color={"rgb(29, 161, 242)"} style={{marginRight:"10px"}}size={23}/>
              </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
            <div className="trending_text">
                ligue1.trending
              </div>
              <div>
              lille
                </div>
             
              <div className="number_of_tweets_text">
              20.8k tweets
              </div>
            </div>
            <div className="tab_right">
              <BsThreeDots color="grey" size={20} style={{marginRight:"5px"}}/>
            </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
              <div>
              Android
                </div>
             
              <div>
              tech brand
              </div>
            </div>
            <div className="tab_right">
              follow
            </div>
            </div>
           
           
           </div>


        
           <div className="minitab_follow" > 
          <div className="topics_to_follow">
            <div className="topics">
            Topics To follow
              </div>
              <div>
              <AiOutlineSetting color={"rgb(29, 161, 242)"} style={{marginRight:"10px"}}size={23}/>
              </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
              <div>
                ligue1.trending
              </div>
              <div>
              lille
                </div>
             
              <div>
              20.8k tweets
              </div>
            </div>
            <div className="tab_right">
              follow
            </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
              <div>
              Android
                </div>
             
              <div>
              tech brand
              </div>
            </div>
            <div className="tab_right">
              follow
            </div>
            </div>
           
           
           </div>
      
         
      
      
           <div className="minitab_follow" > 
          <div className="topics_to_follow">
            <div className="topics">
            Topics To follow
              </div>
              <div>
              <AiOutlineSetting color={"rgb(29, 161, 242)"} style={{marginRight:"10px"}}size={23}/>
              </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
              <div>
                ligue1.trending
              </div>
              <div>
              lille
                </div>
             
              <div>
              20.8k tweets
              </div>
            </div>
            <div className="tab_right">
              follow
            </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
              <div>
              Android
                </div>
             
              <div>
              tech brand
              </div>
            </div>
            <div className="tab_right">
              follow
            </div>
            </div>
           
           
           </div>




           <div className="minitab_follow" > 
          <div className="topics_to_follow">
            <div className="topics">
            Topics To follow
              </div>
              <div>
              <AiOutlineSetting color={"rgb(29, 161, 242)"} style={{marginRight:"10px"}}size={23}/>
              </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
              <div>
                ligue1.trending
              </div>
              <div>
              lille
                </div>
             
              <div>
              20.8k tweets
              </div>
            </div>
            <div className="tab_right">
              follow
            </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
              <div>
              Android
                </div>
             
              <div>
              tech brand
              </div>
            </div>
            <div className="tab_right">
              follow
            </div>
            </div>
           
           
           </div>
      
       </div>

 
  );
}

export default RightColumn;
