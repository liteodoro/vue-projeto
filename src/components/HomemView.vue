<template>
  <main id="home">
    <div class="btnVoltar">
      <a href="#home"><i class="bi bi-arrow-up-circle"></i></a>
    </div>

    <section id="palalogin" class="container text-white bg-green">
      <h3>Costela de Adão Modas</h3>
    </section>

     <navbar-page/>

    <section id="corpo" class="container bg-whitesmoke">
      <div class="p-5">
        <h2>Artigos Maculinos</h2>
      </div>

      <div class="row">
        <div class="col-md-3 col-12">
          <div class="row produtos">
            <div>
              <img
                src="@/assets/imagens/homfig2.jpg"
                alt="Produto 1"
                class="img-fluid"
              />
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
              <input
                type="number"
                step="1"
                min="0"
                max="10"
                value="0"
                class="col-12"
              />
            </div>
            <div class="col-6">
              <button type="button" class="col-12 bg-yellow">Comprar</button>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-12">
          <div class="row produtos">
            <div>
              <img
                src="@/assets/imagens/homfig2.jpg"
                alt="Produto 1"
                class="img-fluid"
              />
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
              <input
                type="number"
                step="1"
                min="0"
                max="10"
                value="0"
                class="col-12"
              />
            </div>
            <div class="col-6">
              <button type="button" class="col-12 bg-yellow">Comprar</button>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-12">
          <div class="row produtos">
            <div>
              <img
                src="@/assets/imagens/homfig2.jpg"
                alt="Produto 1"
                class="img-fluid"
              />
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
              <input
                type="number"
                step="1"
                min="0"
                max="10"
                value="0"
                class="col-12"
              />
            </div>
            <div class="col-6">
              <button type="button" class="col-12 bg-yellow">Comprar</button>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-12">
          <div class="row produtos">
            <div>
              <img
                src="@/assets/imagens/homfig2.jpg"
                alt="Produto 1"
                class="img-fluid"
              />
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
              <input
                type="number"
                step="1"
                min="0"
                max="10"
                value="0"
                class="col-12"
              />
            </div>
            <div class="col-6">
              <button type="button" class="col-12 bg-yellow">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="corpo" class="container bg-whitesmoke p-5"></section>
    <section
      id="sugestao2"
      class="container text-center text-white bg-orangered p-5"
    >
      <h2>Sugestões</h2>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img
              src="@/assets/imagens/mascsugest1.jpg"
              class="card-img-top"
              alt="sugestao2"
            />
            <div class="card-body">
              <h5 class="card-title text-black">Sapatos e Cintos</h5>
              <p class="card-text text-black">Conforto em primeiro lugar</p>
            </div>
            <div class="card-footer">
              <small class="text-muted"
                >Promoções do dia 31/05 até dia 5/06/22</small
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="@/assets/imagens/mascsugest2.jpg"
              class="card-img-top"
              alt="sugestao2"
            />
            <div class="card-body">
              <h5 class="card-title text-black">Gravatas e Carteiras</h5>
              <p class="card-text text-black">
                Venha escolher o seu. Vários modelos
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted"
                >Promoções do dia 31/05 até dia 5/06/22</small
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="@/assets/imagens/acesmasc.jpg"
              class="card-img-top"
              alt="sugestao2"
            />
            <div class="card-body text-black">
              <h5 class="card-title text-black">Relógios Diversos</h5>
              <p class="card-text">
                Não existem mais motivos para chegar atrasado! Diversos modelos
                de relógio masculino para te ajudar a não perder a hora em
                nenhum compromisso.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted"
                >Promoções do dia 31/05 até dia 5/06/22</small
              >
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
  name: "HomemView",
  components: {
    NavbarPage,
  },
};
</script>

<style>
</style>