<template>
    <RkconfigBar :value="styleChange" ref="imageConfigBar">
    <div class="config-image positionBar height-100" :style="{padding: paddingImg}">
        <img :src="imgSrc" class="width-100"/>
        <div class="height-100 width-100 imageContentConfig positionCenter">
            <div>
                <span>图片地址:</span><input v-model="imgSrc"/>
            </div>
            <div>
                <span>边距:</span><input v-model="paddingImg"/>
            </div>
        </div>
    </div>
    </RkconfigBar>
</template>

<script>
export default {
    data(){
        return {
            styleChange: {
                height: 'auto',
                width: '100%'
            },
            imgSrc: '',
            paddingImg: '0'
        }
    },
}
</script>

<style scoped>
    .config-image img{
        margin: 0;  
    }
    .imageContentConfig{
        
    }
</style>