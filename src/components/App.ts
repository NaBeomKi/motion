import ImageComponent from "./page/item/Image.js";
import PageComponent from "./page/Page.js";

export default class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const $image = new ImageComponent(
      "test image",
      "https://picsum.photos/600/300"
    );
    $image.attachTo(appRoot, "beforeend");
  }
}
