import { ROUTES } from './routes.data'
import { NotFound } from '@/components/screens/not-found/not-found.component'

export class Router {
  #routes
  #currentRoute

  constructor() {
    this.#routes = ROUTES
    this.#currentRoute = null

    // Initializing main method
    this.#handleRouteChange()
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
    this.render()
  }

  render() {
    const component = new this.#currentRoute.component()
    document.querySelector('#app').innerHTML = component.render()
  }
}
