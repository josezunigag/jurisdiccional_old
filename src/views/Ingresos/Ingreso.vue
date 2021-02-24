<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper" >
        <div class="row m-0">
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_registros' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Ingresos {{this.year}}</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Target<span class="label label-rounded label-success">300</span></p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_registros_ant' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Ingresos {{(this.year) -1}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
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
            </div>
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
          <div class="row" >
              <div class="col-md-8 col-sm-12" >
                  <div class="white-box stat-widget">
                      <div class="row">
                        <Highcharts :options="options" id="IngresoGrafico" style="margin: 0 auto"/>
                      </div>
                  </div>
              </div>
              <Visualizacion :competencia_id="$route.params.competencia"/>
            </div>
            <!-- <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="white-box bg-primary color-box">
                        <h1 class="text-white font-light">
                            <countTo :startVal='0' :endVal='prom_anual' :duration='3000'  separator="."></countTo>
                            <span class="font-14">Promedio de Ingreso {{this.year}}</span>
                        </h1>
                        <div class="ct-revenue chart-pos"></div>
                    </div>
                </div> -->
                <!-- <div class="col-md-4 col-sm-6">
                    <div class="white-box bg-success color-box">
                        <h1 class="text-white font-light m-b-0">
                            <countTo :startVal='0' :endVal='mayor_mes' :duration='3000'  separator="."></countTo>
                        </h1>
                        <span class="hr-line"></span>
                        <p class="cb-text">Mayor Cantidad de Ingresos</p>
                        <h6 class="text-white font-semibold">{{mayor}}<span class="font-light"></span></h6>
                        <div class="chart">
                            <div class="ct-visit chart-pos"></div>
                        </div>
                    </div>
                </div> -->
            <!-- </div> -->
            </div>
            <Observacion/>
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
                            <h6 class="p-l-30 font-bold">Cantidad de Ingresos mensuales por tipo de causas y materias. 
                              Los siguientes estados no son considerados en el indicador de Ingresos:<br/> 
                              Estados: Invalidado. <br/>                              
                              Información almacenada en el sistema de gestión respectivo durante el {{this.year}}.</h6>
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
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Observacion from '@/views/Ingresos/Observacion'
import Visualizacion from '@/components/Visualizacion'
import { mapState } from 'vuex'
import  "jspdf-autotable"

export default {
  name: 'Ingresos',
  data () {
    return {
      cant_registros: 0,
      cant_registros_ant: 0,
      prom_crecimiento: 0,
      prom_anual: 0,
      mayor_mes: 0,
      textocrecimiento: '',
      seriesbar: [],
      chart1: '',
      local: store.get('user'),
      meses: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      position: 0,
      mayor: '',
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
                  text: 'Ingresos de Causas'
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
      },      
      show: false // Elemento Mensajes
    }
  },
  computed: {
    ...mapState([
      'year'
    ])
  },
  components: {
    countTo,
    Observacion,
    Visualizacion
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
      this.loadData()
    },
    year() {
      this.loadData()
    }
  },
  created () {
    this.$periodos = 1;
    if (typeof this.$route.params.competencia === 'undefined') {
      this.competencia_id = this.local.competencia_id
    } else {
      this.competencia_id = this.competencias[this.$route.params.competencia]
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    crear () {
      window.scrollTo(0,0) // Desplaza hacia arriba
      let doc = new jsPDF('l', 'mm');
      var width = doc.internal.pageSize.width; // ancho 297
      var height = doc.internal.pageSize.height; // altura 210
      html2canvas(document.querySelector('#IngresoGrafico')).then(canvas => {

        let wid = canvas.width; 
        let hgt = canvas.height;
        var hratio = hgt/wid;
        var height = width * hratio; 

        doc.setFontSize(12);      
        doc.text(140,40, 'Informe Jurisdiccional' ,{ align: 'center' });        
        doc.autoTable({
            tableLineColor: [0, 0, 0],
            tableLineWidth: 0.5,
            theme: 'grid',
            bodyStyles: {
              lineColor: [0, 0, 0]},
              styles: { padding:0 },
              // columnStyles: { fillColor: [100, 255, 255] }, // Cells in first column centered and green
              margin: { top: 45 },
              body: [
                    ['TRIBUNAL', this.gls_tribunal],
                    ['PERIODO', this.year],
                    ['ORIGEN', 'Sistema de Indicadores Quantum'],
                    ['INTERPRETACIÓN', 'Cantidad de Ingresos mensuales por tipo de causas y materias. Los siguientes estados no son considerados en el indicador de Ingresos: Estados: Invalidado. Información almacenada en el sistema de gestión respectivo durante el '+ this.year ],
                    ['TOTAL INGRESOS PERIODO ACTUAL', this.$thousandSeparator(this.cant_registros)],
                    ['TOTAL INGRESOS PERIODO ANTERIOR', this.$thousandSeparator(this.cant_registros_ant)],
                    [ this.textocrecimiento.toUpperCase(), this.prom_crecimiento.toLocaleString(1,1) + '%']
              ]
          })
        doc.addPage();

        let img1 = canvas.toDataURL('image/png', wid , hgt )           
        doc.addImage(img1, 'png', 40, 40, width-60, height) // Grafico de Ingresos   

        doc.save('Informe Jurisdiccional.pdf');

      })
    },
    calcularPromedio () {
      this.prom_anual = (this.cant_registros / 12)
      this.prom_anual = Math.round(this.prom_anual, 1)
      return this.prom_anual
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
      this.cant_registros = 0
      this.cant_registros_ant = 0
      this.prom_crecimiento = 0
      this.prom_anual = 0
      this.mayor_mes = 0
      this.textocrecimiento = ''
      this.seriesbar = []
      this.chart1 = ''
      this.position = 0
      this.mayor = ''
      this.tribunal() // Llamada al metodo.
      
      const axios = require('axios')

      let url_ing = url

      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      switch (this.competencia_id) {
        case 5:
          url_ing = url_ing + '/'
          break
        default:
          url_ing = url_ing + '/'
          break
      }

      const getData = async url => {
        try {
          const response = await axios.get(url_ing, {
            params: {
              competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data

          Object.values(data.data.ingreso).map((type) => {
            this.cant_registros = type.cantidad
          })

          Object.values(data.data.ingresoAnterior).map((type) => {
            this.cant_registros_ant = type.cantidad
          })

          var valor = []

          Object.values(data.data.ingresoMes).map((type) => {
            if (this.mayor_mes <= type.count) {
              this.mayor_mes = type.count
              this.mayor = this.meses[this.position]
            }

            valor.push(type.count)
            this.position = this.position + 1
          })

          this.seriesbar.push(valor)

          valor = []

          Object.values(data.data.ingresoMesAnterior).map((type) => {
            valor.push(type.count)
          })

          this.seriesbar.push(valor)
          this.options.title.text =  this.gls_tribunal
          while(this.options.series.length>0){
              this.options.series = [] //false = don't redraw
          }
          
          // this.options.redraw()

          this.options.series.push({
              name: this.year,
              data: this.seriesbar[0]
          },{
              name: (this.year) -1,
              data: this.seriesbar[1]          
          })

          this.calcularPromedio(this.cant_registros)
          this.calcularCrecimiento()
        } catch (error) {
          console.log(error)
        }
      }

      getData(url_ing)

    }
  }
}
</script>
<style>
       .ct-tooltip {
            position: absolute;
            display: inline-block;
            min-width: 5em;
            padding: 8px 10px;
            background: #383838;
            color: #fff;
            text-align: center;
            pointer-events: none;
            z-index: 100;
            transition: opacity .2s linear;
        }
        .ct-tooltip:before {
            position: absolute;
            bottom: -14px;
            left: 50%;
            border: solid transparent;
            content: ' ';
            height: 0;
            width: 0;
            pointer-events: none;
            border-color: rgba(251, 249, 228, 0);
            border-top-color: #383838;
            border-width: 7px;
            margin-left: -8px;
        }
        .ct-tooltip.hide {
            display: block;
            opacity: 0;
            visibility: hidden;
        }
</style>
