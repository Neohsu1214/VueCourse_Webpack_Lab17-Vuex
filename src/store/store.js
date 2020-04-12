import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        someValue: 0 // 用來演示 vuex 如何與 v-model 進行雙向資料綁定
    },
    // getters 只能用來 讀取
    getters: {
        doubleCounter: function(state) {  // 也可以簡寫成 doubleCounter: (state) => { return state.counter * 2; }
            return state.counter * 2;
        },
        stringCounter: (state) => {
            return state.counter + ' Clicks';
        },
        someValue: (state) => {
            return state.someValue;
        }
    },
    // mutations 只能用來 寫值。 此外！ mutations只適用於資料異動是『Synchrously(同步的)』，所以不適合用來丟 ajax request
    mutations: {
        increment: (state, payload) => { // 也可以寫成 increment: function(state) { state.counter++; }
            if (payload) {
                state.counter += payload;
            } else {
                state.counter++;
            }
        },
        decrement: (state, payload) => {
            if (payload) {
                state.counter -= payload;
            } else {
                state.counter--;
            }
        },
        updateSomeValue: (state, payload) => {
            state.someValue = payload;
        }
    },
    // actions函式可以做到非同步資料異動，但最後要異動資料時，還是去執行 mutations函式 context.commit('mutations函式名稱')
    actions: {
        increment: (context, payload) => { // 因為只有一個context在進行，所以也可以簡化語法為 ({commit}) => {commit('mutations函式名稱')} 
            context.commit('increment', payload); // 轉呼叫 mutations函式了！
        },
        decrement: (context, payload) => { // 因為只有一個context在進行，所以也可以簡化語法為 ({commit}) => {commit('mutations函式名稱')}
            context.commit('decrement', payload); // 轉呼叫 mutations函式了！
        },
        // 以下非同步叫用的函式就直接用簡化語法寫啦！
        asyncIncrement: ({ commit }, payload) => {  // 請見 AnotherCounter，我們讓 AsyncIncrement 傳兩個參數進來，此時取用就變成了 payload.參數名稱
            // 模擬存取 http 的非同步延遲
            setTimeout(()=>{ 
                commit('increment', payload.by); // 轉呼叫 mutations函式了！
            }, payload.duration);
        },
        asyncDecrement: ({ commit }, payload) => { // 請見 AnotherCounter，我們讓 AsyncIncrement 傳兩個參數進來，此時取用就變成了 payload.參數名稱
            // 模擬存取 http 的非同步延遲
            setTimeout(()=>{ 
                commit('decrement', payload.by); // 轉呼叫 mutations函式了！
            }, payload.duration);
        },
        updateSomeValue: ({ commit }, payload) => {
            commit('updateSomeValue', payload);
        }
    }
});