<template>
  <div class="timer-box">
    <div v-for="item in 12" :style="{'--t': item}" :key="item" class="order">
      <span>{{item}}</span>
    </div>
    <span class="hours" ref="hours"></span> 
    <span class="minutes" ref="minutes"></span>
    <span class="secounds" ref="secounds"></span>
    <div class="am-pm">{{h>12?am_pm[13]:am_pm[12]}}</div>
  </div>
</template>

<script>
export default {
  name: 'timer',
  data() {
    return {
      h: 0,
      m: 0,
      s: 0,
      am_pm:{
        12:'am',
        13:'pm'
      }
    }
  },
  mounted(){
    setInterval(() => {
       this.get_time()
    }, 1000);
  },
  methods:{
    get_time(){
      const time = new Date()
      this.h = time.getHours()
      this.m = time.getMinutes()
      this.s = time.getSeconds()
      this.$refs.hours.style.transform = `rotate(${30*this.h}deg)`
      this.$refs.minutes.style.transform = `rotate(${6*this.m}deg)`
      this.$refs.secounds.style.transform = `rotate(${6*this.s}deg)`
      
    }

  }
}
</script>

<style scoped>
 .timer-box{
   position: fixed;
   top: 50px;
   left: calc(100% - 250px);
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background: rgb(175, 17, 49);
 }
 .timer-box::after{
   content: '';
   position: absolute;
   width: 15px;
   height: 15px;
   top: calc(50% - 7.5px);
   left: calc(50% - 7.5px);
   border-radius: 50%;
   background: rgb(245, 203, 17);
 }
 .order{
   position: absolute;
   left: 50%;
   top: 0;
   transform-origin: 0 100px;
   transform: rotate(calc(29.6deg * var(--t)));
 }
 .hours{
   position: absolute;
   top: calc(50% - 40px);
   left: calc(50% - 4px);
   display: block;
   width: 8px;
   height: 40px;
   transform-origin: 4px 40px;
   background: rgb(24, 174, 179);
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
 }
 .minutes{
   position: absolute;
   display: block;
   top: calc(50% - 55px);
   left: calc(50% - 3px);
   width: 6px;
   height: 55px;
   transform-origin: 3px 55px;
   background:rgb(41, 108, 233);
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
 }
 .secounds{
   position: absolute;
   display: block;
   top: calc(50% - 60px);
   left: calc(50% - 2px);
   width: 4px;
   height: 60px;
   transform-origin: 2px 60px;
   background:rgb(237, 223, 100);
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
 }
 .am-pm{
   position: absolute;
   top: calc(100% + 20px);
   left: calc(50% - 15px);
   width: 30px;
   height: 20px;
   background: #fff;
   color: #111;
   border-radius: 5px;
   text-align: center;
   line-height: 20px;
 }
</style>