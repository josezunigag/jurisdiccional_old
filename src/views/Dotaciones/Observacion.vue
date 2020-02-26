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
                        <label class="col-md-12">Observacion:</label>
                        <div class="col-md-12">
                            <textarea class="form-control" rows="5" name="obs1" id="obs1" v-model="areatext[0]" :disabled="validated == 2"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-12">Observaciones Generales:</label>
                        <div class="col-md-12">
                            <textarea class="form-control" rows="5" name="obs2" id="obs2" v-model="areatext[1]" :disabled="validated == 2"></textarea>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button v-on:click="show = !show" :disabled="validated == 2"
                            class="btn btn-info"><i class="fa fa-check"></i> Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
</template>
<script>
import { url } from '@/config/api'
import store from 'store'
export default {
  name: 'Observacion',
  data () {
    return {
      validated: 1,
      areatext: [],
      local: store.get('user'),
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      show: false
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    submit: function () {
      const obj = []

      if (!this.local.competencia_id[0].competencia_id) {
        obj.push(this.local.competencia_id[0])
      } else {
        this.competencia_id = this.local.competencia_id
        this.competencia_id.forEach(element => {
          obj.push(element.competencia_id)
        })
      }

      this.competencia_id = this.local.competencia_id
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal
      const url_sub = url + '/obsresoluciones'
      const axios = require('axios')
      axios.post(url_sub, {
        formulario_id: 8,
        competencia_id: obj,
        cod_corte: this.cod_corte,
        cod_tribunal: this.cod_tribunal,
        ano: 2018,
        observacion: [{ id: 1, descripcion: this.areatext[0], estado_obervacion_id: 1 },
          { id: 2, descripcion: this.areatext[1], estado_obervacion_id: 1 }
        ]
      })
        .then(response => {})
        .catch(e => {
          console.log(e)
        })
    },
    loadData () {
      var url_ant = ''
      const obj = []

      const axios = require('axios')

      if (!this.local.competencia_id[0].competencia_id) {
        url_ant = url + '/observaciones'
        obj.push(this.local.competencia_id[0])
      } else {
        url_ant = url + '/observaciones_v2'
        this.competencia_id = this.local.competencia_id

        this.competencia_id.forEach(element => {
          obj.push(element.competencia_id)
        })
      }

      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const getData = async url_ant => {
        try {
          const response = await axios.get(url_ant, {
            params: {
              formulario_id: 8,
              competencia_id: obj,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: 2018
            }
          })

          const data = response.data

          if (data.data.observaciones) {
            Object.values(data.data.observaciones).map((type) => {
              Object.values(type.observacion).map((element, index) => {
                this.validated = element.estado_obervacion_id
                this.areatext.push(element.descripcion)
              })
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_ant)
    },
    beforeEnter: function (el) {
      setTimeout(() => {
        this.show = false
      }, 700 * 10)
    }
  }
}
</script>
