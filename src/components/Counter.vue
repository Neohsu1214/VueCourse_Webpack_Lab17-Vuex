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
                this.$store.state.counter++; // 存取 store 中資料的方法 this.$store.state.資料名
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>