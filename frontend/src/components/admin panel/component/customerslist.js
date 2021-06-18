import React from 'react';
import { List,Datagrid,TextField,Filter,SearchInput } from 'react-admin';

const CustomerFilter = (props) =>(<Filter{...props}>
    <SearchInput placeholder='Customer Email' source ='emails'
    resettable alwayson/>
</Filter>)

function Customerlist(props){
    return(
        <List {...props} filters={<CustomerFilter />}>
            <Datagrid>
                <TextField source = 'firstName'/>
                <TextField source = 'lastName'/>
                <TextField source = 'emails'/>
                <TextField source = 'password'/>

            </Datagrid>
        </List>
    );
}

export default Customerlist;