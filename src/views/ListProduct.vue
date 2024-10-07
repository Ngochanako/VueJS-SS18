<template>
    <div>
     <div>
        <input type="text" v-model="search">
        <button @click="handleSearch">Tìm kiếm</button>
     </div>
     <br>
     <div style="display: flex; gap: 50px;">
          <div v-for="(product,index) in listProduct" :key="index" style="text-align: center;border-radius: 5px;border: 1px solid red;">
             <img :src="product.image" alt="product" style="width: 200px; height: 200px;">
             <h3>{{product.name}}</h3>
             <p>{{product.price}}</p>
             <button @click="handleClick(product.id)">Xem chi tiết</button>
          </div>
     </div>
    </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from 'vue';
import {useRoute,useRouter} from 'vue-router'
const route= useRoute();
const router= useRouter();
const search=ref('');
const list=[
    {  
        id:1,
        image:'https://i.pinimg.com/564x/4a/4c/0e/4a4c0ef22c89c4a504fb0ee8d420b996.jpg',
        name:'Iphone',
        price:10000000
    },
    {
        id:2,
        image:'https://i.pinimg.com/564x/4a/4c/0e/4a4c0ef22c89c4a504fb0ee8d420b996.jpg',
        name:'Samsung',
        price:20000000
    }
]
const listProduct=reactive([]);
onMounted(()=>{
    localStorage.setItem('products',JSON.stringify(list));
    listProduct.push(...list);
})
const handleClick=(id)=>{
    router.push(`/products/${id}`);
}
const handleSearch=()=>{
   const listSearch=list.filter(p=>p.name.toLowerCase().includes(search.value.trim().toLowerCase()));
   listProduct.length=0;
   listProduct.push(...listSearch);
}


</script>

<style>

</style>