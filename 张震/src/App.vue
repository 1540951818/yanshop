<template>
  <div id="app">
        <Loading v-if="Loading"></Loading>
        <router-view></router-view>
  </div>
</template>
<script>
import Home from "@/components/Home"
export default {
    name: "app",
    data(){
        return {
            
        }
    },
    components:{
        Home,
    },
    methods:{

    },
    mounted(){
       
    },
    created(){

    },
    computed:{
        Loading(){
            return this.$store.state.Loading
        }
    }
}
</script>
<style lang="scss">
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
html,body,#app{
    height: 100%;
}

</style>