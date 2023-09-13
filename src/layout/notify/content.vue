<script setup lang="ts">
import Container from './container.vue'
import NotifyItem from './notifyItem.vue'
import MessageItem from './messageItem.vue'
import UpcomingItem from './upcomingItem.vue'
</script>

<template>
  <n-tabs default-value="notify" justify-content="center" type="line">
    <n-tab-pane name="notify" tab="通知">
      <Container>
        <NotifyItem title="测试通知" timer="五天前" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <NotifyItem title="测试通知" timer="五天前" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" read />
        <NotifyItem title="测试通知" timer="五天前" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" read />
        <NotifyItem title="测试通知" timer="五天前" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" read />
        <NotifyItem title="测试通知" timer="五天前" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" read />
        <NotifyItem title="测试通知" timer="五天前" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" read />
      </Container>
    </n-tab-pane>
    <n-tab-pane name="message" tab="消息">
      <Container>
        <MessageItem title="测试消息" timer="五天前" desc="测试消息" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <MessageItem title="测试消息" timer="五天前" desc="测试消息" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" read />
        <MessageItem title="测试消息" timer="五天前" desc="测试消息" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" read />
        <MessageItem title="测试消息" timer="五天前" desc="测试消息" avatar="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" read />
      </Container>
    </n-tab-pane>
    <n-tab-pane name="upcoming" tab="待办">
      <Container>
        <UpcomingItem title="测试待办" tag="已完成" type="success" content="测试待办内容" />
        <UpcomingItem title="测试待办" tag="已完成" type="warning" content="测试待办内容" read />
        <UpcomingItem title="测试待办" tag="已完成" type="error" content="测试待办内容" read />
        <UpcomingItem title="测试待办" tag="已完成" type="info" content="测试待办内容" read />
        <UpcomingItem title="测试待办" tag="已完成" type="success" content="测试待办内容" read />
      </Container>
    </n-tab-pane>
  </n-tabs>
</template>
