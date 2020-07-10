<template>
  <div class="good">
                    <img :src="data.pic" alt="">
                     <div>
                          <h3 class="title">{{ data.name }}</h3>
                          <p class="desc">{{data.characteristic }}</p>
                          <ul>
                              <li>
                                  <p>￥{{ data.minPrice }}</p>
                                  <p>低价</p>
                              </li>
                               <li>
                                  <p>￥{{ data.originalPrice}}</p>
                                  <p>原价</p>
                              </li>
                               <li>
                                  <p>{{ data.stores }}</p>
                                  <p>限量</p>
                              </li>
                          </ul>
                     </div>

  </div>
</template>

<script>
export default {
  components:{},
  props:[
      'data'
  ],
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
<style lang="less">
.good{
   
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 0.1rem;
            border-bottom: 0.01rem solid #E9E9E9;
            img{
                width: 1.58rem;
                height: 1.58rem;
                border-radius: 0.06rem;
                display: block;

            }
            .title{

                font-size: .2rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
       
            }
            .desc{
               font-size: .15rem;
                color: #b2b2b2;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-top: 0.1rem;

            }

            div{
                 margin-left:0.14rem;

                  ul{
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;

                        li{

                            text-align: center;
                            margin-left: 0.5rem;
                            margin-top: 0.46rem;

                            p{
                                color: #B2B2B2;
                                font-size: 0.18rem;
                            }
                        }
                        li:nth-of-type(1)>p:nth-of-type(1){

                            color: #d00000;
                            font-weight: 700;
                        }
                        li:nth-of-type(1) {
                            margin-left: 0;
                        }
                        li>p:nth-of-type(2) {
                            color: #B2B2B2;
                            font-size: 0.18rem;
                            margin-top: 0.06rem;
                        }
                  }

            }

    }

     


</style>