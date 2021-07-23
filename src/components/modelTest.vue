<template>
    <div class="rk-modelTest">
        <div class="rk-sidebox-backdrop" @click="handleClose"></div>
        <div class="rk-sidebox-content" :style="contentStyle">
            <div class="rk-header">
                {{title}}
            </div>
            <div class="rk-center">
                <slot name="center" />
            </div>
            <div class="rk-footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        setTimeout(()=>this.widthActive = this.width); 
    },
    destroyed(){
        
    },
    props: {
        width: {
            default: '550px'
        },
        title: {
            type: String,
            default: '详情展示'
        }
    },
    data(){
        return {
            height: '100%',
            widthActive: '0'
        }
    },
    computed: {
        contentStyle(){
            return {
                width: this.widthActive, 
                height: this.height
            }
        }
    },
    watch: {
        widthActive(){
            // var ele = document.getElementsByClassName('rk-sidebox-content');
            // console.log(getComputedStyle(ele[0],null)['width'])
            //     while(getComputedStyle(ele[0],null)['width']){
            //         this.$emit('update:isVisit', false)
            //     }
        }
    },
    methods: {
        handleClose(){
            this.widthActive = '0';
            this.$emit('update:isVisit', false)
        }
    }
}
</script>

<style scoped>
    .rk-modelTest .rk-sidebox-backdrop{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 199;
        background-color: rgb(31 33 38 / 25%);
    }
    .rk-modelTest .rk-sidebox-content{
        z-index: 200;
        position: fixed;
        left: 0;
        top: 0px;
        background-color: white;
    }
    .rk-modelTest .rk-sidebox-content .rk-header, .rk-modelTest .rk-sidebox-content .rk-footer{
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    .rk-modelTest .rk-sidebox-content .rk-center{
        height: calc(100% - 90px);
    }
    .rk-sidebox-content{
        transition: .5s;
    }
</style>