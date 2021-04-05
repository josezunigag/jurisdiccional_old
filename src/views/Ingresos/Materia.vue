<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="row m-0">
            <div class="col-md-6 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                      <h3 class="info-count text-blue">
                        <countTo :startVal='0' :endVal='cant_registros' :duration='3000'  separator="."></countTo>
                      </h3>
                      <p class="info-text font-12">Total Ingresos  Materia {{this.year}}</p>
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
                      <p class="info-text font-12">Comparativo {{(this.year) -1}}</p>
                    </div>
                </div>
            </div>
            <!-- <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="icon-graph"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='prom_crecimiento' :duration='3000'  separator="." :decimals='2'></countTo>% 
                        </h3>
                        <p class="info-text font-12">% {{textocrecimiento}}</p>
                     </div>
                </div>
            </div> -->
        </div>
        <!-- ===== Page-Container ===== -->
        <div class="container-fluid">
            <div class="white-box">
              <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                  <!-- <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
                  <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
                  <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li> -->
                  <li class="pull-right"><button class="btn btn-info" @click="crear()" >Generar PDF</button></li>
              </ul>
            <div class="row">
                <div class="col-md-8 col-sm-12">
                    <div class="white-box stat-widget">
                      <div class="row">
                        <Highcharts :options="options" id="IngresoGrafico" style="margin: 0 auto"/>
                      </div>
                    </div>
                </div>
                <Visualizacion :competencia_id="$route.params.competencia" />
                 <!-- <div class="col-md-12 col-sm-12">
                    <div class="white-box col-md-12 col-sm-12">
                        <label for="c10">
                            <span class="font-16">Filtro</span>
                        </label>
                        <ul class="list-inline">
                            <li v-for="(glosa,index) in glosa_arreglo" :key="glosa"  >
                                <h6 class="font-12" @click="indicadores(index)" ><i class=" icon-arrow-down text-success btn" ></i>{{glosa}}</h6>
                            </li>
                        </ul>
                    </div>
                </div> -->
                </div>
            </div>
            <div class="white-box">
              <Observacion/> 
            </div>
            <div class="task-list">
                <ul class="list-group">
                    <li class="list-group-item bl-info">
                        <div>
                            <i class="fa fa-bank fa-fw"></i>
                            <label for="c7">
                                <span class="font-16">Periodo: </span>
                            </label>
                            <h6 class="p-l-30 font-bold">{{this.year}}</h6>
                        </div>
                    </li>
                    <li class="list-group-item bl-info">
                        <div >
                            <i class="fa fa-bar-chart-o fa-fw"></i>
                            <label for="c8">
                                <span class="font-16">Origen: Sistema de Indicadores Quantum</span>
                            </label>
                            <h6 class="p-l-30 font-bold"><a href="http://www.quantum.pjud/">Quantum</a></h6>
                        </div>
                    </li>
                    <li class="list-group-item bl-info">
                        <div>
                            <i class="fa fa-filter fa-fw"></i>
                            <label for="c9">
                                <span class="font-16">Interpretación de la Información</span>
                            </label>
                            <h6 class="p-l-30 font-bold">Cantidad de Ingresos mensuales por materia,Información almacenada en el sistema de gestion respectivo durante el {{this.year}}.</h6>
                        </div>
                    </li>
                    <li class="list-group-item bl-info">
                        <div >
                            <i class="fa fa-refresh fa-fw"></i>
                            <label for="c10">
                                <span class="font-16">Ciclo de Analisis</span>
                            </label>
                            <h6 class="p-l-30 font-bold">Se refleja la información extraída del sistema de origen el 01 de cada mes, que es almacenada en el sistema de Estadísticas Tribunales.</h6>
                        </div>
                    </li>
                </ul>
            </div>                        
            <!-- <div class="table-responsive">
                <table id="myTable"  class="table" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Año</th>
                            <th>Tipo Causa</th>
                            <th>Materia</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Año</th>
                            <th>Tipo Causa</th>
                            <th>Materia</th>
                            <th>Cantidad</th>
                        </tr>
                    </tfoot>
                    <tbody>
                    </tbody>
                </table>
            </div> -->
        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>
    <!-- ===== Page-Content-End ===== -->

