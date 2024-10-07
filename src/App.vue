<template>
  <div>
    <h4>Bài 1</h4>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <h4>Bài 3</h4>
      <router-link to="/search">Search</router-link>
    <h4>Bài 4</h4>
       <RouterLink to="/l">Not Found</RouterLink>
    <h4>Bài 5</h4>
       <RouterLink to="/dashboard">Dashboard</RouterLink>
    <h4>Bài 6</h4>
        <RouterLink to="/dashboard">Admin</RouterLink>
    <h4>Bài 7</h4>
        <RouterLink to="/posts">List Post</RouterLink>
    <h4>Bài 8</h4>
        <RouterLink to="/products">List Product</RouterLink>
    <h4>Bài 9</h4>
    <RouterLink to="/settings">Settings</RouterLink>
    <RouterView v-slot="{Component}">
      <Suspense>
        <!-- Thành phần các component sử dụng lazy load -->
         <template #default>
          <component :is="Component"/>
         </template>
        <!-- Hiệu ứng loading trước khi tải trang -->
         <template #fallback>
          <div>Loading...</div>
         </template>
      </Suspense>
    </RouterView>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>