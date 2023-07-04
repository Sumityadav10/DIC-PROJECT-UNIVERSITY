import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
import "./Card.css"


const Card = (props) => {

    let course = props.course;
    let likedCourses= props.likedCourses;
    let setLikedCourses=props.setLikedCourses;


    function clickHandler() {

        if(likedCourses.includes(course.id))
        {
            setLikedCourses((prev)=> prev.filter ((cid)=>(cid !== course.id)));
            toast.warning("like removed");
        }

        else {

            if(likedCourses.length===0)
            {setLikedCourses([course.id])}

            else{
                setLikedCourses((prev)=> [...prev, course.id])
            }

            toast.success("Liked Succesfully");
        }


    }


return (


    <div className="box">
          
          <div className="small">
            <img className="image" src={course.image.url} alt="" />

            <div className="items">
            <button className="btn-icon" onClick={clickHandler}>
                
            {
                    
                    !likedCourses.includes(course.id) ? (<FcLikePlaceholder  className="icon-class"/>) : (<FcLike className="icon-class"/>)
                }
            </button>
          </div>

          </div>

         

          <div className="writing">
            <p className="heading">{course.title}</p>
            <p className="text">
                
                {course.description.length >100 ?
                (course.description.substr(0,100)+"...") :(course.description)} </p>
          </div>

    </div>
)





}

export default Card