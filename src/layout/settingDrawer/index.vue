<script setup lang="ts">
import { CloseOutlined, SettingOutlined } from '@vicons/antd'
import CheckboxLayout from './checkboxLayout.vue'
import CheckboxTheme from './checkboxTheme.vue'
import Container from './container.vue'
import type { ILayoutType } from '@/config/layout-theme'
import type { ITheme } from '@/config/theme'

const props = withDefaults(defineProps<{
  floatTop?: number | string
  drawerWidth?: number | string
  layout?: 'mix' | 'side' | 'top'
  layoutStyle?: 'inverted' | 'light' | 'dark'
  layoutList: ILayoutType[]
  layoutStyleList: ILayoutType[]
  themeList?: ITheme[]
  theme: string
}>(), {
  floatTop: 240,
  drawerWidth: 300,
})
defineEmits(['update:layout', 'update:layoutStyle', 'update:theme'])

let showRef = $ref(false)

const handleClick = (value: boolean) => {
  showRef = value
}

const cssVars = computed(() => {
  return {
    '--pro-admin-float-top': `${props.floatTop}px`,
    '--pro-admin-drawer-width': `${props.drawerWidth}px`,
  }
})
</script>

<template>
  <teleport to="body">
    <div :style="cssVars" class="fixed top-[var(--pro-admin-float-top)] right-0">
      <n-button
        type="primary"
        size="large"
        class="b-rd-tr-0! b-rd-br-0!"
        @click="handleClick(true)"
      >
        <template #icon>
          <n-icon size="24">
            <SettingOutlined />
          </n-icon>
        </template>
      </n-button>
    </div>
  </teleport>
  <n-drawer v-model:show="showRef" :width="drawerWidth">
    <n-drawer-content>
      <Container v-if="layoutStyleList" title="风格配置">
        <n-space size="large">
          <template v-for="item in layoutStyleList" :key="item.id">
            <CheckboxLayout
              :layout="item.key"
              :checked="item.id === layoutStyle"
              :title="item.title"
              :inverted="item.inverted"
              :dark="item.dark"
              @click="() => $emit('update:layoutStyle', item.id)"
            />
          </template>
        </n-space>
      </Container>
      <n-divider />
      <Container v-if="themeList" title="主题色配置">
        <n-space>
          <CheckboxTheme
            v-for="item in themeList"
            :key="item.key"
            :color="item.color"
            :checked="item.key === theme"
            @click="() => $emit('update:theme', item.key)"
          />
        </n-space>
      </Container>
      <n-divider />
      <Container v-if="layoutList" title="导航模式">
        <n-space size="large">
          <template v-for="item in layoutList" :key="item.key">
            <CheckboxLayout
              :layout="item.key"
              :checked="item.key === layout"
              :title="item.title"
              @click="() => $emit('update:layout', item.key)"
            />
          </template>
        </n-space>
      </Container>
    </n-drawer-content>
    <div
      :style="cssVars"
      class="absolute top-[var(--pro-admin-float-top)] right-[var(--pro-admin-drawer-width)]"
    >
      <n-button
        type="primary"
        size="large"
        class="b-rd-tr-0! b-rd-br-0!"
        @click="handleClick(false)"
      >
        <template #icon>
          <n-icon size="24">
            <CloseOutlined />
          </n-icon>
        </template>
      </n-button>
    </div>
  </n-drawer>
</template>
