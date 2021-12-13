import ImageComponent from "./page/item/Image.js";
import Note from "./page/item/Note.js";
import Todo from "./page/item/Todo.js";
import VideoComponent from "./page/item/Video.js";
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

    const $video = new VideoComponent(
      "박막례 할머니",
      "https://www.youtube.com/embed/2wtCTASDu1M"
    );
    $video.attachTo(appRoot, "beforeend");

    const $note = new Note("메모", "메모 내용");
    $note.attachTo(appRoot, "beforeend");

    const $todo = new Todo("todo", "todolist");
    $todo.attachTo(appRoot, "beforeend");
  }
}
