<template>
    <div class="trigger">
        <menu-unfold-outlined v-if="collapsed" @click="handdleClick" />
        <menu-fold-outlined v-else @click="handdleClick" />
    </div>
</template>

<script setup lang="ts">
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { collapsedStore } from "~/store/collapse";
import { computed } from 'vue';

const store = collapsedStore();
const collapsed = computed(() => {
    return store.getIsCollapsed;
});

const handdleClick = () => {
    store.setCollapsed()
}

</script>
<style scoped></style>