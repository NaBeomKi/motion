export default class PageComponent {
  private $ul: HTMLUListElement;

  constructor() {
    this.$ul = document.createElement("ul");
    this.$ul.className = "page";
    this.$ul.textContent = "This is Page Component";
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.$ul);
  }
}
