<template>
    <div class="home">
        <button @click="modelVisit">弹框展示</button>
            <RkmodelTest 
            v-if="modelData.isVisit" 
            :isVisit.sync="modelData.isVisit"
            title="一个精致的抽屉弹框"
            >
                <template slot="center">
                    <center  :centerForm.sync="modelData.centerFormData" />
                </template>
                <template slot="footer">
                    <button @click="a()">确认</button>
                    <div>OceanBase Cloud Platform</div>
                </template> 
            </RkmodelTest>
    </div>
</template>

<script>
import center from './center'

export default {
    components: {
        center
    },
    data(){
        return {
            modelData: {
                isVisit: false,
                centerFormData: {
                    inputa: '',
                    inputb: '' 
                }
            }
        }
    },
    methods: {
        modelVisit(){
            this.modelData.isVisit = true;
        },
        a(){
            alert('你填入了'+this.modelData.centerFormData.inputa)
        }
    }
}
</script>

<style>

</style>