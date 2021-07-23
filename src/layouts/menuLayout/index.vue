<template>
    <div class="menu-layout">
        <mobileConfig />
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
import mobileConfig from './components/mobile-config'

export default {
    components: {
        mobileConfig
    },
    methods: {

    }
}
</script>

<style scoped>
    .menu-layout{
        height: 100%;
    }
</style>