<template>
    <RkmobileDrag 
    top="50px" 
    left="0px" 
    :isvisible.sync="isvisible" 
    @mouseover.native="hideBtnHeight('25px')"
    @mouseout.native="hideBtnHeight('0px')">
        <header>组件库</header>
        <ul @dragstart.stop="drag" @dragend.stop=";">
            <li draggable="true" :data-elename="'RkFlexRow'">横向布局</li>
            <li draggable="true" :data-elename="'RkFlexCol'">纵向布局</li>
            <li draggable="true" :data-elename="'RkTitleOne'">标题一</li>
            <li draggable="true" :data-elename="'RkTitleTwo'">标题二</li>
            <li draggable="true" :data-elename="'RkTextp'">段落</li>
        </ul>
        <footer @click="isvisible = false" ref="hideBtn">
            隐藏
        </footer>
    </RkmobileDrag> 
</template>

<script>
export default {
    data(){
        return {
            isvisible: true
        }
    },
    methods: {
        drag(ev){
            if(ev.target.nodeName.toLowerCase() === 'li'){
                ev.dataTransfer.setData("Text",ev.target.dataset.elename);
            }
        },
        hideBtnHeight(val){
            if(this.$refs.hideBtn){
                this.$refs.hideBtn.style.height = val;
            }
        }
    }
}
</script>

<style scoped>
    article{
        top: 50px;
        width: 100px;
        height: 100px;
        background-color: white;
        position: fixed;
    }
    ul li{
        list-style: none;
    }
    ul{
        margin: 0;
        padding: 0;
    }
    .rk-mobile-drag header{
        height: 25px;
        line-height: 25px;
        border-bottom: 1px solid #d6d4d4;
    }
    .rk-mobile-drag footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0px;
        line-height: 25px;
        background-color: hsl(180, 53%, 80%);
        color: white;
        cursor:pointer;
        overflow: hidden;
        transition: height .3s;
    }
</style>