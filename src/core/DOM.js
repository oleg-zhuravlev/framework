class DOM {
  constructor(node) {
    this.$el = typeof node === 'string' ? document.querySelector(node) : node;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }

    return this.$el.outerHTML.trim();
  }

  append(node) {
    const $node = node instanceof DOM ? node.$el : node;

    this.$el.append($node);

    return this;
  }

  remove() {
    this.$el.remove();
  }

  find(selector) {
    return $(this.$el.querySelector(selector));
  }

  findAll(selector) {
    return Array.from(this.$el.querySelectorAll(selector), (node) => $(node));
  }

  css(styles = {}) {
    Object.keys(styles).forEach((key) => (this.$el.style[key] = styles[key]));
    return this;
  }

  focus() {
    this.$el.focus();
    return this;
  }

  addClass(className) {
    this.$el.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.$el.classList.remove(className);
    return this;
  }

  addEventListener(eventName, callback) {
    this.$el.addEventListener(eventName, callback);
    return this;
  }

  removeEventListener(eventName, callback) {
    this.$el.removeEventListener(eventName, callback);
    return this;
  }
}

export const $ = (node) => new DOM(node);

$.create = (node, className) => {
  const $el = document.createElement(node);

  if (className) {
    $el.classList.add(className);
  }

  return $($el);
};
