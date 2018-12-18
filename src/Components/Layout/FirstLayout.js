import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Label } from 'semantic-ui-react';
import './firstlayout.css';

export default class FirstLayout extends Component {
  render() {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Grid.Column>
            <Card id={this.props.id}>
                
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
                
                
            
                <Card.Content>
                    <Card.Header>{this.props.full_address}</Card.Header>
                    <Card.Meta>
                        <Label as='a' color='red'>
                            Price: {this.props.price}
                        </Label>  
                    </Card.Meta>
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
