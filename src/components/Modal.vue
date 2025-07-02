<template>
  <transition name="fade" appear>
     <div v-if="modelValue" class="modal-overlay" @click="overlayClick" />
  </transition>
  <transition name="slide-up" appear>
    <div
      v-if="modelValue"
      class="modal-body bs-modal-style p-4 shadow-custom"
      :class="violated ? 'bg-flame-soft' : 'bg-snow'"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SgModal',
  emits: ['update'],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    permanent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      violated: false,
    };
  },
  computed: {
    screenWidth() {
      return this.$store.state.screenWidth;
    },
  },
  methods: {
    overlayClick() {
      if (!this.permanent) {
        this.$emit('update:modelValue', false);
      } else {
        this.violated = true;
        setTimeout(() => {
          this.violated = false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  left: 0;
  z-index: 50;
}
.modal-body {
  z-index: 50;
  position: fixed;
  border-radius: 10px;
  background-color: #fff;
}
.shadow-custom {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}

.slide-up-enter-active,
.slide-up-leave-active,
.mobile-slide-up-enter-active,
.mobile-slide-up-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  top: 100vh !important;
  transform: translateY(100vh) !important;
  transform: translateX(-50%) !important;
}

.mobile-slide-up-enter-from,
.mobile-slide-up-leave-to {
  transform: translateY(100vh) !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.bs-modal-style {
  min-width: 800px;
  height: auto;
  max-height: 75.5vh;
  top: 50%;
  left: 50%;
  bottom: auto;
  right: auto;
  transform: translate(-50%, -50%);
  overflow-y: hidden;
}
.modal-style {
  @apply bottom-0;
  @apply inset-x-0;
  @screen sm {
    @apply bottom-auto;
    @apply right-auto;
    @apply top-1/2;
    @apply left-1/2;
  }

  .modal-xl {
    @screen sm {
      width: 85vw;
      height: 87.5vh;
    }
  }
  .modal-lg {
    @screen sm {
      min-width: 57.5vw;
      max-height: 75vh;
    }
  }
  .modal-md {
    @screen sm {
      min-width: 440px;
      max-width: 27.5vw;
      height: auto;
      max-height: 75.5vh;
    }
  }
  .modal-sm {
    @screen sm {
      min-width: 320px;
      max-width: 27.5vw;
      height: auto;
      max-height: 75.5vh;
    }
  }
  .bg-flame-soft {
    background-color: #ff474c;
  }
  .bg-snow {
    background-color: #00ffff;
  }
}
</style>
