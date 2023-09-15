import { capitalize } from '../utils';

const getListenerMethodName = (eventName) => 'on' + capitalize(eventName);

export class DOMListeners {
  constructor($el, listeners) {
    if (!$el) {
      throw new Error('No $el provided for DomListener');
    }

    this.$el = $el;
    this.listeners = listeners || [];
  }

  initDomListeners() {
    this.listeners.forEach((eventName) => {
      const methodName = getListenerMethodName(eventName);

      if (!this[methodName]) {
        throw new Error(
          `Method ${methodName} is not implemented in ${this.name} component`,
        );
      }

      this[methodName] = this[methodName].bind(this);

      this.$el.addEventListener(eventName, this[methodName]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach((eventName) => {
      const methodName = getListenerMethodName(eventName);

      this.$el.removeEventListener(eventName, this[methodName]);
    });
  }
}
