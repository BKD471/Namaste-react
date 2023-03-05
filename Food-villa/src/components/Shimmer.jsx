import { SHIMMER_CARD_UNIT } from "../Constants";


const Shimmer=()=>{
  return (
    <div className="restaurant-list">
       {Array(SHIMMER_CARD_UNIT).fill("").map( (e,index)=>(
        <div  key={index} className="shimmer-card"></div>
       )
       )}
    </div>
  )
}

export default Shimmer;