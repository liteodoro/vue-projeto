<template>
  <main>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <!--Icone no Menu Celular-->
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/mulher" class="nav-link" aria-current="page"
                >Mulher</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/produtos" class="nav-link"
                >Produtos</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#areaSocial">Clientes</a>
            </li>
            <li class="nav-item">
              <router-link to="/homem" class="nav-link" aria-current="page"
                >Homem</router-link
              >
            </li>
          </ul>
          <div v-if="usuario == null">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <!-- <a class="nav-link" href="/logon">Entrar</a> -->
                <router-link to="/logon" class="nav-link">Entrar</router-link>
              </li>
            </ul>
          </div>
          <div v-else>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/usuario_perfil" class="nav-link">
                  {{ usuario.nome }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/pedidos" class="nav-link"
                  >Pedidos</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="logoffUsuario()">Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </main>
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
 // watch() {
   // this.usuario;
 // },
};
</script>

<style scoped>
.navbar {
  padding: 0;
}
.nav-item a:hover {
  color: white;
  background-color: green;
  border-bottom: solid 5px white;
  font-weight: bold;
}
.nav-ligth .navbar-nav .nav-link {
  color: white !important;
}
</style>