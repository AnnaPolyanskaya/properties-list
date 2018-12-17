import React, { Component } from 'react'
import PropertiesItem from '../PropertiesItem/PropertiesItem';


export default class PropertiesList extends Component {

  
    
  render() {
        
        console.log(this.props.info);
        if(this.props.info !== null || this.props.info !== undefined){
            var r = this.props.info.map(it => {
                return (
                    <PropertiesItem
                        key = {it.id}
                        id = {it.id}
                        full_address = {it.full_full_address}
                        price = {it.price}
                        description = {it.description}
                        images = {it.images}
                        area = {it.area}
                    />
                );
            });   
        }     
        
        return(
        <div>{r}</div>
        )  
        
    } 
}    
