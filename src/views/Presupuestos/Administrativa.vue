<template>
    <div class="page-wrapper">
        <div class="container-fluid">
        <!-- ===== Page-Container ===== -->
            <div class="white-box">
                <div class="row">
                    <transition v-on:before-enter="beforeEnter">
                        <div v-if="show" class="alert alert-success" role="alert">
                            <p>La informacion ha sido Guardada</p>
                        </div>
                    </transition>
                    <form class="form-horizontal" @submit.prevent="submit()">
                        <div class="form-group">
                            <h5><span class="col-md-12">1. Información sobre las necesidades y estado de la Infraestructura del juzgado, así como también las mejoras desarrolladas</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs1" id="obs1" v-model="areatext[0]" :disabled="validated == 2"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">2. Información sobre las necesidades y estado en el ámbito Informático, así como también las mejoras desarrolladas</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs2" id="obs2" v-model="areatext[1]" :disabled="validated == 2"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">3. Acuerdos tomados por los Jueces que ilustren las gestiones y mejoras que ha implementado el propio tribunal</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs3" id="obs3" v-model="areatext[2]" :disabled="validated == 2"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">4. Informes solicitados por la Corte de Apelaciones o por el Consejo de Coordinación zonal y los tiempos de respuesta involucrados.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs4" id="obs4" v-model="areatext[3]" :disabled="validated == 2"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">5. Requerimientos formulados por la CAPJ que fueron atendidos y aquellos que se encuentran pendientes respecto de los que se dio una respuesta negativa.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs5" id="obs5" v-model="areatext[4]" :disabled="validated == 2"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">6. Informe sobre las iniciativas de coordinación conducente a optimizar la gestión administrativa y presupuestaria del juzgado.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs6" id="obs6" v-model="areatext[5]" :disabled="validated == 2"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">7. Desafíos futuros del Tribunal en materia administrativa y de gestión.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs7" id="obs7" v-model="areatext[6]" :disabled="validated == 2"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">8. General.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs8" id="obs8" v-model="areatext[7]" :disabled="validated == 2"></textarea>
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
        </div>
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>
</template>
<script>
import { url } from '@/config/api'
import store from 'store'
export default {
  name: 'Administrativas',
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
      var observacion = []

      this.competencia_id = this.setCompetencia()
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const axios = require('axios')
      const url_sub = url + '/obsingresos'

      axios.post(url_sub, {
        formulario_id: 9,
        competencia_id: this.competencia_id,
        cod_corte: this.cod_corte,
        cod_tribunal: this.cod_tribunal,
        ano: 2018,
        observacion: [{ id: 1, descripcion: this.areatext[0], estado_obervacion_id: 1 },
          { id: 2, descripcion: this.areatext[1], estado_obervacion_id: 1 },
          { id: 2, descripcion: this.areatext[2], estado_obervacion_id: 1 },
          { id: 2, descripcion: this.areatext[3], estado_obervacion_id: 1 },
          { id: 2, descripcion: this.areatext[4], estado_obervacion_id: 1 },
          { id: 2, descripcion: this.areatext[5], estado_obervacion_id: 1 },
          { id: 2, descripcion: this.areatext[6], estado_obervacion_id: 1 },
          { id: 2, descripcion: this.areatext[7], estado_obervacion_id: 1 }
        ]
      })
        .then(response => {})
        .catch(e => {
          console.log(e)
        })
    },
    loadData () {
      var url_ant = ''
      this.competencia_id = this.setCompetencia()
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const axios = require('axios')

      if (!this.local.competencia_id[0].competencia_id) {
        url_ant = url + '/observaciones'
      } else {
        url_ant = url + '/observaciones_v2'
      }

      const getData = async url_ant => {
        try {
          const response = await axios.get(url_ant, {
            params: {
              formulario_id: 9,
              competencia_id: this.competencia_id,
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
    },
    setCompetencia () {
      const obj = []

      if (!this.local.competencia_id[0].competencia_id) {
        obj.push(this.local.competencia_id[0])
      } else {
        this.competencia_id = this.local.competencia_id
        this.competencia_id.forEach(element => {
          obj.push(element.competencia_id)
        })
      }

      return obj
    }
  }
}
</script>
