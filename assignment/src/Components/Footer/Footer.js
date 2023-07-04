
import "./Footer.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF , faTwitter , faYoutube, faTelegram,faInstagram} from "@fortawesome/free-brands-svg-icons"


const Socialmedia = () => {

  return (

    <div>


<div class="icons">
        <div class="connect"><h1>Connect Us At:</h1></div>

        <div class="icon-container">
            <a href="https://www.facebook.com/AshokaUniversity" class="icon" id="facebook">
            <FontAwesomeIcon className="i" icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/AshokaUniv" class="icon" id="twitter">
            <FontAwesomeIcon className="i"  icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/ashokauniv/" class="icon" id="instagram">
            <FontAwesomeIcon className="i"  icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/user/AshokaUniversity" class="icon" id="whatsapp">
            <FontAwesomeIcon className="i"  icon={faYoutube} />
            </a>
            <a href="#" class="icon" id="telegram">
            <FontAwesomeIcon className="i"  icon={faTelegram} />
            </a>
            
            

            
          </div>
    
     </div>

    </div>
  )
};


export default Socialmedia;
