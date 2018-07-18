<template>
  <div class="security-code-wrap">
    <label :for="`code-${uuid}`">
      <ul :class="`${theme}-container security-code-container`">
        <li v-for="(item, index) in length" :key="index" :class="{'actived':value.length>index}" class="field-wrap">
          <i class="char-field">{{ value[index] || placeholder }}</i>
        </li>
      </ul>
    </label>
    <input
      ref="input"
      v-model="value"
      :id="`code-${uuid}`"
      :name="`code-${uuid}`"
      :maxlength="length"
      class="input-code"
      type="tel"
      autocorrect="off"
      autocomplete="off"
      autocapitalize="off"
      @keyup="handleInput($event)">
  </div>
</template>

<script>
export default {
  name: 'SecurityCode',
  // component properties
  props: {
    length: {
      type: Number,
      default: 6
    },
    placeholder: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'block'
    }
  },
  // variables
  data () {
    return {
      value: ''
    }
  },
  computed: {
    uuid () {
      return Math.random()
        .toString(36)
        .substring(3, 8)
    }
  },
  methods: {
    hideKeyboard () {
      // 输入完成隐藏键盘
      document.activeElement.blur() // ios隐藏键盘
      this.$refs.input.blur() // android隐藏键盘
    },
    handleSubmit () {
      this.$emit('input', this.value)
    },
    handleInput (e) {
      if (e.target.value.length >= this.length) {
        this.hideKeyboard()
      }
      this.handleSubmit()
    }
  }
}
</script>

<style scoped lang="less">
.security-code-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.security-code-container {
  margin: 0;
  padding: 0;
  display: flex;
  .field-wrap {
    list-style: none;
    display: block;
    height: 44px;
    width: 44px;
    line-height: 44px;
    font-size: 18px;
    text-align: center;
    box-shadow: 0 2px 2px rgba(238, 238, 238,1);
    .char-field {
      font-style: normal;
      text-align: center;
      color: #4a4a4a;
    }
  }
  .actived {
    box-shadow: 0 2px 2px rgba(31, 140, 235, 0.3);
  }
}

.block-container {
  justify-content: center;
  .field-wrap {
    background-color: #fff;
    margin: 2px;
    color: #000;
  }
}

.line-container {
  position: relative;
  background-color: #fff;
  &:after {
    box-sizing: border-box;
    content: "";
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    position: absolute;
    border: 1px solid #d9d9d9;
    top: 0;
    left: 0;
    transform-origin: 0 0;
    border-radius: 4px;
  }
  .field-wrap {
    flex: 1;
    position: relative;
    &:not(:last-child):after {
      content: "";
      width: 1px;
      height: 50%;
      position: absolute;
      right: 0;
      top: 25%;
      background-color: #d9d9d9;
      transform: scaleX(0.5);
    }
  }
}

.input-code {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
</style>
