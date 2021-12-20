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
      <h3 class="page-item__title video__title"></h3>
    </section>
    `);

    const $iframe = this.$element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    $iframe.src = this.convertToEmbeddedURL(url);

    const $title = this.$element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;
    $title.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    // 정규표현식 Regex
    // https://regexr.com/5l6nr
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9(-|_)]{11}))|(?:youtu.be\/([a-zA-Z0-9(-|_)]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;

    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    return url;
  }
}
