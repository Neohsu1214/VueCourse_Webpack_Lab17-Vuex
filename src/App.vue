<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
                <hr>
                <!-- 以下示範如何透過 v-model 來跟 vuex 中的資料進行雙向綁定：使用computed並實作 get() 與 set() -->
                <input type="text" v-model="someValue">
                <p> SomeValue: {{ someValue }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        data() {
            return {
                
            }
        },
        computed: {
            // 透過 v-model 來跟 vuex 中的資料進行雙向綁定：使用computed並實作 get() 與 set() 
            someValue: {
                get() { // 即 get: function() {}
                    // 叫用 vuex 的 getters函式
                    return this.$store.getters.someValue;
                }, 
                set(newValue) {
                    // 叫用 vuex 的 actions函式
                    this.$store.dispatch('updateSomeValue', newValue); // 因為是叫用 actions函式，所以是用 dispatch
                }
            }
        },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult
        }
    }
</script>

