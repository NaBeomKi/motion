import BaseComponent from "../../component.js";

export default class Todo extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`
    <section class="todo">
      <h2 class="page-item__title todo__title"></h2>  
      <input type="checkbox" id="todo-checkbox"/>
      <label for="todo-checkbox" class="todo-label"></label>
    </section>
    `);

    const $title = this.$element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    $title.textContent = title;

    const $todo = this.$element.querySelector(
      ".todo-label"
    )! as HTMLLabelElement;
    $todo.textContent = todo;
  }
}
