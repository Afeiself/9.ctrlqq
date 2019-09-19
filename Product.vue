<template>
  <div class="product-app">
    <!--h1>Product.vue</h1-->
    <!--此div表示一个商品 循环-->
    <div class="goods-item" v-for="(item,index) of list" :key="index">
     <!--1:商品图片-->
     <img :src="'http://127.0.0.1:8080/'+item.img_url" />
     <!--2:商品名称-->
     <h5>{{item.lname}}</h5>
     <!--3:商品价格-->
     <div class="info">{{item.price}}</div>
     <!--4:加入购物车-->
     <mt-button @click="addcart" 
     :data-lid="item.lid"
     :data-price="item.price"
     :data-lname="item.lname">加入购物车</mt-button>
    </div><!--商品结束-->
    <mt-button size="large" @click="loadMore">加载更多</mt-button>
    <mt-button @click="jumpCart">查看购物车</mt-button>
  </div>
</template>
<script>
export default {
   data(){
     return {
       list:[],   //保存服务器返回商品列表
       pno:0      //当前页码
     }
   },
   created() {
     this.loadMore();
   },
   methods:{
     jumpCart(){
       //功能:跳转购物车组件
       this.$router.push("/Cart");
     },
     addcart(event){//
       //功能:将商品添加至购物车
       //?1:获取购物车中数据lid,lname,price
       var lid = event.target.dataset.lid;
       var lname=event.target.dataset.lname;
       var price=event.target.dataset.price;
       //console.log(lid+"|"+lname+"|"+price);
       //2:创建url发送服务器
       var url = "addcart";
       var obj = {lid:lid,lname:lname,price:price};
       //?3:发送ajax请求获取
       this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code == -1){
           //显示一个提示框
           this.$messagebox("消息","请登录").then(res=>{
             //回退:跳转登录组件 16:30
             this.$router.push("/Login");
           });
        }else if(res.data.code == -2){
           this.$messagebox("消息","添加失败");
        }else{
           this.$messagebox("消息","添加成功");
        } 
        // console.log(res);
        //4:获取服务器返回数据 
        //5:-1  提示请先登录 
        //  -2  添加失败
        //  1   添加成功
       })

     },
     loadMore(){
      //功能一:当组件创建成功后获取第一页数据 
      //1:创建url地址
      var url = "product";
      //1.1:将当前页码加一
      this.pno++;
      var obj = {pno:this.pno}
      //2:发送ajax请求获取第一页数据
      this.axios.get(url,{params:obj}).then(res=>{
       //3:将数据保存data中
       //console.log(res.data.data);
       //this.list = res.data.data;
       //数组拼接操作 11:30
       var rows = this.list.concat(res.data.data);
       //赋值
       this.list = rows;
      })
     }
   }
}
</script>
<style scoped>
/*1:最外层父元素:弹性布局*/
.product-app{
  display: flex;/*弹性布局*/
  flex-wrap:wrap;/*指定子元素换行*/
  justify-content: space-between;/*两端对齐*/
  padding:4px;/*内边距*/
}
/*2:修饰当前商品 49%*/
.goods-item{
  width:49%;
  border:1px solid #ccc;/*商品灰色边框*/
  border-radius: 5px;/*圆角*/
  margin:2px 0;
  padding:2px;
  box-sizing: border-box;/*重新计算元素宽度*/
  display: flex;
  flex-direction: column;/*商品内容按列排放*/
  min-height: 249px;/*高度*/
}
/*3:修饰当前商品中图片 10:18*/
.goods-item  img{
  width:100%;
}
/*4:修饰当前商品价格*/
.goods-item .info{
  color:red;
  font-size:19px;
}
</style>

