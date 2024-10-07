<template>
    <div style="display: flex;gap: 20px;align-items: center;">
          <img :src="product.image" alt="" style="width: 200px;height: 200px;">
          <div>
            <p>Id:{{ product.id }}</p>
            <p>Name:{{ product.name }}</p>
            <p>Price:{{ product.price }}</p>
          </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route=useRoute();
const product=reactive({
    id:'',
    image:'',
    name:'',
    price:0
})
onMounted(()=>{
    const listProduct=JSON.parse(localStorage.getItem("products"))||[];
    console.log(listProduct);
    
    console.log(route.params.id);
    
    const productFound=listProduct.find(p=>p.id===parseInt(route.params.id));
    if(productFound){
        product.id=productFound.id;
        product.image=productFound.image;
        product.name=productFound.name;
        product.price=productFound.price;
    }
})
</script>

<style>

</style>