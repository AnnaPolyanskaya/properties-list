import React, { Component, Fragment } from 'react'

import FirstLayout from '../Layout/FirstLayout';
import SecondLayout from '../Layout/SecondLayout';


export default class PropertiesList extends Component {

  
    
  render() {
        if(this.props.info !== null || this.props.info !== undefined){
            var firstLayout = this.props.info.map(it => {
                return (
                    <FirstLayout
                        key = {it.id}
                        id = {it.id}
                        full_address = {it.full_address}
                        price = {it.price}
                        description = {it.description}
                        images = {it.images}
                        area = {it.area}
                    />
                );
            }); 
            var secondLayout = this.props.info.map(it => {
                return (
                    <SecondLayout
                        key = {it.id}
                        id = {it.id}
                        full_address = {it.full_address}
                        price = {it.price}
                        description = {it.description}
                        images = {it.images}
                        area = {it.area}
                    />
                );
            });

        } 
        return(
            <Fragment>
                {this.props.firstLayout ? firstLayout : secondLayout}
            </Fragment>
        )  
        
    } 
}    
