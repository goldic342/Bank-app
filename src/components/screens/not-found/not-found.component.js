import { BaseScreen } from '../base-screen/base-screen.component'

export class NotFound extends BaseScreen {
  constructor() {
    super('Not found', '<h1>Hm... This page does not exists</h1>')
  }
}
