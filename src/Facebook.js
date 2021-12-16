import React from "react";
import {FacebookShareButton, FacebookIcon} from "react-share";
       
export default function SocialMediaButtons(props) {
       return (
             <FacebookShareButton 
                url={"http://www.verbunden-concierge.herokuapp.com"}
                quote={"Verbunden - See the world a little more closely."}
                hashtag="#travelapp"
                className="socialMediaButton">
                 <FacebookIcon size={36} />
              </FacebookShareButton>
       );
}