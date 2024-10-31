<template>
    <div class="trigger">
        <menu-unfold-outlined v-if="collapsed" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else @click="() => (collapsed = !collapsed)" />
    </div>
</template>

<script setup lang="ts">
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { collapsedStore } from "~/store/collapse/index";
import { computed } from 'vue';

const store = collapsedStore();
const collapsed = computed(() => {
    return store.getIsCollapsed;
});

</script>
<style scoped></style>