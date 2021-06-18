import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel';
import ProductFilter from './ProductFilter';
import axios from 'axios';


export default function Main() {

  
  const [filter, setFilter] = useState({
      price_min: '',
      price_max: '',
      brand : '',
      type : '',
      keyword : ''

  })
  const [filterApplied, setfilterApplied] = useState(false);

  const [bonanza, setbonanza] = useState([]);
  const [alkaram, setalkaram] = useState([]);
  const [breeze, setbreeze] = useState([]);
  const [edenrobe, setedenrobe] = useState([]);
  const [gulahmed, setgulahmed] = useState([]);
  const [limelight, setlimelight] = useState([]);
  const [mariab, setmariab] = useState([]);
  const [nishat, setnishat] = useState([]);
  const [sanasafinaz, setsanasafinaz] = useState([]);
  const [sapphire, setsapphire] = useState([]);
  const [thredz, setthredz] = useState([]);
  const [warda, setwarda] = useState([]);

  

  const [alldata, setAllData] = useState([]); 
  const [bulkdata, setBulkData] = useState([]);

  // const delta = fetchData();

  var jsondata={};

  const filterChanged = event =>{
    const {name, value} = event.target;
     console.log(name, value)

    setFilter({
      ...filter,
      [name] : value
    })
    // setAllData(bulkdata);
  }
  const  setData = data =>{
    setAllData(data);
    setBulkData(data);
    // console.log(alldata);
  }

  //   Al Karam
// Breeze
// Bonanza Satrangi
// Eden Robe
// Gul Ahmed
// Lime Light
// Maria B
// Nishat
// Sana Safinaz
// Sapphire
// Thredz
// Warda
  const extractData = data => {
    const bonanzaarray = [];
    const alkaramarray = [];
    const breezearray = [];
    const edenrobearray = [];
    const gulahmedarray = [];
    const limelightarray = [];
    const mariabarray = [];
    const nishatarray = [];
    const sanasafinazarray = [];
    const sapphirearray = [];
    const thredzarray = [];
    const wardaarray = [];

    data.map((row)=>{
      if(row.brand.search("Bonanza") != -1 )
      {
        
      bonanzaarray.push(row);
      }
      else if(row.brand.search("Al-Karam") != -1 )
      {
        // console.log("Al-karam")
      alkaramarray.push(row);
      }
      else if(row.brand.search("Breeze") != -1 )
      {
        // console.log("breeze")
      breezearray.push(row);
      }
      else if(row.brand.search("Eden") != -1 )
      {
        
        edenrobearray.push(row);
      }
      else if(row.brand.search("Gul Ahmed") != -1 )
      {
        gulahmedarray.push(row);
      }
      else if(row.brand.search("Lime Light") != -1 )
      {
        limelightarray.push(row);
      }
      else if(row.brand.search("Maria B") != -1 )
      {
        mariabarray.push(row);
      }
      else if(row.brand.search("Nishat") != -1 )
      {
        // console.log(row.brand)
        nishatarray.push(row);
      }
      else if(row.brand.search("Sana Safinaz") != -1 )
      {
        sanasafinazarray.push(row);
      }
      else if(row.brand.search("Sapphire") != -1 )
      {
        sapphirearray.push(row);
      }
      else if(row.brand.search("Thredz") != -1 )
      {
        thredzarray.push(row);
      } 
      else if(row.brand.search("Warda") != -1 )
      {
        wardaarray.push(row);
      }
      
      })
       
      setbonanza(bonanzaarray);
      setalkaram(alkaramarray);
      setbreeze(breezearray);
      setedenrobe(edenrobearray);
      setgulahmed(gulahmedarray);
      setlimelight(limelightarray);
      setmariab(mariabarray);
      setnishat(nishatarray);
      setsanasafinaz(sanasafinazarray);
      setsapphire(sapphirearray);
      setthredz(thredzarray);
      setwarda(wardaarray);

      // setbonanza({
      //   ...bonanza,
      //   row
      // })
      // console.log(array);
  }
  useEffect( async   ()=>{
    await axios.get("http://localhost:9000/products/all")
   .then(async (response)=>{
      console.log(response.data)
      setData(response.data);
     // console.log(response.data);
    //  setData(json);
     extractData(response.data);
    
   }).catch((error)=>{
     console.log(error);
   })
 },[])

 const filterSubmit = event => {
   event.preventDefault();
   setfilterApplied(true);
  //  setAllData(bulkdata);

  // console.log(bulkdata);
  
  console.log(alldata);
   var filteredData = bulkdata;
   var thisisdata = [];
   console.log(filteredData)



   if(filter.price_min!= '')
   {
     thisisdata = filteredData.filter((row)=> {
      var orgprice = row.price.match(/\d+(?:\.\d+)?/g)
      var test = parseInt(orgprice[0]+orgprice[1]);
      
       return (
         
         
         test > filter.price_min
         
        
         )
        }
        
         )
         filteredData = thisisdata;
   }
   if(filter.price_max!='')
   {
    thisisdata = filteredData.filter((row)=> {
      var orgprice = row.price.match(/\d+(?:\.\d+)?/g)
      var test = parseInt(orgprice[0]+orgprice[1]);
      
       return (
         
         
         test < filter.price_max
         
        
         )
        }
        
         )
         filteredData = thisisdata;
   }
   if(filter.brand != '')
   {
    thisisdata = filteredData.filter((row)=> {
      // 
      // console.log(filter   .brand.toLowerCase());
       return (
         
         row.brand.toLowerCase().includes(filter.brand.toLowerCase())
         
         
        
         )
        }
         )
         filteredData = thisisdata;
   }
   if(filter.type != '')
   {
     console.log(filteredData);
    thisisdata = filteredData.filter((row)=> {
      
      // 
       return (
         
         row.category == filter.type.toLowerCase()
         
         
        
         )
        }
         )
         console.log(thisisdata);
         filteredData = thisisdata;
        
         
   }
   if(filter.keyword != '')
   {
     console.log(filteredData);
    thisisdata = filteredData.filter((row)=> {
      
      // 
       return (
         
        row.description.toLowerCase().includes(filter.keyword.toLowerCase())
         
         
        
         )
        }
         )
         console.log(thisisdata);
         filteredData = thisisdata;
        
         
   }
  //  console.log(filteredData);
   setAllData(filteredData);
    
 }
  
  


  

  

 
    return (
        <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-md-3">
           <ProductFilter handleFilterSubmit={filterSubmit} onInputChange={filterChanged} filter = {filter}/>
          </div>
          
        


          <div class="col-md-9">
            
          {filterApplied ?  <ProductCarousel dataused={alldata} name={"All brands"} NoOfElem={18}/> :
                            <React.Fragment>
                            <ProductCarousel dataused={nishat} name={"Nishat"} NoOfElem={6}/> 
                            <ProductCarousel dataused={alkaram} name={"Alkaram"} NoOfElem={6}/> 
                            </React.Fragment>
}
          {/* <ProductCarousel dataused={alkaram} name={"BigCarousel"} NoOfElem={18}/> */}
          {/* <ProductCarousel dataused={nishat} name={"Nishat"}/> 
          <ProductCarousel dataused={nishat} name={"Nishat"}/>
          <ProductCarousel dataused={nishat} name={"Nishat"}/>
          <ProductCarousel dataused={nishat} name={"Nishat"}/>
          <ProductCarousel dataused={nishat} name={"Nishat"}/>
          <ProductCarousel dataused={nishat} name={"Nishat"}/>
          <ProductCarousel dataused={nishat} name={"Nishat"}/> */}
          
          {/* <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/>
          <ProductCarousel dataused={alldata} name={"J."}/> */}
          {/* <ProductCarousel/>
          <ProductCarousel/> */}
          </div> :
          

        </div>
      </div>
  
    )
        
}

