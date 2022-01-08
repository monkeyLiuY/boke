<template>
  <div class="contents-box" ref="txt">
   <div class="txt-box">
      <router-link to="/essay">
        <div class="txt-item" 
        v-for="(item,index) in 100" :key="index"
        @click="event(index)" :class="current_index==index?'current':''">
        <div class="txt" ref="div">
          <span>这些是文章</span>
          <div class="img"></div>
          <div class="targe">
            <span>css</span>
            <span>js</span>
            <span>html</span>
            <span>vue</span>
            <span>vue</span>
          </div>
        </div>
        <span class="index-order">第{{index + 1}}条</span>
      </div>
      </router-link>
   </div>
   <div class="numlist">
     <ul>
       <li class="before">上一页</li>
       <li v-for="item in 8" :key="item">
         <span class="li" v-if="item==1||item==8||item>=3&&item<7">{{item}}</span>
         <span v-else class="li-else">...</span>
       </li>
       <li class="after">下一页</li>
     </ul>
   </div>
   
  </div>
</template>

<script>
export default {
  name:'contents',
  data() {
    return {
      current_index: -1,
      i: 0
    }
  },
  methods:{
    event(index){
      this.current_index = index
      this.$store.state.con_ess_switch = false
    }
  }
}
</script>

<style scoped>
  .targe{
    position: absolute;
    bottom: 5px;
    left: 59%;
    display: flex;
    width: 40%;
    height: 20px;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    background-clip: content-box;
  }
  .targe span{
    display: flex;
    width: 45px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: rgb(121, 121, 121);
    border-radius: 6px;
    margin-left: 6px;
    
  }
  .img{
    position: absolute;
    top: calc(50% - 42.5px);
    width: 85px;
    height: 85px;
    border-radius: 10px;
    box-shadow: 0 0 5px #fff;
  }
  .contents-box{
    position: relative;
    width: 60%;
    height: calc(100vh - 200px);
    top: 100px;
    left: 200px;
    cursor: default;
    box-sizing: border-box;
    background-clip: content-box;
    box-shadow: 0 0 15px #fff;
    border-radius: 15px;
    overflow-y: scroll;
  }
  .txt-box{
    padding: 8px;
    box-sizing: border-box;
    background-clip: content-box;    
  }
  .txt-box .txt-item{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 150px;
    padding: 10px;
    margin-bottom: 8px;
    box-sizing: border-box;
    background-clip: content-box;
    border-radius: 5px;
    font-size: 10px;
    background: #444;
  }
  .txt{
    flex: 1;
    letter-spacing: 2px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
  }
  .index-order{
    display: flex;
    width: 50px;
    font-size: 10px;
    flex-direction: row-reverse;
  }
  .numlist{
    position: fixed;
    bottom: 40px;
  }
  .numlist li{
    list-style-type: none;
    float: left;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    margin: 5px;
    background:floralwhite;
    color: #111;
    border-radius: 5px;
    transition: .4s;
  }
  .numlist .li-else{
   
  } 
  .numlist li:hover{
    background: crimson;
    color: #fff;
  }
   .numlist .before,.numlist .after{
    width: 60px;
    height: 30px;
  }
</style>