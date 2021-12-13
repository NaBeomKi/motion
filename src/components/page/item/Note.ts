import BaseComponent from "../../component.js";

export default class Note extends BaseComponent<HTMLElement> {
  constructor(title: string, text: string) {
    super(`
    <section class="note">
      <p class="note__title"></p>
      <div class="note__holder"></div>
    </section>
    `);

    const $title = this.$element.querySelector(
      ".note__title"
    )! as HTMLParagraphElement;
    $title.textContent = title;

    const $text = this.$element.querySelector(".note__holder")! as HTMLElement;
    $text.textContent = text;
  }
}
