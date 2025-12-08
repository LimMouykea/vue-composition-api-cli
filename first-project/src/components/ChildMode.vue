<template>
    <div>
        <p>Child Switch : {{ isActive }}</p>
        <button class="btn btn-info" @click="switchMode">Toggle Mode</button>
    </div>
</template>
<script setup>
const props = defineProps(['isActive']);
const emit = defineEmits(['toggleMode']);
function switchMode() {
    emit('toggleMode');
}
</script>