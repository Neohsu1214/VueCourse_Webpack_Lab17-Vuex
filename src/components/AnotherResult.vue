<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>NUmber of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
    //因為每次都要寫 this.$store.getters.getter名稱 來叫用太麻煩，啊名稱又都依樣是不能幫忙精簡一下逆？所以『Getter輔助器』mapGetters 就誕生了！（撒花！）
    import { mapGetters } from 'vuex';

    export default {
        /* 改用 mapGetters 來取用同樣名稱的 getter
        // 要呈現資料的地方，記得要改用 computed 來接收即時更新的 store 資料內容
        computed: {
            counter: function() {
                return this.$store.getters.doubleCounter;
            },
            stringCounter: function() {
                return this.$store.getters.stringCounter;
            }
        }
        */

        // 用『Getter輔助器』mapGetters的寫法
        computed: mapGetters(['doubleCounter', 'stringCounter']) // 注意！不能寫成 computed: { mapGetters([]) } 因為 mapGetters 回傳的是 computed 物件，那有自己的 computed 函式怎麼辦？？！

        // 別緊張！偉大的 ES6(preset版) 提供了解套方法，就是加上 ...mapGetters 就可以了！(再撒花)
        /**
         * 這個才是最後的版本！
         * BUT!!! ... compile不會過，因爲還需要另一套件 babel-preset-stage-2 來支援將 ES6 的 preset 語法轉變成 ES5 
         * .babelrc也要再加上["stage-2"]的宣告才能正常 compile
         */
        /* 搞不定 babel 的設定，一直無法正常使用，先mark掉
        couputed: {
            ...mapGetters(['doubleCounter', 'stringCounter']),
            ourOwnMethod: function() {
                return ;
            }
        } 
        */
    }
</script>