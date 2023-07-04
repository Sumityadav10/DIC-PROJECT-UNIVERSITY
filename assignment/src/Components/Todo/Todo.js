import React, { useState, useEffect } from "react";
import "./Todo.css" ;

export default function Todo() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setTasks(storedList);
        }
    },[])

const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };


  const handleDelete = (task)=>{
    const deleted = tasks.filter((t)=>t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted))
}

const handleClear=()=>{
    setTasks([]);
    localStorage.removeItem("localTasks");
}



  return (
    <div >

      <div className="head-task">

<h1 className="mt-3 to-do-header">Schedule Your Tasks</h1>

<div className="task-adder ">
      <div className="input-task">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your task..."
          className="form-control"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="">
        <button
          className="btn btn-primary material-icons"
          onClick={addTask}
        >
          add
        </button>
      </div>
</div>
      <div className="submissions">
       
        {!tasks.length
          ? "Woho!! You have no pending task"
          : tasks.length === 1
          ? " You have 1 pending task"
          : tasks.length > 1
          ? `You have ${tasks.length} pending task`
          : null}
      </div>



      </div>



      <div className="tasks">

      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <div className="task-container">
            <div className="task-input">
                <span className = "form-control bg-white btn mt-2"
                style={{textAlign: "left", fontWeight: "bold" , border: "2px solid #FFCE00"}}>
                    {task.title}
                </span>
            </div>

            <div className="col-1">
                <button
                className =" mt-2 btn btn-warning material-icons"
                onClick ={()=> handleDelete(task)}
                >delete</button>
            </div>

            </div>
        </React.Fragment>
      ))}

</div>

{!tasks.length ? null:(
          <div className="clear">
              <button className= "btn btn-dark  mt-4 mb-4" onClick={()=>handleClear()}>
                  Clear
              </button>
          </div>
      )}
      
    </div>
  )
}
