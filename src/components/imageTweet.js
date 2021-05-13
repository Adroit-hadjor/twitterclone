import React,{useState} from 'react';


export const ImageTweets =({num,images, ...props})=>{
    
    if(num == 1){
        return(
            <div className="tweet_images_container_1"> 
            <img className="tweet_images_1b tweet_images_1_1" src={images[0]} alt=""/>
            </div>
        )
    }
    else if(num==2){
        return(
            <div className="tweet_images_container_2"> 
            <img className="tweet_images_2b tweet_images_1_2" src={images[0]} alt=""/>
            <img className="tweet_images_2b tweet_images_2_2" src={images[1]} alt=""/>
          
            
            
          </div>
        )
    }
    else if(num == 3){
        return(
            <div className="tweet_images_container_3"> 
            <img className="tweet_images_3b tweet_images_1_3" src={images[0]} alt=""/>
            <img className="tweet_images_3b tweet_images_2_3" src={images[1]} alt=""/>
            <img className="tweet_images_3b tweet_images_3_3" src={images[2]} alt=""/>
            
            
          </div>
        )
    }
    else if(num == 4){
        return(
             <div className="tweet_images_container"> 
              <img className="tweet_images tweet_images_1" src={images[0]} alt=""/>
              <img className="tweet_images tweet_images_2" src={images[1]} alt=""/>
              <img className="tweet_images tweet_images_3" src={images[2]} alt=""/>
              <img className="tweet_images tweet_images_4" src={images[3]} alt=""/>
              
            </div>
        )
    }
   
}