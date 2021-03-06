import React from 'react';
import styled from 'styled-components';
import './ContactUs.css'

const ContactUs = () => {
  return(
    <div>
      <div className="container">
        <img src={'data:image/jpeg;base64,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'}
          alt="Snow" style={{width: '100%'}} />
        <h1 className="centered">Contact Us</h1>
      </div>
      <div id="tm-row-605f363585230" className="vc_row vc_row-outer vc_row-fluid">
        <div id="tm-column-605f3635855b1" className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper"></div>
              <div className="tm-grid-wrapper tm-grid-group  style-rounded-separator-02" id="tm-grid-605f363585830" data-item-wrap="1">
                <div className="tm-grid modern-grid has-animation move-up">
                  <div className="grid-item">
                    <div className="tm-box-icon  style-22 tm-animation move-up" id="tm-box-icon-605f363587386">
                      <div className="content-wrap">
                        <div className="image">
                          <noscript><img src="https:/cdn.shortpixel.ai/client/q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/logic-address.png " alt="" />
                          </noscript>
                          <img className=" lazyloaded" src="https:/cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/logic-address.png"
                          data-src="https:/cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/logic-address.png" alt="" />
                        </div>

                        <div className="content">
                          <div className="box-header">
                            <h4 className="heading">
                              <a className="link-secret" href="https:/goo.gl/maps/vKXqC1fi1DygGxoA7" rel="noreferrer" target="_blank">
                                Location
                              </a>
                            </h4>
                          </div>
                          <div className="text">
                            CAPITAL Business Park, Building 7,<br /> 202-Sheikh Zayed City,<br />Giza, Egypt 
                          </div>		
                          <a className="tm-button style-text tm-box-icon__btn" href="https:/goo.gl/maps/vKXqC1fi1DygGxoA7" rel="noreferrer" target="_blank">
                            <span className="button-text">Map</span>
                            <span className="button-icon ion-arrow-right-c"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div className="tm-box-icon  style-22 tm-animation move-up" id="tm-box-icon-605f363587386">
                      <div className="content-wrap">
                        <div className="image">
                          <noscript><img src="https:/cdn.shortpixel.ai/client/q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/email-logic.png" alt="" />
                          </noscript>
                          <img className=" lazyloaded" src="https:/cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/email-logic.png"
                          data-src="https:/cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/email-logic.png" alt="" />
                        </div>


                        <div className="content">
                          <div className="box-header">
                            <h4 className="heading"> 
                              Email  
                            </h4>
                          </div>
                  
                          <div className="text">Send Your Request By Email.<br />
                            info@logic-consulting.com 
                          </div>		
                    
                          <a className="tm-button style-text tm-box-icon__btn" href="mailto:info@logic-consulting.com">
                            <span className="button-text">Send Your Request By Email</span>
                            <span className="button-icon ion-arrow-right-c"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div className="tm-box-icon  style-22 tm-animation move-up" id="tm-box-icon-605f363587386">
                      <div className="content-wrap">
                        <div className="image">
                          <noscript><img src="https:/cdn.shortpixel.ai/client/q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/logic-phone.png" alt="" />
                          </noscript>
                          <img className=" lazyloaded" src="https:/cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/logic-phone.png"
                          data-src="https:/cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img/https:/logic-consulting.com/wp-content/uploads/2020/09/logic-phone.png" alt="" />
                        </div>

                        <div className="content">
                          <div className="box-header">
                            <h4 className="heading">
                              <a className="link-secret" href="tel:+201273505023" rel="noreferrer" target="_blank">
                                Call Us Now
                              </a> 
                            </h4>
                          </div>

                          <div className="text">Phone: +2 02 3865 3522 <br />Mobile: +2 012 7350 5023 <br /> Fax: +2 02 38653521 
                          </div>

                          <a className="tm-button style-text tm-box-icon__btn" href="tel:+201273505023">
                            <span className="button-text">Call Us Now</span>
                            <span className="button-icon ion-arrow-right-c"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
    </div>
  )
}
export default ContactUs;