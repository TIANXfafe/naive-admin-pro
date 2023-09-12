import { dateZhCN, zhCN } from 'naive-ui'
import global from './global/zh'
import pages from './pages/zh'

export default {
  ...global,
  ...pages,
  naiveUI: {
    locale: zhCN,
    dateLocale: dateZhCN,
  },
}
