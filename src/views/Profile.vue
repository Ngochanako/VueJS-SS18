<template>
  <div>
      <h1>Profile Page</h1>
      <input type="text" v-model="userName">
      <button @click="handleClick">Click</button>
      <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const userName=ref("");
const handleClick=()=>{
    console.log(userName.value);
}
onBeforeRouteLeave((to,from,next)=>{
if(userName){ 
    const isConfirm=window.confirm("Bạn có xác nhận muốn rời trang không?");
    if(isConfirm){
        next();
    }else{
        next(false); 
    }
}
})
</script>

<style>

</style>