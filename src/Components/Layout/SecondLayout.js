import React, { Component } from 'react';
import './secondLayout.css';
import { Card, Icon, Image, Grid, Label } from 'semantic-ui-react';

export default class SecondLayout extends Component {
  render() {
    return (
      
        <Grid.Column>
            <Card id={this.props.id}>
                <div className='sec-lay'>
                    <Card.Meta>
                        <div className='date'>
                            <Label as='a' color='red' tag>
                                Price: {this.props.price}
                            </Label>
                        </div>
                    </Card.Meta>
                    {this.props.images.length > 1 
                        ? 
                        <div className='img-hold'>
                            {this.props.images.map((it, i ) =>  
                                <div className='item-img'>
                                   <Image key={i}  src={it}  fluid /> 
                                </div>
                            )}
                        </div>
                        : 
                        <div className='img-hold'>
                            <div className='item-img'>
                                <Image  src={this.props.images}/>
                            </div>
                        </div>
                    }
                
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
