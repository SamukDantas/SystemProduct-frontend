<template>
  <div id="app">
    <section v-if="errored">
      <p>
        Pedimos desculpas, não estamos conseguindo recuperar as informações no
        momento. Por favor, tente novamente mais tarde.
      </p>
    </section>

    <section v-else>
      <div v-if="loading">Carregando a página</div>
      <nav>
        <div class="nav-wrapper blue darken-1">
          <a href="#" class="brand-logo center">Produtos FrontEnd</a>
        </div>
      </nav>

      <div class="container">
        <form>
          <label>Nome</label>
          <input type="text" placeholder="Ex.: notebook" />
          <label>Quantidade</label>
          <input type="number" placeholder="0" />
          <label>Valor</label>
          <input type="text" placeholder="0,00" />
          <button class="waves-effect waves-light btn-small">
            Salvar<i class="material-icons left">save</i>
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>QTD</th>
              <th>VALOR</th>
              <th>OPÇÕES</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product of products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.value }}</td>
              <td>
                <button class="waves-effect btn-small blue darken-1">
                  <i class="material-icons">create</i>
                </button>
                <button class="waves-effect btn-small red darken-1">
                  <i class="material-icons">delete_sweep</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/produtos")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
</style>