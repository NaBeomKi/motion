import { Component } from "./component.js";
import InputDialog, { MediaData, TextData } from "./dialog/Dialog.js";
import MediaSectionInput from "./dialog/input/Media-input.js";
import TextSectionInput from "./dialog/input/Text-input.js";
import ImageComponent from "./page/item/Image.js";
import Note from "./page/item/Note.js";
import Todo from "./page/item/Todo.js";
import VideoComponent from "./page/item/Video.js";
import PageComponent, { Composable, PageItemComponent } from "./page/Page.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};

export default class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new Note(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new Todo(input.title, input.body)
    );

    // For demo :)
    this.page.addChild(
      new ImageComponent("Image Title", "https://picsum.photos/800/400")
    );
    this.page.addChild(
      new VideoComponent("Video Title", "https://youtu.be/D7cwvvA7cP0")
    );
    this.page.addChild(
      new Note("Note Title", "Don't forget to code your dream")
    );
    this.page.addChild(new Todo("Todo Title", "TypeScript Course!"));
    this.page.addChild(
      new ImageComponent("Image Title", "https://picsum.photos/800/400")
    );
    this.page.addChild(
      new VideoComponent("Video Title", "https://youtu.be/D7cwvvA7cP0")
    );
    this.page.addChild(
      new Note("Note Title", "Don't forget to code your dream")
    );
    this.page.addChild(new Todo("Todo Title", "TypeScript Course!"));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const $btn = document.querySelector(selector)! as HTMLButtonElement;
    $btn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();

      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const element = makeSection(input);
        this.page.addChild(element);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}
