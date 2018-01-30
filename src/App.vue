<template lang='pug'>
#app
    div 路由列表：
    router-link.block(to='/margin0auto') margin: 0 auto;
    router-link.block(to='/base') 基础布局，都是在此基础上加样式；每个组件都需要修改根div，防止样式覆盖
    router-link.block(to='/') hello
    div ----下面是内容-----
    <router-view/>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang='stylus'>
#app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .block
        display block
</style>
