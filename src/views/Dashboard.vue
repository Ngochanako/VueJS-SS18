<template>
    <div>
  <div class="nav">
     <RouterLink exact-active-class="active" to="/dashboard">Dashboard</RouterLink>
     <RouterLink exact-active-class="active" to="/dashboard/users">User</RouterLink>
     <RouterLink exact-active-class="active" to="/dashboard/product">Product</RouterLink>
     <RouterLink exact-active-class="active" to="/dashboard/setting">Setting</RouterLink>
  </div>
  <p>Dashboard</p>
  <router-view></router-view>
</div>
</template>

<script setup>

</script>

<style scoped>
.nav{
    display: flex;
    gap: 20px;
}
.active{
    background-color: red;
    color: white;
    padding: 5px;
    border-radius: 5px;
}

</style>