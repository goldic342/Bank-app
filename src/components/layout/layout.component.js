export class Layout {
  #children
  #router

  constructor({ children, router }) {
    this.#children = children
    this.#router = router
  }

  render() {
    const headerHTML =
      '<header>Header <a href="/">Home</a> <a href="/auth">Auth</a></header>'

    return `${headerHTML}<main id="main">${this.#children}</main>`
  }
}
