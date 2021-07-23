<template>
    <div class="one">
        <img v-lazy="require('../../assets/img/img-lazy.jpg')" >
        <RkTitleOne/> 
        <RkTitleTwo/>  
    </div>
</template>

<script>
import createEle from '../../configComponents/createEle';

export default {
    mounted(){
        var tag = createEle.createEle('RkTitleTwo');
        document.getElementsByClassName('one')[0].appendChild(tag.$el);
    },
}
</script>