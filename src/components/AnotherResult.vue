<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>NUmber of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    export default {
        // 要呈現資料的地方，記得要改用 computed 來接收即時更新的 store 資料內容
        computed: {
            counter: function() {
                return this.$store.getters.doubleCounter;
            },
            stringCounter: function() {
                return this.$store.getters.stringCounter;
            }
        }
    }
</script>