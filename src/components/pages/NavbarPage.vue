<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-ligth bg-light">
            <div class="container">
              <!--a class="navbar-brand" href="#">Navbar</a>-->
              <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#index">Inicio</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#logon">Usuário</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#mulher">Mulher</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#homen">Homem</a>
                   </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#sacola"><i class="bi bi-bag-fill"></i></a>
                  </li>
                  
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
</template>

<script>
import { Usuario } from "@/models/Usuario";
import router from "@/router";
var usuario = new Usuario();
export default {
  name: "NavbarPage",
  data() {
    return {
      usuario,
    };
  },
  methods: {
    getUsuario() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.usuario = typeof user === undefined ? null : user;
    },
    logoffUsuario() {
      localStorage.clear();
      this.usuario = null;
      router.push("/");
    },
  },
  mounted() {
    this.getUsuario();
  },
  watch() {
    this.usuario;
  },
};
</script>

<style scoped>
.navbar{
      padding: 0;
    }

    .nav-item a:hover{
        Color: white;
        background-color:green;
        border-bottom: solid 5px white;
        font-weight: bold;

    }
    .nav-ligth .navbar-nav .nav-link{
        color: white !important

    }
</style>