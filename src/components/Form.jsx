import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="">
          <input data-testid="name-input" type="text" />
        </label>

        <label htmlFor="">
          <textarea data-testid="description-input" cols="30" rows="10" />
        </label>

        <label htmlFor="">
          <input data-testid="attr1-input" type="number" name="" id="" />
        </label>

        <label htmlFor="">
          <input data-testid="attr2-input" type="number" name="" id="" />
        </label>

        <label htmlFor="">
          <input data-testid="attr3-input" type="number" name="" id="" />
        </label>

        <label htmlFor="">
          <input data-testid="image-input" type="text" name="" id="" />
        </label>

        <select data-testid="rare-input" name="" id="">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="">
          <input data-testid="trunfo-input" type="checkbox" name="" id="" />
        </label>

        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
