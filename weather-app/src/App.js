import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(props){
  super (props);
  this.state={
    city:"Chisinau",
    currentWeather:{ },
    forecast:[]
  }
  this.componentDidMount(){
    const REACT_APP_API_URL =''
    const weatherUrl=`${process.env.}`
  }
  this.render(){
    const {currentWeather,weather}=this.state;
    if(Object.keys(currentWeather).length&&Object.keys(forecast).length)
    {
      return( <Container maxWidth="sm">
          <Weather currentWeater={currentWeather} forecast={forecast}></Weather>
        </Container>)
    }
  };
}
}

export default App;