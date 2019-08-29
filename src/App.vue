<template>
  <div id="app" :class="modalOpen ? 'blured' : false">
    <b-button v-b-modal.paymentRegister>Launch centered modal</b-button>
    <PaymentRegisterModal></PaymentRegisterModal>
  </div>
</template>

<script>
import PaymentRegisterModal from './components/modals/payment-register';

export default {
  name: 'app',
    data(){
      return{
          modalOpen: false
      }
    },
  components: {
      PaymentRegisterModal
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://s.tmimgcdn.com/scr/55200/electronics-retailer-shopify-theme_55233-original.jpg");
  background-size: cover;
  height: 100vh;
}
  .blured{
    filter: blur(5px);
  }
</style>
