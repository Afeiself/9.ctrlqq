<template>
  <div>
    <!--面板组件-->
      <!--父元素-->
      <mt-tab-container v-model="active">
        <!--子面板-->
        <mt-tab-container-item id="tab1">
          
        
        </mt-tab-container-item>

        <mt-tab-container-item id="tab2">
          <!--头部header-->
          <mt-header title="8.8包邮">
            <router-link to="/" slot="left">
              <mt-button icon="back" style="width:14px;height:24px"></mt-button>
            </router-link>
            <img style="width:23px;height:23px" icon="more" slot="right" src="../../assets/f_home.png"></img>
          </mt-header>
          <!--3:调用子组件-->
          <Product></Product> 
        </mt-tab-container-item>

        <mt-tab-container-item id="tab3">
          <!--头部header-->
          <mt-header title="超级搜">
            <router-link to="/" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
            <img icon="more" slot="right"></img>
          </mt-header>
  
        </mt-tab-container-item>

        <mt-tab-container-item id="tab4">
          <!--头部header-->
          <mt-header title="巨划算">
            <router-link to="/" slot="left">
              <mt-button icon="back" style="width:14px;height:24px"></mt-button>
            </router-link>
          </mt-header>
        
        </mt-tab-container-item>
        
        <mt-tab-container-item id="tab5">
          <!--头部header-->
          <mt-header title="看货">
            <router-link to="/" slot="left">
              <mt-button icon="back" style="width:14px;height:24px"></mt-button>
            </router-link>
            <img style="width:23px;height:23px" icon="more" slot="right" src="../../assets/f_home.png"></img>
          </mt-header>
          <!--3:调用子组件-->
          <Product></Product>  
        </mt-tab-container-item>
       </mt-tab-container>
    <!--底部导航栏-->
    <mt-tabbar fixed v-model="active"> 
     <!--按钮-->
     <mt-tab-item id="tab1" @click.native="changeState(0)">
        <!--为图片添加属性：插槽-->
        <tabicon
          :normalImage="require('../../assets/022h.png')"
          :selectedImage="require('../../assets/022.png')"
          :focused="currentIndex[0].isSelect"
           ></tabicon>
        首页
     </mt-tab-item>
     <mt-tab-item id="tab2" @click.native="changeState(1)">
        <tabicon
          :normalImage="require('../../assets/023.png')"
          :selectedImage="require('../../assets/023b.png')"
          :focused="currentIndex[1].isSelect"
           ></tabicon>
        8.8包邮
     </mt-tab-item>
     <mt-tab-item id="tab3" @click.native="changeState(2)">
        <tabicon
          :normalImage="require('../../assets/024.png')"
          :selectedImage="require('../../assets/024.png')"
          :focused="currentIndex[2].isSelect"
           ></tabicon>
        查券
     </mt-tab-item>
     <mt-tab-item id="tab4" @click.native="changeState(3)">
        <tabicon
          :normalImage="require('../../assets/025.png')"
          :selectedImage="require('../../assets/025j.png')"
          :focused="currentIndex[3].isSelect"
           ></tabicon>
        巨划算
     </mt-tab-item>

     <mt-tab-item id="tab5" @click.native="changeState(4)">
         <tabicon
          :normalImage="require('../../assets/026.png')"
          :selectedImage="require('../../assets/026v.png')"
          :focused="currentIndex[4].isSelect"
           ></tabicon>
        看货
     </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
//1:引入子组件
import Product from "./Product.vue"
import tabicon from "./tabicon.vue"

export default {
  data(){
    return {
      //面板中显示子组件id
      active:"tab1",
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
      ]
     }
  },
  methods: {
    changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
      }
    }
  },
  //2:注册子组件
  components:{
    "Product":Product,
    "tabicon":tabicon
  }
}
</script>
<style scoped>
.mint-tab-item-label{
  height:53px;
  width:75px;
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#666;
  margin:0 0 0 -4px;
}
/*修改默认tab选中文字样式*/
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#ff8098;
  margin:0 0 0 -4px
}
.mint-header{
  background:#f5f5f5;
}
.mint-header{
  color:black;
  font-size:19.6px;
}
</style>
