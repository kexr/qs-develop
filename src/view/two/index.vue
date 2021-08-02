<template>
    <div class="two flex-v">
        <div class="second-nav flex-h">
            <a href="javascript:;" @click="exportDom">导出</a>
        </div>
        <div @drop="drop" @dragover="allowDrop" class="height-100 width-100" :ref="two">
        </div>
    </div>
</template>

<script>
import createEle from '../../configComponents/createEle';
import exportQsNode from '../../qsNode.js';

export default {
    data(){
        return {
            two: 'two'
        }
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("Text");
            if(data.length>0){
                var tag = createEle.createEle(data);
                ev.target.appendChild(tag.$el);
            }
        },
        exportDom(){
            // console.log(ev.target)
            var node = this.$refs.two;
            console.log(node)
            console.log(exportQsNode(node));
        }
    }
}
</script>

<style scoped>
    .two{
        height: 100%;    
    }
</style>