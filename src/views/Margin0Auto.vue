<template lang='pug'>
#margin
    .outer
        .inner 111
</template>

<script>
export default {
    name: '',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style lang='stylus'>
#margin
    .outer
        background-color yellow
        width 600px
        height 400px
        .inner
            width 400px
            height 200px
            background-color #ccc
            // 关键代码：只能进行水平的居中，且对浮动元素(float)或绝对定位元素(position:absolute)无效
            margin 0 auto
</style>
