import Card from "./Card";

function Tours({tours,removeTour}){
    return (
        <div className="container">
            <h2 className="title">Plan With Omkar</h2>
            <div className="cards">
                {
                    tours.map( (tour)=>{
                        return <Card {...tour} /*cloning the data*/ removeTour={removeTour}></Card>  //This will map all my card component in short syntax like you want 100 so make 100 card.

                    })
                }
            </div>
        </div>
    );
}

export default Tours;