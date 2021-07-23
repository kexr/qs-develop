<template>
    <article 
    class="rk-mobile-drag" 
    draggable="true"
    @dragstart="dragstart"
    @dragend="drop"
    :style="position"
    >
        <header>组件库</header>
		<slot></slot>
    </article>
</template>

<script>
export default {
    data(){
        return {
            position: {
                top: '50px',
                left: '0px'
            },
            beforeX: '',
            beforeY: ''
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
    .rk-mobile-drag{
        background-color: #fff;
        width: 170px;
        height: 400px;
        position: fixed;
        box-shadow: 0 2px 4px 0 #99cccc;
        border-radius: 5px;
    }
    .rk-mobile-drag header{
        height: 25px;
        line-height: 25px;
        border-bottom: 1px solid #d6d4d4;
    }
</style>
