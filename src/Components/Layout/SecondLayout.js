import React, { Component } from 'react';
import './secondLayout.css';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

export default class SecondLayout extends Component {
  render() {
    return (
      
        <Grid.Column>
            <Card id={this.props.id}>
                <div className='sec-lay'>
                    <Card.Meta>
                        <span className='date'>Price: {this.props.price}</span>
                    </Card.Meta>
                    <div className='img-group'>
                        {this.props.images.length > 1 ? this.props.images.map(it =>  <div className='img-gr-img'><Image src={it} /></div>) : <Image  src={this.props.images}/>}
                    </div>
                </div>
                <Card.Content>
                    <Card.Header>{this.props.full_address}</Card.Header>
                    <Card.Description>{this.props.description}</Card.Description>
                </Card.Content>
                
                {this.props.area 
                ? 
                    <Card.Content extra>
                        <a>
                            <Icon name='map' color='violet' />
                            Area: {this.props.area}
                        </a>
                    </Card.Content>
                :
                    ''
                }
               
            </Card>
        </Grid.Column>
     
    )
  }
}
