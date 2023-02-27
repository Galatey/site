<template>
    <div v-if="show" class="modal_conteiner">
        <div class="modal_title">
            <button>
                <img @click="$emit('close')" src="@/assets/img/svg/close_ttb26jywocdu.svg" alt=""
                    style="width: 20px; height: 20px;">
            </button>
            <img :src="pic" alt="" style="width: 950px;">
            <div class="bytton_window">
                <NuxtLink class="link_window" to="/">Больше фото</NuxtLink>
                <NuxtLink class="link_window" to="/Portfolio">Другие работы</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    show: {
        type: Boolean,
    },
    pic: {
        type: String,
    }
})

const { id } = useRoute().params

const emit = defineEmits(['close'])

</script>


<style scoped>
.modal_conteiner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-color: black;
    z-index: 3;
}

.modal_title {
    display: flex;
    min-width: 550px;
    min-height: 350px;
    background-color: white;
    border-radius: 20px;
    padding: 15px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

.bytton_window {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

.link_window {
    text-decoration: none;
    color: rgb(48, 67, 235);
}
</style>