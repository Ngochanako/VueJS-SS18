<template>
    <div>
        <p>Danh sách bài viết</p>
        <div style="display: flex; gap: 50px;">
            <div v-for="(btn,index) in list" :key="index">
                <p>Id:{{ btn.id }}</p>
                <p>Name:{{ btn.name }}</p>
                <button @click="handleClick(btn.id)">Xem chi tiết</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router=useRouter();
let list=[
    {
        id:1,
        name:'Bài 1'
    },
    {
        id:2,
        name:'Bài 2'
    }
]
const handleClick=(id)=>{
    router.push( `/posts/${id}`);
}
</script>

<style>

</style>