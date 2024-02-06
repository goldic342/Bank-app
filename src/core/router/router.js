import { Layout } from '@/components/layout/layout.component'
import { ROUTES } from './routes.data'
import { NotFound } from '@/components/screens/not-found/not-found.component'
export class Router {
  #routes = ROUTES
  #currentRoute = null
  #layout = null

  constructor() {
    // Handling route changes
    this.#handleRouteChange()

    // Handling links changes
    this.#handleLinks()

    //Handling popstate
    window.addEventListener('popstate', () => this.#handleRouteChange())
  }

  #handleLinks() {
    document.addEventListener('click', event => {
      const target = event.target.closest('a')

      if (target) {
        event.preventDefault()
        this.#navigate(target.href)
      }
    })
  }

  #navigate(path) {
    if (path !== this.getCurrentPath()) {
      window.history.pushState({}, '', path)
      this.#handleRouteChange()
    }
  }

  getCurrentPath() {
    return window.location.pathname
  }

  #handleRouteChange() {
    const path = this.getCurrentPath() || '/'
    const route = this.#routes.find(route => route.path == path) || {
      component: NotFound
    }

    this.#currentRoute = route
    this.#render()
  }

  #render() {
    const component = new this.#currentRoute.component()

    if (!this.#layout) {
      this.#layout = new Layout({
        router: this,
        children: component.render()
      })

      document.querySelector('#app').innerHTML = this.#layout.render()
    } else {
      document.querySelector('#main').innerHTML = component.render()
    }
  }
}
