<template>
  <div :class="['card', cardData.cardType, cardData.cardSize]">
    <div class="card__profile-info">
      <div class="card__profile-photo">
        <img
          :src="cardData.author.image.url"
          :alt="cardData.author.image.alt"
        />
      </div>
      <div class="card__profile-description">
        <p class="card__profile-name">
          {{ cardData.author.name }}
        </p>
        <div class="card__profile-graduation">
          {{ cardData.author.graduation }}
        </div>
      </div>
    </div>
    <div class="card__testimonial-intro">
      {{ cardData.testimonialIntro }}
    </div>
    <div class="card__testimonial">"{{ cardData.testimonial }}"</div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    cardData: Object,
  },
  methods: {
    getCardClass(cardType) {
      let cardClass = '';
      switch (cardType) {
        case 'moderate-violet':
          cardClass = 'card card__moderate-violet';
          break;
        case 'very-dark-grayish-blue':
          cardClass = 'card card__very-dark-grayish-blue';
          break;
        case 'very-dark-blackish-blue':
          cardClass = 'card card__very-dark-blacksh-blue';
          break;
        case 'white':
          cardClass = 'card card__white';
          break;
        default:
          cardClass = 'card';
      }
      return cardClass;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed);

$moderate-violet: rgb(117, 65, 200);
$very-dark-grayish-blue: rgb(72, 85, 106);
$very-dark-blacksh-blue: rgb(25, 33, 46);
$white: rgb(255, 255, 255);
.card {
  $this: &;
  // font-family: 'Barlow Semi Condensed', 'sans-serif';
  // font-size: 13px;
  font: normal normal 500 13px/1.4 'Barlow Semi Condensed';
  letter-spacing: 1.2px;
  color: $white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  &__profile {
    &-info {
      display: flex;
      margin-bottom: 15px;
    }
    &-photo {
      border-radius: 50%;
      overflow: hidden;
      width: 30px;
      height: 30px;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-description {
    }
    &-name {
    }
    &-graduation {
      opacity: 0.5;
      font-size: 0.9em;
    }
  }
  &__testimonial {
    opacity: 0.7;
  }
  &__testimonial-intro {
    font-size: 1.3em;
    margin-bottom: 15px;
    font-weight: 600;
  }

  &__moderate-violet {
    //background-color: $moderate-violet;
    background: url(/assets/images/bg-pattern-quotation.svg), $moderate-violet;
    background-repeat: no-repeat;
    background-position: top 0% right 20%;
    #{$this}__profile {
      &-info {
      }
      &-photo {
        border: solid 3px lighten($moderate-violet, 15%);
      }
      &-description {
      }
      &-name {
      }
      &-graduation {
      }
    }
    #{$this}__testimonial {
    }
    #{$this}__testimonial-intro {
    }
  }
  &__very-dark-grayish-blue {
    background-color: $very-dark-grayish-blue;
    #{$this}__profile {
      &-info {
      }
      &-photo {
      }
      &-description {
      }
      &-name {
      }
      &-graduation {
      }
    }
    #{$this}__testimonial {
    }
    #{$this}__testimonial-intro {
    }
  }
  &__very-dark-blacksh-blue {
    background-color: $very-dark-blacksh-blue;

    #{$this}__profile {
      &-info {
      }
      &-photo {
        border: solid 3px lighten($moderate-violet, 15%);
      }
      &-description {
      }
      &-name {
      }
      &-graduation {
      }
    }
    #{$this}__testimonial {
    }
    #{$this}__testimonial-intro {
    }
  }
  &__white {
    background-color: $white;
    color: $very-dark-grayish-blue;
    #{$this}__profile {
      &-info {
      }
      &-photo {
      }
      &-description {
      }
      &-name {
      }
      &-graduation {
      }
    }
    #{$this}__testimonial {
    }
    #{$this}__testimonial-intro {
    }
  }
  &.c1-r1 {
    grid-row-end: span 1;
    grid-column-end: span 1;
  }
  &.c2-r1 {
    grid-row-end: span 1;
    grid-column-end: span 2;
    @media (max-width: 767px) {
      grid-row-end: span 1;
      grid-column-end: span 1;
    }
  }
  &.c1-r2 {
    grid-row-end: span 2;
    grid-column-end: span 1;
    @media (max-width: 767px) {
      grid-row-end: span 1;
      grid-column-end: span 1;
    }
  }
}
</style>
