import { Component } from "./component.js";
import ImageComponent from "./page/item/Image.js";
import Note from "./page/item/Note.js";
import Todo from "./page/item/Todo.js";
import VideoComponent from "./page/item/Video.js";
import PageComponent, { Composable } from "./page/Page.js";

export default class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const $image = new ImageComponent(
      "test image",
      "https://picsum.photos/600/300"
    );
    this.page.addChild($image);

    const $video = new VideoComponent(
      "박막례 할머니",
      "https://www.youtube.com/embed/2wtCTASDu1M"
    );
    this.page.addChild($video);

    const $note = new Note("메모", "메모 내용");
    this.page.addChild($note);

    const $todo = new Todo("todo", "todolist");
    this.page.addChild($todo);
  }
}
