import { Component } from "./component.js";
import InputDialog from "./dialog/Dialog.js";
import MediaSectionInput from "./dialog/input/Media-input.js";
import TextSectionInput from "./dialog/input/Text-input.js";
import ImageComponent from "./page/item/Image.js";
import Note from "./page/item/Note.js";
import Todo from "./page/item/Todo.js";
import VideoComponent from "./page/item/Video.js";
import PageComponent, { Composable, PageItemComponent } from "./page/Page.js";

export default class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const $imageBtn = document.querySelector(
      "#new-image"
    )! as HTMLButtonElement;
    $imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();

      dialog.addChild(mediaSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new ImageComponent(mediaSection.title, mediaSection.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });
    });

    const $videoBtn = document.querySelector(
      "#new-video"
    )! as HTMLButtonElement;
    $videoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();

      dialog.addChild(mediaSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const video = new VideoComponent(mediaSection.title, mediaSection.url);
        this.page.addChild(video);
        dialog.removeFrom(dialogRoot);
      });
    });

    const $noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;
    $noteBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();

      dialog.addChild(textSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const note = new Note(textSection.title, textSection.body);
        this.page.addChild(note);
        dialog.removeFrom(dialogRoot);
      });
    });

    const $todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;
    $todoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();

      dialog.addChild(textSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const todo = new Todo(textSection.title, textSection.body);
        this.page.addChild(todo);
        dialog.removeFrom(dialogRoot);
      });
    });
  }
}
