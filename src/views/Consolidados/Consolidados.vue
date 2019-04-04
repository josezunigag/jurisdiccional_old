<template> 
    <div class="page-wrapper"> 
        <div class="row">
            <div class="col-md-6 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">
                            <countTo :startVal='0' :endVal='cant_registros' :duration='3000'  separator="."></countTo>                                       
                        </h3>
                        <p class="info-text font-12">Total Ingresos 2018</p>
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
                        <p class="info-text font-12">Total Ingresos 2017</p>
                    </div>
                </div>
            </div>

            <div class="media">
                 <p class="info-text font-18 text-center">{{gls_tribunal}}</p>
                <Highcharts :options="options" />  
            </div>   

            <div class="media"> 
                <div class="form-group">
                    <label class="col-md-12">Observacion Tribunal</label>
                    <div class="col-md-12">
                        <textarea class="form-control" rows="5" v-model="areatext" disabled></textarea>
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
                        <p class="info-text font-12">Total Resoluciones 2018</p>
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
                        <p class="info-text font-12">Total Resoluciones 2017</p>
                    </div>
                </div> 
            </div>           
            <div class="media">
                <!-- <p class="info-text font-18 text-center">{{gls_tribunal}}</p> -->
                <Highcharts :options="resolucion" />  
            </div>              
            <div class="media"> 
                <div class="form-group">
                    <label class="col-md-12">Observacion Tribunal</label>
                    <div class="col-md-12">
                        <textarea class="form-control" rows="5" v-model="areatext" disabled></textarea>
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

        <div class="presidente row">
            <div class="white-box">
                <div class="row">                       
                        <div class="form-group">
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
                                    <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='monto_utilizado' :duration='1000'  separator="." :decimals="2"></countTo>%</h3>
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
                                    <p class="info-text font-12">% Creciemiento 2018</p>
                                </div>
                            </div>
                        </div>                                          
                    </div>                     
                </div>
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
                            v-model="textpresu"
                            disabled
                            ></textarea-autosize>
                    </div>                                
            </div> 
        </div> 
                

        <div class="media">
            <button  @click="crear"
                class="btn btn-info">Generar PDF
            </button>
        </div>
            

        <div class="img">
        </div>

	</div>
