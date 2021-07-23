<template>
    <div class="config-flex-col" @drop.stop="drop" @dragover.stop="allowDrop"></div>
</template>

<script>
import createEle from '../configComponents/createEle';

export default {
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
        width: 200px;
        background-color: hsl(180deg 53% 80% / 22%);
        flex-direction: column;
    }
</style>