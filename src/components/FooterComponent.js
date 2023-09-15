import { Component } from '../core';

export class FooterComponent extends Component {
  static className = 'footer';

  constructor($el) {
    super($el, {
      name: 'FooterComponent',
      listeners: ['mouseover'],
    });
  }

  getHTML() {
    return `
      <div>FooterComponent</div>
      <div class="action">
        hover
      </div>
    `;
  }

  onMouseover(event) {
    console.log('mouseover!', this.name, event);
  }
}
