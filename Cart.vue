<template>
  <div class="cart">
    <!--1:顶部复选框：全选-->
    <div class="selectall">
    全选 <input type="checkbox" @change="selectAll"/>
    </div>
    <!--2:商品信息-->
    <div class="cart-item" v-for="(item,index) of list" :key="index">
      <div class="leftText">
        <input type="checkbox" v-model="item.cb"/>
        <div class="lname">{{item.lname}}</div>
        <div class="price">{{item.price}}</div>
      </div>
      <mt-button @click="deleteItem" 
      :data-id="item.id">删除</mt-button>
    </div>
    <!--3:购物中商品数量:删除选中商品,清空购物车-->
    <div>
      购物车中商品数量
      <span style="color:red">0</span>
      <mt-button @click="deleteItems">删除选中商品</mt-button>
      <mt-button>清空购物车</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[]   //当前登录用户购物车列表
    }
  },
  created() {
    //当前组件创建成功回调函数
    this.loadMore();
  },
  methods:{
    selectAll(event){
      //功能:为全选按钮绑定事件 change
      //当全选按钮状态为checked=true
      //所有商品列表 cb=true
      //当全选按钮状态为checked=false
      //所有商品列表 cb=false
      //(1)获取当前按钮状态 true
      var cb = event.target.checked
      //(2)创建循环遍历所有商品属性cb值与全选状态
      //   一致
      for(var item of this.list){
        item.cb = cb;
      }
    },
    deleteItems(){
      //功能:删除用户删除中多个商品
      //(1)显示确认对话框
      this.$messagebox.confirm("是否删除指定数据").then(res=>{
       //(2)创建变量保存选中id值  id
       var id = "";  //1,2,3
       //(3)创建循环遍历数组中每个元素
       for(var item of this.list){
        //(4)判断当前元素属性cb是否等于true
        if(item.cb){
         //(5)拼接id      2,3,4,
         id+=item.id+",";
        }
       }//for end
       //(6)去除字符串中最后一个逗号
       //id="2,3,4,"
       id = id.slice(0,-1);
      //(7)判断用户是否选中商品 请选择需要删除商品
      if(id==""){
        this.$toast("请选择需要删除商品");
        return;
      }
      //(8)创建url 创建obj 发送ajax请求
      var url = "delItems";
      var obj = {id:id};
      this.axios.get(url,{params:obj}).then(res=>{
       //(9)获取服务器返回数据
       //(10)判断删除多个商品是否成功
       if(res.data.code==-1){
         this.$toast("删除失败");
       }else{
         this.$toast("删除成功");
         this.loadMore();
       }
       //(11)刷新操作 loadMore()
      })
      })
    },
    deleteItem(event){
      //功能:用户点击删除按钮完成删除指定商品任务
      //(1)为按钮绑定点击事件调用deleteItem 
      //(2)显示确认框如果用户选 确定
      this.$messagebox.confirm("是否删除指定数据").then(res=>{
       //(3)将当前商品id传递函数
       var id = event.target.dataset.id;
       //(4)发送ajax请示完成删除任务
       var url="delItem";
       var obj={id:id};
       this.axios.get(url,{
         params:obj
       }).then(res=>{
         if(res.data.code==1){
          this.$toast("删除成功");
          this.loadMore();//刷新
         }else{
          this.$toast("删除失败"); 
         }
       }) 
       //(5)删除成功 提示"删除成功"
      }).catch(err=>{
      })
    },
    loadMore(){
      //功能:获取当前用户购物车列表
      //1:创建url请求服务器地址
      var url = "carts";
      //2:发送ajax 请求(让服务器程序完成功能)
      this.axios.get(url).then(res=>{
        if(res.data.code == -1){
         //4:如果服务器返回-1 请登录
         this.$messagebox("消息","请登录").then(res=>{
          //回调函数（用户点击确认按钮后调用函数）
          this.$router.push("/Login")
         })
        }else{
      //3:获取服务器返回数据
      //this.list = res.data.data;
      //添加一个新功能:为数据添加属性cb
      //3.1:创建循环遍历res.data.data中数据(顺序)
      var rows = res.data.data;
      for(var item of rows){
       //3.2:为其添加属性cb值false(顺序)
       item.cb = false;
      }
      //3.3:将新数组赋值list(顺序)
      this.list = rows;
     }
   })
  }
 }
}
</script>
<style>
/*1:商品项目元素*/
.cart-item{
  display: flex;/*弹性布局*/
  justify-content: space-between;/*两端对齐*/
  align-items: center;
  border-bottom: 1px solid #ccc;/*底部边线*/
  margin-top:25px;    /*顶部外边距*/
}
/*2:修改左侧文字 复选 商品名称 价格*/
.leftText{
  display: flex;/*子元素水平对齐*/
  align-items: center;/*垂直居中*/
}
/*3:商品名称 9:53*/
.lname{
  margin-left:25px;
}
.price{
  margin-left:25px;
}
</style>

