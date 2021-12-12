export default class ImageComponent {
  private $element: HTMLElement;

  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `
    <section class="image">
      <div class="image__holder"><img class="image__thumbnail" /></div>
      <p class="image__title"></p>
    </section>
    `;

    this.$element = template.content.firstElementChild! as HTMLElement;

    const $image = this.$element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    $image.src = url;
    $image.alt = title;

    const $title = this.$element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    $title.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.$element);
  }
}
