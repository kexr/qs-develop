<template>
    <div class="rk-config-bar" 
    :style="barStyle"
    @mouseover="changebtnHeight('30px')"
    @mouseout="changebtnHeight('0')"
    >
        <div class="changeBtnBar" v-if="changeBtnVisible">
            <div v-for="(val, index) in styleChange" :key="index">
                <span>{{index}}</span>
                <input type="text" v-model="styleChange[index]" />
            </div>
        </div>
        <slot></slot>
        <div class="changeBtnBar changebtn" :style="{height: btnHeight}">
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
            changeBtnVisible: false,
            btnHeight: '0',
            barShadow: '0 0 30px 0 #99cccc inset'          
        }
    },
    computed: {
        barStyle(){
            var oriObj = this.styleChange;
            var res = {
                width: '100%',
                height: '100%',
            };
            if(this.changeBtnVisible){
                res.boxShadow = '0 0 30px 0 #99cccc inset';
            }
            Object.assign(res, oriObj);
            console.log(res)
            return res;
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
        },
        changebtnHeight(val){
            if(val!=='0' || !this.changeBtnVisible){
                this.btnHeight = val;
            }
        }
    }
}
</script>

<style scoped>
    .rk-config-bar {
        position: relative;
        min-height: 20px;
        min-width: 100px;
        background-color: hsl(180deg 53% 80% / 10%);
    }
    .rk-config-bar:hover{
        background-color: hsl(180deg 53% 80% / 22%);
    }
    .changeBtnBar{
        z-index: 149;
        position: absolute;
        background-color: hsl(180, 53%, 80%);
        padding: 5px 10px;
        height: 100%;
        color: white;
        font-weight: 700;
        box-sizing: border-box;
        font-size: 16px;
        text-align: left;
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
        height: 0;
        overflow: hidden;
        padding: 0;
    }
    .changeBtnBar.changebtn div{
        padding: 0 8px;
        line-height: 30px;
    }
    .changeBtnBar.changebtn div:hover{
        background-color: #99CCCC;
    }
</style>