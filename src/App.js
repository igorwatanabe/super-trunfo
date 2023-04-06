import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    // } = this.props;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
          // cardName={ cardName }
          // cardDescription={ cardDescription }
          // cardAttr1={ cardAttr1 }
          // cardAttr2={ cardAttr2 }
          // cardAttr3={ cardAttr3 }
          // cardImage={ cardImage }
          // cardRare={ cardRare }
          // cardTrunfo={ cardTrunfo }
        
      </div>
    );
  }
}

export default App;
