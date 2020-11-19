<template>
  <div class="testimonials">
    <card v-for="(item, index) in items" :key="index" :cardData="item"></card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  name: 'testimonials',
  components: {
    Card,
  },
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
.testimonials {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  grid-auto-rows: 300px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
}
</style>
