<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      All
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      Ongoing
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed' }"
    >
      Completed
    </button>
  </nav>
</template>

<script>
export default {
  name: "FilterNav",
  props: {
    current: {
      type: String,
    },
  },
  emits: ["filterChange"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style lang="css" scoped>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
© 2021 GitHub, Inc. Terms Privacy Security Status Docs Contact GitHub Pricing
API Training Blog About Loading complete
