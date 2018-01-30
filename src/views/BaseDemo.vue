<template lang='pug'>
#base
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
#base
    .outer
        background-color yellow
        width 600px
        height 400px
        .inner
            width 400px
            height 200px
            background-color #ccc
</style>
