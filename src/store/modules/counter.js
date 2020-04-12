/**
 * 拆開的 module 內容要先把 state, getters, mutations, actions 先建立好後，再用 export default {湊成一個物件} 
 */

const state = {
    counter: 0
}

const getters = {
    doubleCounter: function (state) {  // 也可以簡寫成 doubleCounter: (state) => { return state.counter * 2; }
        return state.counter * 2;
    },
    stringCounter: (state) => {
        return state.counter + ' Clicks';
    }
}

const mutations = {
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
    }
}

const actions = {
    increment: (context, payload) => { // 因為只有一個context在進行，所以也可以簡化語法為 ({commit}) => {commit('mutations函式名稱')} 
        context.commit('increment', payload); // 轉呼叫 mutations函式了！
    },
    decrement: (context, payload) => { // 因為只有一個context在進行，所以也可以簡化語法為 ({commit}) => {commit('mutations函式名稱')}
        context.commit('decrement', payload); // 轉呼叫 mutations函式了！
    },
    // 以下非同步叫用的函式就直接用簡化語法寫啦！
    asyncIncrement: ({ commit }, payload) => {  // 請見 AnotherCounter，我們讓 AsyncIncrement 傳兩個參數進來，此時取用就變成了 payload.參數名稱
        // 模擬存取 http 的非同步延遲
        setTimeout(() => {
            commit('increment', payload.by); // 轉呼叫 mutations函式了！
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => { // 請見 AnotherCounter，我們讓 AsyncIncrement 傳兩個參數進來，此時取用就變成了 payload.參數名稱
        // 模擬存取 http 的非同步延遲
        setTimeout(() => {
            commit('decrement', payload.by); // 轉呼叫 mutations函式了！
        }, payload.duration);
    }
}

export default {
    state, // 即 state: state 但因為 ES6 支援『name: value 同名可簡寫成 name』，後續的 getters 等同理
    getters,
    mutations,
    actions
}