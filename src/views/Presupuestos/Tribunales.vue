<template>
	<div class="page-wrapper" >
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
						<p class="info-text font-12">% Crecimiento {{this.year}}</p>
					</div>
				</div>
            </div>
		</div>
			<div class="container-fluid">
				<div class="white-box">
					<ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
						<!-- <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
						<li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
						<li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li> -->
						<li class="pull-right"><button class="btn btn-info" @click="crear()" >Generar PDF</button></li>
					</ul>
					<div class="PresupuestosAdd row" >
						<div class="col-md-12 col-sm-12" >
							<div class="white-box stat-widget">
								<div class="row">
									<Highcharts :options="options" id="IngresoGrafico" style="margin: 0 auto"/>
								</div>
							</div>
						</div>						
					</div>
				</div>
				 <!-- Observacion -->
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
                                    <span class="font-16">Origen: Información registrada en el sistema CGU durante el periodo {{this.year}}</span>
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
                                <h6 class="p-l-30 font-bold">El crecimiento es comparado entre los periodo {{(this.year) -1 }} y {{this.year}}</h6>
                            </div>
                        </li>
                        <li class="list-group-item bl-info">
                            <div >
                                <i class="fa fa-refresh fa-fw"></i>
                                <label for="c10">
                                    <span class="font-16">Ciclo de Analisis</span>
                                </label>
                                <h6 class="p-l-30 font-bold">Información extraída a 27 Febrero del {{this.year}}</h6>
                            </div>
                        </li>
                    </ul>
                </div>							
			</div>
		<footer class="footer t-a-c">
			Poder Judicial
		</footer>
	</div>
</template>
<script>
import countTo from 'vue-count-to'
import { url } from '@/config/api'
import store from 'store'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Observacion from '@/views/Presupuestos/Observacion'
import { mapState } from 'vuex'
export default {
  name: 'PresupuestosTribunales',
  data () {
    return {
      local: store.get('user'),
      gls_tribunal: '',	  
      competencia_id: 0,
      cod_corte: 0,
      cod_tribunal: 0,
      monto_asignado: 0,
      monto_asignado_ant: 0,
      monto_utilizado: 0,
      crecimiento: 0,
      utilizado: 0,
      options: {
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

      }
    }
  },
  computed:{
    ...mapState([
      'year'
    ])
  },
  watch:{
    year() {
      this.clear()
      this.loadData()
    } 
  }, 
  components: {
    countTo,
    Observacion
  },
  mounted () {
    this.loadData()
  },
  methods: {
    clear(){
      this.options = {
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
      }
    },
    loadData(){
    var url_pre = url + '/presupuestos'
    this.competencia_id = this.setCompetencia()
    this.cod_corte = this.local.cod_corte
    this.cod_tribunal = this.local.cod_tribunal
	this.tribunal() // Llamada al metodo.

    const axios = require('axios')

    const getData = async url_pre => {
      try {
        const response = await axios.get(url_pre, {
          params: {
            // competencia_id: this.competencia_id,
            cod_corte: this.cod_corte,
            cod_tribunal: this.cod_tribunal,
            ano: this.year
          }
        })

        const arreglo = []
        Object.values(response.data.data.presupuestos).map((type) => {
          this.calcularPromedio(type.monto_utilizado, type.monto_asignado)

          if (type.ano == (this.year) -1 ) {
            this.monto_asignado_ant = type.monto_asignado
          }

          this.monto_asignado = type.monto_asignado
          this.monto_utilizado = type.monto_utilizado
          this.monto_asignado = (type.monto_asignado > 0) ? type.monto_asignado : type.monto_utilizado
          this.options.series.push({ name: 'Monto Asignado ' + type.ano,
            data: [{ name: type.ano,
              y: type.monto_asignado }] })
        })

        this.calcularCrecimiento(this.monto_asignado, this.monto_asignado_ant)
      } catch (error) {
        console.log(error)
      }
    }
    getData(url_pre)
    },
    crear () {
		window.scrollTo(0,0) // Desplaza hacia arriba
		let doc = new jsPDF('l', 'mm');
		var width = doc.internal.pageSize.width; // ancho 297
		var height = doc.internal.pageSize.height; // altura 210
		html2canvas(document.querySelector('.PresupuestosAdd')).then(canvas => {

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
					['INTERPRETACIÓN', 'El crecimiento es comparado entre los periodo '+(this.year) -1 + ' y '+this.year],
					['TOTAL MONTO ASIGNADO PERIODO ACTUAL', this.$thousandSeparator(this.monto_asignado)],
					['TOTAL MONTO ASIGNADO PERIODO ANTERIOR', this.$thousandSeparator(this.monto_utilizado)]
					// [ this.textocrecimiento.toUpperCase(), this.prom_crecimiento.toLocaleString(1,1) + '%']
				]
			})
		doc.addPage();

		let img1 = canvas.toDataURL('image/png', wid , hgt )           
		doc.addImage(img1, 'png', 10, 40, width-20, height) // Grafico de Ingresos   
        doc.addPage();

        html2canvas(document.querySelector('.PresupuestosAddTwo')).then(canvas => {
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
    calcularCrecimiento (monto_asignado, monto_asignado_ant) {
      this.crecimiento = (((monto_asignado - this.monto_asignado_ant) / monto_asignado) * 100)
      return this.crecimiento
    },
    calcularPromedio (monto_utilizado, monto_asignado) {
      this.utilizado = ((monto_utilizado * 100) / monto_asignado)

      return this.utilizado
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
