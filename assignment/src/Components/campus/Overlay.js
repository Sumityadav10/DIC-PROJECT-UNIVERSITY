import "./Overlay.css"



const Overlay = ({closeModal}) => {

    return (

        <div className="overlay" onClick={closeModal}></div>
    )
}


export default Overlay;
