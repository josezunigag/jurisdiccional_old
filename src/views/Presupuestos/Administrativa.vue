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
                            <label class="col-md-12">Observación:
                              <button type="button"  v-clipboard="() => textarea[0]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>                              
                            </label>
                            <div class="col-md-12">
                              <textarea-autosize
                              name="obs1"
                              id="obs1"
                              class="form-control"
                              v-model="textarea[0]"
                              :disabled="validated == 2"
                              ></textarea-autosize>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">2. Información sobre las necesidades y estado en el ámbito Informático, así como también las mejoras desarrolladas</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:
                              <button type="button" v-clipboard="() => textarea[1]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>                                
                            </label>
                            <div class="col-md-12">
                              <textarea-autosize
                              name="obs2"
                              id="obs2"
                              class="form-control"
                              v-model="textarea[1]"
                              :disabled="validated == 2"
                              ></textarea-autosize>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">3. Acuerdos tomados por los Jueces que ilustren las gestiones y mejoras que ha implementado el propio tribunal</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:
                              <button type="button" v-clipboard="() => textarea[2]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>                                
                            </label>
                            <div class="col-md-12">
                              <textarea-autosize
                              name="obs3"
                              id="obs3"
                              class="form-control"
                              v-model="textarea[2]"
                              :disabled="validated == 2"
                              ></textarea-autosize>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">4. Informes solicitados por la Corte de Apelaciones o por el Consejo de Coordinación zonal y los tiempos de respuesta involucrados.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:
                              <button type="button" v-clipboard="() => textarea[3]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>                                
                            </label>
                            <div class="col-md-12">
                              <textarea-autosize
                              name="obs4"
                              id="obs4"
                              class="form-control"
                              v-model="textarea[3]"
                              :disabled="validated == 2"
                              ></textarea-autosize>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">5. Requerimientos formulados por la CAPJ que fueron atendidos y aquellos que se encuentran pendientes respecto de los que se dio una respuesta negativa.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:
                              <button type="button" v-clipboard="() => textarea[4]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>                                
                            </label>
                            <div class="col-md-12">
                              <textarea-autosize
                              name="obs5"
                              id="obs5"
                              class="form-control"
                              v-model="textarea[4]"
                              :disabled="validated == 2"
                              ></textarea-autosize>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">6. Informe sobre las iniciativas de coordinación conducente a optimizar la gestión administrativa y presupuestaria del juzgado.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:
                              <button type="button" v-clipboard="() => textarea[5]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>                                
                            </label>
                            <div class="col-md-12">
                              <textarea-autosize
                              name="obs6"
                              id="obs6"
                              class="form-control"
                              v-model="textarea[5]"
                              :disabled="validated == 2"
                              ></textarea-autosize>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">7. Desafíos futuros del Tribunal en materia administrativa y de gestión.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:
                              <button type="button" v-clipboard="() => textarea[6]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>                                
                            </label>
                            <div class="col-md-12">
                              <textarea-autosize
                              name="obs7"
                              id="obs7"
                              class="form-control"
                              v-model="textarea[6]"
                              :disabled="validated == 2"
                              ></textarea-autosize>
                            </div>
                        </div>
                        <div class="form-group">
                            <h5><span class="col-md-12">8. General.</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:
                              <button type="button" v-clipboard="() => textarea[7]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>                                
                            </label>
                            <div class="col-md-12">
                              <textarea-autosize
                              name="obs8"
                              id="obs8"
                              class="form-control"
                              v-model="textarea[7]"
                              :disabled="validated == 2"
                              ></textarea-autosize>
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
import {mapState} from 'vuex'
import VueTextareaAutosize from 'vue-textarea-autosize'
export default {
  name: 'Administrativas',
  data () {
    return {
      validated: 1,
      textarea: ["", "", "", "", "", "", "", ""],
      local: store.get('user'),
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      show: false
    }
  },
  created(){
    this.loadData()
  },
  computed:{
    ...mapState([
      'year'
    ])
  },
  watch:{
    year() {
      this.loadData()
    }
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
        ano: this.year,
        observacion: [{ id: 1, descripcion: this.textarea[0], estado_observacion_id: 1 },
          { id: 2, descripcion: this.textarea[1], estado_observacion_id: 1 },
          { id: 2, descripcion: this.textarea[2], estado_observacion_id: 1 },
          { id: 2, descripcion: this.textarea[3], estado_observacion_id: 1 },
          { id: 2, descripcion: this.textarea[4], estado_observacion_id: 1 },
          { id: 2, descripcion: this.textarea[5], estado_observacion_id: 1 },
          { id: 2, descripcion: this.textarea[6], estado_observacion_id: 1 },
          { id: 2, descripcion: this.textarea[7], estado_observacion_id: 1 }
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
              ano: this.year
            }
          })

          const data = response.data

          if (data.data.observaciones && data.data.observaciones.length > 0) {
            Object.values(data.data.observaciones).map((type) => {
              Object.values(type.observacion).map((element, index) => {
                this.validated = element.estado_observacion_id
                this.textarea[index] = element.descripcion;
              })
            })
          }else{
            this.validated=1;
            this.textarea =["", "", "", "", "", "", "", ""];
          }

          this.$forceUpdate()
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
<style>
textarea {
        text-align: justify;
        white-space: normal;
    }
</style>