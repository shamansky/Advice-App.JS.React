import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Advice from './components/Advice';


class App extends React.Component {
  state = {
    advice: []
  }
  getAdvice = async (e) => {
    e.preventDefault();

    const api_call = await fetch(`https://api.adviceslip.com/advice`);
    const data = await api_call.json();
    // console.log(data.slip.advice);
    this.setState({
      advice: data.slip.advice
    })
  }



render() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">

        <Title />
        <Form getAdvice={this.getAdvice}/>
        <Advice  advice={this.state.advice}/>

        </div>
      </div>
    </div>
  )
}
}

export default App;
