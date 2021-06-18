import React from 'react';
import { List,
    Datagrid,
    TextField,
    Filter,
    SearchInput,
    DateField } from 'react-admin';

const RiderFilter = (props) =>(<Filter{...props}>
    <SearchInput placeholder='Customer Email' source ='emails'
    resettable alwayson/>
</Filter>)

function riderslist(props){
    return(
        <List {...props} filters={<RiderFilter />}>
            <Datagrid rowClick="edit">
                <TextField source = 'firstName'/>
                <TextField source = 'lastName'/>
                <TextField source = 'emails'/>
                <TextField source = 'password'/>
                <DateField source = 'riderdate'/>

            </Datagrid>
        </List>
    );
}

export default riderslist;