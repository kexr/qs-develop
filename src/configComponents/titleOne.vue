<template>
    <RkconfigBar :value="styleChange">
    <div class="config-title-one positionBar height-100">
        <h1 contenteditable="true" class="positionCenter">点击编辑文本...</h1>
    </div>
    </RkconfigBar>
</template>

<script>
export default {
    data(){
        return {
            styleChange: {
                height: '50px',
                fontSize: '1em'
            }
        }
    },
}
</script>

<style scoped>
    .config-title-one h1{
        margin: 0;  
    }
</style>