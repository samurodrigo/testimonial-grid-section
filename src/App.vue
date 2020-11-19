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
</style>
