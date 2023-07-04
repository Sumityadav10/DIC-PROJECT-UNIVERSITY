import React, { useEffect, useState } from "react";
import Navbars from "./Components/Navbars";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import { apiUrl, filterData } from "./data";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify";
import "./Courses.css"

const Courses = () => {


const [courses,setCourses] = useState(null);
const [loading, setLoading] = useState(true);
const [category, setCategory] = useState(filterData[0].title);

async function fetchData () {

  setLoading(true);
try{

let response = await fetch(apiUrl);
let output = await response.json();

console.log(output)

setCourses(output.data);

}

catch(error) {

  toast.error("network error");
}

setLoading(false);


}

useEffect(() => {
  fetchData();
},[])





  return (
    <div className="courseContainer">
      <div>
      {/* <Navbars/> */}
      </div>
      <div className="container">
      <div>
        <Filter category={category} setCategory={setCategory} filterData={filterData} />
      </div>
      <div className="toggle">
        {
        loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />) 
      
      }
      </div>

      </div>

      
      
    </div>
  );
};

export default Courses;
