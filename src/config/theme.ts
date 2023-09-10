import type { GlobalThemeOverrides } from 'naive-ui'

export interface ITheme {
  color: string
  key: string
  title: string
}

export const colors: Record<string, GlobalThemeOverrides> = {
  default: {
    common: {
      // 主色
      primaryColor: '#18a058',
      // hover
      primaryColorHover: '#36ad6a',
      // 按下的颜色
      primaryColorPressed: '#0c7a43',
      // 反色激活颜色
      primaryColorSuppl: '#36ad6a',
    },
  },
  dustRed: {
    common: {
      primaryColor: '#f5222d',
      primaryColorHover: '#ff4d4f',
      primaryColorPressed: '#cf1322',
      primaryColorSuppl: '#ff4d4f',
    },
  },
  volcano: {
    common: {
      primaryColor: '#fa541c',
      primaryColorHover: '#ff7a45',
      primaryColorPressed: '#d4380d',
      primaryColorSuppl: '#ff7a45',
    },
  },
  orange: {
    common: {
      primaryColor: '#fa8c16',
      primaryColorHover: '#ffa940',
      primaryColorPressed: '#d46b08',
      primaryColorSuppl: '#ffa940',
    },
  },
  cyan: {
    common: {
      primaryColor: '#13c2c2',
      primaryColorHover: '#36cfc9',
      primaryColorPressed: '#08979c',
      primaryColorSuppl: '#36cfc9',
    },
  },
  blue: {
    common: {
      primaryColor: '#1890ff',
      primaryColorHover: '#40a9ff',
      primaryColorPressed: '#096dd9',
      primaryColorSuppl: '#40a9ff',
    },
  },
  purple: {
    common: {
      primaryColor: '#722ed1',
      primaryColorHover: '#9254de',
      primaryColorPressed: '#531dab',
      primaryColorSuppl: '#9254de',
    },
  },
  magenta: {
    common: {
      primaryColor: '#eb2f96',
      primaryColorHover: '#f759ab',
      primaryColorPressed: '#c41d7f',
      primaryColorSuppl: '#f759ab',
    },
  },
}

export const darkColors: Record<string, GlobalThemeOverrides> = {
  default: {
    common: {
      primaryColor: '#18a058',
      primaryColorHover: '#7fe7c4',
      primaryColorPressed: '#5acea7',
      primaryColorSuppl: 'rgb(42,148,125)',
    },
  },
  dustRed: {
    common: {
      primaryColor: '#d32029', // 6
      primaryColorHover: '#e84749', // 7
      primaryColorPressed: '#f37370', // 8
      primaryColorSuppl: '#a61d24', // 5
    },
  },
  volcano: {
    common: {
      primaryColor: '#d84a1b',
      primaryColorHover: '#e87040',
      primaryColorPressed: '#f3956a',
      primaryColorSuppl: '#aa3e19',
    },
  },
  orange: {
    common: {
      primaryColor: '#d87a16',
      primaryColorHover: '#e89a3c',
      primaryColorPressed: '#f3b765',
      primaryColorSuppl: '#aa6215',
    },
  },
  cyan: {
    common: {
      primaryColor: '#13a8a8',
      primaryColorHover: '#33bcb7',
      primaryColorPressed: '#58d1c9',
      primaryColorSuppl: '#138585',
    },
  },
  blue: {
    common: {
      primaryColor: '#177ddc',
      primaryColorHover: '#3c9ae8',
      primaryColorPressed: '#65b7f3',
      primaryColorSuppl: '#1765ad',
    },
  },
  purple: {
    common: {
      primaryColor: '#642ab5',
      primaryColorHover: '#854eca',
      primaryColorPressed: '#ab7ae0',
      primaryColorSuppl: '#51258f',
    },
  },
  magenta: {
    common: {
      primaryColor: '#cb2b83',
      primaryColorHover: '#e0529c',
      primaryColorPressed: '#f37fb7',
      primaryColorSuppl: '#a02669',
    },
  },
}
