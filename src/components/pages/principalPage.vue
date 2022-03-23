<template>
<main id="home">
         <div class="btnVoltar">
            <a href="#home"><i class="bi bi-arrow-up-circle"></i></a>
         </div>

           <header>
              <div class="logo">
                <img src="src\assets\logo.png" alt="Logo marca da loja Costela de Adão Modas."
                 title="logo marca Costela de Adão Modas"
                 width="220" height="200">
              </div>
           </header>

          <nav class="navbar navbar-expand-lg sticky-top navbar-ligth bg-light">
            <div class="container">
              <!--a class="navbar-brand" href="#">Navbar</a>-->
              <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="logon.html">Usuário</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="mulher.html">Mulher</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="homen.html">Homem</a>
                   </li>
                  <li class="nav-item">
                    <a class="nav-link" href="sacola.html"><i class="bi bi-bag-fill"></i></a>
                  </li>
                  
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
                  <!--começo propaganda1-->
                  
                  <section id="propaganda1" class="container bg-orangered">
                      
                      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
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
                    <div class="imgBG4 border-circle size">
                    </div>
                    <div class="text-center">
                      <a href="mulher.html" target="_blank">
                        <H4>Para Elas</h4>
                    </a>

                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="imgBG5 border-circle size">
                    </div>
                    <div class="text-center">
                      <a href="homen.html" target="_blank">
                        <H4>Para Eles</h4>
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
                                <img src="src\assets\imagens\bone.jpg" class="img-fluid rounded-circle">
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
                              <img src="src\assets\imagens\Bolsa.jpg" class="img-fluid rounded-circle">
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
                                  <img src="src\assets\imagens\sapato2.jpg" class="img-fluid rounded-circle">
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
                        <img src="src\assets\imagens\propaganda roupa2.jpg" class="img-fluid">
                      </div>
                    </div>
                </section>

                        <!--propaganda social-->

                <section id="propaganda3" class="container text-center text-white bg-orangered">

                               <h3>Fale Conosco</h3>
                               <div class="container p-3">
                                <div class="row">
                                  <div class="col-md-4 col-12">
                                    <div class="text-start p-2">
                                      <i class="bi bi-whatsapp"><p>(21)0000-00000</p></i>
                                      <p><i class="bi bi-envelope p-1"></i>Sac@costeladeadaomodas.com.br</p>
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
                                      <span class="input-group-text" id="addon-wrapping"><i class="bi bi-envelope"></i></span>
                                      <input type="text" class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="addon-wrapping">
                                      <button type="button" class="btn btn-success form-control">Enviar</button>
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
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style scope>
 .imgBG1 { background-image: url(src\assets\imagens\promo.jpg);}

    .imgBG2 { background-image: url(src\assets\imagens\promoção blackf.png);}
    
    .imgBG3 { background-image: url(src\assets\imagens\acessorios.jpg);}

    .imgBG4 { background-image: url(src\assets\imagens\girl-1.jpg);}

    .imgBG5 { background-image: url(src\assets\imagens\hom-fig1.jpg);}

    .size{
        max-width: 700px;
        min-height: 700px;
    }
    
</style>