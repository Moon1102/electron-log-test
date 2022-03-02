<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  async created() {
    //import electron-log on every renderer process
    const log = require("electron-log");
    log.transports.console.level = "warn";
    ["info", "verbose", "debug", "silly", "log"].forEach((key) => {
      log.functions[key] = () => {};
    });
    Object.assign(console, log.functions);
  },
  mounted() {},
};
</script>

<style scoped lang="scss"></style>
