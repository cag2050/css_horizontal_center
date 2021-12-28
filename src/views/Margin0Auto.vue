<template>
    <div class="outer">
        <div class="inner"></div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.outer {
    .inner {
        // 关键代码：只能进行水平的居中，且对浮动元素(float)或绝对定位元素(position:absolute)无效
        margin: 0 auto;
    }
}
</style>
