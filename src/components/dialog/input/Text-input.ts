import BaseComponent from "../../component.js";
import { TextData } from "../Dialog.js";

export default class TextSectionInput
  extends BaseComponent<HTMLElement>
  implements TextData
{
  constructor() {
    super(`
    <div>
      <div class="form__container">
        <label for="title">Title</label>
        <input type="text" id="title" />
      </div>
      <div class="form__container">
        <label for="body">Body</label>
        <textarea type="text" row="3" id="body"></textarea>
      </div>
    </div>
    `);
  }

  get title(): string {
    const $title = this.$element.querySelector("#title")! as HTMLInputElement;
    return $title.value;
  }

  get body(): string {
    const $body = this.$element.querySelector("#body")! as HTMLTextAreaElement;
    return $body.value;
  }
}
