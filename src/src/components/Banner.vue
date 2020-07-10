<template>
 
      <div id="banner">
        <van-swipe class="my-swipe" :autoplay="3000" initial-swipe="1" indicator-color="white">
            <van-swipe-item v-for="item in banners" :key="item.id">
                    <img :src="item.picUrl" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="nav">
            <ul>
                <li>
                    <img src="" alt="">
                    <p>签到</p>
                </li>
                 <li>
                    <img src="" alt="">
                    <p>礼券</p>
                </li>
                 <li>
                    <img src="" alt="">
                    <p>砍价</p>
                </li>
                 <li>
                    <img src="" alt="">
                    <p>专栏</p>
                </li>
            </ul>
        </div>

      </div>



</template>

<script>
export default {
  components:{},
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

              this.http.get("/banner/list").then((msg)=>{

             console.log(msg)
             this.banners = msg.data.data

        })
  },
  mounted(){}
}
</script>
<style scoped>


  #banner{
      position: relative;
  }
  #banner .my-swipe .van-swipe-item img {
     width:100%;
  }
  #banner .nav{
      position: absolute;
      bottom: 0;
      left:0;
      width: 100%;
  }
  #banner .nav ul{
      display: flex;
      width:100%;
      background: #ccc;
  }
#banner .nav ul li{
    flex: 1;
    height: 50px;
    font-size: 0.26rem;


}
</style>