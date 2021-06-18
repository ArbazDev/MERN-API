import React from 'react';
import { Admin,Resource } from 'react-admin';
import  lb4Provider  from 'react-admin-lb4';
import Customerlist from './component/customerslist';
import RiderEdit from './component/editrider';
import riderslist from './component/riderlist';



function Panel(){
    return(
        <Admin dataProvider ={lb4Provider('http://localhost:4000')}>
            <Resource name = 'Customers' list={Customerlist} />
            <Resource name = 'Riders' list = {riderslist} edit = {RiderEdit}/>
           
        </Admin>

    );

}

export default Panel;