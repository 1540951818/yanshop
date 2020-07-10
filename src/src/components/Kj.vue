<template>
  <div class="kj">
          <div class="tit">
              <p>全民砍价</p>
              <van-icon name="arrow" />
          </div>
          <van-loading size="24px" v-show="loading">加载中...</van-loading>
          <ul v-if="!loading">
             <li v-for="item of list" :key="item.id" class="item">
               
                  <Good :data = "item" ></Good>
                
             </li>
          </ul>

  </div>
</template>

<script>
import Good from "../components/Good"
export default {
  components:{
      Good
  },
  props:{},
  data(){
    return {
        list:[],
        loading:true
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    

    this.http.get("/shop/goods/kanjia/list").then((msg)=>{

           console.log(msg)
           this.list = msg.data.data.goodsMap
           this.loading = false

    })

  },
  mounted(){}
}
</script>
<style scoped lang="less">
.kj{
     .tit{

            font-size: .22rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            padding: 0 2rem;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            text-align: center;
            height: 0.65rem;
            border-bottom: 0.01rem solid #E9E9E9;
}
}

</style>