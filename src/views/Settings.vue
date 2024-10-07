<template>
    <div>
        <v-card class="mx-auto"
    elevation="1"
    max-width="500"
   >
   <v-card-title class="py-5 font-weight text-center">Cập nhập thông tin</v-card-title>
    <v-card-text >
                
                <div class="text-subtitle-1 text-medium-emphasis">Họ và tên</div>
                <v-text-field
                    hint="Enter your password to access this website"
                    label="Password"
                    type="text"
                    variant="outlined"
                    density="compact"
                ></v-text-field>
                <div class="text-subtitle-1 text-medium-emphasis">Email</div>
                <v-text-field
                    hint="Enter your password to access this website"
                    label="Password"
                    type="text"
                    variant="outlined"
                    density="compact"
                ></v-text-field>
                
                <v-btn  class="text-none mb-4"
          color="#5865f2"
          variant="flat" block @click="handleClick">Lưu</v-btn> 
        </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { onBeforeRouteLeave, useRouter } from "vue-router";
const router=useRouter();
const handleClick=()=>{
    router.push('/')
}
onBeforeRouteLeave((to,from,next)=>{
    const isConfirm=window.confirm("Bạn có xác nhận muốn rời trang không?");
    if(isConfirm){
        next();
    }else{
        next(false); 
    }
})
</script>

<style>

</style>