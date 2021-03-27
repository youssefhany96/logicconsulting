import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SocialFollow.css';

import {
    faFacebook,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
    return (
        <div class="social-container">
            <a href="https://www.facebook.com/learnbuildteach/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/learnbuildteach"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    )
}
export default SocialFollow;  