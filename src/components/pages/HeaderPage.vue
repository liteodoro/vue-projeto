<template>
    <header>
              <div class="logo">
                <img src="@/assets/imagens/LogoM.jpg" alt="Logo marca da loja Costela de Adão Modas."
                 title="logo marca Costela de Adão Modas">
              </div>
           </header>
</template>

<script>
export default {
    name: "HeaderPage",
};

</script>

<style scoped>

header {
        background-image: url(@/assets/imagens/LogoM.jpg);
        text-align:center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-position: center;
        background-size: cover;
        height: auto;
        min-height: 200px;
    }

 .logo{
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 10px;
    }

    .logo img{
        max-height: 180px;
    }
</style>