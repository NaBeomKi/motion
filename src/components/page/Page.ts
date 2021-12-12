export default class PageComponent {
  private $element: HTMLUListElement;

  constructor() {
    this.$element = document.createElement("ul");
    this.$element.className = "page";
    this.$element.textContent = "This is Page Component";
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.$element);
  }
}
