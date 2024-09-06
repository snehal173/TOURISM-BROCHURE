import Card from './Card';

function Tours({tours,removeTour}){
  return(
    <div>
        <div className="container">
            <h2 className="title">PLAN WITH LOVE</h2>
         </div>
        <div className="cards">
            {
                tours.map((tour)=>{
                    return<Card{...tour} key={tour.id} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>
  );
}

export default Tours;