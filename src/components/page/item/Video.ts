import BaseComponent from "../../component.js";

export default class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section class="video">
        <iframe
        width="560"
        height="315"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video_thumnail"
        ></iframe>
        <p class="video__title"></p>
    </section>
    `);

    const $video = this.$element.querySelector(
      ".video_thumnail"
    )! as HTMLIFrameElement;
    $video.src = url;

    const $title = this.$element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;
    $title.textContent = title;
  }
}
