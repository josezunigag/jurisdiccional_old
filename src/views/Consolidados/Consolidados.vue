<template>
    <div class="page-wrapper">

        <div class="presidente row">
            <div class="white-box">
                <div class="row">
                        <div class="form-group">
                            <select v-model="selected" @change="change(selected)" class="form-control">
								<option v-for="item in selects_tribunales" v-bind:key="item" :value="item.value">
								{{ item.text }}
								</option>
                            </select>                       
                        </div>					
                        <div class="form-group">
                            <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                            <h5><span class="col-md-12"> Palabras de Juez Presidente</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observacion:</label>
                                <div class="col-md-12">
                                        <textarea-autosize
                                        name="presi1"
                                        class="form-control"
                                        v-model="presidente[0]"
                                        disabled
                                        ></textarea-autosize>
                                </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observaciones Generales:</label>
                                 <div class="col-md-12">
                                        <textarea-autosize
                                        name="presi1"
                                        class="form-control"
                                        v-model="presidente[1]"
                                        disabled
                                        ></textarea-autosize>
                                </div>
                        </div>
                </div>
            </div>
        </div>

        <div class="ingresos row">
            <div class="col-md-6 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_registros' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Ingresos {{this.year}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_registros_ant' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Ingresos {{(this.year -1)}}</p>
                    </div>
                </div>
            </div>

            <div v-for="item in ingresos_competencias" :key="item.competencia" :class="'col-md-'+(12 / ingresos_competencias.length )+' col-sm-'+(12 / ingresos_competencias.length)+' info-box'">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='item.total' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Ingresos {{item.competencia}} </p>
                    </div>
                </div>
            </div>
		
            <div class="media">
                 <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                <Highcharts :options="options" />
            </div>

            <div class="media">
                <div class="form-group">
                    <div v-for="item in ingresos_obs" :key="item.id">
                      <label class="col-md-12">Observacion Tribunal</label>
                        <div class="col-md-12" >
                          <textarea-autosize
                          rows="5"
                          class="form-control"
                          v-model="item.value"
                          disabled
                          ></textarea-autosize>                            
                        </div>                        
                    </div>
                </div>
            </div>

        </div>

        <div class="resoluciones row">
            <div class="col-md-6 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_regres' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Resoluciones {{this.year}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_regres_ant' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Resoluciones {{(this.year -1)}}</p>
                    </div>
                </div>
            </div>

            <div v-for="item in resoluciones_competencias" :key="item.competencia" :class="'col-md-'+(12 / resoluciones_competencias.length )+' col-sm-'+(12 / resoluciones_competencias.length)+' info-box'">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='item.total' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">T. Resoluciones {{item.competencia}} </p>
                    </div>
                </div>
            </div>			
			
            <div class="media">
                <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                <Highcharts :options="resolucion" />
            </div>
            <div class="media">
                <div class="form-group">
                    <div v-for="item in resoluciones_obs" :key="item.id">
                      <label class="col-md-12">Observacion Tribunal</label>
                        <div class="col-md-12" >
                          <textarea-autosize
                          rows="5"
                          class="form-control"
                          v-model="item.value"
                          disabled
                          ></textarea-autosize>                            
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

        <div class="terminos row">
            <div class="col-md-6 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_ter' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Terminos {{this.year}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_ter_ant' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Terminos {{(this.year -1)}}</p>
                    </div>
                </div>
            </div>

            <div v-for="item in terminos_competencias" :key="item.competencia" :class="'col-md-'+(12 / terminos_competencias.length )+' col-sm-'+(12 / terminos_competencias.length)+' info-box'">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='item.total' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">T. Terminos {{item.competencia}} </p>
                    </div>
                </div>
            </div>

            <div class="media">
                <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                <Highcharts :options="termino" />
            </div>
            <div class="media">
                <div class="form-group">
                    <div v-for="item in terminos_obs" :key="item.id">
                      <label class="col-md-12">Observacion Tribunal</label>
                        <div class="col-md-12" >
                          <textarea-autosize
                          rows="5"
                          class="form-control"
                          v-model="item.value"
                          disabled
                          ></textarea-autosize>                            
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

        <div class="administrativa row">
            <div class="white-box">
                <div class="row">
                    <div class="form-group">
                        <h4 class="col-md-12">Antecedentes Administrativas</h4>
                    </div>
                    <div class="form-group">
                        <h5><span class="col-md-12">1. Información sobre las necesidades y estado de la Infraestructura del juzgado, así como también las mejoras desarrolladas</span><hr></h5>
                        <!-- <label class="col-md-12">Observación:</label> -->
                        <div class="col-md-12">
                                <textarea-autosize
                                name="obs"
                                class="form-control"
                                v-model="administrativa[0]"
                                disabled
                                ></textarea-autosize>
                        </div>
                        <h5><span class="col-md-12">2. Información sobre las necesidades y estado en el ámbito Informático, así como también las mejoras desarrolladas</span><hr></h5>
                        <!-- <label class="col-md-12">Observación:</label> -->
                        <div class="col-md-12">
                                <textarea-autosize
                                name="obss"
                                class="form-control"
                                v-model="administrativa[1]"
                                disabled
                                ></textarea-autosize>
                        </div>
                        <h5><span class="col-md-12">3. Acuerdos tomados por los Jueces que ilustren las gestiones y mejoras que ha implementado el propio tribunal</span><hr></h5>
                        <!-- <label class="col-md-12">Observación:</label> -->
                        <div class="col-md-12">
                                <textarea-autosize
                                name="obs1"
                                class="form-control"
                                v-model="administrativa[2]"
                                disabled
                                ></textarea-autosize>
                        </div>
                        <h5><span class="col-md-12">4. Informes solicitados por la Corte de Apelaciones o por el Consejo de Coordinación zonal y los tiempos de respuesta involucrados.</span><hr></h5>
                        <!-- <label class="col-md-12">Observación:</label> -->
                        <div class="col-md-12">
                                <textarea-autosize
                                name="obs4"
                                class="form-control"
                                v-model="administrativa[3]"
                                disabled
                                ></textarea-autosize>
                        </div>
                        <h5><span class="col-md-12">5. Requerimientos formulados por la CAPJ que fueron atendidos y aquellos que se encuentran pendientes respecto de los que se dio una respuesta negativa.</span><hr></h5>
                        <!-- <label class="col-md-12">Observación:</label> -->
                        <div class="col-md-12">
                                <textarea-autosize
                                name="obs5"
                                class="form-control"
                                v-model="administrativa[4]"
                                disabled
                                ></textarea-autosize>
                        </div>
                        <h5><span class="col-md-12">6. Informe sobre las iniciativas de coordinación conducente a optimizar la gestión administrativa y presupuestaria del juzgado.</span><hr></h5>
                        <!-- <label class="col-md-12">Observación:</label> -->
                        <div class="col-md-12">
                                <textarea-autosize
                                name="obs6"
                                class="form-control"
                                v-model="administrativa[5]"
                                disabled
                                ></textarea-autosize>
                        </div>
                        <h5><span class="col-md-12">7. Desafíos futuros del Tribunal en materia administrativa y de gestión.</span><hr></h5>
                        <!-- <label class="col-md-12">Observación:</label> -->
                        <div class="col-md-12">
                                <textarea-autosize
                                name="obs7"
                                class="form-control"
                                v-model="administrativa[6]"
                                disabled
                                ></textarea-autosize>
                        </div>
                        <h5><span class="col-md-12">8. General.</span><hr></h5>
                        <!-- <label class="col-md-12">Observación:</label> -->
                        <div class="col-md-12">
                                <textarea-autosize
                                name="obs8"
                                class="form-control"
                                v-model="administrativa[7]"
                                disabled
                                ></textarea-autosize>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="presupuesto row">
            <div class="white-box">
                <div class="row">
                    <div class="row m-0">
                        <div class="col-md-3 col-sm-6 info-box">
                            <div class="media">
                                <div class="media-left">
                                    <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='monto_asignado' :duration='1000'  separator="."></countTo></h3>
                                    <p class="info-text font-12">Presupuesto Asignado</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 info-box">
                            <div class="media">
                                <div class="media-left">
                                    <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='monto_utilizado' :duration='1000'  separator="."></countTo></h3>
                                    <p class="info-text font-12">Presupuesto Utilizado</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 info-box">
                            <div class="media">
                                <div class="media-left">
                                    <span class="icoleaf bg-primary text-white"><i class="icon-graph"></i></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='utilizado' :duration='1000'  separator="." :decimals="2"></countTo>%</h3>
                                    <p class="info-text font-12">% Utilizado</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 info-box">
                            <div class="media">
                                <div class="media-left">
                                    <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='crecimiento' :duration='1000'  separator="." :decimals="2"></countTo>%</h3>
                                    <p class="info-text font-12">% Creciemiento {{this.year}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                <Highcharts :options="optpresus" />
            </div>
        </div>

        <div class="observacion row">
            <div class="form-group">
                <h4 class="col-md-12">Presupuesto</h4>
            </div>
            <div class="form-group">
                <label class="col-md-12">Observaciones Generales:</label>
                    <div class="col-md-12">
                            <textarea-autosize
                            name="presus"
                            class="form-control"
                            v-model="textpresu[0]"
                            disabled
                            ></textarea-autosize>
                    </div>
            </div>
        </div>

        <div class="dotacion row">
            <div class="white-box">
                <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                <Highcharts :options="dotacion" />
            </div>
            <div class="form-group">
                <h4 class="col-md-12">Dotación</h4>
            </div>
            <div class="form-group">
                <label class="col-md-12">Observación:</label>
                        <div class="col-md-12">
                            <textarea-autosize
                            name="presus"
                            class="form-control"
                            v-model="dotobs[0]"
                            disabled
                            ></textarea-autosize>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-12">Observación General:</label>
                        <div class="col-md-12">
                            <textarea-autosize
                            name="presus"
                            class="form-control"
                            v-model="dotobs[1]"
                            disabled
                            ></textarea-autosize>
                </div>
            </div>
        </div>

        <div class="academia row">
            <div class="white-box">
                 <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                <Highcharts :options="academia" />
            </div>
            <div class="form-group">
                <h4 class="col-md-12">Cursos</h4>
            </div>
            <div class="form-group">
                <label class="col-md-12">Observación:</label>
                        <div class="col-md-12">
                            <textarea-autosize
                            name="presus"
                            class="form-control"
                            v-model="acaobs[0]"
                            disabled
                            ></textarea-autosize>
                </div>
            </div>
        </div>

        <div class="media">
            <transition v-on:before-enter="beforeEnter">
                <div v-if="show" class="alert alert-success" role="alert">
                    <p>Generando PDF...</p>
                </div>
            </transition>
        </div>

        <div class="obs_corte">
            <form class="form-horizontal" @submit.prevent="crear()">
                <div class="form-group">
                    <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                    <label class="col-md-12">Observacion Corte</label>
                    <div class="col-md-12">
                        <textarea class="form-control" rows="5" v-model="obscap[0]" :disabled="validated == 2"></textarea>
                    </div>
                </div>
                <div class="media">
                    <button  v-if="show==false" v-on:click="show = !show"
                        class="btn btn-info">Generar PDF
                    </button>
                </div>
            </form>
        </div>

	</div>
</template>
<script>
import { url } from '@/config/api'
import store from 'store'
import countTo from 'vue-count-to'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import VueTextareaAutosize from 'vue-textarea-autosize'
import { mapState } from 'vuex'
export default {
  name: 'consolidados',
  data () {
    return {
      validated: 1,
      cant_regres: 0,
      cant_regres_ant: 0,
      cant_ter: 0,
      cant_ter_ant: 0,      
      cant_registros: 0,
      cant_registros_ant: 0,
      monto_asignado: 0,
      monto_utilizado: 0,
      utilizado:0,
      crecimiento: 0,
      prom_crecimiento: 0,
      local: store.get('user'),
      textarea: ["", "", "", "", "", "", "", ""],
      textareares: [""],
      textareater: [""],
      obscap: [""],
      seriesbar: [],
      competencia_id: 0,
      cod_tribunal: 0,
      gls_tribunal: '',
      meses: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      options: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Ingresos de Causas',
          x: -20 // center
        },
        subtitle: {
          x: -20
        },
        xAxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        tooltip: {
          split: true
        },
        yAxis: {
          title: {
            text: 'Cantidades'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        credits: {
          enabled: false
        },
        series: []
      },
      resolucion: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Resoluciones',
          x: -20 // center
        },
        subtitle: {
          x: -20
        },
        xAxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        tooltip: {
          split: true
        },
        yAxis: {
          title: {
            text: 'Cantidades'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        credits: {
          enabled: false
        },
        series: []
      },
      termino: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Terminos',
          x: -20 // center
        },
        subtitle: {
          x: -20
        },
        xAxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        tooltip: {
          split: true
        },
        yAxis: {
          title: {
            text: 'Cantidades'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        credits: {
          enabled: false
        },
        series: []
      },
      optpresus: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Presupuesto Asignado Ultimos 4 años'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Millones'
          }
        },
        legend: {
          enabled: true
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              formatter: function () {
                return '$' + this.y.toLocaleString()
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return 'El Valor <b>' + this.series.name +
                            '</b> es <b>' + this.y.toLocaleString() + '</b>'
          }
        },
        series: []

      },
      dotacion: {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Dotación Vigente'
        },
        xAxis: {
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'pie',
          allowPointSelect: true,
          keys: ['name', 'y', 'selected', 'sliced'],
          data: [],
          showInLegend: true
        }]
      },
      academia: {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Funcionarios Academia'
        },
        xAxis: {
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'pie',
          allowPointSelect: true,
          keys: ['name', 'y', 'selected', 'sliced'],
          data: [],
          showInLegend: true
        }]
      },
      administrativa: Array(7).fill(),
      presidente: Array(7).fill(),
      dotobs: Array(7).fill(),
      textpresu: [""],
      acaobs: [""],
      competencias: {
        2: 'Cobranza',
        3: 'Familia',
        4: 'Laboral',
        5: 'Penal'
      },
      show: false,
      ingresos_obs: [],
      resoluciones_obs: [],
      terminos_obs: [],
	  selects_tribunales: [],
	  selected: this.cod_tribunal,
	  ingresos_competencias: [],
	  resoluciones_competencias: [],
	  terminos_competencias: []
    }
  },
  computed: {
    ...mapState([
      'year'
    ])
  },
  components: {
    countTo,
    VueTextareaAutosize
  },   
  watch: {
    '$route' (args) {
      this.cod_tribunal = args.params.cod_tribunal
      this.clean()
      this.ingresos()
      this.resoluciones()
      this.terminos()
      this.administrativas()
      this.presidentes()
      this.presupuestos()
      this.dotaciones()
      this.academias()
      this.loadData()
    }
  },
  mounted () {
    this.cod_tribunal = this.$route.params.cod_tribunal
    this.clean()
    this.ingresos()
    this.resoluciones()
    this.terminos()
    this.administrativas()
    this.presidentes()
    this.presupuestos()
    this.dotaciones()
    this.academias()
    this.loadData()
  },
  methods: {
	change (selecttribunal) {
		this.cod_tribunal = selecttribunal
		this.clean()
		this.ingresos()
		this.resoluciones()
		this.terminos()
		this.administrativas()
		this.presidentes()
		this.presupuestos()
		this.dotaciones()
		this.academias()
		this.loadData()
	},
    loadData () {
      const axios = require('axios')
      const url_rbs = url + '/observaciones'

      const getData = async url_rbs => {
        try {
          const response = await axios.get(url_rbs, {
            params: {
              formulario_id: 15,
              competencia_id: 0,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data
       
          if (Object.keys(data.data.observaciones).length > 0) {
          
            Object.values(data.data.observaciones).map((type) => {
              Object.values(type.observacion).map((obs) => { 
                this.validated = 1 // obs.estado_observacion_id
                this.obscap[0] = obs.descripcion
              })
            })
          } else {
            this.validated = 1
            this.obscap[0] = ''
          }
        } catch (error) {
          console.log(error)
        }
        this.$forceUpdate()
      }
      getData(url_rbs)

      const url_aca = url + '/group'
      const getDataTwo = async url_aca => {
        try {
          const response = await axios.get(url_aca, {
            params: {
              cod_corte: this.cod_corte
            }
          })
          const data = response.data
          Object.values(data.data.tribunal).map((type) => {
			  this.selects_tribunales.push({text: type.gls_tribunal, value: type.cod_tribunal})
          })

		  this.selected = this.cod_tribunal

        } catch (error) {
          console.log(error)
        }
      }
      getDataTwo(url_aca)			  

    },
    crear () {
      const axios = require('axios')
      const url_find = url + '/obsingresos'

      axios.post(url_find, {
        formulario_id: 15,
        competencia_id: 0,
        cod_corte: this.cod_corte,
        cod_tribunal: this.cod_tribunal,
        ano: this.year,
        observacion: [{ id: 1, descripcion: this.obscap, estado_observacion_id: 2 }
        ]
      }).then(response => {})
        .catch(e => {
          console.log(e)
        })

      html2canvas(document.querySelector('.presidente')).then(canvas => {
        var imgWidth = 380
        var pageHeight = 280
        var position = 0
        var imgHeight = canvas.height * imgWidth / canvas.width
        var image = canvas.toDataURL('image/png')

        var doc = new jsPDF('l', 'mm', [1375, 800])

        doc.addImage(image, 'PNG', 0, position, imgWidth, imgHeight)
        doc.addPage()

        html2canvas(document.querySelector('.ingresos')).then(canvas => {
          var image = canvas.toDataURL('image/png')
          doc.addImage(image, 'PNG', 10, 10)
          doc.addPage()

          html2canvas(document.querySelector('.resoluciones')).then(canvas => {
            var image = canvas.toDataURL('image/png')
            doc.addImage(image, 'PNG', 10, 10)
            doc.addPage()
            html2canvas(document.querySelector('.terminos')).then(canvas => {
            var image = canvas.toDataURL('image/png')
            doc.addImage(image, 'PNG', 10, 10)
            doc.addPage()
            html2canvas(document.querySelector('.administrativa')).then(canvas => {
              imgHeight = canvas.height * imgWidth / canvas.width
              var heightLeft = imgHeight
              var image = canvas.toDataURL('image/png')
              // doc.addImage(image, 'PNG', 1, 1);
              doc.addImage(image, 'PNG', 0, position, imgWidth, imgHeight)
              heightLeft -= pageHeight

              while (heightLeft >= 0) {
                position = heightLeft - imgHeight
                doc.addPage()
                doc.addImage(image, 'PNG', 0, position, imgWidth, imgHeight)
                heightLeft -= pageHeight
              }

              doc.addPage()

              html2canvas(document.querySelector('.presupuesto')).then(canvas => {
                var image = canvas.toDataURL('image/png')
                doc.addImage(image, 'PNG', 10, 10)
                doc.addPage()
                html2canvas(document.querySelector('.observacion')).then(canvas => {
                  var image = canvas.toDataURL('image/png')
                  doc.addImage(image, 'PNG', 10, 10)
                  doc.addPage()
                  html2canvas(document.querySelector('.dotacion')).then(canvas => {
                    position = 0
                    imgHeight = canvas.height * imgWidth / canvas.width
                    heightLeft = imgHeight

                    var image = canvas.toDataURL('image/png')
                    // doc.addImage(image, 'PNG', 1, 1);
                    doc.addImage(image, 'PNG', 0, position, imgWidth, imgHeight)
                    heightLeft -= pageHeight

                    while (heightLeft >= 0) {
                      position = heightLeft - imgHeight
                      doc.addPage()
                      doc.addImage(image, 'PNG', 0, position, imgWidth, imgHeight)
                      heightLeft -= pageHeight
                    }

                    doc.addPage()

                    // var image = canvas.toDataURL('image/png');
                    // doc.addImage(image, 'PNG', 10, 10);
                    // doc.addPage();
                    html2canvas(document.querySelector('.academia')).then(canvas => {
                      position = 0
                      imgHeight = canvas.height * imgWidth / canvas.width
                      heightLeft = imgHeight

                      var image = canvas.toDataURL('image/png')
                      // doc.addImage(image, 'PNG', 1, 1);
                      doc.addImage(image, 'PNG', 0, position, imgWidth, imgHeight)
                      heightLeft -= pageHeight

                      while (heightLeft >= 0) {
                        position = heightLeft - imgHeight
                        doc.addPage()
                        doc.addImage(image, 'PNG', 0, position, imgWidth, imgHeight)
                        heightLeft -= pageHeight
                      }

                      doc.addPage()

                      // var image = canvas.toDataURL('image/png');
                      // doc.addImage(image, 'PNG', 10, 10);
                      // doc.addPage();
                      html2canvas(document.querySelector('.obs_corte')).then(canvas => {
                        var image = canvas.toDataURL('image/png')
                        doc.addImage(image, 'PNG', 10, 10)
                        doc.save('download.pdf')
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
      })
    },
    ingresos () {
      this.tribunal()
      

      this.cod_corte = this.local.cod_corte
      // this.cod_tribunal   = this.local.cod_tribunal;

      const axios = require('axios')
      const url_pre = url + '/observaciones_ica'
      this.cant_registros = 0
      this.cant_registros_ant = 0

      var getData = async url_pre => {
        try {
          const response = await axios.get(url_pre, {
            params: {
              formulario_id: 1,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })
          var aux = '';
          var observacion = ''
          const data = response.data
          if (Object.keys(data.data.observaciones).length > 0) {
              var aux_obs = 0 ;
              var observacion = ""
              Object.values(data.data.observaciones).map((type) => {
                Object.values(type.observacion).map((obs) => {  
                  observacion = (obs.descripcion.trim() == '') ? 'Sin Observaciones\r\n': obs.descripcion+'\r\n'
                  this.ingresos_obs.push({ id: aux_obs, value: this.competencias[type.competencia_id]+': '+ observacion })           
                  aux_obs++;
                })
            })
          }
        } catch (error) {
          console.log(error)
        }
      }

      getData(url_pre)

      let url_ing = url
          url_ing = url_ing + '/ingresos_ica'

      getData = async url => {
        try {
          var arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          var arregloT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

          const response = await axios.get(url_ing, {
            params: {
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data

          var valor = []
		  var cant_reg_ing = 0
          Object.values(data.data.ingresos).map((type) => {
            valor.push(type.cantidad)
            this.cant_registros += type.cantidad
			cant_reg_ing += type.cantidad
            if (type._id.mes == 12) {
              this.options.series.push({ data: valor, name: this.year+' (' + this.competencias[type._id.competencia_id] + ')', visible: true })
			  this.ingresos_competencias.push({ total: cant_reg_ing, competencia: this.competencias[type._id.competencia_id] })
              valor = []
			  cant_reg_ing = 0
            }
          })

          Object.values(data.data.ingresos_ant).map((type) => {
            this.cant_registros_ant += type.cantidad
            valor.push(type.cantidad)

            if (type._id.mes == 12) {
              this.options.series.push({ data: valor, name: (this.year -1)+' ('+ this.competencias[type._id.competencia_id] + ')', visible: true })
              valor = []
            }
          })          

          var valor = []
          var indicador = ''



        } catch (error) {
          console.log(error)
        }
      }

      getData(url_ing)
    },
    resoluciones () {
      this.tribunal()
      var arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var arregloT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var arregloanT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var juez = ''
      this.cant_regres = 0
      this.cant_regres_ant = 0

      const axios = require('axios')
      const url_res = url + '/resoluciones_ica'

      const getData = async url_res => {
        try {
          const response = await axios.get(url_res, {
            params: {
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data

          var valor = []
		  var cant_reg_ter = 0
          Object.values(data.data.resoluciones).map((type) => {
            valor.push(type.cantidad)
            this.cant_regres += type.cantidad
			cant_reg_ter += type.cantidad
            if (type._id.mes == 12) {
              this.resolucion.series.push({ data: valor, name: this.year+' (' + this.competencias[type._id.competencia_id] + ')', visible: true })
			  this.resoluciones_competencias.push({ total: cant_reg_ter, competencia: this.competencias[type._id.competencia_id] })              
			  valor = []
			  cant_reg_ter = 0
            }
          })

          Object.values(data.data.resoluciones_ant).map((type) => {
            this.cant_regres_ant += type.cantidad
            valor.push(type.cantidad)

            if (type._id.mes == 12) {
              this.resolucion.series.push({ data: valor, name: (this.year -1)+' ('+ this.competencias[type._id.competencia_id] + ')', visible: true })
              valor = []
            }
          })          

          var valor = []
          var indicador = ''


        } catch (error) {
          console.log(error)
        }
      }
      getData(url_res)
      const url_obs = url + '/observaciones_ica'

      const getDatav2 = async url_obs => {
        try {
          const response = await axios.get(url_obs, {
            params: {
              formulario_id: 3,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })
          const data = response.data
          var aux = '';
          var observacion = '';
          if (Object.keys(data.data.observaciones).length > 0) {
              var aux_obs = 0 ;
              var observacion = ""
              Object.values(data.data.observaciones).map((type) => {
                Object.values(type.observacion).map((obs) => {  
                  observacion = (obs.descripcion.trim() == '') ? 'Sin Observaciones\r\n': obs.descripcion+'\r\n'
                  this.resoluciones_obs.push({ id: aux_obs, value: this.competencias[type.competencia_id]+': '+ observacion })           
                  aux_obs++;
                 })
              })
          }
        } catch (error) {
          console.log(error)
        }
      }   
      getDatav2(url_obs)   
          
    },
    terminos () {
      this.tribunal()
      var arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var arregloT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var arregloanT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var juez = ''
      this.cant_ter_ant = 0
      this.cant_ter = 0

      const axios = require('axios')
      const url_res = url + '/terminos_ica'

      const getData = async url_res => {
        try {
          const response = await axios.get(url_res, {
            params: {
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data

          var valor = []
		  var cant_reg_ter = 0
          Object.values(data.data.terminos).map((type) => {
            valor.push(type.cantidad)
            this.cant_ter += type.cantidad
			cant_reg_ter += type.cantidad
            if (type._id.mes == 12) {
              this.termino.series.push({ data: valor, name: this.year+' (' + this.competencias[type._id.competencia_id] + ')', visible: true })
              this.terminos_competencias.push({ total: cant_reg_ter, competencia: this.competencias[type._id.competencia_id] })              
			  valor = []
			  cant_reg_ter = 0
            }
          })

          Object.values(data.data.terminos_ant).map((type) => {
            this.cant_ter_ant += type.cantidad
            valor.push(type.cantidad)

            if (type._id.mes == 12) {
              this.termino.series.push({ data: valor, name: (this.year -1)+' ('+ this.competencias[type._id.competencia_id] + ')', visible: true })
              valor = []
            }
          })

        } catch (error) {
          console.log(error)
        }
      }
      getData(url_res)

      const url_obs = url + '/observaciones_ica'

      const getDatav2 = async url_obs => {
        try {
          const response = await axios.get(url_obs, {
            params: {
              formulario_id: 5,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })
          const data = response.data

          if (Object.keys(data.data.observaciones).length >  0) {
              var aux_obs = 0 ;
              var observacion = ""
              Object.values(data.data.observaciones).map((type) => {
                Object.values(type.observacion).map((obs) => {  
                  observacion = (obs.descripcion.trim() == '') ? 'Sin Observaciones\r\n': obs.descripcion+'\r\n'
                  this.terminos_obs.push({ id: aux_obs, value: this.competencias[type.competencia_id]+': '+ observacion })           
                  aux_obs++;
                 })
              })
          }
        } catch (error) {
          console.log(error)
        }
      }   
      getDatav2(url_obs)   
    },    
    administrativas () {
      this.tribunal()

      var obs_url = ''
      const axios = require('axios')
      obs_url = url + '/observaciones_ica'
      const getData = async obs_url => {
        try {
          const response = await axios.get(obs_url, {
            params: {
              formulario_id: 9,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data

          if (Object.keys(data.data.observaciones).length > 0) {
            this.administrativa = data.data.observaciones[0].observacion.map(observacion => (
              String(observacion.descripcion)
            ))
          }
        } catch (error) {
          console.log(error)
        }
      }
      getData(obs_url)
    },
    presidentes () {
      this.tribunal()

      var obs_url = ''
      const axios = require('axios')
      obs_url = url + '/observaciones_ica'

      const getData = async obs_url => {
        try {
          const response = await axios.get(obs_url, {
            params: {
              formulario_id: 7,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data

          if (Object.keys(data.data.observaciones).length > 0) {
            this.presidente = data.data.observaciones[0].observacion.map(observacion => (
              observacion.descripcion
            ))
          }
        } catch (error) {
          console.log(error)
        }
      }
      getData(obs_url)
    },
    presupuestos () {
      this.tribunal()

      var url_pre = url + '/presupuestos_ica'
      const axios = require('axios')

      const getData = async url_pre => {
        try {
          const response = await axios.get(url_pre, {
            params: {
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: 2016
            }
          })

          const arreglo = []

          Object.values(response.data.data.presupuestos).map((type) => {
            this.calcularPromedio(type.monto_utilizado, type.monto_asignado)

            if (type.ano == (this.year - 1) ) {
              this.monto_asignado_ant = type.monto_asignado
            }

            this.monto_asignado = type.monto_asignado
            this.monto_utilizado = type.monto_utilizado
            this.optpresus.series.push({ name: 'Monto Asignado ' + type.ano,
              data: [{ name: type.ano,
                y: type.monto_asignado }] })
          })


          this.calcularCrecimiento(this.monto_asignado, this.monto_asignado_ant)
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_pre)
      var obs_url = ''
      obs_url = url + '/observaciones_ica'

      this.textpresu = [""]

      const getObs = async obs_url => {
        try {
          const obs = await axios.get(obs_url, {
            params: {
              formulario_id: 6,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = obs.data

          if (Object.keys(data.data.observaciones).length > 0) {
            Object.values(data.data.observaciones).map((type) => {
              Object.values(type.observacion).map((obs) => {
                this.textpresu[0] = obs.descripcion;
              })
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
      getObs(obs_url)
    },
    dotaciones () {
      this.tribunal()

      var arreglo = []

      var url_dot = url + '/dotaciones'
      const axios = require('axios')

      const getData = async url_dot => {
        try {
          const response = await axios.get(url_dot, {
            params: {
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })
          const data = response.data

          Object.values(data.data.count).map((type) => {
            arreglo.push(type.count)
            this.dotacion.series[0].data.push([type._id, type.count, true])
          })
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_dot)

      var obs_url = ''
      obs_url = url + '/observaciones_ica'

      this.dotobs = ''

      const getObs = async obs_url => {
        try {
          const obs = await axios.get(obs_url, {
            params: {
              formulario_id: 8,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = obs.data

          if (Object.keys(data.data.observaciones).length > 0) {
            this.dotobs = data.data.observaciones[0].observacion.map(observacion => (
              observacion.descripcion
            ))
          }
        } catch (error) {
          console.log(error)
        }
      }
      getObs(obs_url)
    },
    academias () {
      this.tribunal()

      var arreglo = []

      var url_cap = url + '/capacitacionesv2'
      const axios = require('axios')

      const getData = async url_cap => {
        try {
          const response = await axios.get(url_cap, {
            params: {
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })
          const data = response.data
          
          Object.values(data.data.count).map((type) => {
            this.academia.series[0].data.push([type._id, type.count, true])
          })
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_cap)

      var obs_url = ''
      obs_url = url + '/observaciones_ica'

      this.dotobs = ''

      const getObs = async obs_url => {
        try {
          const obs = await axios.get(obs_url, {
            params: {
              formulario_id: 10,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = obs.data

          if (Object.keys(data.data.observaciones).length > 0) {
            this.acaobs[0] = data.data.observaciones[0].observacion.map(observacion => (
              observacion.descripcion
            ))
          }
        } catch (error) {
          console.log(error)
        }
      }
      getObs(obs_url)
    },
    calcularCrecimiento (monto_asignado, monto_asignado_ant) {
      this.crecimiento = (((monto_asignado - this.monto_asignado_ant) / monto_asignado) * 100)
      return this.crecimiento
    },
    calcularPromedio (monto_utilizado, monto_asignado) {
      this.utilizado = ((monto_utilizado * 100) / monto_asignado)

      return this.utilizado
    },
    clean () {
      this.cant_regres = 0
      this.cant_regres_ant = 0
      this.cant_ter = 0
      this.cant_ter_ant = 0     
      this.cant_registros = 0
      this.cant_registros_ant = 0
      this.prom_crecimiento = 0
      this.grafinal = []
      this.gls_tribunal = ''
      this.textarea[0] = ''
      this.options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Ingresos de Causas',
          x: -20 // center
        },
        subtitle: {
          // text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        tooltip: {
          split: true
        },
        yAxis: {
          title: {
            text: 'Cantidades'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        credits: {
          enabled: false
        },
        series: []
      }
      this.resolucion = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Resoluciones',
          x: -20 // center
        },
        subtitle: {
          // text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        tooltip: {
          split: true
        },
        yAxis: {
          title: {
            text: 'Cantidades'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        credits: {
          enabled: false
        },
        series: []
      },
      this.optpresus = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Presupuesto Asignado Ultimos 4 años'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Millones'
          }
        },
        legend: {
          enabled: true
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              formatter: function () {
                return '$' + this.y.toLocaleString()
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return 'El Valor <b>' + this.series.name +
                                    '</b> es <b>' + this.y.toLocaleString() + '</b>'
          }
        },
        series: []

      },
      this.dotacion = {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Dotación Vigente'
        },
        xAxis: {
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'pie',
          allowPointSelect: true,
          keys: ['name', 'y', 'selected', 'sliced'],
          data: [],
          showInLegend: true
        }]
      },
      this.academia = {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Funcionarios Academia'
        },
        xAxis: {
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'pie',
          allowPointSelect: true,
          keys: ['name', 'y', 'selected', 'sliced'],
          data: [],
          showInLegend: true
        }]
      },
      this.termino = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Terminos',
          x: -20 // center
        },
        subtitle: {
          // text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        tooltip: {
          split: true
        },
        yAxis: {
          title: {
            text: 'Cantidades'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        credits: {
          enabled: false
        },
        series: []
      },
      this.administrativa = [],
      this.presidente = [],
      this.dotobs = [],
      this.ingresos_obs = [],
      this.resoluciones_obs = [],
      this.terminos_obs = [],
	  this.selects_tribunales = [],
	  this.ingresos_competencias = [],
	  this.resoluciones_competencias = [],
	  this.terminos_competencias = []	  
    },
    tribunal () {
      const axios = require('axios')

      let url_ing = url + '/detalle_tribunal'

      const get = async url_ing => {
        try {
          const response = await axios.get(url_ing, {
            params: {
              cod_tribunal: this.cod_tribunal
            }
          })

          const data = response.data

          Object.values(data.data).map((type) => {
            this.gls_tribunal = type.gls_tribunal
          })
        } catch (error) {
          console.log(error)
        }
      }

      get(url_ing)
    },
    beforeEnter: function (el) {
      setTimeout(() => {
        this.show = false
      }, 1100 * 10)
    }
  }
}
</script>
<style scoped>
textarea{
   white-space: pre-wrap;
}
</style>