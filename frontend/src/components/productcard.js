import React, { useEffect, useState } from 'react'
import logo2 from './Images/pic2.jpg'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
export default function Productcard(props) {

    const [data, setData] = useState([]);
    const [PageNumber, setPageNumber] = useState(0);
    const ProductPerPage =props.NoOfElem;
    const PageVisited = PageNumber * ProductPerPage;
    const displayProducts = data.slice(PageVisited,PageVisited+ProductPerPage).map(row => {

        return (
 
            <div className="col-md-4 ">
            <div class="box-wrapper">
              <img src={row.images_path[0]} alt="rhcp" />
                    <div class="box-content">
                            <a class="buy"><span><i class="fa fa-cart-plus"></i></span></a>
                            <div class="title">{row.name}</div>
                            <div class="desc">{row.brand}</div>
                            <span class="price">{row.price}</span>
                            <div class="footer">
                    {/* <ul>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star-o"></li>
                    </ul> */}
                </div>
              </div>
              <div class="success"></div>
        </div>
        
        </div>
        )
    }) 

    const dataFron = data => {
        setData(data);
    }
    useEffect(async ()=>{
        dataFron(props.dataused);
        
      })
    
      const changePage = ({selected}) => {
          setPageNumber(selected)
      }
     
      var pageCount = Math.ceil(data.length / ProductPerPage)
      return (
          <React.Fragment>
              <div class="row mb-55">
              {displayProducts}
              </div>
              <ReactPaginate
               previousLabel={'<<'}
               nextLabel={'>>'}
               pageCount={pageCount}
               onPageChange={changePage}
               containerClassName={'paginationcontainer'}
               previousLinkClassName = {'previousPagination'}
               nextLinkClassName = {'nextPagination'}
               activeClassName={'actived'}
               disabledClassName={'disabledbtn'}
               breakLabel={'...'}
               breakClassName={'break-me'}
              />
              
          </React.Fragment>
      )
        
    
}
