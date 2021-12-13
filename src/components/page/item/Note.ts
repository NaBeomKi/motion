import BaseComponent from "../../component.js";

export default class Note extends BaseComponent<HTMLElement> {
  constructor(title: string, text: string) {
    super(`
    <section class="note">
      <h2 class="note__title"></h2>
      <p class="note__body"></p>
    </section>
    `);

    const $title = this.$element.querySelector(
      ".note__title"
    )! as HTMLHeadingElement;
    $title.textContent = title;

    const $body = this.$element.querySelector(
      ".note__body"
    )! as HTMLParagraphElement;
    $body.textContent = text;
  }
}
