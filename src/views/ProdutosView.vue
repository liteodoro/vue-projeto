<template>

  <NavbarPage />
  
  <section class="container bg-light"></section>

  <ProdutoList/>


</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import ProdutoList from "@/components/ProdutoList.vue";

export default {
  components: {
    NavbarPage,
    ProdutoList,
},
};
</script>

<style>
</style>