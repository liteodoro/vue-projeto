<template>
    <main id="home">
    <div class="btnVoltar">
        <a href="#home"><i class="bi bi-arrow-up-circle"></i></a>
    </div> 
    
         <navbar-page />
    
         <section id="palalogin" class="container text-white bg-green">
            <h3>Costela de Adão Modas</h3>
            
         </section>

        <section id="detalhe" class="container bg-whitesmoke">

            <div class="p-2 text-center">
                <h2>Descrição </h2>
            </div>
               
            <div class="container">
                <div class="row">
                  <div class="col-md-9 col-12 py-3">
                      <h3>Vestido godê</h3>

                  </div>
                  <div class="col-md-4 col-12">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/imagens/girl1.jpg" class="card-img-top" alt="img-fluid">
                      </div>

                  </div>
                  <div class="col-md-6 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="p-2 text-end fs-5">
                                <p>Avaliação</p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-start py-2 px-4">
                                <h3>Vestido Estampa lisa de Alças</h3>

                            </div>
                            <div class="text-black py-2 px-4 fw-bold">
                                <p>R$ 150</p>
                                <p>Ou até 3x 50,00 no cartão</p>
                            </div>
                            <div class="row"> 
                                <div class="col-md-2">
                                    <input type="number" step="1" min="0" max="10" value="0" class="col-12">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="col-12 bg-yellow">Comprar</button>
                                </div>
                                <div class="row">
                                        <div class="btn-toolbar justify-content-between px-3 py-5" role="toolbar" aria-label="Toolbar with button groups">
                                           <div class="btn-group" role="group" aria-label="First group">
                                               <button type="button" class="btn btn-outline-secondary">pp</button>
                                               <button type="button" class="btn btn-outline-secondary">p</button>
                                               <button type="button" class="btn btn-outline-secondary">M</button>
                                               <button type="button" class="btn btn-outline-secondary">G</button>
                                               <button type="button" class="btn btn-outline-secondary">GG</button>
                                           </div>
                                        </div>
                                </div>
                            </div>

                        </div>
                      </div>
                </div>
                </div>
              </div>
              <div class="row">
                  <div class=" fw-bold py-5 px-2">
                      <H3>Descrição Detalhada:</h3>

                        <div class="p-4">
                          <p></p>
                            O Vestido Curto Jeans Plus Size Bufante Uma Maria Denim Claro Filipa by Costela de Adão modas é um visual <br>
                            completo quando você busca por praticidade e conforto, mas sem deixar o estilo de lado! Aposte!<br>

                            <p></p>p class="py-3 px-2">
                              <h4> Características:</h4>
                               Jeans claro
                               Comprimento curto
                               Decote V
                               Babado maria na barra
                               Aplicação de botões frontais
                            <p>
                          </p>
                        </div>
                    </div>
              </div>
              <div class="fw-bold py-5">
                  <h2>Avaliação</h2>

              </div>
              <div></div>
                <div class="row">
                    <div class="col-md-8 col-12 py-2 px-5">
                        <div class="row produtos p-2 border-circle">
                            <div class="col-md-4 col-12 text-center">
                                <img src="@/assets/imagens/girl1.jpg" class="img-fluid rounded-circle">
                            </div>
                            <div class="col-md-8 col-12 pt-4">
                                <div class="border-bottom border-dark">
                                    <h2>Amei!!</h2>
                                    <p>Ficou bonito, mas ficou um pouco justo no corpo! O produto e de ótima qualidade. </p>
                                </div>
                                <div class="p-2 text-end fs-3">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                    <i class="bi bi-emoji-heart-eyes"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-12 py-2 px-5">
                      <div class="row produtos p-2 border-circle">
                          <div class="col-4">
                              <img src="@/assets/imagens/girl1.jpg" class="img-fluid rounded-circle">
                          </div>
                          <div class="col-md-8 col-12 pt-4">
                              <div class="border-bottom border-dark">
                                  <h2>Adorei!!</h2>
                                  <p>O vestido ficou super bonito!! O pano e de ótima Qualidade, ficou perfeito! compraria de novo!</p>
                              </div>
                              <div class="p-2 text-end fs-3">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-emoji-heart-eyes"></i>
                              </div>
                          </div>
                      </div>
                    </div>
              </div>
        </section>
        <footer class="container text-end bg-white">
            <p>Projeto Aline Teodoro</p>
        </footer>
    </main>
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
export default {
  name: "ProdutodetView.vue",
  components: {
    NavbarPage,
  },
  data() {
    return {
        dataAtual = new Date()
    };
  },
  methods:{
    bomdia() {
      alert("Bom dia!");
    }
  },
  mounted() {
   this.bomdia()
  },
  
};
</script>
