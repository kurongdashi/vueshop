<template>
<div class="goods-list">
    <nav-header></nav-header>
    <bread>
      <span>Goods</span>
    </bread>

  <div class="accessory-result-page accessory-page">
    <div class="container">
      <div class="filter-nav">
        <span class="sortby">Sort by:</span>
        <a href="javascript:void(0)" class="default cur">Default</a>
        <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
        <a href="javascript:void(0)" class="filterby stopPop" @click="showPrice">Filter by</a>
      </div>
      <div class="accessory-result">
        <!-- filter -->
        <div class="filter stopPop" id="filter" :class="{'filterby-show':show}">
          <dl class="filter-price">
            <dt>Price:</dt>
            <dd><a href="javascript:void(0)" :class="{cur:priceChecked=='all'}">All</a></dd>
            <dd v-for="(price,index) in filterPrice">
              <a href="javascript:void(0)" :class="{cur:priceChecked==index}" @click="selectPrice(index)">{{price.startPrice}}-{{price.endPrice}}</a>
            </dd>
          </dl>
        </div>

        <!-- search result accessories list -->
        <div class="accessory-list-wrap">
          <div class="accessory-list col-4">
            <ul>
              <li v-for="good in goods">
                <div class="pic">
                  <a href="#"><img v-lazy="'static/'+good.prodcutImg" alt=""></a>
                </div>
                <div class="main">
                  <div class="name">{{good.productName}}</div>
                  <div class="price">¥{{good.prodcutPrice}}</div>
                  <div class="btn-area">
                    <a href="javascript:;" class="btn btn--m">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="md-overlay " v-show="overlayFlag" @click="closeOverlay"></div>
  <nav-footer></nav-footer>
</div>
</template>

<script type="text/ecmascript-6">
  import '../assets/css/base.css'
  import '../assets/css/product.css'
  import header from '../components/header/header'
  import footer from '../components/footer/footer'
  import bread from '../components/bread/bread'

  export  default {
      data(){
        return {
          goods:[],
          filterPrice:[
            {startPrice:0,endPrice:200},
            {startPrice:200,endPrice:500},
            {startPrice:500,endPrice:1000},
            {startPrice:1000,endPrice:2000},
          ],
          priceChecked:'all',
          show:false,
          overlayFlag:false
        }
      },
    methods:{
          selectPrice(index){
            this.priceChecked=index;
            this.closeOverlay();
          },
          showPrice(){
            this.show=true;
            this.overlayFlag=true;
          },
        closeOverlay(){
          this.show=false;
          this.overlayFlag=false;
        }
    },
    mounted(){
      this.$http.get('/api/goods').then(res=>{
          console.log(res.data.result);
          this.goods=res.data.result;
      });
    },
    components:{
      navHeader:header,navFooter:footer,bread
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
