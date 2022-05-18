import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
 state = { lat: null, errMessage: ''}

  componentDidMount () {
   window.navigator.geolocation.getCurrentPosition(
   position => this.setState({lat: position.coords.latitude}),
   err => this.setState({ errMessage : err.message})
)}

  render() {
     if (this.state.errMessage && !this.state.lat){
        return <div>Error: {this.state.errMessage}</div>
     
     }
     if (!this.state.errMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
     }

 return  <Spinner message="Loading.."/>
   }
}
const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);



