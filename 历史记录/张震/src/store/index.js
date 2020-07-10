import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        Loading:false,
    },
    mutations:{
        Loading(state,str){
            state.Loading = str
        }
    },
    getters:{

    },
    actions:{

    },
    plugins:[createPersistedState()]
})
export default store