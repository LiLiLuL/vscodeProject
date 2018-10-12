
define(['vue','ELEMENT'],function(Vue,ELEMENT){
    Vue.use(ELEMENT);
   //ELEMENT.install(Vue);
 
   function init(){
     new Vue({
       el:"#menu",
       data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }

   })
   $("#myjob").on('click',()=>{
       console.log("hhhh")
   })
}
   return {
       init:init
   }
})