<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    //因為每次都要寫 this.$store.commit('mutation函式名稱') 來異動資料太麻煩，啊名稱又都依樣是不能幫忙精簡一下逆？所以『Mutation輔助器』mapMutations 就誕生了！（撒花！）
    import { mapMutations } from 'vuex';


    export default {
        /* 改用 mapMutations 來取用同樣名稱的 mutation函式
        methods: {
            increment() {
                this.$store.commit('increment'); // 異動 store 中資料的方法 this.$store.commit('mutation函式名稱')
            },
            decrement() {
                this.$store.commit('decrement');
            }
        }
        */

        // 用『Mutation輔助器』 mapMutations 的寫法
        methods: mapMutations(['increment', 'decrement']) // 注意！不能寫成 methods: { mapMutations([]) } 因為 mapMutations 回傳的是 methods 物件，那有自己的 methods 函式怎麼辦？？！

        // 別緊張！偉大的 ES6(preset版) 提供了解套方法，就是加上 ...mapMutations 就可以了！(再撒花)
        /**
         * 這個才是最後的版本！
         * BUT!!! ... compile不會過，因爲還需要另一套件 babel-preset-stage-2 來支援將 ES6 的 preset 語法轉變成 ES5 
         * .babelrc也要再加上["stage-2"]的宣告才能正常 compile
         */
        /* 搞不定 babel 的設定，一直無法正常使用，先mark掉
        methods: {
            ...mapMutations(['increment', 'decrement']),
            ourOwnMethod: function() {
                return ;
            }
        } 
        */
    }
</script>