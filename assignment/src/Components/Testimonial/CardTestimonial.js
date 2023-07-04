import React from "react";
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa";
import "./CardTestimonial.css"


const CardTestimonial = (props) => {
  
    let review = props.review;

  return (
    <div className="d-flex flex-column position-relative">


      <div className="image-box">
        <img className="image-box-image" src={review.image} />
        <div className="image-box-div"></div>
      </div>

      <div className='name-title'>

      <p className='name-title-name'>
         {review.name}
        </p>

      <p className='name-title-job'>
            {review.job}
        </p>
        
      </div>


      

      <div className='quote'>
        <FaQuoteLeft/>
      </div>

      <div className='review-text'>
        {review.text}
      </div>

      <div className='quote'>
        <FaQuoteRight/>
      </div>   

    </div>
  );
};


export default CardTestimonial;
