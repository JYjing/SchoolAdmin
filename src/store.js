import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{ //放数据
        count:1
    },
    mutations:{ //操作数据的方法
        modifyCount:(state)=>{
            state.count++
        }
    },
    actions:{

    }
})