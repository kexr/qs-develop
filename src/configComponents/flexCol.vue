<template>
    <RkconfigBar :value="styleChange">
        <div 
        class="config-flex-col" 
        @drop.stop="drop" 
        @dragover.stop="allowDrop"
        >
        </div>
    </RkconfigBar>
</template>

<script>
import createEle from '../configComponents/createEle';

export default {
    data(){
        return {
            styleChange: {
                width: '300px',
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
    .config-flex-col {
        display: flex;
        background-color: hsl(180deg 53% 80% / 22%);
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>