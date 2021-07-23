<template>
    <div class="rk-header">
        <div class="rk-logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="rk-header-button">
            <router-link class="header-link" v-for="(menu, index) in menus" :key="index" :to="menu.path" active-class="menu-active" :exact="true">{{menu.name}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    computed: {
        menus(){
            var res = this.$router.options.routes.filter((item) => {
                return item.name === 'menu'
            })[0].children;
            return res;
        }
    },
    methods: {

    }
}
</script>  

<style scoped>
    .rk-header{
        height: 50px;
        display: flex;
        align-items: center;
        background-color: #FFFFFF;
        box-shadow: 0 2px 4px 0 #99CCCC;
    }
    .rk-header-button .header-link{
        width: 100px;
        height: 35px;
        line-height: 35px;
        border-radius: 5px;
        margin-left: 1%;
        color: grey;
        transition: 0.3s;
    }
    .rk-header-button{
        display: flex;
        align-items: center;
    }
    .rk-header-button .header-link:hover
    {
        background-color: hsl(180, 53%, 80%);
        color: #FFFFFF;
    }
    .rk-header-button .menu-active{
        background-color: hsl(180, 53%, 80%);
        color: #FFFFFF;
    }
    .rk-logo, .rk-logo img{
        height: 90%;
        margin: 0 6px;
    }
</style>