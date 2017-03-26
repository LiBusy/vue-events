<template>
  <div>
    <child></child>
    <button @click="buttonClicked">I am the parent</button>
  </div>
</template>

<script>
  import {bus} from './bus'
  export default {
    methods: {
      buttonClicked: function(){
        console.log('clicked')
        bus.$emit('validateInputs')
      }
    }
  }
</script>
