import { dateEnUS, enUS } from 'naive-ui'
import global from './global/en'
import pages from './pages/en'

export default {
  ...global,
  ...pages,
  naiveUI: {
    locale: enUS,
    dateLocale: dateEnUS,
  },
}
