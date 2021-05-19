import React,{useState,useEffect} from 'react'

import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev, FaSearch} from 'react-icons/fa';
import {GrImage} from 'react-icons/gr';
import {useHistory} from 'react-router-dom';
import {BsThreeDots} from 'react-icons/bs'
import{AiOutlineSetting} from 'react-icons/ai'
import Quoted from "../api/quotedReplies";
import Images from "../api/image_quotes"
import {ImageTweets} from "./imageTweet"
import { render } from '@testing-library/react';
function QuotedRepliesComponents() {
  const [icon_color,seticon_color] = useState("grey")
  const [icon_color_1,seticon_color_1] = useState("white")
  const [icon_color_3,seticon_color_3] = useState("white")
  const [icon_color_4,seticon_color_4] = useState("white")
  const [focus,setFocus] = useState(false)
  const [cat,setCat]= useState("top");
  const [dat,setDat]=useState([])
  const history = useHistory();
  const [count,setCount]= useState(0);
  const [tweett,setTweet] = useState({})
  const [user,setUser]=useState({})
  const [images,setImages]= useState([])

  useEffect(()=>{
   
    const d = localStorage.getItem("tweet")
    const tweeet = JSON.parse(d)
    if(d){
     
    setTweet(tweeet)
    setUser(tweeet.user)
    setImages(tweeet.images)

    if(cat=="photos"){
      setDat(Images)
    }
    else if(cat=="videos"){
      setDat([])
    }
    else{
      setDat(Quoted)
    }

    }
    else{
      history.push("/")
    }
   
   },[cat])



 



  return (
   
     
   
       <div className="columns middle">
       
        <div className="middle_body quo">
        <div className="mobile_home_bar">Quote Tweets</div>
        <div className="mobile_bottom_nav">
          
          <div style={{height:"auto"}}>
              <svg width="25" height="25" id="home" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M67.74 22.05L37.425 5.691C36.534 5.211 35.463 5.211 34.575 5.691L4.27501 22.05C2.81701 22.842 2.27401 24.66 3.06001 26.118C3.60001 27.123 4.63501 27.693 5.70001 27.693C6.18001 27.693 6.67201 27.579 7.12501 27.333L9.32701 26.145L14.097 59.895C14.745 63.537 18.027 66.081 22.077 66.081H49.923C53.973 66.081 57.255 63.537 57.909 59.817L62.673 26.142L64.884 27.336C66.339 28.125 68.16 27.582 68.946 26.124C69.735 24.666 69.186 22.845 67.734 22.059L67.74 22.05ZM36 46.305C30.615 46.305 26.25 41.94 26.25 36.555C26.25 31.17 30.615 26.805 36 26.805C41.385 26.805 45.75 31.17 45.75 36.555C45.75 41.94 41.385 46.305 36 46.305Z"  stroke={icon_color_1} stroke-width="5"/>
              </svg>
        </div>

        <div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.53 18.47L15.87 14.81C17.195 13.24 18 11.214 18 9C18 4.03 13.97 0 9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C11.215 18 13.24 17.196 14.808 15.87L18.468 19.53C18.615 19.676 18.808 19.75 18.998 19.75C19.188 19.75 19.383 19.677 19.528 19.53C19.823 19.237 19.823 18.763 19.53 18.47ZM1.5 9C1.5 4.865 4.865 1.5 9 1.5C13.135 1.5 16.5 4.865 16.5 9C16.5 13.135 13.135 16.5 9 16.5C4.865 16.5 1.5 13.135 1.5 9Z" fill="#FFFEFE"/>
        </svg>

        </div>

        <div style={{height:"auto"}}>
          <svg width="21" height="25" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.091 44.404C60.031 44.356 53.671 39.484 53.782 26.314C53.842 18.718 51.346 11.968 46.741 7.30898C42.616 3.12998 37.03 0.819978 31.015 0.789978H30.976C24.964 0.819978 19.378 3.12998 15.25 7.31198C10.648 11.971 8.14602 18.718 8.21202 26.314C8.32302 39.304 2.15202 44.215 1.90602 44.404C1.12602 44.983 0.808016 45.994 1.11102 46.918C1.41702 47.842 2.28102 48.463 3.24702 48.463H18.007C18.313 55.393 23.998 60.943 30.997 60.943C37.996 60.943 43.675 55.393 43.978 48.463H58.744C59.71 48.463 60.574 47.845 60.874 46.921C61.183 46 60.865 44.986 60.085 44.407L60.091 44.404ZM31 56.434C26.485 56.434 22.81 52.903 22.516 48.46H39.484C39.184 52.9 35.515 56.44 31 56.44V56.434ZM8.14002 43.96C10.36 40.564 12.784 34.876 12.712 26.272C12.658 19.792 14.644 14.326 18.451 10.471C21.73 7.14998 26.191 5.31098 31 5.28998C35.809 5.31398 40.261 7.14998 43.54 10.474C47.35 14.329 49.339 19.792 49.285 26.275C49.213 34.879 51.64 40.57 53.86 43.963H8.14002V43.96Z" fill={icon_color_3}/>
          </svg>

          </div>

          <div style={{height:"auto"}}>
          <svg width="21" height="25" viewBox="0 0 63 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.1562 0.431244H8.84375C4.10313 0.431244 0.25 4.28749 0.25 9.03124V48.0781C0.25 52.8219 4.10313 56.6812 8.84375 56.6812H54.1562C58.8969 56.6812 62.75 52.8219 62.75 48.0781V9.03124C62.75 4.28749 58.8969 0.431244 54.1562 0.431244ZM8.84375 5.11874H54.1562C56.3125 5.11874 58.0625 6.86874 58.0625 9.02499V11.2562L32.9062 28.0281C32.0531 28.5906 30.95 28.5969 30.0938 28.0219L4.9375 11.2562V9.02499C4.9375 6.86874 6.6875 5.11874 8.84375 5.11874V5.11874ZM54.1562 51.9875H8.84375C6.6875 51.9875 4.9375 50.2375 4.9375 48.0812V16.75L27.5625 31.8437C28.7594 32.6437 30.1313 33.0437 31.5 33.0437C32.875 33.0437 34.2406 32.6437 35.4375 31.8469L58.0625 16.7531V48.0719C58.0625 50.2281 56.3125 51.9781 54.1562 51.9781V51.9875Z" fill={icon_color_4}/>
          </svg>

          </div>

          </div>
          <div   className="header quote">
          Quote Tweets
        </div>
        <div className="filter">
          <div onClick={()=>setCat("top")} className={ cat=="top"?"filter_item_active":"filter_item"}>
            Top
          </div>
          <div onClick={()=>setCat("latest")} className={cat=="latest"?"filter_item_active":"filter_item"}>
            Latest
          </div>
          <div onClick={()=>setCat("photos")} className={cat=="photos"?"filter_item_active":"filter_item"}>
            Photos
          </div>
          <div onClick={()=>setCat("videos")} className={cat=="videos"?"filter_item_active":"filter_item"}>
            Videos
          </div>
        </div>
          

          <div>

          </div>
      
   
        </div>

        <div>
        
        { 
            dat.map((tweet)=>{
              

             
              return(
                <>

<div  className="tweet_box">
{ tweet.retweeted_by ? 
                <div className="tweet_lower">
                  <div className="left_space retweet">
                  <svg width="15" height="20" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.0856 32.2437C54.9694 31.2646 53.1644 31.2646 52.0553 32.2437L48.906 35.0062V15.4167C48.906 10.8792 44.6975 7.1875 39.5248 7.1875H27.1748C25.6001 7.1875 24.3248 8.30833 24.3248 9.6875C24.3248 11.0667 25.6001 12.1875 27.1748 12.1875H39.5248C41.553 12.1875 43.206 13.6354 43.206 15.4167V35.0062L40.0568 32.2437C38.9405 31.2646 37.1355 31.2646 36.0264 32.2437C34.9173 33.2229 34.9101 34.8062 36.0264 35.7792L44.0396 42.8104C44.5954 43.2958 45.3269 43.5396 46.0584 43.5396C46.7899 43.5396 47.5143 43.2979 48.0724 42.8104L56.088 35.7771C57.1971 34.7979 57.1971 33.2146 56.0833 32.2417L56.0856 32.2437ZM29.8348 38.5417H17.4848C15.4565 38.5417 13.8035 37.0938 13.8035 35.3125V15.7229L16.9528 18.4854C17.5085 18.975 18.24 19.2188 18.9668 19.2188C19.6935 19.2188 20.425 18.975 20.9855 18.4854C22.097 17.5063 22.097 15.9229 20.9855 14.95L12.9675 7.91667C11.8513 6.94167 10.0463 6.94167 8.93713 7.91667L0.921508 14.9521C-0.194742 15.9313 -0.194742 17.5146 0.921508 18.4875C2.03776 19.4604 3.84276 19.4667 4.95188 18.4875L8.09876 15.7229V35.3125C8.09876 39.85 12.3096 43.5417 17.48 43.5417H29.83C31.407 43.5417 32.68 42.4208 32.68 41.0417C32.68 39.6625 31.4094 38.5417 29.8348 38.5417Z" fill="#BBBBBB"/>
                    </svg>
                  </div>
                 <div className="right_text who_retweeted">
                     kwame retweeted
                  </div>
              
                </div>

:
<></>  
}


                <div className="tweet_upper">
             
                  
                  <div className="upper_left upper_left_avi">
                  <img src={'https://pbs.twimg.com/profile_images/1258864613585813505/EkLbcHbk_400x400.jpg'} className="tweet_avi" alt=""/>
                  </div>
                  <div className="t_right">
                  <div className="upper_right">
                   
                   <div className="namespace">
                   <div className="namespace_name">
                 {tweet.user.name}
               </div>
               <div className="namespace_username">
                 @{tweet.user.username} &#183; 21h
               </div>
                   </div>
               <div className="btn3"> 
             
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#BBBBBB"/>
                 <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#BBBBBB"/>
                 <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#BBBBBB"/>
               </svg>

               </div>

             
                
               
 
              </div>
              <div className="tweet_text">
                  {tweet.text}
                  </div>
                 
                  {
                    tweet.images.length > 0 ?
                  
                    <div className="tweet_text">

                
                        
                        <ImageTweets  images={tweet.images} num={tweet.images.length} />
                  
                   
                  

                    </div>
                   

                    :

                     <>
                     </>
                  }
                
                 
               

                  </div>
                  
                
               
                </div>


                <div className="main_tweet">
                <div className="opened_tweet_quote">
    <div className="opened_tweet_top_row">
     <div className="opened_tweet_avi_and_username_quote">
       <div>
              <img src={'https://pbs.twimg.com/profile_images/1258864613585813505/EkLbcHbk_400x400.jpg'} className="tweet_avi_quote" alt=""/>
      </div>
     <div className="profile_name_1">
     <div className="namespace_quote">
                   <div className="namespace_name">
                 {user.name}
               </div>
               <div className="namespace_username">
                 @{user.username} &#183; 21h
               </div>
              </div>
          </div>
     
     </div>
     <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#BBBBBB"/>
                 <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#BBBBBB"/>
                 <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#BBBBBB"/>
               </svg>
     </div>
    </div>
    <div className="opened_tweet_text_quote">
      {tweett.text}
    </div>
   
    {
                    images.length > 0 ?
                    <div className="opened_tweet_images">
                    <ImageTweets  images={images} num={images.length} />
                    </div>
                    : <></>}
 
    
    
    
    
    
    
    
    
   
  
  </div>

                 
                </div>





          


                <div className="tweet_lower symbols">
                  <div className="left_space">

                  </div>
                  <div className="right_text reply_group">
                    <div className="iconandtext">
                    <svg
                     width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.046 2.24199L9.898 2.23199H9.896C5.522 2.23199 2.096 5.65899 2.096 10.034C2.096 14.132 5.282 17.24 9.561 17.404V21.232C9.561 21.34 9.605 21.518 9.681 21.635C9.823 21.86 10.065 21.982 10.313 21.982C10.451 21.982 10.59 21.944 10.715 21.864C10.979 21.696 17.188 17.724 18.803 16.358C20.705 14.748 21.843 12.388 21.846 10.046V10.029C21.84 5.66199 18.416 2.24199 14.046 2.24099V2.24199ZM17.833 15.214C16.699 16.174 12.971 18.619 11.061 19.857V16.67C11.061 16.256 10.726 15.92 10.311 15.92H9.915C6.255 15.92 3.597 13.444 3.597 10.034C3.597 6.49999 6.365 3.73199 9.897 3.73199L14.044 3.74199H14.046C17.578 3.74199 20.346 6.50799 20.348 10.038C20.345 11.948 19.406 13.882 17.834 15.214H17.833Z" fill="#BBBBBB"/>
                    </svg>
                    <text>
                      {tweet.replies_count}
                    </text>
                    

                      </div> 
                      <div className="iconandtext">
                      <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.65001C20.49 5.58201 18.807 3.90001 16.74 3.90001H10.89C10.476 3.90001 10.14 4.23601 10.14 4.65001C10.14 5.06401 10.476 5.40001 10.89 5.40001H16.74C17.98 5.40001 18.99 6.41001 18.99 7.65001V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67V15.67ZM13.11 18.95H7.26001C6.02001 18.95 5.01001 17.94 5.01001 16.7V6.46001L7.23001 8.68001C7.37801 8.82701 7.57001 8.90001 7.76201 8.90001C7.95401 8.90001 8.146 8.82701 8.292 8.68001C8.585 8.38701 8.585 7.91201 8.292 7.62001L4.79201 4.12001C4.49901 3.82601 4.02401 3.82601 3.73201 4.12001L0.232005 7.62001C-0.0619949 7.91201 -0.0619949 8.38701 0.232005 8.68001C0.526005 8.97301 0.999005 8.97301 1.29201 8.68001L3.51201 6.46001V16.7C3.51201 18.768 5.19501 20.45 7.26201 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95H13.11Z" fill="#CCCCCC"/>
                      </svg>
                      <text>
                      {tweet.retweets}
                    </text>
                      </div> 
                      <div className="iconandtext">
                      <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.638H11.986C9.40301 21.59 1.95001 14.856 1.95001 8.478C1.95001 5.414 4.47501 2.724 7.35301 2.724C9.64301 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35401 4.225C5.27401 4.225 3.45101 6.213 3.45101 8.48C3.45101 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88401 4.225 7.35501 4.225H7.35401Z" fill="#BBBBBB"/>
                      </svg>
                      <text>
                      {tweet.likes}
                    </text>

                      </div> 
                      <div className="iconandtext">
                      <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.53 7.46999L12.53 2.46999C12.237 2.17699 11.762 2.17699 11.47 2.46999L6.47 7.46999C6.176 7.76299 6.176 8.23799 6.47 8.52999C6.764 8.82199 7.237 8.82399 7.53 8.52999L11.25 4.80999V15C11.25 15.414 11.586 15.75 12 15.75C12.414 15.75 12.75 15.414 12.75 15V4.80999L16.47 8.52999C16.616 8.67699 16.808 8.74999 17 8.74999C17.192 8.74999 17.384 8.67799 17.53 8.52999C17.823 8.23699 17.823 7.76299 17.53 7.46999V7.46999Z" fill="#BBBBBB"/>
                      <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14C2 13.586 2.336 13.25 2.75 13.25C3.164 13.25 3.5 13.586 3.5 14V19.652C3.5 20.089 3.855 20.444 4.292 20.444H19.708C20.145 20.444 20.5 20.089 20.5 19.652V14C20.5 13.586 20.836 13.25 21.25 13.25C21.664 13.25 22 13.586 22 14V19.652C22 20.916 20.972 21.944 19.708 21.944V21.944Z" fill="#BBBBBB"/>
                      </svg>
                    

                      </div>

                  </div>
                </div>


</div>
               
             </>
              )
            })
          }

        </div>


        </div>
       
    
  
    
 
  );
}

export default QuotedRepliesComponents;
