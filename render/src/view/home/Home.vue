<template>
    <div>
        Home
    </div>

    <a-button @click="handleClickVersion">Version</a-button>
    <a-button @click="handleClickInsert">Insert Instruction</a-button>
</template>

<script setup lang="ts">
const handleClickVersion = async () => {
    const res = await window.electronAPI.versions()
    console.log(res)
}
const handleClickInsert = async () => {
    window.electronAPI.insert({
        name: "test-name",
        instruction: "test-instruction"
    })
}
</script>

<style scoped></style>