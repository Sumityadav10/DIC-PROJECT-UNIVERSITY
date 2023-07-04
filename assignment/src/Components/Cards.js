import React from "react";
import Card from "./Card";
import { useState } from "react";
import "./Cards.css"

const Cards = (props) => {
  const [likedCourses, setLikedCourses] = useState([]);

  let courses = props.courses;

  let category = props.category;

  function getCourses() {
    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });

      return allCourses;
    }

       else {
        return courses[category];
       }
  }

  return (
    <div className="allBox">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          course={course}
        />
      ))}
    </div>
  );
};

export default Cards;
