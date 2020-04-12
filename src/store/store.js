import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    // getters 只能用來 讀取
    getters: {
        doubleCounter: function(state) {  // 也可以簡寫成 doubleCounter: (state) => { return state.counter * 2; }
            return state.counter * 2;
        },
        stringCounter: (state) => {
            return state.counter + ' Clicks';
        }
    },
    // mutations 只能用來 寫值。 此外！ mutations只適用於資料異動是『Synchrously(同步的)』，所以不適合用來丟 ajax request
    mutations: {
        increment: (state) => { // 也可以寫成 increment: function(state) { state.counter++; }
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        }
    }
});