</template>
<script>
import { url } from '@/config/api'
import store from 'store'
import countTo from 'vue-count-to'
import Observacion from '@/views/Ingresos/Observacion'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Visualizacion from '@/components/Visualizacion'
import { mapState } from 'vuex'
export default {
  name: 'IngresosMateria',
  data () {
    return {
      cant_registros: 0,
      cant_registros_ant: 0,
      prom_crecimiento: 0,
      textocrecimiento: '',
      glosa_arreglo: [],
      seriesbar: [],
      chart1: '',
      datatable: '',
      local: store.get('user'),
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      gls_tribunal: '',
      competencias: {
        'cobranza': 2,
        'familia': 3,
        'laboral': 4,
        'penal': 5
      },
      options: {
        chart: {
          type: 'line'
        },
        title: {
          text: '',
          align: 'left',
          y: 10,
          style: {
              color: '#333b3f',
              fontWeight: 'bold',
              fontFamily: 'Open Sans,sans-serif'
          }                
        },
        xAxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        yAxis: {
          title: {
            text: 'Ingresos por Materias'
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
                return this.y.toLocaleString()
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
      }      
    }
  },
  components: {
    countTo,
    Observacion,
    Visualizacion
  },
  computed: {
    ...mapState([
      'year'
    ])
  },  
  watch: {
    '$route' (args) {
      let name = ''
      if (args.params.competencia !== undefined) {
        name = args.params.competencia
      }
      if (typeof this.$route.params.competencia === 'undefined') {
        this.competencia_id = this.local.competencia_id
      } else {
        this.competencia_id = this.competencias[name]
      }
    },
    year() {
      this.loadData()
    }    
  },
  mounted () {
    this.loadData()
  },  
  methods: {
    crear () {
      
      html2canvas(document.querySelector('#IngresoGrafico')).then(canvas => {

        var imgWidth   = 380;
        var pageHeight = 280;
        var position   = 10;
        var image = canvas.toDataURL('image/png');
        var imgHeight  = canvas.height * imgWidth / canvas.width;
        var doc = new jsPDF('l', 'mm', [1375, 800])

        doc.addImage(image, 'PNG', 50, position, imgWidth, imgHeight)
        doc.addPage()

        html2canvas(document.querySelector('#obsIngresos')).then(canvas => {

          var image = canvas.toDataURL('image/png')
          doc.addImage(image, 'PNG', 50, 10)
          doc.save('download.pdf')
        
        })

       

      })
    }, 
    tribunal () {
      const axios = require('axios')

      let url_ing = url + '/detalle_tribunal'

      const get = async url_ing => {
        try {
          const response = await axios.get(url_ing, {
            params: {
              cod_tribunal: this.local.cod_tribunal
            }
          })

          const data = response.data
          this.gls_tribunal = data.data.tribunal.gls_tribunal
          
        } catch (error) {
          console.log(error)
        }
      }
      get(url_ing)
    },        
    loadData () {
      this.cant_registros = 0 // Seteamos los valores cuando cambie el periodo analizado
      this.cant_registros_ant = 0 // Seteamos los valores cuando cambie el periodo analizado
      this.prom_crecimiento = 0
      this.change()
      this.tribunal()

      let url_mat = ''

      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const axios = require('axios')

      switch (this.competencia_id) {
        case 5:
          url_mat = url + '/materiapenal'
          break
        default:
          url_mat = url + '/materia'
          break
      }

      const getData = async url_mat => {
        try {
          const response = await axios.get(url_mat, {
            params: {
              competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data
          var glosa = ''
          var arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

          Object.values(data.data.materia_group).map((type) => {
            // this.datatable.row.add([type._id.ano, type._id.gls_tipo_causa, type._id.glosa_materia, type.count.toLocaleString()])
            this.cant_registros = this.cant_registros + type.count
          })

          Object.values(data.data.materia_ant).map((type) => {
            this.cant_registros_ant = this.cant_registros_ant + type.count
          })

          while(this.options.series.length>0){
              this.options.series = [] //false = don't redraw
          }

          Object.values(data.data.materia).map((type) => {
            if (glosa != type._id.glosa_materia && glosa != '') {
              this.seriesbar.push(arreglo)
              this.options.series.push({
                name: glosa,
                data: arreglo
              })              
              arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }

            if (glosa != type._id.glosa_materia) {
              this.glosa_arreglo.push(type._id.glosa_materia)
            }

            glosa = type._id.glosa_materia

            arreglo[--type._id.mes] = type.count
          })

          this.options.title.text =  this.gls_tribunal
          this.options.series.push({
            name: glosa,
            data: arreglo
          })  


          var aux = 0

          this.calcularCrecimiento()

          // this.chart1.update({
          //   labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          //   series: this.seriesbar
          // })
        } catch (error) {
          console.log(error)
        }
      }

      getData(url_mat)

      // var chart1 =

      $(function () {
        'use strict'

        /* ===== Knob chart initialization ===== */

        $(function () {
          $('.knob').each(function () {
            var elm = $(this)
            var perc = elm.attr('value')

            elm.knob()

            $({ value: 0 }).animate({ value: perc }, {
              duration: 1000,
              easing: 'swing',
              progress: function () {
                elm.val(Math.ceil(this.value)).trigger('change')
              }
            })
          })
        })

        $('#earning').easyPieChart({
          barColor: '#4da8db',
          trackColor: !1,
          scaleColor: !1,
          scaleLength: 0,
          lineCap: 'square',
          lineWidth: 12,
          size: 96,
          rotate: 180,
          animate: { duration: 2e3, enabled: !0 }
        })
        $('#pending').easyPieChart({
          barColor: '#4db7df',
          trackColor: !1,
          scaleColor: !1,
          scaleLength: 0,
          lineCap: 'square',
          lineWidth: 12,
          size: 74,
          rotate: 180,
          animate: { duration: 2e3, enabled: !0 }
        })
        $('#booking').easyPieChart({
          barColor: '#4ccfe4',
          trackColor: !1,
          scaleColor: !1,
          scaleLength: 0,
          lineCap: 'square',
          lineWidth: 12,
          size: 50,
          rotate: 180,
          animate: { duration: 2e3, enabled: !0 }
        })
      })
      
    },
    indicadores (index) {
      const $filter = $('g.ct-series.ct-series-' + String.fromCharCode(97 + index))

      $filter.toggle()
    }, 
    calcularCrecimiento () {
      this.prom_crecimiento = (((this.cant_registros - this.cant_registros_ant) / this.cant_registros_ant) * 100)

      if (this.prom_crecimiento >= 0) {
        this.textocrecimiento = 'Crecimiento'
      } else {
        this.textocrecimiento = 'Decrecimiento'
      }

      return this.prom_crecimiento
    },
    change () {
      if (typeof this.$route.params.competencia === 'undefined') {
        this.competencia_id = this.local.competencia_id[0]
      } else {
        this.competencia_id = this.competencias[this.$route.params.competencia]
      }
    }
  }
}
</script>
