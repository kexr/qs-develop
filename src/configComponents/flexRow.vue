<template>
    <RkconfigBar :value="styleChange">
        <div class="config-flex-row" @drop.stop="drop" @dragover.stop="allowDrop"></div>
    </RkconfigBar>
</template>

<script>
import createEle from '../configComponents/createEle';

export default {
    data(){
        return {
            styleChange: {
                height: '300px',
            }
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
        }
    }
}
</script>

<style scoped>
    .config-flex-row {
        display: flex;
        height: 100%;
        width: 100%;
        background-color: hsl(180deg 53% 80% / 22%);
    }
</style>