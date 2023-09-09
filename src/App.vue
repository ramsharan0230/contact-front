<template>
  <div>
    <HeaderComp /> <!-- Include the Header component -->
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <router-view></router-view> <!-- This is where your views will be displayed -->
      </div>
    </div>
    <FooterComp /> <!-- Include the Footer component -->
  </div>
</template>

<script>
import HeaderComp from './components/Header.vue'; // Import the Header component
import FooterComp from './components/Footer.vue'; // Import the Footer component

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>
