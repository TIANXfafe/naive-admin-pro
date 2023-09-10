<script setup lang="ts">
import { CloseOutlined, SettingOutlined } from '@vicons/antd'
import CheckboxLayout from './checkboxLayout.vue'
import Container from './container.vue'

const props = withDefaults(defineProps<{
  floatTop?: number | string
  drawerWidth?: number | string
  layout?: 'mix' | 'side' | 'top'
}>(), {
  floatTop: 240,
  drawerWidth: 300,
})
defineEmits(['update:layout'])

let showRef = $ref(false)

const layoutRef = $ref([{
  key: 'mix',
  title: '混合布局',
}, {
  key: 'side',
  title: '侧边布局',
}, {
  key: 'top',
  title: '顶部布局',
}])

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
      <Container title="导航模式">
        <n-space size="large">
          <template v-for="item in layoutRef" :key="item.key">
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
