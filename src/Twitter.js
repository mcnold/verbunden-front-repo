import React from "react";
import {TwitterShareButton, TwitterIcon} from "react-share";
       
export default function SocialMediaButtons(props) {
       return (
             <TwitterShareButton 
                url={"http://www.verbunden.herokuapp.com"}
                quote={"Verbunden - See the world a little more closely."}
                hashtag="#travelapp"
                className="socialMediaButton">
                 <TwitterIcon size={36} />
              </TwitterShareButton>
       );
}