</template>
<script>
import {url} from '@/config/api'
import store from 'store'
import countTo from 'vue-count-to';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import VueTextareaAutosize from 'vue-textarea-autosize'
export default {
    name: 'consolidados',
	data() {
		return {
            cant_regres: 0,
            cant_regres_ant: 0,
            cant_registros: 0,
            cant_registros_ant: 0,
            monto_asignado:0,
            monto_utilizado:0,
            crecimiento:0,
            prom_crecimiento:0,
            local: store.get('user'),
            areatext: '',
            seriesbar:[],
            competencia_id: 0,
            cod_tribunal: 0,
            gls_tribunal: '',
            meses: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            options: {
                    chart: {
                        type: 'spline',
                        },
                    title: {
                        text: 'Ingresos de Causas',
                        x: -20 //center
                    },
                    subtitle: {
                        x: -20
                    },
                    xAxis: {
                        categories: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
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
                        type: 'spline',
                        },
                    title: {
                        text: 'Resoluciones',
                        x: -20 //center
                    },
                    subtitle: {
                        x: -20
                    },
                    xAxis: {
                        categories: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
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
                                return '$'+this.y.toLocaleString()
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
                            '</b> es <b>' + this.y.toLocaleString() + '</b>';
                    }                
                },
                series: []
                
        },       
            administrativa: [],
            presidente:[], 
            textpresu: '',           
            competencias: {
                2:'Cobranza', 
                3:'Familia',            
                4:'Laboral',
                5:'Penal'
            }                         
		}
    },
    watch: {
    '$route' (args) {           
        this.cod_tribunal = args.params.cod_tribunal;
        this.ingresos()   
        this.resoluciones() 
        this.administrativas()  
        this.presidentes()
        this.presupuestos()     
        }
    },    
    mounted(){
        this.cod_tribunal = this.$route.params.cod_tribunal;
        this.ingresos()
        this.resoluciones()
        this.administrativas() 
        this.presidentes() 
        this.presupuestos()  
    },
    methods:{
        crear(){
            html2canvas(document.querySelector(".row")).then(canvas => {

                var image = canvas.toDataURL('image/png');
                var doc = new jsPDF('l', 'mm', [1375, 800]);
                
                doc.addImage(image, 'PNG', 10, 10);
                doc.addPage();

                html2canvas(document.querySelector(".resoluciones")).then(canvas => {
                    var image = canvas.toDataURL('image/png');
                    doc.addImage(image, 'PNG', 10, 10);
                    doc.addPage();
                    // doc.save('download.pdf');
                });

                html2canvas(document.querySelector(".administrativa")).then(canvas => {
                    var image = canvas.toDataURL('image/png');
                    doc.addImage(image, 'PNG', 10, 10);
                    doc.addPage();
                    // doc.save('download.pdf');
                });


                html2canvas(document.querySelector(".presidente")).then(canvas => {
                    var image = canvas.toDataURL('image/png');
                    doc.addImage(image, 'PNG', 10, 10);
                    doc.addPage();
                    // doc.save('download.pdf');
                });     
   
                html2canvas(document.querySelector(".observacion")).then(canvas => {
                    var image = canvas.toDataURL('image/png');
                    doc.addImage(image, 'PNG', 10, 10);
                    doc.addPage();
                });  

                html2canvas(document.querySelector(".presupuesto")).then(canvas => {
                    var image = canvas.toDataURL('image/png');
                    doc.addImage(image, 'PNG', 10, 10);
                    doc.save('download.pdf');
                      
                });                  


            })
        },
        ingresos(){
            
            this.clean()
            this.tribunal()
            
            this.cod_corte      = this.local.cod_corte;
            // this.cod_tribunal   = this.local.cod_tribunal;

            const axios = require("axios");   
            const url_pre = url+"/observaciones_ica";

            var getData = async url_pre => {
                
                try {
                    const response = await axios.get(url_pre,{
                            params: {
                                formulario_id: 1,
                                cod_corte: this.cod_corte, 
                                cod_tribunal: this.cod_tribunal,
                                ano: 2018
                            }  
                        });
                    
                    if(Object.keys(response.data.data.observaciones).length === 1){
                        const data = response.data;

                        Object.values(data.data.observaciones).map((type) => {
                            Object.values(type.observacion).map((obs) => {
                                this.validated = obs.estado_obervacion_id;
                                this.areatext = obs.descripcion;
                            })
                        })

                    }         
                
                } catch (error) {
                    console.log(error);
                }            
            } 

            getData(url_pre); 

                let  url_ing = url;
                switch(this.competencia_id) {
                case 5:
                    url_ing = url_ing+'/ingresospenal';
                    break;
                default:
                    url_ing =  url_ing+'/ingresos_ap';
                    break;
                }        

                getData = async url => {
                try {

                    var arreglo    = [0,0,0,0,0,0,0,0,0,0,0,0];  
                    var arregloT   = [0,0,0,0,0,0,0,0,0,0,0,0]; 

                    const response = await axios.get(url_ing,{
                        params: {
                            cod_corte: this.cod_corte, 
                            cod_tribunal: this.cod_tribunal
                        }  
                    });

                    const data  = response.data;

                    Object.values(data.data.ingreso).map((type) => {
                        this.cant_registros =  type.cantidad;
                    })

                    Object.values(data.data.ingresoAnterior).map((type) => {
                        this.cant_registros_ant =  type.cantidad;
                    })

                    var  valor = [];
                    var  indicador = '';

                    Object.values(data.data.ingresoMes).map((type) => {
                        valor.push(type.count);  

                        if(type._id.mes == 12){
                           this.options.series.push({data: valor, name: '2018 ('+this.competencias[type._id.competencia_id]+')' ,visible: true});
                           valor = [];
                        }

                    })  
                    
                    Object.values(data.data.ingresoMesAnterior).map((type) => {
                        valor.push(type.count);  

                        if(type._id.mes == 12){
                           this.options.series.push({data: valor, name: '2017 ('+this.competencias[type._id.competencia_id]+')' ,visible: true});
                           valor = [];
                        }

                    })                       
                                 

                } catch (error) {
                    console.log(error);
                }
                };

                getData(url_ing);
        },
        resoluciones(){
                this.clean()
                this.tribunal()
                var arreglo    = [0,0,0,0,0,0,0,0,0,0,0,0];  
                var arregloT   = [0,0,0,0,0,0,0,0,0,0,0,0]; 
                var arregloanT = [0,0,0,0,0,0,0,0,0,0,0,0]; 
                var juez     = '';

                const axios = require("axios");
                const url_res = url+"/resoluciones_ica";
                

                const getData = async url_res => {

                try {
                    const response = await axios.get(url_res,{
                        params: {
                        cod_corte: this.cod_corte,
                        cod_tribunal: this.cod_tribunal
                        }  
                    });

                    const data = response.data;

                    var  valor = [];

                    Object.values(data.data.resoluciones).map((type) => {

                        valor.push(type.count);  
                        this.cant_regres +=  type.count;

                        if(type._id.mes == 12){
                           this.resolucion.series.push({data: valor, name: '2018 ('+this.competencias[type._id.competencia_id]+')' ,visible: true});
                           valor = [];
                        }

                    }) 

                    Object.values(data.data.resoluciones_ant).map((type) => {
                        this.cant_regres_ant +=  type.count;
                        valor.push(type.count);  

                        if(type._id.mes == 12){
                           this.resolucion.series.push({data: valor, name: '2017 ('+this.competencias[type._id.competencia_id]+')' ,visible: true});
                           valor = [];
                        }

                    })   

                } catch (error) {
                    console.log(error);
                }
            }
            getData(url_res);            
        },        
        administrativas(){
            
            this.clean()
            this.tribunal()

            var obs_url = ''
            const axios = require("axios");   
            obs_url = url+"/observaciones_ica"; 
            const getData = async obs_url => {
                
                try {

                const response = await axios.get(obs_url,{
                        params: {
                            formulario_id: 9,
                            cod_corte: this.cod_corte, 
                            cod_tribunal: this.cod_tribunal,
                            ano: 2018,
                        }  
                    });

                    const data = response.data;
 
                    if(data.data.observaciones){
                        this.administrativa = data.data.observaciones[0].observacion.map(observacion => (
                            observacion.descripcion
                        ))
                    }                  
                        
                
                } catch (error) {
                    console.log(error);
                }            
            } 
            getData(obs_url);
        },
        presidentes(){
            
            this.clean()
            this.tribunal()

            var obs_url = ''
            const axios = require("axios");   
            obs_url = url+"/observaciones_ica"; 

            const getData = async obs_url => {
                
                try {

                const response = await axios.get(obs_url,{
                        params: {
                            formulario_id: 7,
                            cod_corte: this.cod_corte, 
                            cod_tribunal: this.cod_tribunal,
                            ano: 2018,
                        }  
                    });

                    const data = response.data;
        
                    if(data.data.observaciones){
                        this.presidente = data.data.observaciones[0].observacion.map(observacion => (
                            observacion.descripcion
                        ))
                    }                  
                        
                
                } catch (error) {
                    console.log(error);
                }            
            } 
            getData(obs_url);
        }, 
        presupuestos(){

            this.clean()
            this.tribunal()           
           
            var url_pre = url+"/presupuestos_ica"; 
            const axios = require("axios");   

            const getData = async url_pre => {
                
                try {

                const response = await axios.get(url_pre,{
                        params: {
                            cod_corte: this.cod_corte, 
                            cod_tribunal: this.cod_tribunal,
                            ano: 2015,
                        }  
                    });
                    
                    const arreglo = []

                    console.log(response)

                    Object.values(response.data.data.presupuestos).map((type) => {

                            this.calcularPromedio(type.monto_utilizado,type.monto_asignado) 

                            if(type.ano == 2017){
                                this.monto_asignado_ant = type.monto_asignado;                        
                            }

                            this.monto_asignado   = type.monto_asignado
                            this.monto_utilizado  = type.monto_utilizado
                            this.optpresus.series.push({name: 'Monto Asignado '+type.ano,
                                                        data: [{name:type.ano, 
                                                        y:type.monto_asignado}]})
                    })  

                    this.calcularCrecimiento(this.monto_asignado,this.monto_asignado_ant)
                
                    
                } catch (error) {
                    console.log(error);
                }              
            }
            getData(url_pre);
            var obs_url = ''
            obs_url = url+"/observaciones_ica"; 

            this.textpresu = ""

            const getObs = async obs_url => {
                
                try {

                const obs = await axios.get(obs_url,{
                        params: {
                            formulario_id: 6,
                            cod_corte: this.cod_corte, 
                            cod_tribunal: this.cod_tribunal,
                            ano: 2018
                        }  
                    });

                    const data = obs.data;

                    Object.values(data.data.observaciones).map((type) => {
                            Object.values(type.observacion).map((obs) => {
                                this.textpresu = obs.descripcion;
                            })
                    })
                
                } catch (error) {
                    console.log(error);
                }            
            } 
            getObs(obs_url);            
        },
        calcularCrecimiento(monto_asignado,monto_asignado_ant){
           this.crecimiento = (((monto_asignado - this.monto_asignado_ant) / monto_asignado) * 100)
           return this.crecimiento
        },
        calcularPromedio(monto_utilizado,monto_asignado){
            this.utilizado   = ((monto_utilizado * 100 ) / monto_asignado)
            
            return this.utilizado
        },                          
        clean(){
                this.cant_regres=0
                this.cant_regres_ant=0
                this.cant_registros=0
                this.cant_registros_ant=0
                this.prom_crecimiento=0
                this.grafinal= []
                this.gls_tribunal = ''
                this.areatext     = ''
                this.options=  {
                            chart: {
                                type: 'spline',
                            },
                            title: {
                                text: 'Ingresos de Causas',
                                x: -20 //center
                            },
                            subtitle: {
                                // text: 'Source: WorldClimate.com',
                                x: -20
                            },
                            xAxis: {
                                categories: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
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
                    this.resolucion=  {
                            chart: {
                                type: 'spline',
                            },
                            title: {
                                text: 'Resoluciones',
                                x: -20 //center
                            },
                            subtitle: {
                                // text: 'Source: WorldClimate.com',
                                x: -20
                            },
                            xAxis: {
                                categories: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
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
                                            return '$'+this.y.toLocaleString()
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
                                        '</b> es <b>' + this.y.toLocaleString() + '</b>';
                                }                
                            },
                            series: []
                            
                    }                         
            },
               tribunal(){
                    const axios = require("axios");  

                    let  url_ing = url+"/detalle_tribunal";
                    
                    const get = async url_ing => {
                        try {
                            
                            const response = await axios.get(url_ing,{
                                params: {
                                    cod_tribunal: this.cod_tribunal
                                }  
                            });

                            const data  = response.data;

                            Object.values(data.data).map((type) => {
                                this.gls_tribunal   =  type.gls_tribunal;
                            })


                        } catch (error) {
                            console.log(error);
                        }
                    }
                    
                    get(url_ing);                    
               }                       
    },
    components:{
        countTo,
        VueTextareaAutosize
    },      
}
</script>
