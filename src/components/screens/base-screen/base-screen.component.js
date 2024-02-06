export class BaseScreen {
  #title
  constructor(title, content) {
    this.#title = `Bank-app | ${title}`
    this.content = content
  }

  render() {
    document.title = this.#title
    return this.content
  }
}
