/**
 * 拆開的 module 內容要先把 state, getters, mutations, actions 先建立好後，再用 export default {湊成一個物件} 
 */

const state = {
    someValue: 0 // 用來演示 vuex 如何與 v-model 進行雙向資料綁定
}

const getters = {
    someValue: (state) => {
        return state.someValue;
    }
}

const mutations = {
    updateSomeValue: (state, payload) => {
        state.someValue = payload;
    }
}

const actions = {
    updateSomeValue: ({ commit }, payload) => {
        commit('updateSomeValue', payload);
    }
}

export default {
    state, // 即 state: state 但因為 ES6 支援『name: value 同名可簡寫成 name』，後續的 getters 等同理
    getters,
    mutations,
    actions
}