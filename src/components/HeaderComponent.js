import { Component } from '../core';

export class HeaderComponent extends Component {
  static className = 'header';

  constructor($el) {
    super($el, {
      name: 'HeaderComponent',
      listeners: ['click'],
    });
  }

  getHTML() {
    return `
      <div>HeaderComponent</div>
      <div class="action">
        <button>click</button>
      </div>
    `;
  }

  onClick(event) {
    console.log('click!', this.name, event);
  }
}
