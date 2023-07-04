import React, { useState } from "react";
import MyModal from "./Showmodal";
import Overlay from "./Overlay";
import student from "./image/roomies.png"
import club from "./image/dancing.jpg"
import sports from "./image/sports.png"
import facilities from "./image/building.jpg"
import "./Modal.css"

const Modal = () => {

    const [ShowModal, setShowModal] = useState(false);

    

    const closeModal = () => setShowModal(false)
    const openModal = () => {

        
        
        setShowModal(true)
    
    }



return (

    <div >
 <div class="campusTour">
    
     {ShowModal && <Overlay closeModal={closeModal} />}
        <div class="heading-campus">
          <h1><i>Campus Tour</i></h1>
        </div>
        <div class="campussection">
          <div class="CTimage">
            <img class="tourimg" src={student} alt="" />
          </div>
          <div class="paragraph">
            <h1>Student Life</h1>
            <p>
              The Student Life Office drives the extra-curricular, student
              leadership and development programming of the University which
              range from creative and performative arts, leadership and training
              opportunities, experiential learning, volunteering opportunities,
              driving student-led programmes and much more. By championing,
              guiding and encouraging student organisations, clubs, initiatives
              and events, the Office promotes maximum student participation and
              involvement in campus life. Through our various programmes and
              activities, the Office strives to give our students the best of
              opportunities.The Student Life Office drives the extra-curricular,
              student leadership and development programming of the University
              which range from creative and performative arts, leadership and
              training opportunities, experiential learning, volunteering
              opportunities, driving student-led programmes and much more. By
              championing, guiding and encouraging student organisations, clubs,
              initiatives and events, the Office promotes maximum student
              participation and involvement in campus life. Through our various
              programmes and activities, the Office strives to give our students
              the best of opportunities.
            </p>
            <button className="button-tour" onClick={openModal} >Know more</button>
           
          </div>
        </div>
        <div class="campussection">
          <div class="paragraph">
            <h1>Clubs and Societies</h1>
            <p>
              The Student Life Office drives the extra-curricular, student
              leadership and development programming of the University which
              range from creative and performative arts, leadership and training
              opportunities, experiential learning, volunteering opportunities,
              driving student-led programmes and much more. By championing,
              guiding and encouraging student organisations, clubs, initiatives
              and events, the Office promotes maximum student participation and
              involvement in campus life. Through our various programmes and
              activities, the Office strives to give our students the best of
              opportunities.The Student Life Office drives the extra-curricular,
              student leadership and development programming of the University
              which range from creative and performative arts, leadership and
              training opportunities, experiential learning, volunteering
              opportunities, driving student-led programmes and much more. By
              championing, guiding and encouraging student organisations, clubs,
              initiatives and events, the Office promotes maximum student
              participation and involvement in campus life. Through our various
              programmes and activities, the Office strives to give our students
              the best of opportunities.
            </p>
            <button className="button-tour" onClick={openModal} >Know more</button>
           
          </div>
          <div class="CTimage">
            <img class="tourimg" src={club} alt="" />
          </div>
        </div>
        <div class="campussection">
          <div class="CTimage">
            <img class="tourimg" src={sports} alt="" />
          </div>
          <div class="paragraph">
            <h1>Sports</h1>
            <p>
              The Student Life Office drives the extra-curricular, student
              leadership and development programming of the University which
              range from creative and performative arts, leadership and training
              opportunities, experiential learning, volunteering opportunities,
              driving student-led programmes and much more. By championing,
              guiding and encouraging student organisations, clubs, initiatives
              and events, the Office promotes maximum student participation and
              involvement in campus life. Through our various programmes and
              activities, the Office strives to give our students the best of
              opportunities.The Student Life Office drives the extra-curricular,
              student leadership and development programming of the University
              which range from creative and performative arts, leadership and
              training opportunities, experiential learning, volunteering
              opportunities, driving student-led programmes and much more. By
              championing, guiding and encouraging student organisations, clubs,
              initiatives and events, the Office promotes maximum student
              participation and involvement in campus life. Through our various
              programmes and activities, the Office strives to give our students
              the best of opportunities.
            </p>
            <button className="button-tour" onClick={openModal} >Know more</button>
           
          </div>
        </div>
        <div class="campussection">
          <div class="paragraph">
            <h1>Facilities</h1>
            <p>
              The Student Life Office drives the extra-curricular, student
              leadership and development programming of the University which
              range from creative and performative arts, leadership and training
              opportunities, experiential learning, volunteering opportunities,
              driving student-led programmes and much more. By championing,
              guiding and encouraging student organisations, clubs, initiatives
              and events, the Office promotes maximum student participation and
              involvement in campus life. Through our various programmes and
              activities, the Office strives to give our students the best of
              opportunities.The Student Life Office drives the extra-curricular,
              student leadership and development programming of the University
              which range from creative and performative arts, leadership and
              training opportunities, experiential learning, volunteering
              opportunities, driving student-led programmes and much more. By
              championing, guiding and encouraging student organisations, clubs,
              initiatives and events, the Office promotes maximum student
              participation and involvement in campus life. Through our various
              programmes and activities, the Office strives to give our students
              the best of opportunities.
            </p>
            <button className="button-tour" onClick={openModal} >Know more</button>
           
          </div>
          <div class="CTimage">
            <img class="tourimg" src={facilities} alt="" />
          </div>
        </div>

        {ShowModal && <MyModal closeModal={closeModal}  /> }
           
      </div>
    </div>
)



}


export default Modal;