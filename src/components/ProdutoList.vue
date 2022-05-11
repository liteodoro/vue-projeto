<template>
<main>
  <section id="palalogin" class="container text-white bg-green">
      <h3>Costela de Adão Modas</h3>
    </section>

  <section id="produtos" class="container clearfix bg-white p-5">
    <div class="row">
      <div class="col-6 col-md-3" v-for="produto of produtos" :key="produto.id">
        <div class="produtos">
          <div class="p-0">
            <a href="@/assets/imagens/girl2.jpg" target="_self">
              <img
                :src="mostrarFoto(produto.fotos)"
                :alt="produto.descricao"
                class="img-fluid p-0"
              />
            </a>
          </div>
          <div class="p-2">
            <h3>{{ produto.nome }}</h3>
          </div>
          <div class="px-1">
            <p>{{ produto.descricao }}</p>
            <p>{{ produto.valor }}</p>
          </div>
          <div class="row px-3">
            <div class="col-md-6 col-12 p-2">
              <div class="form-group">
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="10"
                  value="0"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-6 col-12 p-2">
              <div class="">
                <a href="@/assets/imagens/girl2.jpg" target="_blank">
                  <button type="button" class="btn bg-yellow col-12">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </main>
</template>

<script>
//import { Produto } from "@/models/Produto";
import ProdutoService from "@/services/produtoService";
import { configure } from "@/services/config";

var monkProduto = [
  {
    nome: "Vestido",
    descricao: "Vestido gode",
    valor: 120.00,
  },
  {
    nome: "Vestido plus size",
    descricao: "Vestido de Festa",
    valor: 200.00,
  },
];
var produtos = monkProduto;
export default {
  components: {},
  data() {
    return {
      produtos,
    };
  },
  mounted() {
    this.listarProdutos();
  },
  methods: {
    listarProdutos() {
      ProdutoService.list()
        .then((res) => {
          console.log(res);
          this.produtos = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    mostrarFoto(foto) {
      return configure.localHost + "/midias/produtos/" + foto;
    },
  },
  computed: {},
};
</script>

<style>
</style>