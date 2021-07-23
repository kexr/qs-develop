<template>
    <RkmobileDrag>
        <ul @dragstart.stop="drag" @dragend.stop=";">
            <li draggable="true" :data-elename="'RkFlexRow'">横向布局</li>
            <li draggable="true" :data-elename="'RkFlexCol'">纵向布局</li>
            <li draggable="true" :data-elename="'RkTitleOne'">标题一</li>
            <li draggable="true" :data-elename="'RkTitleTwo'">标题二</li>
            <li draggable="true" :data-elename="'RkTextp'">段落</li>
        </ul>
    </RkmobileDrag>
</template>

<script>
export default {
    methods: {
        drag(ev){
            if(ev.target.nodeName.toLowerCase() === 'li'){
                ev.dataTransfer.setData("Text",ev.target.dataset.elename);
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
</style>