<template>
    <div class="rk-config-bar" 
    :style="{width:styleChange.width? styleChange.width: '100%', height: styleChange.height?styleChange.height: '100%'}">
        <div class="changeBtnBar" v-if="changeBtnVisible">
            <div v-for="(val, index) in styleChange" :key="index">
                <span>{{index}}</span>
                <input type="text" v-model="styleChange[index]" />
            </div>
        </div>
        <slot></slot>
        <div class="changeBtnBar changebtn">
            <div style="float:left" @click="changeBtnVisible=!changeBtnVisible">{{changeBtnVisible?'预览': '编辑'}}</div>
            <div style="float:left" @click="destroyEle">删除</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data(){
        return {
            styleChange: {},
            changeBtnVisible: false
        }
    },
    created(){
        for(let key in this.value){
            this.$set(this.styleChange, key, this.value[key]);
        }
    },
    methods: {
        destroyEle(){
            if(confirm('确认删除该元素？')){
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            }
        }
    }
}
</script>

<style scoped>
    .rk-config-bar {
        border: 1px solid red;
        position: relative;
    }
    .changeBtnBar{
        position: absolute;
    }
    .changeBtnBar input{
        width: 38px;
    }
    .changeBtnBar span{
        font-size: 15px;
        margin: 3px;
    }
    .changeBtnBar.changebtn{
        bottom: 0;
        right: 0;
        cursor:pointer;
    }
</style>