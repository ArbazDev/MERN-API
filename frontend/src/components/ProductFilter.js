import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
export default function ProductFilter(props) {
   var brands = [
        {
          
          "name": "Bonanza",
          
        },
        {
          
          "name": "Gul Ahmed",
     
        },
        {
          
          "name": "Sana Safinaz",
     
        },
        {
          
          "name": "Eden robe",
        },
        {
          
          "name": "Al-Karam",
        },
        {
          
          "name": "Lime Light",
        },
        {
         
          "name": "Maria B",
        },
        {
         
          "name": "Sapphire",
        },
        {
         
          "name": "Thredz",
        },
        {
         
          "name": "Warda",
        },
        {
         
          "name": "Nishat",
        },
    ]

    const [city, setCity] = React.useState('Lahore');

    const handleChange = (event) => {
      setCity(event.target.value);
    };

    const filterChanged = event => {
      props.onInputChange(event);
    }
    const handleFilterSubmit = event =>{
      props.handleFilterSubmit(event);
    }
    

    return (
        <div class="product-filter mt-5">
            <div class="carousel-header">
                <h5>Filters</h5>
                <hr/>
            </div>
            <form onSubmit={handleFilterSubmit}>
            <div class="d-flex align-items-center justify-content-center flex-direction-column">    
              <TextField id="outlined-basic" label="Keyword" variant="outlined" name="keyword" onChange={filterChanged} value={props.filter.keyword}/>
              {/* <a href="#" class="btn_1 hero-btn animateds">Search</a> */}
            </div>

            <div className="p-3">
              <h5 className="mb-2">Price</h5>
              <div class="d-flex align-items-center justify-content-space-between">  
               <TextField id="outlined-basic" label="MIN" variant="outlined"  type="number" name="price_min" onChange={filterChanged} value={props.filter.price_min}/>
               <TextField id="outlined-basic" label="MAX" variant="outlined"  type="number" name="price_max" onChange={filterChanged} value={props.filter.price_max}/>
              </div>  
            </div>



           
        
        <div className="p-3 mt-3">
          
            <h5 className="mb-2">Type</h5>
            <TextField
                id="standard-select-currency"
                select
                name="type"
                onChange={filterChanged} value={props.filter.type}
                className= "myselect"
            >
            
                <MenuItem key="Stitched" value="Stitched" className= "myItem">
                  Stitched
                </MenuItem>
                <MenuItem key="Unstirched" value="Unstitched" className= "myItem">
                Unstitched
              </MenuItem>
            
           </TextField>
        </div>

        <div className="p-3 mt-3">
            <h5 className="mb-2">Brands</h5>
            <TextField
                id="standard-select-currency"
                select
                // value={city}
                name="brand"
                onChange={filterChanged} value={props.filter.brand}
                className= "myselect"
            >
            {brands.map((option) => (
                <MenuItem key={option.name} value={option.name} className= "myItem">
                  {option.name}
                </MenuItem>
            ))}
           </TextField>
           <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
           <button type="submit" className="btn_1 hero-btn animateds">Search</button>
           </div>
           
        </div>
        </form>
        </div>
    )
}
