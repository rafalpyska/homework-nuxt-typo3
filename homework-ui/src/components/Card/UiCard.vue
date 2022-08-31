<template>
  <div class="card">
    <div class="card__title" v-if="title">{{ title }}</div>
    <div class="card__subtitle" v-if="subtitle">{{ subtitle }}</div>
    <div class="card__content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
    <div class="card__actions" v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UiCard',
    props: {
      title: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      }
    }
  }
</script>
<style scoped lang="scss">
  .card {
    --font: 'Quicksand', sans-serif;
    --text-color: rgba(0, 0, 0, .6);
    --background-color: rgba(255, 255, 255, 0.9);
    --border-radius: .2rem;
    --box-shadow: rgba(150, 150, 150, 0.9) 0px 1px 3px;
    font-family: var(--font);
    color: var(--text-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    &__title {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 16px;
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: .0125em;
      line-height: 2rem;
      word-break: break-all;
      & + .card__subtitle {
        padding-top: 0;
      }
    }
    &__subtitle {
      padding: 16px;
    }
    &__content {
      padding: 16px;
    }
    &__actions {
      align-items: center;
      display: flex;
      padding: 8px;
    }
  }
</style>