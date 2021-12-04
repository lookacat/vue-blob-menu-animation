<template>
  <div class="blob-menu">
    <ul class="list">
      <li
        v-for="(item, index) in items"
        :key="index"
        :ref="`nav-item-${index}`"
        @click="animateBlob(index)"
      >
        <a>
          {{ item }}
        </a>
        <span class="active" ref="nav-blob" v-if="index === 0"></span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.blob-menu {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.list {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 100px;
  display: flex;
  flex-direction: column;

  li {
    position: relative;
    cursor: pointer;
    text-align: center;
    display: list-item;
    padding: 10px;
    transition: all 4s;
    z-index: 0;
    a {
      color: white;
      font-size: 17px;
      z-index: 5;
    }
  }
  .inactive {
    padding: 10px;
    background: white;
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid white;
    background: rgba(255, 118, 163, 0.1);
    z-index: -1;
    transition: transform 0.2s cubic-bezier(0.51, 0.06, 0.56, 1.37);
    border-radius: 5px;
  }
}
</style>

<script>
export default {
  name: "BlobMenu",
  data: () => {
    return {
      items: ["ItemA", "ItemB", "ItemC", "ItemD"],
      active: 2,
      animationTimeout: null,
    };
  },
  mounted() {
    this.animateBlob(this.active, 0);
  },
  methods: {
    isActive(index) {
      return index == this.active;
    },
    animateBlob(index, duration = 0.2) {
      clearTimeout(this.animationTimeout);
      const currentElement = this.getNavigationElement(0);
      const targetElement = this.getNavigationElement(index);
      const distance = this.getDistanceBetweenElements(
        currentElement,
        targetElement
      );
      const style = this.$refs["nav-blob"].style;
      style.setProperty("transition-duration", `${duration}s`);
      style.setProperty("transform", `translateY(${distance}px)`);
    },
    getNavigationElement(index) {
      return this.$refs[`nav-item-${index}`];
    },
    getPositionAtCenter(element) {
      const { top, left, width, height } = element.getBoundingClientRect();
      return {
        x: left + width / 2,
        y: top + height / 2,
      };
    },
    getDistanceBetweenElements(a, b) {
      const aPosition = this.getPositionAtCenter(a);
      const bPosition = this.getPositionAtCenter(b);
      return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
    },
  },
};
</script>
