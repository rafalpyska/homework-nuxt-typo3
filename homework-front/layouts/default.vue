<template>
  <div>
    <UiCard v-bind="sampleCard">
      <template v-slot:content>
        <p>{{ sampleCard.content }}</p>
      </template>
    </UiCard>
    <Nuxt />
  </div>
</template>
<script>
  import UiCard from "homework-ui/src/components/Card/UiCard.vue";
  export default {
    components: {
      UiCard,
    },
    data() {
      return {
        sampleCard: {
          title: 'Test title',
          subtitle: 'Test subtitle',
          content: 'Sample content',
        }
      }
    },
  }
</script>
