<template>
  <div>
    <input type="text" v-model="value">
    <button @click="handleClick">Tìm kiếm</button>
    <div>Value:{{ valueSearch }}</div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router=useRouter();
const route=useRoute();
const valueSearch=computed(()=>{
    return route.query.q || '';
})
const value=ref('');
const handleClick=()=>{
    router.push({query:{q:value.value}});
    value.value='';
}
</script>

<style>

</style>