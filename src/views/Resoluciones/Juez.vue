<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="row m-0">
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='cant_registros' :duration='3000'  separator="."></countTo></h3>
                        <p class="info-text font-12">Total Resoluciones {{this.year}}</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Target<span class="label label-rounded label-success">300</span></p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-comment-text-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='cant_registros_ant' :duration='3000'  separator="."></countTo></h3>
                        <p class="info-text font-12">Total Resoluciones {{(this.year) -1}}</p>
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
                            <countTo :startVal='0' :endVal='prom_crecimiento' :duration='3000'  separator="." :decimals='2'></countTo>
                        % </h3>
                        <p class="info-text font-12">% {{textocrecimiento}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- ===== Page-Container ===== -->
        <div class="container-fluid">
            <div class="white-box">
                <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                    <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
                    <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
                    <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li>
                    <li class="pull-right"><button class="btn btn-info" @click="crear()" >Generar PDF</button></li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div aria-labelledby="home-tab" id="Observacion" class="tab-pane fade" role="tabpanel">
                        <Observacion/>
                    </div>
                    <div aria-labelledby="home-tab" id="Grafico" class="tab-pane fade" role="tabpanel">
                    </div>
                    <div aria-labelledby="home-tab" id="Criterio" class="tab-pane fade" role="tabpanel">
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
                                            <h6 class="p-l-30 font-bold">Cantidad de Resoluciones Firmadas y Validadas por Juez, Información almacenada en el sistema de gestion respectivo durante el {{this.year}}.</h6>
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
                </div>
                <!-- <div class="media">
                    <button class="btn btn-info" @click="crear()" >Generar PDF</button>
                </div>    -->
                <div class="JuezGrafico">
                    <Highcharts :options="options" />
                </div>
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
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import countTo from 'vue-count-to'
import store from 'store'
import Observacion from '@/views/Resoluciones/Observacion'
import { mapState } from 'vuex'
export default {
  name: 'Resoluciones',
  data () {
    return {
      cant_registros: 0,
      cant_registros_ant: 0,
      prom_crecimiento: 0,
      grafinal: [],
      options: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Resoluciones por Juez',
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
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      local: store.get('user'),
      prom_crecimiento: 0,
      textocrecimiento: '',
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
      let name = ''
      if (args.params.competencia !== undefined) {
        name = args.params.competencia
      }
      if (typeof this.$route.params.competencia === 'undefined') {
        this.competencia_id = this.local.competencia_id
      } else {
        this.competencia_id = this.competencias[name]
      }
      this.fetchData()
    },
    year() {
      this.fetchData()
    }  
  },
  created () {
    if (typeof this.$route.params.competencia === 'undefined') {
      this.competencia_id = this.local.competencia_id
    } else {
      this.competencia_id = this.competencias[this.$route.params.competencia]
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    crear () {
      html2canvas(document.querySelector('.JuezGrafico')).then(canvas => {
        var imgWidth = 480
        var pageHeight = 150
        var position = 0
        var image = canvas.toDataURL('image/png')
        // var imgHeight  = canvas.height * imgWidth / canvas.width;

        var doc = new jsPDF('l', 'mm', [1375, 800])

        doc.addImage(image, 'PNG', 0, position, imgWidth, pageHeight)

        doc.save('download.pdf')
      })
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
    fetchData () {
      this.clean()
      var arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var arregloT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var arregloanT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var juez = ''

      // this.competencia_id = this.local.competencia_id;
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const axios = require('axios')
		  const urlRes = url + '/resoluciones'
      const getData = async urlRes => {
        try {
          const response = await axios.get(urlRes, {
            params: {
              competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data

          Object.values(data.data.resoluciones).map((type) => {
            if (juez != type._id.juez && juez != '') {
              this.options.series.push({ data: arreglo, name: juez, visible: false })
              arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }

            juez = type._id.juez

            this.cant_registros = this.cant_registros + type.count
            arreglo[--type._id.mes] = type.count
            arregloT[type._id.mes] += type.count
          })

          this.options.series.push({ data: arreglo, name: juez, visible: false })

          Object.values(data.data.resoluciones_ant).map((type) => {
            this.cant_registros_ant = this.cant_registros_ant + type.count
            arregloanT[--type._id.mes] += type.count
          })

          this.options.series.push({ data: arregloT, name: 'Total '+this.year, visible: true })
          this.options.series.push({ data: arregloanT, name: 'Total '+(this.year -1), visible: true })
          this.calcularCrecimiento()
        } catch (error) {
          console.log(error)
        }
      }
      getData(urlRes)
    },
    clean () {
      this.cant_registros = 0,
      this.cant_registros_ant = 0,
      this.prom_crecimiento = 0,
      this.grafinal = [],
      this.options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Resoluciones por Juez',
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
    }
  },
  components: {
    countTo,
    Observacion
  }
}
</script>
