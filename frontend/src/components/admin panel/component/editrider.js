import React from 'react';
import { Edit, SimpleForm, TextInput, DateTimeInput,SelectInput } from 'react-admin';


const RiderEdit = () => {
    <Edit {...props}>
        <SimpleForm>
            <TextInput source='firstName' />
            <TextInput source='lastName' />
            <TextInput source='emails' />
            <TextInput source='password' />
            <DateTimeInput source='Ridersdate' />
            <SelectInput source = 'status' choices={[
                {id :'Processing', name : 'Processing' },
                {id : 'Delivering', name : 'Delivering' },
                {id : 'Delivered', name : 'Delivered'},
            ]} />   
        </SimpleForm>
    </Edit>
}

export default RiderEdit;