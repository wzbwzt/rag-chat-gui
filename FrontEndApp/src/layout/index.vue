<template>
    <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible
            style="background-color: #fff; height: 100vh;">
            <LeftMenu></LeftMenu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <Header></Header>
            </a-layout-header>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script setup lang="ts">
import LeftMenu from '~/components/LeftMenu.vue';
import Header from '~/components/Header.vue';

import { ref } from 'vue';

const collapsed = ref<boolean>(false);

</script>

<style></style>