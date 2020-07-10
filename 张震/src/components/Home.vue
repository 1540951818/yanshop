<template>
  <div class="home">
        
        <div class="zz-content">
                <div class="zz-left">
                        <ul>
                                <li :class="index == 0?'zz-active':''" @click="toogle('/',0)">学员管理</li>
                                <li :class="index == 1?'zz-active':''" @click="toogle('/teacher',1)">讲师管理</li>
                                <li >助教管理</li>
                                

                        </ul>
                </div>
                <div class="zz-right">
                        <router-view></router-view>
                </div>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        index:0
    }
  },
  props: [

  ],
  components:{
  },
  mounted() {
        
  },
  methods:{
        toogle(str,index){
                this.index = index
                this.$router.push({
                        path:str
                })
        }
  },
 }
</script>

<style scoped>
.home{
        width: 100%;
        height: 92%;
}
.zz-head{
        width: 100%;
        height: 80px;
        background: blue;
}
.zz-content{
        width: 100%;
        height: 100%;
        display: flex;
}
.zz-left{
        width: 10%;
        height: 100%;
        text-align: center;
        border-right: 1px solid #bbbbbb;
}
.zz-content>.zz-left>ul{
        width: 100%;
        height: 100%;
}
.zz-content>.zz-left>ul>li{
        height: 50px;
        line-height: 50px;
}
.zz-right{
        width: 100%;
        height: 100%;
}
.zz-active{
    color: orange;
}
</style>