<template>
    <div class="container mt-5">
        <div class="card p-4 mx-auto" style="max-width: 400px;">
            <h3 class="card-title mb-3 text-center">User Info</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between">
                    <span class="fw-bold">Name:</span>
                    <span>{{ name }}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span class="fw-bold">Email:</span>
                    <span>{{ email }}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span class="fw-bold">Phone:</span>
                    <span>{{ phone }}</span>
                </li>
            </ul>
            <button @click="toggleFav" class="btn" :class="[isFav ? 'btn-success' : 'btn-warning' ]">{{ isFav ? 'Add to' : 'Remove' }} favorite</button>
            <span class="mt-2">You can contact <strong>{{ owner }}</strong> for more information.!</span>
        </div>
    </div>
</template>
<script setup>
// prop not define dataType
const props = defineProps([
    'name', 'email', 'phone', 'owner', 'isFav'
]);

const emits = defineEmits(['update-fav']);
function toggleFav() {
    emits('update-fav');
}

// prop with define dataType
// const lists = defineProps({
//     name: {
//         type: String,
//         required: false,
//         default : "Pipo",
//     },
//     email: {
//         type: String,
//         required : true,
//     },
//     phone: {
//         type: String,
//         required: false,
//         default: "+855 --- --- ---"
//     }
// })
</script>