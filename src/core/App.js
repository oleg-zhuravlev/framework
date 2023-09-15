import { $ } from './DOM';

export class App {
  constructor(options) {
    this.$root = $(options.selector);
    this.components = options.components;
    this.componentInstances = [];
  }

  getComponents() {
    const $componentsWrapper = $.create('div', 'components');

    this.componentInstances = this.components.map((Component) => {
      const $el = $.create('div', Component.className);

      const componentInstance = new Component($el);

      $el.html(componentInstance.getHTML());

      $componentsWrapper.append($el);

      return componentInstance;
    });

    return $componentsWrapper;
  }

  render() {
    this.$root.append(this.getComponents());

    this.componentInstances.forEach((component) => {
      component.init();
    });
  }
}
