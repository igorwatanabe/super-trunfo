import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    newDeck: [],
    hasTrunfo: false,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validation);
  };

  onSaveButtonClick = () => {
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
      newDeck,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
    };

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: cardTrunfo,
      });
    }

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      newDeck: [...newDeck, newCard], // adiciona newDeck e newCard no ARRAY
    });
  };

  removeCard = (name, trunfo) => {
    const { newDeck, hasTrunfo } = this.state;
    const deckAtualizado = newDeck.filter(({ cardName }) => cardName !== name);
    const trunfoCard = trunfo ? !hasTrunfo : hasTrunfo;

    this.setState({
      newDeck: deckAtualizado,
      hasTrunfo: trunfoCard,
    });
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
      newDeck,
      hasTrunfo,
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;
    return (
      <>
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
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
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
        <label htmlFor="name-filter">
          Filtrar por nome:
          <input
            name="nameFilter"
            data-testid="name-filter"
            value={ nameFilter }
            onChange={ this.onInputChange }
            type="text"
            disabled={ trunfoFilter }
          />
        </label>
        <label htmlFor="rare-filter">
          Filtrar por raridade:
          <select
            name="rareFilter"
            data-testid="rare-filter"
            value={ rareFilter }
            onChange={ this.onInputChange }
            disabled={ trunfoFilter }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter">
          Filtro Super Trunfo
          <input
            name="trunfoFilter"
            data-testid="trunfo-filter"
            type="checkbox"
            checked={ trunfoFilter }
            onChange={ this.onInputChange }
          />
        </label>
        <div>
          { newDeck
            .filter((card) => card.cardName.includes(nameFilter))
            .filter((card) => {
              if (rareFilter === 'todas') return true;
              return card.cardRare === rareFilter;
            })
            .filter((card) => {
              if (trunfoFilter) return card.cardTrunfo === trunfoFilter;
              return true;
            })
            .map((card) => (
              <div key={ Math.random() }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(card.cardName, card.cardTrunfo) }
                >
                  Exluir
                </button>
              </div>
            ))}
        </div>
      </>
    );
  }
}
export default App;
