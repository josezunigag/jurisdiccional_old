<template>
    <div class="page-wrapper">
        <div class="container-fluid">
        <!-- ===== Page-Container ===== -->
              <div class="white-box">
                <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                    <!-- <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
                    <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
                    <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li> -->
                    <li class="pull-right"><button class="btn btn-info" @click="crear()" >Generar PDF</button></li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div aria-labelledby="home-tab" id="Observacion" class="tab-pane fade" role="tabpanel">

                    </div>
                    <div aria-labelledby="home-tab" id="Grafico" class="tab-pane fade" role="tabpanel">
                    </div>
                    <div aria-labelledby="home-tab" id="Criterio" class="tab-pane fade" role="tabpanel">
                    </div>
            </div>
                <div class="DotaccionesAdd">
                    <Highcharts :options="options[0]" />
                    <Highcharts :options="options[1]" />
                </div>
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
                          <h6 class="p-l-30 font-bold">La dotación que se muestra incluye a los Titulares y Contratas vigentes o con fecha de término igual o superior al 31 de diciembre del {{this.year}}. Incluyéndose además, a las Contratas Transitorias que prestaron apoyo en el Tribunal en algún periodo del año, contabilizándose por cada uno de sus nombramientos</h6>
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
</template>
<script>
import { url } from '@/config/api'
import store from 'store'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Observacion from '@/views/Dotaciones/Observacion'
import { mapState } from 'vuex'
import  "jspdf-autotable"

export default {
  name: 'DotacionesTribunales',
  data () {
    return {
      local: store.get('user'),
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      gls_tribunal: '',       
      options: [{
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Dotación Vigente'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          categories: [],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          max: 15,
          title: {
            text: 'Tribunales',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          },
          allowDecimals: false
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: []
      }, {
        chart: {
          type: 'pie'
        },
        title: {
          text: ''
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
      }]
    }
  },
  computed: {
    ...mapState([
      'year'
    ])
  },  
  components: {
    Observacion
  },
  mounted () {
    this.fetchData()
  },
  watch:{
    year() {
      this.clear()
      this.fetchData()
    }   
  }, 
  methods: {
    clear(){
      this.options= [{
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Dotación Vigente'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          categories: [],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          max: 15,
          title: {
            text: 'Tribunales',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          },
          allowDecimals: false
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: []
      }, {
        chart: {
          type: 'pie'
        },
        title: {
          text: ''
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
      }]
    },
    crear () {
      window.scrollTo(0,0) // Desplaza hacia arriba
      let doc = new jsPDF('l', 'mm');
      var width = doc.internal.pageSize.width; // ancho 297
      var height = doc.internal.pageSize.height; // altura 210
      html2canvas(document.querySelector('.DotaccionesAdd')).then(canvas => {

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
                    ['INTERPRETACIÓN', 'La dotación que se muestra incluye a los Titulares y Contratas vigentes o con fecha de término igual o superior al 31 de diciembre del '+ this.year +'. Incluyéndose además, a las Contratas Transitorias que prestaron apoyo en el Tribunal en algún periodo del año, contabilizándose por cada uno de sus nombramientos'],
                    ['CICLO DE ANALISIS', 'Se refleja la información extraída del sistema de origen el 01 de cada mes, que es almacenada en el sistema de Estadísticas Tribunales.' ],
              ]
          })
        doc.addPage();
        let img1 = canvas.toDataURL('image/png', wid , hgt )                   
        doc.addImage(img1, 'png', 50, 20, width-60, height-40) // Grafico de Dotaciones   
        doc.addPage();

        html2canvas(document.querySelector('.DotaccionesAddTwo')).then(canvas => {
          doc.text(140,40, 'Informe Jurisdiccional' ,{ align: 'center' });
          let wid = canvas.width; 
          let hgt = canvas.height;
          var hratio = hgt/wid;
          var height = width * hratio;          
          let img2 = canvas.toDataURL('image/png', wid , hgt )
                   
          doc.addImage(img2, 'png', 10, 20, width-20, height-20) // Observaciones   
          doc.save('Informe Jurisdiccional.pdf');
        })      

      })      
    },
    fetchData () {
      // this.competencia_id = this.local.competencia_id;
      this.cod_corte      = this.local.cod_corte;
      this.cod_tribunal = this.local.cod_tribunal
      this.tribunal() // Llamada al metodo.

      var arreglo = []
      const axios = require('axios')
      const url_dot = url + '/dotaciones'
      const getData = async url_dot => {
        try {
          const response = await axios.get(url_dot, {
            params: {
              // competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })
          const data = response.data
          Object.values(data.data.count).map((type) => {
            arreglo.push(type.count)

            this.options[1].series[0].data.push([type._id, type.count, true])
            this.options[0].xAxis.categories.push(type._id)
          })

          this.options[0].series.push({ data: arreglo, name: this.year })
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_dot)
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
    }     
  }
}
</script>
