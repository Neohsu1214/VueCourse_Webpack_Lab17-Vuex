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
        increment: (state, payload) => { // 也可以寫成 increment: function(state) { state.counter++; }
            if (payload) {
                
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
        asyncIncrement: ({ commit }) => { 
            // 模擬存取 http 的非同步延遲
            setTimeout(()=>{ 
                commit('increment'); // 轉呼叫 mutations函式了！
            }, 500);
        },
        asyncDecrement: ({ commit }) => { 
            // 模擬存取 http 的非同步延遲
            setTimeout(()=>{ 
                commit('decrement'); // 轉呼叫 mutations函式了！
            }, 500);
        }
    }
});