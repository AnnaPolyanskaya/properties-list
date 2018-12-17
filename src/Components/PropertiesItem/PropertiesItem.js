import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';


export default class PropertiesItem extends Component {
  render() {
    return (
        <Grid.Column>
        <Card id={this.props.id}>
            {this.props.images.length > 1 ? this.props.images.map(it =>  <Image src={it}  fluid />) : <Image  src={this.props.images}/>}
        
            <Card.Content>
                <Card.Header>{this.props.full_address}</Card.Header>
            <Card.Meta>
                <span className='date'>Price: {this.props.price}</span>
            </Card.Meta>
            <Card.Description>{this.props.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='map' color='violet' />
                Area: {this.props.area}
            </a>
            </Card.Content>
        </Card>
        </Grid.Column>
    )
  }
}
