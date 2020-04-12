<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.commit('increment'); // 異動 store 中資料的方法 this.$store.commit('mutation函式名稱')
            },
            decrement() {
                this.$store.commit('decrement');
            }
        }
    }
</script>