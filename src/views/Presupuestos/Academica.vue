<template>
    <div class="page-wrapper">
        <div class="row m-0">
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='totalh[1]' :duration='1000'  separator="."></countTo></h3>
                        <p class="info-text font-12">Total HRS Cursos Asignados {{this.year}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='totalh[0]' :duration='1000'  separator="."></countTo></h3>
                        <p class="info-text font-12">Total HRS Cursos Asignados {{(this.year) -1}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="icon-graph"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='prom' :duration='1000'  separator="." ></countTo></h3>
                        <p class="info-text font-12">Promedio HRS Funcionario {{this.year}}</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Total Pending<span class="label label-rounded label-danger">154</span></p> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
        <!-- ===== Page-Container ===== -->
            <div class="white-box">
                <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                    <!-- <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li> -->
                    <!-- <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li> -->
                    <!-- <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li> -->
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
                <div class="white-box text-center">
                  <label class="label label-success">Funcionarios Capacitados</label>
                  <div  id="pie-chart" >
                  </div>
                </div>
                <div class="white-box text-center">
                  <div class="table-responsive">
                      <table id="report"  class="table" cellspacing="0" width="100%">
                          <thead>
                              <tr>
                                  <th style="text-align:center">Nombres</th>
                                  <th style="text-align:center">Cargo</th>
                                  <th style="text-align:center">Curso</th>
                                  <th style="text-align:center">Evaluación</th>
                                  <th style="text-align:center">Horas</th>
                                  <th style="text-align:center">F.Termino</th>                   
                              </tr>
                          </thead>
                          <tfoot>
                              <tr>
                                  <th style="text-align:center">Nombres</th>
                                  <th style="text-align:center">Cargo</th>
                                  <th style="text-align:center">Curso</th>
                                  <th style="text-align:center">Evaluación</th>
                                  <th style="text-align:center">Horas</th>
                                  <th style="text-align:center">F.Termino</th>  
                              </tr>
                          </tfoot>
                          <tbody>
                          </tbody>
                      </table>
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
                                        <span class="font-16">Origen: Sistema de Indicadores</span>
                                    </label>
                                    <h6 class="p-l-30 font-bold">Academia</h6>
                                </div>
                            </li>
                            <li class="list-group-item bl-info">
                                <div>
                                    <i class="fa fa-filter fa-fw"></i>
                                    <label for="c9">
                                        <span class="font-16">Interpretación de la Información</span>
                                    </label>
                                    <h6 class="p-l-30 font-bold">Total de horas cursos asignados. Para el año {{this.year}} fueron calendarizados cursos en línea como presenciales. Éstos últimos, debido a la emergencia sanitaria, fueron cancelados</h6>
                                </div>
                            </li>
                            <li class="list-group-item bl-info">
                                <div >
                                    <i class="fa fa-refresh fa-fw"></i>
                                    <label for="c10">
                                        <span class="font-16">Ciclo de Analisis</span>
                                    </label>
                                    <h6 class="p-l-30 font-bold">Se refleja la información extraída del sistema de origen anualmente.</h6>
                                </div>
                            </li>
                        </ul>
                    </div>                
            </div>

        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>
</template>
<script>
import countTo from 'vue-count-to'
import { url } from '@/config/api'
import store from 'store'
import Observacion from '@/views/Presupuestos/ObservacionAca'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import  "jspdf-autotable"

import {mapState} from 'vuex'
export default {
  name: 'Academica',
  data () {
    return {
      local: store.get('user'),
      gls_tribunal: '',	       
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      totalh: [],
      prom: 0, 
	  datos: []
    }
  },
  computed:{
    ...mapState([
      'year'
    ])
  },
  components: {
    countTo,
    Observacion
  },
  watch: {
    year() {
      
      this.loadData()
    }  
  }, 
  mounted () {
   this.datatable = $('#report').DataTable({
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel'
        ],
        'bPaginate': true,
        // "lengthMenu": [[10, 100, -1], [10, 100, "Todos"]],
        'bLengthChange': true,
        // "bFilter": true,
        'bInfo': true,
        'bAutoWidth': false,
        'pageResize': true,
        'oLanguage': {
          'sProcessing': 'Procesando...',
          'sLengthMenu': '_MENU_ Mostrar registros',
          'sZeroRecords': 'No se encontraron resultados',
          'sEmptyTable': 'Ningún dato disponible en esta tabla',
          'sInfo': 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
          'sInfoEmpty': 'Mostrando registros del 0 al 0 de un total de 0 registros',
          'sInfoFiltered': '(filtrado de un total de _MAX_ registros)',
          'sInfoPostFix': '',
          'sSearch': 'Buscar: ',
          'sUrl': '',
          'sInfoThousands': ',',
          'sLoadingRecords': 'Cargando...',
          'oPaginate': {
            'sFirst': 'Primero',
            'sLast': 'Último',
            'sNext': 'Siguiente',
            'sPrevious': 'Anterior'
          },
          'oAria': {
            'sSortAscending': ': Activar para ordenar la columna de manera ascendente',
            'sSortDescending': ': Activar para ordenar la columna de manera descendente'
          },
          'buttons': {
            'copyTitle': 'Copiado en el PortaPapeles',
            'copySuccess': {
              _: '%d lineas copiadas',
              1: '1 lineas copiadas'
            }
          }
        }
    })    
    this.loadData()
  },
  methods: {
    crear () {
	window.scrollTo(0,0) // Desplaza hacia arriba
	let doc = new jsPDF('l', 'mm');
	var width = doc.internal.pageSize.width; // ancho 297
	var height = doc.internal.pageSize.height; // altura 210
	html2canvas(document.querySelector('#pie-chart')).then(canvas => {

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
			styles: { padding: 0 },
			margin: { top: 45 },
			body: [
				['TRIBUNAL', this.gls_tribunal],
				['PERIODO', this.year],
				['ORIGEN', 'Sistema de Indicadores Quantum'],
				['INTERPRETACIÓN', 'Total de horas cursos asignados. Para el año '+this.year+' fueron calendarizados cursos en línea como presenciales. Éstos últimos, debido a la emergencia sanitaria, fueron cancelados'],
				['TOTAL HORAS CURSOS '+this.year, this.$thousandSeparator(this.totalh[0])],
				['TOTAL HORAS CURSOS '+(this.year -1) , this.$thousandSeparator(this.totalh[1])],
				['PROMEDIO HORAS FUNCIONARIO '+this.year , this.$thousandSeparator(this.prom)]
			]
		})
	doc.addPage();

	let img1 = canvas.toDataURL('image/png', wid , hgt )           
	doc.addImage(img1, 'png', 10, 20, width-20, height) // Grafico de Ingresos   
	doc.text(10,100, 'Observación:' ,{ align: 'left' });  
  doc.text(10,110, '' ,{ align: 'left' });  // Aqui el texto de a observación

	doc.addPage();

	let table = [];
	table.push(['NOMBRES','CARGO','EVALUACION','HORAS','FEC.TERMINO']);
	// console.log(this.datos)
	Object.values(this.datos.count).map((type) => {
		table.push([
			type.nombres,
			type.cargo,
			type.evaluacion,
			type.horas,
			type.fec_termino
		])
	})

	doc.setFontSize(12);
	doc.text(140,20, 'Informe Jurisdiccional' ,{ align: 'center' });
	doc.autoTable({
		tableLineColor: [0, 0, 0],
		tableLineWidth: 0.5,
		theme: 'grid',
		bodyStyles: {
			lineColor: [0, 0, 0]},
			styles: { padding: 0 , halign: 'center'},
			margin: { top: 40 },
			body: table
		})	
	
	doc.save('Informe Jurisdiccional.pdf');

	})      
      
      // html2canvas(document.querySelector('#pie-chart')).then(canvas => {

      //   var imgWidth   = 380;
      //   var pageHeight = 280;
      //   var position   = 10;
      //   var image = canvas.toDataURL('image/png');
      //   var imgHeight  = canvas.height * imgWidth / canvas.width;
      //   var doc = new jsPDF('l', 'mm', [1375, 800])

      //   doc.addImage(image, 'PNG', 50, position, imgWidth, imgHeight)
      //   // doc.addPage()
      //   // html2canvas(document.querySelector('#report')).then(canvas => {
      //   //   var image = canvas.toDataURL('image/png')
      //   //   doc.addImage(image, 'PNG', 50, 10)
      //   //   doc.save('download.pdf')
      //   // })
      //   doc.save('download.pdf')
      // })
    },     
    loadData(){
      this.competencia_id = this.setCompetencia()
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal
      this.tribunal() // Llamada al metodo.

      $('#pie-chart').empty()

      const axios = require('axios')
      const url_aca = url + '/capacitaciones'
      const getData = async url_aca => {
        try {
          const response = await axios.get(url_aca, {
            params: {
              competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

			const data = response.data
			let graf = []
			let cantf = 0
			this.datos = data.data
		  
			Object.values(data.data.count).map((type) => {
			cantf += type.horas
			let aux =  graf.findIndex(i => i.label === type.cargo)
			aux === -1 ? graf.push({ label: type.cargo, value: type.horas }) : graf[aux].value = graf[aux].value + type.horas
			this.datatable.row.add([type.nombres,type.cargo,type.curso,(type.evaluacion) ? type.evaluacion: '',type.horas,type.fec_termino])
			})
          	this.datatable.draw()

			Object.values(data.data.total).map((type) => {
			this.totalh.push(type.count)
			})

			this.prom = Math.round(cantf / graf.length)

			Morris.Donut({
			element: 'pie-chart',
			data: graf,
			formatter: function (y, data) { return y.toLocaleString() }
			})
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_aca)
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
