import {createElement} from '../utils.js';

const createNoCardsTemplate = () => {
  return `<p class="board__no-tasks">Click «ADD NEW TASK» in menu to create your first task</p>`;
};

class NoCards {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoCardsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export default NoCards;