<template>
    <div class="config-title-two">
        <h2 contenteditable="true">点击编辑文本...</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            styleChange: {
                height: '50px',
            }
        }
    },
}
</script>

<style scoped>
    .config-title-one h2{
        margin: 0;  
    }
</style>