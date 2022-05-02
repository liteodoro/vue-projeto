<template>
    <main id="home">
    <div class="btnVoltar">
        <a href="#home"><i class="bi bi-arrow-up-circle"></i></a>
    </div>
    
      <navbar-page />

         <section id="palalogin" class="container text-white bg-green">
            <h3>Costela de Adão Modas</h3>
            
         </section>

         <section id="corpo" class=" container bg-whitesmoke">
             <div class="p-5">
                 <h2>Artigos Femininos</h2>
             </div>

            <div class="row">
                <div class="col-md-3 col-12">
                  <div class="row produtos">
                      <div>
                         <img src="@/assets/imagens/girl1.jpg" alt="Produto 1" class="img-fluid">
                      </div>
                      <div class="p-1">
                          <h2>Produto 1</h2>
                      </div>
                      <div class="p-1">
                        <p>Descrição produtos</p>
                      </div>
                      <div class="p-1">
                        <p>Valor</p>
                      </div>
                      <div class="col-6">
                        <input type="number" step="1" min="0" max="10" value="0" class="col-12">
                      </div>
                      <div class="col-6">
                        <div class="">
                          <a href="produto-detalhe.html" target="_blank">
                              <button type="button" class="col-12 bg-yellow">Comprar</button>
                          </a>
                       </div>
                      </div>
                  </div>
               </div>
                    
                <div class="col-md-3 col-12">
                  <div class="row produtos ">
                      <div>
                          <img src="@/assets/imagens/girl2.jpg" alt="Produto 1" class="img-fluid">
                      </div>
                      <div class="p-1">
                          <h2>Produto 2</h2>
                      </div>
                      <div class="p-1">
                          <p>Descrição produtos</p>
                      </div>
                      <div class="p-1">
                          <p>Valor</p>
                      </div>
                      <div class="col-6">
                          <input type="number" step="1" min="0" max="10" value="0" class="col-12">
                      </div>
                      <div class="col-6">
                          <button type="button" class="col-12 bg-yellow">Comprar</button>
                      </div>
                  </div>
               </div>

              <div class="col-md-3 col-12">
                <div class="row produtos">
                    <div>
                        <img src="@/assets/imagens/girl3.jpg" alt="Produto 1" class="img-fluid">
                    </div>
                    <div class="p-1">
                        <h2>Produto 3</h2>
                    </div>
                    <div class="p-1">
                        <p>Descrição produtos</p>
                    </div>
                    <div class="p-1">
                        <p>Valor</p>
                    </div>
                    <div class="col-6">
                        <input type="number" step="1" min="0" max="10" value="0" class="col-12">
                    </div>
                    <div class="col-6">
                        <button type="button" class="col-12 bg-yellow">Comprar</button>
                    </div>
                </div>
             </div>
             <div class="col-md-3 col-12">
                <div class="row produtos">
                    <div>
                        <img src="@/assets/imagens/girl4.jpg" alt="Produto 1" class="img-fluid">
                    </div>
                    <div class="p-1">
                        <h2>Produto 4</h2>
                    </div>
                    <div class="p-1">
                        <p>Descrição produtos</p>
                    </div>
                    <div class="p-1">
                        <p>Valor</p>
                    </div>
                    <div class="col-6">
                        <input type="number" step="1" min="0" max="10" value="0" class="col-12">
                    </div>
                    <div class="col-6">
                        <button type="button" class="col-12 bg-yellow">Comprar</button>
                    </div>
                </div>
            </div>
          </div>
                   
         </section>
         <section id="sugestao" class="container text-center text-white bg-orangered">
             <h2>Sugestões</h2>

             <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src="@/assets/imagens/Chapeu.png" class="card-img-top" alt="sugestao1">
                  <div class="card-body text-black">
                    <h5 class="card-title text-black">Chapéus</h5>
                    <p class="card-text">Chapéu Vintage Moda Panamá Palha Shantung.</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Promoção valida do dia 31/01 até dia 5/02</small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="@/assets/imagens/Bolsa.jpg" class="card-img-top" alt="sugestao1">
                  <div class="card-body">
                    <h5 class="card-title text-black">Bolsas</h5>
                    <p class="card-text text-black">Cabe tudo: as suas companheiras de rotina. Entre os modelos de bolsas que vão e voltam, estão as bolsas da moda</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Promoção valida do dia 31/01 até dia 5/02</small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="@/assets/imagens/acessorios.jpg" class="card-img-top" alt="sugestao1">
                  <div class="card-body text-black">
                    <h5 class="card-title">Acessórios</h5>
                    <p class="card-text text-black">óculos e outros acessórios pra completar seu look.</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Promoção valida do dia 31/01 até dia 5/02</small>
                  </div>
                </div>
              </div>
            </div>
         </section>

         <footer class="container text-end bg-white">
          <p> Projeto Aline Teodoro </p>
         </footer>

  </main>     
</template>

<script>
export default {
  name: "MulherView.vue",
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