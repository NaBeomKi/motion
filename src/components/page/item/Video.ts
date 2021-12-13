import BaseComponent from "../../component.js";

export default class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section class="video">
      <div class="video__player">
        <iframe
        width="560"
        height="315"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video__iframe"
        ></iframe>
      </div>
      <h3 class="video__title"></h3>
    </section>
    `);

    const $iframe = this.$element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    $iframe.src = url;

    const $title = this.$element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;
    $title.textContent = title;
  }
}
