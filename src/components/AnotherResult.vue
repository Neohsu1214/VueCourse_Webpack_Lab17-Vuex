<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        // 要呈現資料的地方，記得要改用 computed 來接收即時更新的 store 資料內容
        computed: {
            counter: function() {
                return this.$store.state.counter * 2;
            }
        }
    }
</script>