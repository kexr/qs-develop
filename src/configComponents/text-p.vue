<template>
    <RkconfigBar :value="styleChange">
    <div class="config-text-p positionBar height-100">
        <p contenteditable="true" class="positionCenter width-100">点击编辑文本...</p>
    </div>
    </RkconfigBar>
</template>

<script>
export default {
    data(){
        return {
            styleChange: {
                height: '50px',
                width: '100%', 
                textAlign: 'center'
            }
        }
    },
}
</script>

<style scoped>
    .config-text-p p{
        margin: 0;  
    }
</style>