import BaseComponent from "../../component.js";

export default class Todo extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`
    <section class="todo">
      <h2 class="todo__title"></h2>
      <input type="checkbox" class="todo-checkbox"/>
    </section>
    `);

    const $title = this.$element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    $title.textContent = title;

    const $todo = this.$element.querySelector(
      ".todo-checkbox"
    )! as HTMLInputElement;
    $todo.insertAdjacentText("afterend", todo);
  }
}
