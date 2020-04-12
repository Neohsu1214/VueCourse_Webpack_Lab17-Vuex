import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        someValue: 0 // 用來演示 vuex 如何與 v-model 進行雙向資料綁定
    },
    // getters 只能用來 讀取
    getters: {
        someValue: (state) => {
            return state.someValue;
        }
    },
    // mutations 只能用來 寫值。 此外！ mutations只適用於資料異動是『Synchrously(同步的)』，所以不適合用來丟 ajax request
    mutations: {
        updateSomeValue: (state, payload) => {
            state.someValue = payload;
        }
    },
    // actions函式可以做到非同步資料異動，但最後要異動資料時，還是去執行 mutations函式 context.commit('mutations函式名稱')
    actions: {
        updateSomeValue: ({ commit }, payload) => {
            commit('updateSomeValue', payload);
        }
    },
    modules: {
        // 透過 modules 把獨立宣告的 module 拉進來使用！
        counter // 即 counter: counter 但因為 ES6 支援『name: value 同名簡寫 
    }
});