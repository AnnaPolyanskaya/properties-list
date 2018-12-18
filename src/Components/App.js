import React, { Component, Fragment } from 'react';
import './App.css';
import { Icon, Grid, Container } from 'semantic-ui-react';
import axios from 'axios';

import PropertiesList from './PropertiesList/PropertiesList';
import Header from './Header/Header';


class App extends Component {
  state = {
    data: [],
    isLoading: false,
    firstLayout: true,
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });

    axios.get('http://demo4452328.mockable.io/properties')
      .then(result => {
        this.setState({
          isLoading: false,
          data: result.data.data
        });
        console.log(this.state.data)
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }
  
  chooseLayout = (prop) =>{
      this.setState({firstLayout: prop});
      console.log(this.state.firstLayout);
  }

  render() {
    return (
      <Fragment>
         
         <Container>
          <Header
            chooseLayout = {this.chooseLayout}
          />
           <Grid columns={4} stackable doubling>
              <Grid.Row>
                    {this.state.isLoading ?  <Icon loading name='spinner' color='red'/> : ''}
                    <PropertiesList 
                      info = {this.state.data}
                      firstLayout = {this.state.firstLayout}
                    />
              </Grid.Row>
          </Grid>
         </Container>
        
       
      </Fragment>
      
    );
  }
}

export default App;
