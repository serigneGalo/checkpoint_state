import './App.css';
import React from 'react';
import imagePhoto from './imagePhoto.png';
import EffectChrono from './EffectChrono'

class App extends React.Component {

  state = {
    fullName: "",
    bio:"",
    imgSrc: "",
    profession:"",
    show: true
  };
  
  handleClick=()=>{(this.state.show===true)? 
  this.setState({ fullName:"name: GALO DIOKHANE",
                  bio:"bio: ETUDIANT EN MASTER",  
                  imgSrc: <img src={imagePhoto} className="App-logo" alt="imageInSrc" /> ,
                  profession:"profession: DEVELOPPEUR WEB",
                  show: false  
                }) 
  : 
  this.setState({ fullName:"",
                  bio:"",  
                  imgSrc: "",
                  profession:"",
                  show: true 
                }) 
  };

  render() {
    return (
      <>
        <h1>
          <button onClick={this.handleClick}>CLICK ME</button>
          <EffectChrono/>
          <p>{this.state.fullName}</p> 
          <p>{this.state.bio}</p> 
          <p>{this.state.imgSrc}</p> 
          <p>{this.state.profession}</p>
        </h1>
      </>
    );
  }
}

export default App;