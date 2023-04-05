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
      isSaveButtonDisabled,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label>
          <input
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
          />
        </label>

        <label>
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
          />
        </label>

        <label>
          Atributo 1
          <input
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
          />
        </label>

        <label>
          <input
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
          />
        </label>

        <label>
          <input
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
          />
        </label>

        <label>
          <input
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
          />
        </label>

        <label>
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label>
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.string.isRequired,
};

export default Form;
