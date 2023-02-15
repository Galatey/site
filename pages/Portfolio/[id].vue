<template >
    <div>
        <p>111{{ id }}</p>
    </div>
</template>

<script setup>
definePageMeta ({
    layout: 'portfolio'
})
const { id } = useRoute().params

</script>
    
<style scoped>
    
</style>