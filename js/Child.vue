<template>
  <div>
    <input type="text" name="textbox" id="textbox" v-validate:name="'required|alpha'"/>
    <i v-show="errors.has('textbox')" class="fa fa-warning"></i>
    <span v-show="errors.has('textbox')" class="help is-danger">{{ errors.first('textbox') }}</span>
  </div>
</template>

<script>
  import {bus} from './bus'
  export default {
    created(){
      bus.$on('validateInputs', () => {
        this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
      })
    }
  }
</script>
