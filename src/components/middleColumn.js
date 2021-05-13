import React,{useState,useEffect} from 'react'

import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev, FaSearch} from 'react-icons/fa';
import {GrImage} from 'react-icons/gr';
import {BsThreeDots} from 'react-icons/bs'
import{AiOutlineSetting} from 'react-icons/ai'
import DATA from "../api/tweets";
import {ImageTweets} from "./imageTweet"
function MiddleColumn() {
  const [icon_color,seticon_color] = useState("grey")
  const [focus,setFocus] = useState(false)

  return (
   
     
   
       <div className="columns middle">
        <div   className="header">
          Home
        </div>
        <div className="middle_body">
        <div className="whats_happening">
          <div className="half upper">
           <img src={'https://pbs.twimg.com/profile_images/1258864613585813505/EkLbcHbk_400x400.jpg'} className="wh_avi" />
           
           <div className="wh_text_input">
             <div>
             <div  onFocus={()=>setFocus(true)}  onBlur={()=>setFocus(false)} data-placeholder="What's happening ?" contentEditable className="whats_happening_text_area" name="" id="" />
               </div> 
             { 
             
              focus ?
              <div  className="can_reply_container">
              <svg width="23" height="21" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M22 2.75C11.3667 2.75 2.75 11.3667 2.75 22C2.75 32.6333 11.3667 41.25 22 41.25C32.6333 41.25 41.25 32.6333 41.25 22C41.25 11.3667 32.6333 2.75 22 2.75ZM16.5862 10.8167C14.9765 11.704 14.3495 11.869 13.8618 12.3897C13.3797 12.9103 12.6463 15.3175 12.3218 15.5283C11.9973 15.7392 9.6415 15.8107 9.6415 15.8107C9.6415 15.8107 13.5795 18.8797 14.872 19.1693C16.1663 19.459 19.327 18.7843 19.9503 18.909C20.5773 19.0373 23.8297 21.9707 24.211 22.7113C24.5923 23.452 24.5153 25.916 24.1413 26.2753C23.7673 26.6347 21.9725 28.2737 21.5875 28.8237C21.2025 29.3737 18.1152 36.3 17.7485 36.3037C17.3818 36.3037 16.6118 35.2697 16.4102 34.749C16.2085 34.2283 15.6273 27.3937 15.3285 26.9335C15.0297 26.4752 13.2642 25.4302 12.9892 25.0525C12.7142 24.673 11.9772 22.5097 12.023 22.088C12.067 21.6663 12.925 20.2418 12.7087 19.8623C12.4942 19.4828 8.6625 17.9685 7.92367 17.699C7.18483 17.4332 6.1215 17.0903 6.1215 17.0903C8.19317 10.395 14.399 5.50733 21.7415 5.39367C21.7415 5.39367 21.9707 5.36067 22.0825 5.65033C22.2842 6.17467 22.5518 7.62667 22.2512 8.11617C21.989 8.53783 18.1995 9.93117 16.5898 10.8185L16.5862 10.8167ZM37.0168 25.9233C36.6318 25.2212 34.7765 21.615 34.0963 21.0027C33.6747 20.6213 30.063 19.3307 29.4213 19.0043C28.776 18.6798 27.115 17.1765 27.0985 16.7805C27.0802 16.3845 29.1427 14.5732 29.2068 13.9865C29.3095 13.0882 25.7565 10.6223 25.729 10.2208C25.7015 9.8175 25.9985 9.01083 26.2973 8.73583C27.0362 8.07583 32.1457 8.80917 32.8167 9.39583C36.4833 12.617 38.6247 16.9602 38.6247 21.9963C38.6247 23.419 38.2947 25.5017 38.1077 25.993C37.961 26.378 37.2955 26.4183 37.0168 25.9197V25.9233Z" fill="rgb(29, 161, 242)"/>
             </svg>

           <text className="can_reply" >
           Everyone can reply
             </text>  
 </div>
              :

            <div className="d-none">

            </div>
  
  }
               <div className="icon_with_tweet">
            <div className="icon_group">
            <svg width="25" height="25" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.5 3.41667H8.5C6.02 3.41667 4 5.14208 4 7.26042V33.7396C4 35.8579 6.02 37.5833 8.5 37.5833H39.5C41.98 37.5833 44 35.8579 44 33.7396V7.26042C44 5.14208 41.98 3.41667 39.5 3.41667ZM8.5 5.97917H39.5C40.326 5.97917 41 6.55487 41 7.26042V23.7902L33.284 17.1995C33.004 16.9603 32.624 16.8237 32.224 16.8237H32.218C31.818 16.8237 31.432 16.9603 31.154 17.2063L22.52 24.6957L18.894 21.6104C18.614 21.3712 18.234 21.2346 17.834 21.2346C17.448 21.1833 17.044 21.3712 16.764 21.6224L7 30.1384V7.26042C7 6.55487 7.674 5.97917 8.5 5.97917ZM7.012 33.7908L17.848 24.3369L30.412 35.0208H8.5C7.696 35.0208 7.046 34.4708 7.012 33.7908ZM39.5 35.0208H34.66L24.646 26.5014L32.23 19.9243L41 27.4136V33.7396C41 34.4451 40.326 35.0208 39.5 35.0208Z" fill="rgb(29, 161, 242)"/>
            <path d="M17.736 16.8288C19.4393 16.8288 20.82 15.6494 20.82 14.1945C20.82 12.7397 19.4393 11.5603 17.736 11.5603C16.0328 11.5603 14.652 12.7397 14.652 14.1945C14.652 15.6494 16.0328 16.8288 17.736 16.8288Z" fill="rgb(29, 161, 242)"/>
            </svg>

              <svg width="25" height="25" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 23.1875V19.4333H29.2V33.5667H32.6V29.15H36.6V25.3958H32.6V23.1875H38V23.1875ZM23.4 19.4333H26.8V33.5667H23.4V19.4333ZM16.2 22.9667C17 22.9667 18 23.4083 18.6 24.0708L21 21.8625C19.8 20.3167 18 19.4333 16.2 19.4333C12.6 19.4333 9.8 22.525 9.8 26.5C9.8 30.475 12.6 33.5667 16.2 33.5667C18.2 33.5667 19.8 32.6833 21 31.1375V25.6167H15.4V28.2667H17.8V29.5917C17.4 29.8125 16.8 30.0333 16.2 30.0333C14.4 30.0333 13 28.4875 13 26.5C13 24.7333 14.4 22.9667 16.2 22.9667V22.9667Z" fill="rgb(29, 161, 242)"/>
              <path d="M41 4.46083H7C4.52 4.46083 2.5 6.68463 2.5 9.42296V43.6676C2.5 46.4015 4.52 48.6275 7 48.6275H41C43.48 48.6275 45.5 46.4015 45.5 43.6676V9.42296C45.5 6.68463 43.48 4.46083 41 4.46083V4.46083ZM42.5 43.6676C42.5 44.573 41.828 45.315 41 45.315H7C6.172 45.315 5.5 44.573 5.5 43.6676V9.42296C5.5 8.51313 6.172 7.77333 7 7.77333H41C41.828 7.77333 42.5 8.51313 42.5 9.42296V43.6676Z" fill="rgb(29, 161, 242)"/>
              </svg>
              <svg width="25" height="25" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.1292 18.32H39.35C39.3812 18.14 39.4083 17.956 39.4083 17.766V13.14C39.4083 11.18 37.7479 9.586 35.7042 9.586H7.29167V6.716C7.29167 5.888 6.59167 5.216 5.72917 5.216C4.86667 5.216 4.16667 5.888 4.16667 6.716V41.66C4.16667 42.49 4.86667 43.16 5.72917 43.16C6.59167 43.16 7.29167 42.49 7.29167 41.66V38.792H29.2833C31.325 38.792 32.9875 37.198 32.9875 35.238V30.612C32.9875 30.422 32.9583 30.238 32.9292 30.056H42.1312C44.1729 30.056 45.8354 28.46 45.8354 26.5V21.88C45.8354 19.914 44.175 18.32 42.1312 18.32H42.1292ZM35.7083 12.586C36.025 12.586 36.2854 12.834 36.2854 13.14V17.76C36.2854 18.068 36.025 18.32 35.7062 18.32H7.29167V12.58H35.7083V12.586ZM29.8604 30.614V35.238C29.8604 35.544 29.6 35.792 29.2812 35.792H7.29167V30.056H29.2833C29.6021 30.056 29.8604 30.308 29.8604 30.616V30.614ZM42.7083 26.5C42.7083 26.806 42.4479 27.054 42.1292 27.054H7.29167V21.32H42.1292C42.4479 21.32 42.7083 21.568 42.7083 21.874V26.5Z" fill="rgb(29, 161, 242)"/>
              </svg>
              <svg width="25" height="25" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 43.6042C12.903 43.6042 2.65625 34.362 2.65625 23C2.65625 11.638 12.903 2.39584 25.5 2.39584C38.097 2.39584 48.3438 11.638 48.3438 23C48.3438 34.362 38.097 43.6042 25.5 43.6042ZM25.5 5.27084C14.6625 5.27084 5.84375 13.225 5.84375 23C5.84375 32.775 14.6625 40.7292 25.5 40.7292C36.3375 40.7292 45.1562 32.775 45.1562 23C45.1562 13.225 36.3375 5.27084 25.5 5.27084Z" fill="rgb(29, 161, 242)"/>
              <path d="M25.5 32.8038C21.4795 32.8038 17.7799 30.9829 15.606 27.9278C15.13 27.2608 15.3446 26.3753 16.0863 25.944C16.8258 25.5109 17.8118 25.7064 18.2878 26.3772C19.8751 28.6044 22.5718 29.9326 25.5021 29.9326C28.4325 29.9326 31.1291 28.6044 32.7186 26.3791C33.1946 25.7083 34.1806 25.5166 34.9201 25.9479C35.6639 26.3772 35.8764 27.2665 35.4004 27.9335C33.2223 30.9887 29.5226 32.8114 25.5021 32.8114L25.5 32.8038Z" fill="rgb(29, 161, 242)"/>
              <path d="M31.3182 20.9607C33.0528 20.9607 34.459 19.6924 34.459 18.1278C34.459 16.5633 33.0528 15.295 31.3182 15.295C29.5837 15.295 28.1775 16.5633 28.1775 18.1278C28.1775 19.6924 29.5837 20.9607 31.3182 20.9607Z" fill="rgb(29, 161, 242)"/>
              <path d="M19.6818 20.9607C21.4163 20.9607 22.8225 19.6924 22.8225 18.1278C22.8225 16.5633 21.4163 15.295 19.6818 15.295C17.9472 15.295 16.541 16.5633 16.541 18.1278C16.541 19.6924 17.9472 20.9607 19.6818 20.9607Z" fill="rgb(29, 161, 242)"/>
              </svg>
              <svg width="25" height="25" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M-86.8542 37.5C-87.0833 37.2917 -87.0833 37.2917 -87.0833 37.0833C-86.8542 37.0833 -86.8542 37.2917 -86.8542 37.5ZM41.25 4.58335H38.2708V3.95835C38.2708 3.12502 37.5833 2.29169 36.4375 2.29169C35.5208 2.29169 34.6042 2.91669 34.6042 3.95835V4.58335H17.6458V3.95835C17.6458 3.12502 16.9583 2.29169 15.8125 2.29169C14.8958 2.29169 13.9792 2.91669 13.9792 3.95835V4.58335H11C7.79166 4.58335 5.27082 6.87502 5.27082 9.79169V37.0833C5.27082 40 7.79166 42.2917 11 42.2917H17.6458C18.5625 42.2917 19.4792 41.6667 19.4792 40.625C19.4792 39.7917 18.7917 38.9584 17.6458 38.9584H11C9.62499 38.9584 8.70832 37.9167 8.70832 36.875V16.4584C8.70832 15.8334 9.62499 15 11 15H41.25C42.625 15 43.5417 15.8334 43.5417 16.4584V20.2084C43.5417 21.0417 44.2292 21.875 45.375 21.875C46.2917 21.875 47.2083 21.25 47.2083 20.2084V9.79169C46.9792 6.87502 44.4583 4.58335 41.25 4.58335V4.58335ZM43.5417 12.2917C42.8542 12.0834 41.9375 11.875 41.25 11.875H11C10.0833 11.875 9.39582 12.0834 8.70832 12.2917V9.79169C8.70832 8.54169 9.85416 7.70835 11 7.70835H13.9792V8.75002C13.9792 9.58335 14.6667 10.4167 15.8125 10.4167C16.7292 10.4167 17.6458 9.79169 17.6458 8.75002V7.70835H34.8333V8.75002C34.8333 9.58335 35.5208 10.4167 36.6667 10.4167C37.5833 10.4167 38.5 9.79169 38.5 8.75002V7.70835H41.25C42.625 7.70835 43.5417 8.75002 43.5417 9.79169V12.2917Z" fill="rgb(29, 161, 242)"/>
              <path d="M35.5208 21.6667C27.7292 21.6667 21.3125 27.5 21.3125 34.5834C21.3125 41.6667 27.7292 47.5 35.5208 47.5C43.3125 47.5 49.7292 41.6667 49.7292 34.5834C49.7292 27.5 43.3125 21.6667 35.5208 21.6667V21.6667ZM35.5208 44.5834C29.5625 44.5834 24.75 40.2084 24.75 34.7917C24.75 29.375 29.5625 25 35.5208 25C41.4792 25 46.2917 29.375 46.2917 34.7917C46.2917 40 41.4792 44.5834 35.5208 44.5834Z" fill="rgb(29, 161, 242)"/>
              <path d="M43.3125 38.9584C43.0833 39.375 42.3958 39.7917 41.9375 39.7917C41.7083 39.7917 41.25 39.7917 41.0208 39.5834L33.9167 35.4167V29.1667C33.9167 28.3334 34.6042 27.5 35.75 27.5C36.6667 27.5 37.5833 28.125 37.5833 29.1667V33.75L43.0833 36.875C43.5417 37.2917 43.7708 38.125 43.3125 38.9584V38.9584Z" fill="rgb(29, 161, 242)"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="55" height="50" fill="rgb(29, 161, 242)"/>
              </clipPath>
              </defs>
              </svg>




            </div>
            <div className="wh_tweet">
             <text>
             Tweet
               </text>
            </div>
               </div> 
           </div>
          </div>
         
        </div>
       {/*  <div className="whats_happening">
          Tweets
        </div> */}
       
          {
            DATA.map((tweet)=>{
              return(
                <>

<div className="tweet_box">
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
                      12
                    </text>
                    

                      </div> 
                      <div className="iconandtext">
                      <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.65001C20.49 5.58201 18.807 3.90001 16.74 3.90001H10.89C10.476 3.90001 10.14 4.23601 10.14 4.65001C10.14 5.06401 10.476 5.40001 10.89 5.40001H16.74C17.98 5.40001 18.99 6.41001 18.99 7.65001V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67V15.67ZM13.11 18.95H7.26001C6.02001 18.95 5.01001 17.94 5.01001 16.7V6.46001L7.23001 8.68001C7.37801 8.82701 7.57001 8.90001 7.76201 8.90001C7.95401 8.90001 8.146 8.82701 8.292 8.68001C8.585 8.38701 8.585 7.91201 8.292 7.62001L4.79201 4.12001C4.49901 3.82601 4.02401 3.82601 3.73201 4.12001L0.232005 7.62001C-0.0619949 7.91201 -0.0619949 8.38701 0.232005 8.68001C0.526005 8.97301 0.999005 8.97301 1.29201 8.68001L3.51201 6.46001V16.7C3.51201 18.768 5.19501 20.45 7.26201 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95H13.11Z" fill="#CCCCCC"/>
                      </svg>
                      <text>
                      12
                    </text>
                      </div> 
                      <div className="iconandtext">
                      <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.638H11.986C9.40301 21.59 1.95001 14.856 1.95001 8.478C1.95001 5.414 4.47501 2.724 7.35301 2.724C9.64301 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35401 4.225C5.27401 4.225 3.45101 6.213 3.45101 8.48C3.45101 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88401 4.225 7.35501 4.225H7.35401Z" fill="#BBBBBB"/>
                      </svg>
                      <text>
                      12
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

export default MiddleColumn;