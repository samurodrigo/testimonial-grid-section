<template>
  <div id="app">
    <testimonials :items="testimonials"></testimonials>
  </div>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue';
import services from '@/services/services.js';

export default {
  name: 'App',
  components: {
    Testimonials,
  },
  data() {
    return {
      testimonials: [],
    };
  },
  created() {
    services.getTestimonials().then((response) => {
      console.log(response);
      this.testimonials = response.data;
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #edf2f8;
}
</style>
