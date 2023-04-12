import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            id="name-input"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea
            id="description-input"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
          />
        </label>

        <label htmlFor="attr1-input">
          Atributo 1
          <input
            id="attr1-input"
            name="cardAttr1"
            data-testid="attr1-input"
            // min={ 0 }
            // max={ 90 }
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
          />
        </label>

        <label htmlFor="attr2-input">
          Atributo 2
          <input
            id="attr2-input"
            name="cardAttr2"
            data-testid="attr2-input"
            // min={ 0 }
            // max={ 90 }
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
          />
        </label>

        <label htmlFor="attr3-input">
          Atributo 3
          <input
            id="attr3-input"
            name="cardAttr3"
            data-testid="attr3-input"
            // min={ 0 }
            // max={ 90 }
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
          />
        </label>

        <label htmlFor="image-input">
          <input
            id="image-input"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
          />
        </label>

        <label htmlFor="rare-input">
          <select
            id="rare-input"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {
          hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="trunfo-input">
                Super Trunfo
                <input
                  id="trunfo-input"
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>)
        }

        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
