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
                            <h5><span class="col-md-12"> Palabras de Juez Presidente <strong>(Periodo {{year}})</strong></span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observación:
                              <button type="button" v-clipboard="() => textarea[0]" class="pull-right btn-success" >
                                    Copiar Texto
                              </button>                              
                            </label>
                            <div>
                              <label class="col-md-12" for="checkboxOne">Sin Observación: 
                                  <input 
                                    type="checkbox" 
                                    id="checkboxOne" 
                                    v-model="checkedOne"
                                    @change="check($event)"
                                  >
                              </label>
                            </div>                              
                            <div id="v-step-0" class="col-md-12">
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
                            <label class="col-md-12">Observaciones Generales:
                              <button type="button" v-clipboard="() => textarea[1]" class="pull-right btn-success">
                                    Copiar Texto
                              </button>
                            </label>
                            <div>
                              <label class="col-md-12" for="checkboxTwo">Sin Observación: 
                                  <input 
                                    type="checkbox" 
                                    id="checkboxTwo" 
                                    v-model="checkedTwo"
                                    @change="check($event)"
                                  >
                              </label>
                            </div>                            
                            <div data-v-step="1"  class="col-md-12">
                                <textarea-autosize
                                name="obs2"
                                id="obs2"
                                class="form-control"
                                v-model="textarea[1]"
                                :disabled="validated == 2"
                                ></textarea-autosize>                             
                            </div>
                            <v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>
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
import VueTour from 'vue-tour'
export default {
  name: 'Presentaciones',
  data () {
    return {
      validated: 1,
      textarea: ["", ""],
      checkedOne: '',
      checkedTwo: '',
      local: store.get('user'),
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      show: false,
      x: 0,
      steps: [
        {
          target: '#v-step-0',
          header: {
            title: 'Completa',
          },
          content: `Aquí debe ingresar la palabra del Juez Presidente`,
          params: {
            placement: 'top'
          }            
        },
        {
          target: '[data-v-step="1"]',
          content: `Aquí debe ingresar las observaciones Generales`,
          params: {
            placement: 'top'
          }   
        }        
      ],
      myOptions:{
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: 'Salir',
          buttonPrevious: 'Anterior',
          buttonNext: 'Siguiente',
          buttonStop: 'Finalizar'
        }
      }      
    }
  },
  created(){
    this.loadData()
  },
  mounted: function () {
    this.$tours['myTour'].start()
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
      const obj = []

      if (!this.local.competencia_id[0].competencia_id) {
        obj.push(this.local.competencia_id[0])
      } else {
        this.competencia_id = this.local.competencia_id
        this.competencia_id.forEach(element => {
          obj.push(element.competencia_id)
        })
      }

      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal
      const url_sub = url + '/obsingresos'
      const axios = require('axios')
      axios.post(url_sub, {
        formulario_id: 7,
        competencia_id: obj,
        cod_corte: this.cod_corte,
        cod_tribunal: this.cod_tribunal,
        ano: this.year,
        observacion: [{ id: 1, descripcion: this.textarea[0], estado_observacion_id: 1 },
          { id: 2, descripcion: this.textarea[1], estado_observacion_id: 1 }
        ]
      })
        .then(response => {})
        .catch(e => {
          console.log(e)
        })
    },
    check: function (e){
       this.textarea[0]  = (this.checkedOne === true) ? 'Sin Observación' : ''
       this.textarea[1]  = (this.checkedTwo === true) ? 'Sin Observación' : ''
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
              formulario_id: 7,
              competencia_id: obj,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })
         
          const data = response.data;
          // this.textarea = []
          if (data.data.observaciones && data.data.observaciones.length > 0) {
            Object.values(data.data.observaciones).map((type) => {
              Object.values(type.observacion).map((element, index) => {
                console.log(index,element.descripcion);
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