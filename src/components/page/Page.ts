import BaseComponent from "../component.js";

export default class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is Page Component</ul>');
  }
}
