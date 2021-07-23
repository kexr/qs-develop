<template>
    <div @drop="drop" @dragover="allowDrop" class="two">
    </div>
</template>

<script>
import createEle from '../../configComponents/createEle';

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
    .two{
        height: 100%;    
    }
</style>