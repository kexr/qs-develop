<template>
    <div class="center">
        <input v-model="formData.inputa" @change='changeUpdata'/>
        <input v-model="formData.inputb" @change='changeUpdata'/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                inputa: '',
                inputb: ''
            }
        }
    },
    methods: {
        changeUpdata() {
            this.$emit('update:centerForm', this.formData)
        }
    }
}
</script>

<style scoped>
    .center{
        border:1px solid rebeccapurple;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
    input{
        width: 80%;
        margin: 15px;
        height: 40px;
        border-radius: 10px;
        border-width: 1px;
        outline: none;
        padding: 8px;
        box-sizing: border-box;
    }
</style>