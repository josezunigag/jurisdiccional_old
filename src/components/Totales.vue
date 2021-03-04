<template>
    <router-link :to="link">
      <div class="col-md-3 col-sm-6 info-color-box">
          <div class="white-box">
              <div :class="classtext">
                  <div class="media-body">
                  <h3 class="info-count">
                  <countTo :startVal="0" :endVal="ammount" :duration="1700" separator="." />
                      <span class="pull-right"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span></h3>
                      <p class="info-text font-12">{{title}}</p>
                      <p class="info-ot font-15">{{title}}
                        <span class="label label-rounded">
                        <countTo :startVal="0" :endVal="ammount" :duration="1700" separator="." />
                        </span></p>
                  </div>
              </div>
          </div>
      </div>
    </router-link>
</template>
<script>
import store from 'store'
import countTo from 'vue-count-to'
export default {
  name: 'Totales',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String
    },
    ammount: {
      type: Number
    },
    icon: {
      type: String
    },
    link: {
      type: String
    },
    classtext: {
      type: String
    }
  },
  components: {
    countTo
  },
  computed: {
    classList () {
      return [
        // `count-card--${this.title.toLowerCase().replace(' ', '-')}`
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
