<template>
  <div class="zz-user">
        <div class="zz-head">
            <span>学员管理</span>
        </div>
        <div class="zz-inp">
            <span>学员状态</span>
            <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <span>学员名称</span>
        <el-input
        
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
<span>手机号</span>
    <el-input
    style="width:200px"
  placeholder="请输入内容"
  v-model="tell"
  clearable>
</el-input>
<el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
<el-button type="primary" icon="el-icon-search" @click="aaa">重置</el-button>
        </div>
        <div class="zz-table">
            <table border="1">
                <tr>
                    <th>
                        <input type="checkbox">
                    </th>
                    <th>学员名称</th>
                    <th>手机号</th>
                    <th>状态</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item,index) in list" :key="index">
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>
                        {{ item.nickname }}
                    </td>
                    <td>
                        {{ item.mobile }}
                    </td>
                    <td>
                        {{ item.status == 1?'启用':'禁用' }}
                    </td>
                    <td>
                        {{ item.created_at | data }}
                    </td>
                    <td class="blue">
                        详情-编辑-禁用-删除-重置密码
                    </td>
                </tr>
            </table>
            <!-- m -->
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        arr:[],
        list:[],
        options: [{
          value: '启用',
          label: '启用'
        }, {
          value: '禁用',
          label: '禁用'
        }],
        value:"",
        input:"",
        tell:"",
    }
  },
  props: [

  ],
  components:{
  },
  mounted() {
    this.$axios.get("/static/list.json").then((res)=>{
                this.arr = res.data
                this.list = this.arr
    })
  },
filters:{
    data(val){
        let si = val.substring(0,4)
        let qer = val.substring(4,6)
        let qer1
        if(qer>12){
            qer1 = qer.substring(0,1)
        }else{
             qer1 = val.substring(4,6)
        }
        let her = val.substring(6,8)
        let herr
        if(her>31){
            herr = her.substring(0,1)
        }else{
            herr = val.substring(6,8)
        }
        let her1 = val.substring(8,9)
        let her11
        if(her1>24){
            her11 = her1.substring(0,1)
        }else{
            her11 = val.substring(8,9)
        }
        let her2 = val.substring(9,10)
        return si + "/" + qer1 +'/'+ herr + ' ' + her11 + ':' + '0'+ her2
    }
},
  methods:{
        change(){
            this.$axios.get("/static/list.json").then((res)=>{
                this.list = res.data.splice(0,5)
            })
        },
        search(){
            if(this.value=="" && this.input=="" && this.tell == ""){
                alert("输入框不能为空")
            }else{
                if(this.value == "启用"){
                    this.list = this.arr.filter((item,index)=>{
                        return item.status == 1
                    })
                }else if(this.value == "禁用"){
                    this.list = this.arr.filter((item,index)=>{
                        return item.status == 0
                    })
                }
                if(this.input == ""){
                    return false
                }else{
                    this.list = this.arr.filter((item,index)=>{
                        return item.nickname.includes(this.input)
                    })
                }
                if(this.tell == ""){
                    return false
                }else{
                    this.list = this.arr.filter((item,index)=>{
                        return item.mobile.includes(this.tell)
                    })
                }
            }
        },
        aaa(){
            this.value = ""
            this.input = ""
            this.tell = ""
            this.$axios.get("/static/list.json").then((res)=>{
                this.arr = res.data
                this.list = this.arr
            })
        }
  },
 }
</script>

<style scoped>
.blue{
    color: blue;
}
.zz-user{
    width: 100%;
    height: 100%;
}
.zz-head{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #bbbbbb;
    line-height: 30px;
}
.zz-head>span{
    margin-left: 30px;
}
.zz-inp{
    width: 100%;
    height: 50px;
    display: flex;
}
.zz-table>table{
    width: 100%;
    text-align: center;
}
</style>