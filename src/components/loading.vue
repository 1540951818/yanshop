<template>
  <div class="div">
        <!-- <h1>loading</h1> -->
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3281904817,1077646612&fm=26&gp=0.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: [

  ],
  components:{
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style scoped>
.div{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    justify-items: center;
}
img{
    width: 200px;
    height: 200px;
}
</style>