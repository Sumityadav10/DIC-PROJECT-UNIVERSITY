import React, { useState } from "react";
import CardTestimonial from "./CardTestimonial";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Testimonial.css";

const Testimonials = (props) => {

    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {

        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }

    }

    function rightShiftHandler(){

        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    function surpriseHandler(){

        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);

    }



    return(

        <div className='testimonial-box'>
            <CardTestimonial review ={reviews[index]}></CardTestimonial>


            <div className='arrow-box'>
        <button onClick={leftShiftHandler} className='arrows'>
           <FiChevronLeft />

        </button>

        <button onClick={rightShiftHandler} className='arrows '>
            <FiChevronRight/>
        </button>
      </div>

      <div className='surprise-box'>
        <button onClick={surpriseHandler} className='surprise-button'>
            Surprise Me
        </button>
      </div>

        </div>


    )




}

export default Testimonials;