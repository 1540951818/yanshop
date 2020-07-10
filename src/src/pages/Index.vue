<template>
  <div class="wrapper">
        <Banner></Banner>
        <Kj></Kj>

  </div>
</template>

<script>
import Banner  from "../components/Banner"   // 引入banner组件
import Kj  from "../components/Kj"   // 引入kj组件
export default {
  components:{
        Banner,
        Kj
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.wrapper{}
</style>