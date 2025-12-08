<template>
    <div>
        <p>Message from parent: {{ msg }}</p>
        <button class="btn btn-info" @click="replyMessage()">Reply to parent</button>
    </div>
</template>
<script setup>
const props = defineProps(['msg']);
const emit = defineEmits([
    'reply'
]);
function replyMessage() {
    emit('reply', "Hi Parent, I received your message!");
}
</script>