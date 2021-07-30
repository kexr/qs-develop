<template>
    <article 
    draggable="true"
    @dragstart="dragstart"
    @dragend="drop"
    :style="position"
    :class="{hide: !isvisible, 'rk-mobile-drag': isvisible}"
    >
		<slot v-if="isvisible"></slot>
        <div v-else @click="$emit('update:isvisible', true)">+</div>
    </article>
</template>

<script>
export default {
    props: ['top','left', 'isvisible'],
    data(){
        return {
            position: {},
            beforeX: '',
            beforeY: ''
        }  
    },
    created() {
        var obj = {
            top: this.top,
            left: this.left
        };
        for(let key in obj){
            this.$set(this.position, key, obj[key]);
        }
    },
    methods: {
       dragstart(event) {
           // console.log('dragstart',event)
           this.beforeX = event.clientX;
           this.beforeY = event.clientY;
           // console.log('鼠标前的位置', this.beforeX,this.beforeY)
       },
       drop(event) {
           // console.log('drop',event)
           var afterX = event.clientX;
           var afterY = event.clientY;
           var nx = afterX - this.beforeX; 
           var ny = afterY - this.beforeY; 
           // console.log('鼠标后的位置',afterX,afterY)
           this.position.top = parseInt(this.position.top) + ny + 'px';
           this.position.left = parseInt(this.position.left) + nx + 'px';
           // console.log('挪动的位置',nx,ny)
       }
   }
}
</script>

<style scoped>
    article {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 #99cccc;
        position: fixed;
        transition-property: border-radius,width,height;
        transition-duration: .5s;
        z-index: 199;
    }
    .rk-mobile-drag{
        width: 170px;
        height: 200px;
        border-radius: 5px;
    }
    .hide{
        border-radius: 100px;
        height: 50px;
        width: 50px;
        overflow: hidden;
        cursor:pointer;
    }
    .hide div{
        line-height: 45px;
    }
</style>
