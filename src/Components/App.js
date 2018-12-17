import React, { Component } from 'react';
import './App.css';
import { Icon, Grid } from 'semantic-ui-react';
import axios from 'axios';
import PropertiesList from './PropertiesList/PropertiesList';


class App extends Component {
  state = {
    data: [],
    isLoading: false,
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
  

  render() {
    return (
      <Grid columns={3} divided>
            <Grid.Row>
               
                  {this.state.isLoading ?  <Icon loading name='spinner' color='red'/> : ''}
                  <PropertiesList 
                    info = {this.state.data}
                  />
              
            </Grid.Row>
        </Grid>
    );
  }
}

export default App;
