import { DOMListeners } from './DOMListeners';

export class Component extends DOMListeners {
  constructor($el, options) {
    super($el, options.listeners);

    this.name = options.name;
  }

  getHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}
