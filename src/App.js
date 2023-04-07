import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: '',
    isSaveButtonDisabled: true,
  };

  validation = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxAttr = 90;
    const maxSumAttrs = 210;
    const attr1 = parseFloat(cardAttr1);
    const attr2 = parseFloat(cardAttr2);
    const attr3 = parseFloat(cardAttr3);
    const valName = cardName.length > 0;
    const valImage = cardImage.length > 0;
    const valDescription = cardDescription.length > 0;
    const valRare = cardRare !== '';
    const valAttr1 = attr1 <= maxAttr && attr1 >= 0;
    const valAttr2 = attr2 <= maxAttr && attr2 >= 0;
    const valAttr3 = attr3 <= maxAttr && attr3 >= 0;
    const valSumAttrs = attr1 + attr2 + attr3 <= maxSumAttrs;

    this.setState({
      isSaveButtonDisabled: !(
        valName
        && valImage
        && valDescription
        && valRare
        && valAttr1
        && valAttr2
        && valAttr3
        && valSumAttrs
      ),
    });
  };

  onInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    // console.log(value, name);

    this.setState({
      [name]: value,
    }, this.validation);
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <section>
        <h1>ADICIONE NOVA CARTA</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </section>
    );
  }
}

export default App;
