<template>
    <div class="rk-config-bar">
        <div class="changeBtnBar">
            <div v-for="(val, index) in styleChange" :key="index">
                <span>{{index}}</span>
                <input type="text" v-model="styleChange[index]" />
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['styleChange']
}
</script>script

<style scoped>
    .rk-config-bar {
        border: 1px solid red;
    }
    .changeBtnBar input{
        width: 38px;
    }
    .changeBtnBar span{
        font-size: 15px;
        margin: 3px;
    }
</style>