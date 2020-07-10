<template>
  <div class="home">
   
        <router-view />

        <van-tabbar route>
            <van-tabbar-item replace to="/home/index" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/home/cate" icon="apps-o">
                分类
            </van-tabbar-item>
             <van-tabbar-item replace to="/home/cart" icon="shopping-cart-o">
                购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/home/user" icon="manager-o">
                我的
            </van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>

export default {
  components:{
    
  },
  props:{},
  data(){
    return {
        banners:[]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){


  },
  mounted(){}
}
</script>
<style scoped lang="less">
.van-tabbar-item--active {
    color: #f00;
}
.van-tabbar-item__icon{
    font-size: 0.16rem;
    margin-top: 0.1rem;
}
</style>