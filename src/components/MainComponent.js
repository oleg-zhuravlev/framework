import { Component } from '../core';

export class MainComponent extends Component {
  static className = 'main';

  constructor($el) {
    super($el, {
      name: 'MainComponent',
      listeners: ['input'],
    });
  }

  getHTML() {
    return `
      <div>MainComponent</div>
      <div class="action">
        <input placeholder="text..." />
      </div>
    `;
  }

  onInput(event) {
    console.log('input!', this.name, event);
  }
}
