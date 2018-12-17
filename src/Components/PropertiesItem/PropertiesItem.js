import React, { Component, Fragment } from 'react';
import FirstLayout from '../Layout/FirstLayout';
import SecondLayout from '../Layout/SecondLayout';



export default class PropertiesItem extends Component {
  render() {
    
    return (
        <Fragment>
            {this.props.firstLayout
                ? 
                <FirstLayout
                    key = {this.props.key}
                    id = {this.props.id}
                    full_address = {this.props.full_address}
                    price = {this.props.price}
                    description = {this.props.description}
                    images = {this.props.images}
                    area = {this.props.area}
                /> 
                : 
                <SecondLayout
                    key = {this.props.key}
                    id = {this.props.id}
                    full_address = {this.props.full_address}
                    price = {this.props.price}
                    description = {this.props.description}
                    images = {this.props.images}
                    area = {this.props.area}
                />
            }
        </Fragment>
    )
  }
}
