<script setup>
import { ref, onMounted, reactive } from 'vue';
const props = defineProps(['customClass']);
let tabContainer = ref(null);
let tabHeaders = ref(null);
let tabs = ref(null);
let activeTabIndex = ref(0);

onMounted(() => {
  tabs.value = [...tabContainer.value.querySelectorAll('.tab')];
  for (let x of tabs.value) {
    if (x.classList.contains('active')) {
      activeTabIndex = tabs.value.indexOf(x);
    }
  }
})
const changeTab = (index) => {
  activeTabIndex = index;
  for (let x of [...tabs.value, ...tabHeaders.value]) {
    x.classList.remove('active')
  }
  tabs.value[activeTabIndex].classList.add('active')
  tabHeaders.value[activeTabIndex].classList.add('active')
}
</script>

<template>
  <div id="tabs-container"
       :class="customClass"
       ref="tabContainer">
    <div id="tab-headers">

      <div class="tab-btns">
        <button v-for="(tab, index) in tabs"
                :key="index"
                class="btn"
                :class="activeTabIndex == index ? 'active' : ''"
                @click="changeTab(index)"
                ref="tabHeaders">{{ tab.title }}</button>
      </div>
    </div>
    <!-- this is where the tabs go, in this slot -->
    <div id="active-tab">
      <slot></slot>
    </div>
  </div>
</template>

<style>
#tabs-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  margin: 0 auto;

  @container article (width > 1024px) {
    grid-template-columns: repeat(8, 1fr);

  }
}

#active-tab,
#tab-headers {
  width: 100%;
}

#tab-headers {
  grid-column: 1 / span 4;

  @container article (width > 1024px) {
    grid-column: 1 / span 2;
  }
}

#active-tab {
  grid-column: 1 / span 4;

  max-height: 32rem;
  overflow-y: scroll;

  @container article (width > 1024px) {
    grid-column: 3 / span 6;
    grid-row: 1;
    padding: 2rem;
  }
}

.tab-btns {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#tab-headers button {
  list-style: none;
  padding: 1rem 1.25rem;
  position: relative;
  cursor: pointer;
  color: #fff;
  border: 2px solid transparent;

  &.active {
    border: 2px solid var(--color-secondary);
    color: var(--accent-color);
    font-weight: bold;
  }
}
</style>
