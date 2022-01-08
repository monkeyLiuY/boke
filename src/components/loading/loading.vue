<template>
  <div class="loading-box">
    <div class="loading-card">
      <span class="txt">加载中哦~~</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      
    }
  },
  mounted() {
  
  },  
}
</script>

<style scoped>
  .loading-box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background:rgba(17, 17, 17, 0.3);
    z-index: 1;
  }
  .loading-card{
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 25px);
    width: 50px;
    height: 70px;
    background: rgb(224, 74, 15);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    animation: jump 2s ease-in-out infinite;
  }
  @keyframes jump {
    50%{
      top: 50%;
    }100%{
      top: calc(50% - 50px);
    }
  }
  .loading-card::before{
    content: '';
    position: absolute;
    top: 20px;
    left: 10px;
    width: 5px;
    height: 15px;
    background: #444;
    border-radius: 5px;
    animation: wink 1.3s ease-in-out infinite;
  }
  .loading-card::after{
    content: '';
    position: absolute;
    top: 20px;
    left: calc(100% - 15px);
    width: 5px;
    height: 15px;
    background: #444;
    animation: wink 1.3s ease-in-out infinite;
    border-radius: 5px;
  }
  @keyframes wink {
    50%{
      transform: scale(.5);
    }100%{
      transform: scale(1);
    }
  }
  .txt{
    position: absolute;
    display: block;
    width: 100px;
    height: 50px;
    top: calc(50% + 25px);
    left: calc(50% - 50px);
    text-align: center;
    line-height: 50px;
    font-size: 10px;
    letter-spacing: 2px;
  }
</style>