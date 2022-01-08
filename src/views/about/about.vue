<template>
  <div class="about-me">
      <div v-for="item in 200" :style="{'--s': item}" :key="item" ref="stars"></div>
      <div class="ship">
        <div class="tail"></div>
      </div>
  </div>
</template>

<script>
export default {
  name:'about',
  data() {
    return {
      stars_arr: []
    }
  },
  mounted(){
    this.stars()
  },
  methods: {
    stars(){
      this.stars_arr = this.$refs.stars
      this.stars_arr.forEach(item=> {
        item.style.width = `${Math.floor(Math.random()*3+1)}px`
        item.style.height = `${Math.floor(Math.random()*50+1)}px`
        item.style.top = `-${Math.random()*2000}px`
        item.style.left = `${Math.random()*2000}px`
        item.className = 'stars'
      })
    }
  },
}
</script>

<style scoped> 
  .about-me{
    transform-style: preserve-3d;
    transform: perspective(500px);
    position: absolute;
    top: 0;bottom: 0;
    left: 0;right: 0;
    width: 100vw;
    height: 100vh;
    background: #333;
    overflow: hidden;
  }
  .stars{
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    border-radius: 15%;
    animation: move 1s linear infinite;
    animation-delay: calc(.01s * var(--s));
    backface-visibility: hidden;
  }
  @keyframes move {
    0%{
      opacity: .1;
      transform: translateY(0);
    }
    30%{
      opacity: 1;
    }
    100%{
      opacity: 0;
      transform: translateY(1000px);
    }
  }
  .ship{
    position: relative;
    top: calc(50% + 150px);
    left: calc(50% - 25px);
    height: 100px;
    width: 50px;
    background: #fff;
    animation: all .5s infinite ease-in-out,left 2s linear 2s,right 2s linear 5s;

  }
  .tail{
    position: absolute;
    top: 100%;
    left: calc(50% - 7.5px);
    width: 15px;
    height: 30px;
    background: crimson;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    filter: blur(5px);
    
  }
  .tail::after{
    content: '';
    position: absolute;
    width: 30px;
    height: 50px;
    left: calc(-50%);
    background: crimson;
    filter: blur(15px);
  }
  @keyframes all {
    50%{
      top: calc(50% + 130px);
    }100%{
      top: calc(50% + 150px);
    }
  }
  @keyframes left {
    50%{
      top: calc(50% + 150px);
      transform: translateX(-300px);

    }
    100%{
      top: calc(50% + 150px);
      transform: translateX(0);
    }
  }
  @keyframes right {
    50%{
      top: calc(50% + 150px);
      transform: translateX(300px);

    }
    100%{
      top: calc(50% + 150px);
      transform: translateX(0);
    }
  }
</style>