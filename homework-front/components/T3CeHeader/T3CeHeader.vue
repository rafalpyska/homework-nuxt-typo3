<template>
    <div
      v-if="header && headerLayout !== 100"
      :class="headerCss"
      class="t3-ce-header t3-ce-test-header"
    >
			{{ header }}
    </div>
  </template>
  
  <script>
  import T3CeHeader from '~typo3/components/T3CeHeader/T3CeHeader.vue'
  export default {
    extends: T3CeHeader,
    mounted () {
      console.log('Header override test')
    }
  }
  </script>
  
  <style scoped lang="scss">
    .t3-ce-test-header {
			color: aqua;
    }
  </style>