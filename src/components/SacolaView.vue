<template>
    <main>
     
         <section id="palalogin" class="container text-white bg-green">
            <h3>Costela de Adão Modas</h3>
            
         </section>
         
         <navbar-page />

         <section id="corpo" class=" container bg-whitesmoke">
            <div>
                <div class="p-2 text-center fs-3 p-5 py-2">
                    <h2>Minha Sacola<i class="p-4 bi bi-bag-fill"></i></h2>
               </div>
            </div>
                  
              <div class="container p-2 py-5">
                <div class="row">
                  <!--div class="col-md-3 col-12">
                    <img src="Imagens/sapato2.jpg" alt="Produto 1" class="img-fluid">
                  </div>-->
                  <div class="card border-success mb-5" style="width: 18rem;">
                    <img src="@/assets/imagens/sapato2.jpg" class="card-img-top" alt="produto1">
                    <div class="card-body">
                      <p class="card-text text-center">Tênis Nike</p>
                    </div>
                </div>
                  
                  <div class="col-md-4 col-12">
                    <div class="p-1">
                      <h2>Tênis Nike</h2>
                    </div>
                    <div class="p-1">
                        <p>Tênis masculino Nike é o calçado ideal para te acompanhar em todos os momentos. Oferece Vesatilidade ao combinar com peças diferentes.</p>
                        <div class="col-2">
                          <input type="number" step="1" min="0" max="10" value="0" class="col-12">
                          <p>Quantidade</p>
                      </div>
                </div>
                    
                  </div>
                  <div class="col-md-4 col-12">
                    <div class="p-2">
                      <h2>Item</h2>
                      <h4>Subtotal: R$ 250 Reais <i class="bi bi-trash-fill p-5"></i></h4>
                  </div>
                 <div class="col-md-3 col-12">
                    <button type="button" class="col-12 bg-yellow">Finalizar</button>
                 </div>
                  </div>
                </div>
              </div>
            <span class="d-flex justify-content-center text-success p-2">
              <label><i><u>continuar Comprando >>></u></i></label>
             </span>
         </section>
   </main>
</template>

<script>
export default {
  name: "SacolaView.vue",
};

import NavbarPage from "@/components/NavbarPage.vue";

export default {
  components: {
    NavbarPage,
  },
};

</script>

<style>

</style>