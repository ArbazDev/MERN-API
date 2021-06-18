import React, {useState, useEffect} from 'react'
import Productcard from './productcard'

export default function ProductCarousel(props) {
    const [ddata, setdData] = useState([]);
    // if(props.dataused)
    // {
    //     console.log("Props are passed 1w")
    //     setdData(props.dataused);
    // }
    // else
    // {
    //     console.log("Props are not passed 1")
    // }
    const dataFrom = data => {
        setdData(data);
    }
    useEffect( ()=>{
        dataFrom(props.dataused);
        
      })
    return (
        <div className="product-carousel-wrapper mt-5">
            <div class="carousel-header">
                <h5>{props.name}</h5>
                <hr/>
            </div>
            
        <div class="product-carousel">
            
            <Productcard dataused = {ddata} NoOfElem={props.NoOfElem}/>
            
        </div>
        </div>
    )
}
