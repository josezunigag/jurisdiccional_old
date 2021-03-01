<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper" >
        <div class="row m-0">
            <div class="col-md-12 col-sm-12 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_registros' :duration='3000'  separator="."></countTo>
                        </h3>
                        <p class="info-text font-12">Total Audiencias Realizadas {{this.year}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
          <div class="white-box">
            <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                <li class="pull-right"><button class="btn btn-info" @click="crear()" >Generar PDF</button></li>
            </ul>
            <div class="row" >
                <div class="col-md-12 col-sm-12" >
                    <div class="white-box stat-widget">
                        <div class="row">
                            <Highcharts :options="chartOptions" id="AudienciasGrafico" style="margin: 0 auto"/>
                        </div>
                    </div>
                </div>
            </div>   
          </div>
        <div class="white-box">
            <div class="panel panel-info">
                <transition v-on:before-enter="beforeEnter">
                    <div v-if="show" class="alert alert-success" role="alert">
                        <p>La informacion ha sido Guardada</p>
                    </div>
                </transition>
                <form class="form-horizontal" @submit.prevent="submit()">                   
                    <div class="form-group" id="obsIngresos">
                        <label class="col-md-12">Observacion</label>
                        <div class="col-md-12" >
                            <!-- <textarea class="form-control" rows="5" v-model="textarea" :disabled="validated == 2"></textarea> -->
                            <textarea-autosize
                            rows="5"
                            class="form-control"
                            v-model="textarea"
                            :disabled="validated == 2"
                            ></textarea-autosize>                            
                        </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-12" for="checkboxOne">Sin Observación: 
                          <input 
                            type="checkbox" 
                            id="checkboxOne" 
                            v-model="checkedOne"
                            @change="check($event)"
                          >
                      </label>
                    </div>                    
                    <div class="form-actions">
                        <!-- <input type="submit" value="Submit"  /> -->
                        <button v-on:click="show = !show" :disabled="validated == 2"
                            class="btn btn-info"><i class="fa fa-check"></i> Guardar
                        </button>
                        <!-- <input type="button" class="btn btn-default"> <i class="fa fa-envelope fa-fw"></i>Enviar -->
                   </div>
                </form>
            </div>
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
                        <h6 class="p-l-30 font-bold">Cantidad de Audiencias Realizadas desglosadas en realizadas y no realizadas mensuales. 
                            Los siguientes estados no son considerados en el indicador de Audiencias:<br/> 
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
</template>
<script>
import { url } from '@/config/api'
import store from 'store'
import countTo from 'vue-count-to'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import VueTextareaAutosize from 'vue-textarea-autosize'
import { mapState } from 'vuex'
import { Graph } from '../../config/Highcharts'
import  "jspdf-autotable"

export default {
    name: 'Audiencias',
    data () {
    return {
        cant_registros: 0,
        cant_registros_ant: 0,
        prom_crecimiento: 0,
        prom_anual: 0,
        cod_corte: 0,
        cod_tribunal: 0,
        gls_tribunal: '',
        validated: 1,
        textarea: '',
        local: store.get('user'),
        checkedOne: '',        
        local: store.get('user'),
        competencias: {
            'cobranza': 2,
            'familia': 3,
            'laboral': 4,
            'penal': 5
        },
        textocrecimiento: '',
        show: false, // Elemento Mensajes
        chartOptions: JSON.parse(JSON.stringify(Graph['lines'][0]))  // Defino el tipo de grafico      
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
        submit: function () {
            this.cod_corte = this.local.cod_corte
            this.cod_tribunal = this.local.cod_tribunal

            const axios = require('axios')
            const url_sub = url + '/obsingresos'

            axios.post(url_sub, {
                formulario_id: 1,
                competencia_id: this.competencia_id,
                cod_corte: this.cod_corte,
                cod_tribunal: this.cod_tribunal,
                ano: this.year,
                observacion: [{ id: 21, descripcion: this.textarea, estado_observacion_id: 1 }
                ]
            }).then(response => {}).catch( e => {
                console.log(e)
            })
        },
        check: function (e){
            this.textarea = (this.checkedOne === true) ? 'Sin Observación' : ''
        },
        crear () {
        window.scrollTo(0,0) // Desplaza hacia arriba
        let doc = new jsPDF('l', 'mm');
        var width = doc.internal.pageSize.width; // ancho 297
        var height = doc.internal.pageSize.height; // altura 210
        html2canvas(document.querySelector('#AudienciasGrafico')).then(canvas => {

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
        tribunal () {
            const axios = require('axios')

            let urlAud = url + '/detalle_tribunal'

            const get = async urlAud => {
            try {
                const response = await axios.get(urlAud, {
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
            get(urlAud)
        },    
        loadForm () {
            this.textarea = ''
            this.cod_corte = this.local.cod_corte
            this.cod_tribunal = this.local.cod_tribunal

            const axios = require('axios')
            const url_pre = url + '/observaciones'

            const getData = async url_pre => {
            try {
                const response = await axios.get(url_pre, {
                params: {
                    formulario_id: 20,
                    competencia_id: this.competencia_id,
                    cod_corte: this.cod_corte,
                    cod_tribunal: this.cod_tribunal,
                    ano: this.year
                }
                })

                if (Object.keys(response.data.data.observaciones).length === 1) {
                const data = response.data

                Object.values(data.data.observaciones).map((type) => {
                    Object.values(type.observacion).map((obs) => {
                    this.validated = obs.estado_observacion_id
                    this.textarea = obs.descripcion
                    })
                })
                }
                else{
                this.validated=1;
                this.textarea = '';
                }
            } catch (error) {
                console.log(error)
            }
            }
            getData(url_pre)
        },              
        loadData () {
            this.cant_registros = 0
            this.cant_registros_ant = 0
            this.prom_crecimiento = 0
            this.prom_anual = 0
            this.textocrecimiento = ''
            this.seriesbar = []
            this.chart1 = ''
            // this.position = 0
            this.tribunal() // Llamada al metodo.
            this.loadForm()
            
            const axios = require('axios')

            let urlAud = url + '/resumendesMeses'
            this.cod_corte = this.local.cod_corte
            this.cod_tribunal = this.local.cod_tribunal

            const getData = async url => {
                try {
                const response = await axios.get(urlAud, {
                    params: {
                    competencia_id: this.competencia_id,
                    cod_corte: this.cod_corte,
                    cod_tribunal: this.cod_tribunal,
                    ano: this.year
                    }
                })

                const data = response.data

                this.chartOptions.chart.height = 350
                this.chartOptions.series = [] // Limpiamos las Series
                this.chartOptions.title.text =  'Audiencias' // Titulo del grafico de lineas
                this.chartOptions.title.align = 'left' // Centramos el titulo de Grafico

                // this.chartOptions.plotOptions.pie.dataLabels.format =  '<b>{point.name}</b>: {point.percentage:.1f} % ({point.y:.0f})';                
                let audiencias = []

                Object.values(data.data).map((type) => {
                    console.log(type.audiencias)
                    audiencias.push(type.audiencias)
                    this.cant_registros += type.audiencias // Total de audiencias periodo Actual
                })
                console.log(data.data)

                this.chartOptions.series.push({
                    data: audiencias,
                    name: 'Audiencias'
                })                

                } catch (error) {
                console.log(error)
                }
            }

            getData(urlAud)            

        },
        beforeEnter: function (el) {
            setTimeout(() => {
                this.show = false
            }, 700 * 10)
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
            this.loadData()
        },
        year() {
            this.loadData()
        }
    },    
    components: {
        countTo
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
