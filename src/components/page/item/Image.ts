import BaseComponent from "../../component.js";

export default class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="image">
        <div class="image__holder"><img class="image__thumbnail" /></div>
        <p class="image__title"></p>
      </section>
    `);

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
}
