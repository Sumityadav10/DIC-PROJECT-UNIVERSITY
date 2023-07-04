import Cardforplan from "./Cardforplan";




function Plannings({tours,removeTour})
{

    return(

    <div className="container mt-5">
        <div><h2 className="title" >Prepare For Placements</h2></div>

        <div className="cards">
            {
                tours.map( (tour) => {

                    return <Cardforplan key={tour.id} {...tour} removeTour={removeTour}></Cardforplan>
                })
            }
        </div>
    </div>



    )

}

export default Plannings;