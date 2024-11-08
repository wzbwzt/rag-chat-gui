<template>
    <div class="logo">
        <div class="logo-icon">
            <Knowledge></Knowledge>
        </div>
    </div>
    <a-menu v-model:selectedKeys="state.selectedKeys" :items="items"></a-menu>
</template>

<script setup lang="ts">
import Knowledge from '~/components/icon/Knowledge.vue';
import { reactive, h } from 'vue';
import {
    PieChartOutlined,
    DesktopOutlined,
    InboxOutlined,
} from '@ant-design/icons-vue';

const state = reactive({
    collapsed: true,
    selectedKeys: ['1'],
});
const items = reactive([
    {
        key: '1',
        icon: () => h(PieChartOutlined),
        label: 'Home',
        title: 'Home',
    },
    {
        key: '2',
        icon: () => h(DesktopOutlined),
        label: 'Knowledge',
        title: 'Knowledge',
    },
    {
        key: '3',
        icon: () => h(InboxOutlined),
        label: 'Chat',
        title: 'Chat',
    },
]);

</script>

<style scoped>
.logo {
    height: 50px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
    text-align: center;


    .trigger {
        line-height: 50px;
        cursor: pointer;
        transition: color 0.3s;
        font-size: 18px;
        padding-left: 40px;
    }
}
</style>