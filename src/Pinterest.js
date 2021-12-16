import React from "react";
import {PinterestShareButton, PinterestIcon} from "react-share";
       
export default function SocialMediaButtons(props) {
       return (
             <PinterestShareButton 
                url={"http://www.verbunden-concierge.herokuapp.com"}
                quote={"Verbunden - See the world a little more closely."}
                hashtag="#travelapp"
                className="socialMediaButton">
                 <PinterestIcon size={36} />
              </PinterestShareButton>
       );
}