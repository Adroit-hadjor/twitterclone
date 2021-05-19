import React,{useState,useEffect} from 'react'


import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev, FaSearch} from 'react-icons/fa';
import {GrImage} from 'react-icons/gr';
import {BsThreeDots} from 'react-icons/bs'
import{AiOutlineSetting} from 'react-icons/ai'
import DATA from "../api/tweets";
import {Topics} from "../api/topics"
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
            <div className="trending_text">
                unemployment.trending
              </div>
              <div>
              Nana Aba
                </div>
             
              
            </div>
            <div className="tab_right">
              <BsThreeDots color="grey" size={20} style={{marginRight:"5px"}}/>
            </div>
            </div>
            <div className="tab">
            <div className="tab_lef" >
            <div className="trending_text">
                corruption.trending
              </div>
              <div>
              FIX GHANA NOW!!
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
            <div className="trending_text">
                movie.trending
              </div>
              <div>
              Thanos
                </div>
             
              <div className="number_of_tweets_text">
              20.8k tweets
              </div>
            </div>
            <div className="tab_right">
              <BsThreeDots color="grey" size={20} style={{marginRight:"5px"}}/>
            </div>
            </div>

            <div className="tab tab_1" style={{borderBottomLeftRadius:"20px !important"}}>
            <div className="tab_lef"  >
               
                <div style={{padding:"5px 0px",color:"rgb(29, 161, 242)"}}>
                Show me
                </div>
            </div>
            <div className="tab_right">
             
            </div>
            </div>
           
           
           </div>


        
           <div className="minitab_follow" > 
          <div className="topics_to_follow">
            <div className="topics">
            Who To follow
              </div>
              <div>
             
              </div>
            </div>
            <div className="tab">
            <div className="tab_left" >
              <div className="tab_left_avi">
              <img src={'https://pbs.twimg.com/profile_images/1258864613585813505/EkLbcHbk_400x400.jpg'} className="wh_avi" />
              
              </div>
              <div className="tab_left_name">
              <text>
                 Emmanuel
               </text>
               <text style={{color:"rgb(136, 153, 166)",}}>
                 @osei
               </text>
                </div>
             
             
            </div>
            <div className="tab_right">
            <text className="follow_text">
                Follow
                  </text>
            </div>
            </div>
          
           
            <div className="tab tab_1" style={{borderBottomLeftRadius:"20px !important"}}>
            <div className="tab_lef"  >
               
                <div style={{padding:"5px 0px",color:"rgb(29, 161, 242)"}}>
                Show me
                </div>
            </div>
            <div className="tab_right">
             
            </div>
            </div>
           </div>
      
         
      
      
           <div className="minitab_follow" > 
          <div className="topics_to_follow">
            <div className="topics">
            Topics To follow
              </div>
              <div>
             
              </div>
            </div>
           {
           Topics.map((topic)=>{
             return(
              <div className="tab">
              <div className="tab_lef" >
                <div>
                  {topic.title}
                </div>
                <div style={{fontSize:"95%",color:"rgb(136, 153, 166)"}}>
                {topic.type}
                  </div>
               
               
              </div>
              <div className="tab_right tab_right_follow">
               <div className="follow_x">
               <text className="follow_text">
                Follow
                  </text>
                  <text  className="cancel_follow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.414 8L15.207 2.207C15.597 1.817 15.597 1.184 15.207 0.792997C14.817 0.401997 14.184 0.402997 13.793 0.792997L8 6.586L2.207 0.792997C1.817 0.402997 1.184 0.402997 0.792997 0.792997C0.401997 1.183 0.402997 1.816 0.792997 2.207L6.586 8L0.792997 13.793C0.402997 14.183 0.402997 14.816 0.792997 15.207C0.987997 15.402 1.243 15.5 1.5 15.5C1.757 15.5 2.012 15.402 2.207 15.207L8 9.414L13.793 15.207C13.988 15.402 14.243 15.5 14.5 15.5C14.757 15.5 15.012 15.402 15.207 15.207C15.597 14.817 15.597 14.184 15.207 13.793L9.414 8Z" fill="rgb(136, 153, 166)"/>
                  </svg>
  
                  </text>
               </div>
               
              </div>
              </div>
             )
           })
          }

            
          
            <div className="tab tab_1" style={{borderBottomLeftRadius:"20px !important"}}>
            <div className="tab_lef"  >
               
                <div style={{padding:"5px 0px",color:"rgb(29, 161, 242)"}}>
                Show me
                </div>
            </div>
            <div className="tab_right">
             
            </div>
            </div>
           
           
           </div>



<div>

  &nbsp;
</div>


          
      
       </div>

 
  );
}

export default RightColumn;
