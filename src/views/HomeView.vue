 <template>
  <main id="Home">
    <div class="btnVoltar">
      <router-link to="/"><i class="bi bi-arrow-up-circle"></i></router-link>
    </div>

    <HeaderPage/>
    <NavbarPage/>

    <!--começo propaganda1-->
    <section id="propaganda1" class="container bg-orangered">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active imgBG1">
            <!--img src="imagens/promoção blackf.png" class="d-block w-100" alt="...">-->
          </div>
          <div class="carousel-item imgBG2">
            <!--img src="imagens/propaganda roupa.jpg" class="d-block w-100" alt="...">-->
          </div>
          <div class="carousel-item imgBG3">
            <!--img src="imagens/promo.jpg" class="d-block w-100" alt="...">-->
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <!--começo dos produtos-->

    <section id="demostracao" class="container bg-whitesmoke">
      <!--teste para melhorar a aréa-->
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="imgBG4 border-circle size"></div>
            <div class="text-center">
              <a href="#mulher" target="_blank">
                <H4>Para Elas</H4>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="imgBG5 border-circle size"></div>
            <div class="text-center">
              <a href="#homen" target="_blank">
                <H4>Para Eles</H4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--começa a propaganda 2>-->
    <section id="propaganda2" class="container centro bg-grey">
      <div class="row">
        <div class="col-md-8 col-12 py-2 px-5">
          <div class="row produtos p-2 border-circle">
            <div class="col-md-4 col-12 text-center">
              <img
                src="@/assets/imagens/bone.jpg"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="col-md-8 col-12 pt-4">
              <div class="border-bottom border-dark">
                <h2>Promoção de Chapéus</h2>
                <p>Vários chapéus em promoção!!! Venha escolher o seu!!</p>
              </div>
              <div class="p-2 text-end fs-3">
                <i class="bi bi-star px-1"></i>
                <i class="bi bi-heart px-1"></i>
                <i class="bi bi-emoji-heart-eyes"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-12 py-2 px-5">
          <div class="row produtos p-2 border-circle">
            <div class="col-4">
              <img
                src="@/assets/imagens/bolsa.jpg"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="col-md-8 col-12 pt-4">
              <div class="border-bottom border-dark">
                <h2>Promoção de Bolsas</h2>
                <p>Várias bolsas em promoção!!! Venha escolher o seu!!</p>
              </div>
              <div class="p-2 text-end fs-3">
                <i class="bi bi-star px-1"></i>
                <i class="bi bi-heart px-1"></i>
                <i class="bi bi-emoji-heart-eyes"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 col-12 py-2 px-5">
            <div class="row produtos p-2 border-circle">
              <div class="col-md-4 col-12 text-center">
                <img
                  src="@/assets/imagens/sapato2.jpg"
                  class="img-fluid rounded-circle"
                />
              </div>
              <div class="col-md-8 col-12 pt-4">
                <div class="border-bottom border-dark">
                  <h2>Promoção de Sapatos</h2>
                  <p>Vários modelos em promoção!!! Venha escolher o seu!!</p>
                </div>
                <div class="p-2 text-end fs-3">
                  <i class="bi bi-star px-1"></i>
                  <i class="bi bi-heart px-1"></i>
                  <i class="bi bi-emoji-heart-eyes"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 py-1 fui">
            <img
              src="@/assets/imagens/propagandaroupa2.jpg"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <!--propaganda social-->

    <section
      id="propaganda3"
      class="container text-center text-white bg-orangered"
    >
      <h3>Fale Conosco</h3>
      <div class="container p-3">
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="text-start p-2">
              <i class="bi bi-whatsapp"><p>(21)0000-00000</p></i>
              <p>
                <i class="bi bi-envelope p-1"></i>Sac@costeladeadaomodas.com.br
              </p>
            </div>
            <div class="text-start fs-3">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-messenger"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div>
              <p>Trocas e Devoluções</p>
              <p>Sugestões</p>
            </div>
          </div>
          <div class="col-md-4 col-12 p-5">
            <div class="text-white p-3">
              <h5>Receba nossas promoções</h5>
            </div>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping"
                ><i class="bi bi-envelope"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="E-mail"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <button type="button" class="btn btn-success form-control">
                Enviar
              </button>
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
//@ e um atalho para o src
import HeaderPage from "@/components/HeaderPage.vue";
import NavbarPage from "@/components/NavbarPage.vue";
export default {
  components: {
    HeaderPage,
    NavbarPage,
  },
};
</script>

<style scoped>
/* areas*/
section {
  height: 100%;
  min-height: 250px;
  padding: 80px 0;
}
#propaganda1 {
  background-color: orangered;
}
#demostracao {
  background-color: whitesmoke;
  padding-top: 50px;
  padding-bottom: 50px;
}
#demostracao div img {
  width: 100%;
  padding: 60px;
}
#demostracao div img:hover {
  padding: 20px;
}
#propaganda1,
#propaganda2,
#propaganda3,
#sugestao1,
#sugestao2 {
  padding: 0;
}
.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10px;
}
.logo img {
  max-height: 180px;
}
.produtos {
  border-radius: 5px;
  border: solid 1px #888;
}
.produtos input,
.produtos button {
  border-radius: 5px;
  border: solid 1px #888;
  padding: 5px;
}
.produtos img {
  border-radius: 5px 5px 0 0;
}
.produtos-img {
  height: auto;
  min-height: 250px;
  /* background-image: url(../Imagens/roupa\ 1.jpg);*/
  background-position: center;
  background-size: cover;
  font-size: 0.9375em;
}
.vertical {
  display: table-cell;
  vertical-align: middle;
}
.border-circle {
  border-radius: 25px;
}
.produtos button {
  border-radius: 5px;
  border: solid 1px black;
  padding: 5px;
}
.responsive {
  width: 100%;
}
.btnVoltar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  font-size: 2em;
}
.btnVoltar a {
  text-decoration: none;
}
a {
  color:orangered;
}
.imgBG1,
.imgBG2,
.imgBG3,
.imgBG4,
.imgBG5 {
  background-size: cover;
  background-position: center;
  min-height: 350px;
}
.size {
  max-width: 700px;
  min-height: 700px;
}
.imgBG1 {
  background-image: url(@/assets/imagens/promo.jpg);
}
.imgBG2 {
  background-image: url(@/assets/imagens/promocaoblackfriday2.png);
}
.imgBG3 {
  background-image: url(@/assets/imagens/acessorios.jpg);
}
.imgBG4 {
  background-image: url(@/assets/imagens/girl1.jpg);
}
.imgBG5 {
  background-image: url(@/assets/imagens/homfig1.jpg);
}
.size {
  max-width: 700px;
  min-height: 700px;
}
@media screen and (max-width: 760px) {
  .fui {
    display: none;
  }
  .logo {
    width: 100%;
    text-align: center;
  }
}
</style>