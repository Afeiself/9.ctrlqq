<template>
  <div class="product-app">
    <!--头部图片-->
    <div>
        <img style="width:375px;height:130px;" src="../../assets/banner_ju.png" alt="">
    </div>
    <div class="ju_style" style="width:375px;height:69px">
        <mt-button>
            <img src="../../assets/ju.png" height="48px" width="48px" slot="icon">
            巨划算  
        </mt-button>
        <mt-button>
            <img src="../../assets/tao.png" height="48px" width="48px" slot="icon">
            掏优购  
        </mt-button>
        <mt-button>
            <img src="../../assets/bang.png" height="48px" width="48px" slot="icon">
            人气榜  
        </mt-button>
    </div>
    <!--具体页面-->
    <div class="juhuasuan">
    <!--添加三个按钮-->
    <mt-button @click="active='tab1'">全部</mt-button>
    <mt-button @click="active='tab2'">女装</mt-button>
    <mt-button @click="active='tab3'">男装</mt-button>
    <mt-button @click="active='tab4'">内衣</mt-button>
    <mt-button @click="active='tab5'">母婴</mt-button>
    <!--添加三个面板-->
    <mt-tab-container v-model="active" >
       <mt-tab-container-item id="tab1">
       1111111
       </mt-tab-container-item>
       <mt-tab-container-item id="tab2">
       2222222
       </mt-tab-container-item>
       <mt-tab-container-item id="tab3">
       33333333
       </mt-tab-container-item>
       <mt-tab-container-item id="tab4">
       44444444
       </mt-tab-container-item>
       <mt-tab-container-item id="tab5">
       55555555
       </mt-tab-container-item>
    </mt-tab-container>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return {active:"tab3"}
  }
}
</script>
<style scoped>
    .ju_style{

    }
    .mint-button{
        width:112px;
        height:68px;
        color:#ff3c3c;
        font-size:14px;

    }
    .mint-button img{
        margin:6.5px 0 0 6.5px;
    }
    .juhuasuan .mint-button{
        width:62.47px;
        height:3.75rem;
        color:#444;
        
    }
</style>

