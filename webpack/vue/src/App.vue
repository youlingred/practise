<template>
    <div>
    {{hi}}
    <div>
       222
       <!-- <router-link :to="{ name: 'child' }">go to index</router-link> -->
       <router-link to="/index/child">go to index</router-link>
    </div>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            hi:'hello'
        }
    }
}
</script>
<style lang="less" scoped>
div{
    color:green;
}
</style>