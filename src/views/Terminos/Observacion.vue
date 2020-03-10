<template>
        <div class="white-box">
            <div class="panel panel-info">
                <transition v-on:before-enter="beforeEnter">
                    <div v-if="show" class="alert alert-success" role="alert">
                        <p>La informacion ha sido Guardada</p>
                    </div>
                </transition>
                <form class="form-horizontal" @submit.prevent="submit()">
                    <div class="form-group">
                        <div class="col-md-12">
                            <!-- <textarea class="form-control" rows="5" v-model="textarea" :disabled="validated == 2"></textarea> -->
                            <textarea-autosize
                            rows="5"
                            class="form-control"
                            v-model="textarea"
                            :disabled="validated == 2"
                            ></textarea-autosize>                            
                        </div>
                    </div>
                    <div class="form-actions">
                        <!-- <input type="submit" value="Submit"  /> -->
                        <button v-on:click="show = !show" :disabled="validated == 2"
                            class="btn btn-info"><i class="fa fa-check"></i> Guardar
                        </button>
                        <!-- <input type="button" class="btn btn-default"> <i class="fa fa-envelope fa-fw"></i>Enviar -->
                   </div>
                </form>
            </div>
        </div>
</template>
<script>
import { url } from '@/config/api'
import store from 'store'
import { mapState } from 'vuex'
import VueTextareaAutosize from 'vue-textarea-autosize'
export default {
  name: 'Observacion',
  data () {
    return {
      validated: 1,
      textarea: '',
      local: store.get('user'),
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      show: false,
      competencias: {
        'cobranza': 2,
        'familia': 3,
        'laboral': 4,
        'penal': 5
      }
    }
  },
  computed: {
    ...mapState([
      'year'
    ])
  },  
  watch: {
    '$route' (args) {
      this.change()
      this.loadData()
    },
    year() {
      this.change()
      this.loadData()
    }
  },
  created () {
    this.change()
  },
  mounted () {
    this.change()
    this.loadData()
  },
  methods: {
    submit: function () {
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const axios = require('axios')
      const urlObs = url + '/obsingresos'

      axios.post(urlObs, {
        formulario_id: 5,
        competencia_id: this.competencia_id,
        cod_corte: this.cod_corte,
        cod_tribunal: this.cod_tribunal,
        ano: this.year,
        observacion: [{ id: 1, descripcion: this.textarea, estado_obervacion_id: 1 }
        ]
      })
        .then(response => {})
        .catch(e => {
          console.log(e)
        })
    },
    loadData () {
      this.textarea = ''
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const axios = require('axios')
      // const url = "http://localhost:3000/observaciones";
      const urlObs = url + '/observaciones'

      const getData = async urlObs => {
        try {
          const response = await axios.get(urlObs, {
            params: {
              formulario_id: 5,
              competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          if (Object.keys(response.data.data.observaciones).length === 1) {
            const data = response.data

            Object.values(data.data.observaciones).map((type) => {
              Object.values(type.observacion).map((obs) => {
                this.validated = obs.estado_obervacion_id
                this.textarea = obs.descripcion
              })
            })
          }else{
            this.validated=1;
            this.textarea = '';            
          }
        } catch (error) {
          console.log(error)
        }
      }
      getData(urlObs)
    },
    change () {
      if (typeof this.$route.params.competencia === 'undefined') {
        this.competencia_id = this.local.competencia_id[0]
      } else {
        this.competencia_id = this.competencias[this.$route.params.competencia]
      }
    },
    beforeEnter: function (el) {
      setTimeout(() => {
        this.show = false
      }, 700 * 10)
    }
  }
}
</script>
