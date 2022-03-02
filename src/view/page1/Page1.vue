<template>
  <div>
    <h1>Page1</h1>
    <!--
        [notice]
        [Step1] To reproducing the problem of development,start app and make sure that line 13 should be comment out.
        [Step2] You can open the directory of the `renderer.log`, prepare to observe the size of the file.
        [Step3] Now if you UNCOMMENT line 13 (<undefined-component></undefined-component>), Command/Ctrl + S and wait project auto reload
        (I guess) Vue.js will detect that an non-existent component was introduced and throw error to console
        this page will start endless write to `renderer.log`...
    -->

<!--    <undefined-component></undefined-component>-->
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    click() {},
  },
};
</script>

<style scoped></style>
