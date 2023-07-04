import React from "react";
import "./Filter.css"

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory=props.setCategory;

  function filterHandler(title) {

       setCategory(title)
  }

  return (

    <div>

      <h1 className="filter">TOP SUPPLEMENTARY COURSES</h1>
    <div className="filterHead">
      {filterData.map((data) => (
        <button id="buttonClass"
          className={`
          ${category ===data.title ?"class1" : "class2" }
          `}
          key={data.id} 

          onClick={()=>filterHandler(data.title)}

        >
          {data.title}
        </button>
      ))}
    </div>

    </div>
  );
};

export default Filter;
