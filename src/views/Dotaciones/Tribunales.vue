<template>
    <div class="page-wrapper">
        <div class="container-fluid">
        <!-- ===== Page-Container ===== -->
            <div class="white-box">
                <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                    <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
                    <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
                    <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li>
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
                                            <h6 class="p-l-30 font-bold">2018</h6>
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
                                            <h6 class="p-l-30 font-bold">La dotación que se muestra incluye a los Titulares y Contratas vigentes o con fecha de término igual o superior al 31 de diciembre del 2018. Incluyéndose además, a las Contratas Transitorias que prestaron apoyo en el Tribunal en algún periodo del año, contabilizándose por cada uno de sus nombramientos</h6>
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
                <Highcharts :options="options[0]" /> 
                <Highcharts :options="options[1]" /> 
            </div>
        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>
</template>
<script>
import {url} from '@/config/api'
import store from 'store'   
import Observacion from '@/views/Dotaciones/Observacion'
export default {
    name: 'DotacionesTribunales',
    data(){
        return{
            local: store.get('user'),
            competencia_id: 0,
            cod_corte: 0,
            cod_tribunal: 0,            
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
                    max:15,
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
            },{
                chart: {
                    type: 'pie',
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
    components:{
		Observacion
    },     
    mounted() {
        this.fetchData();
    },    
    methods: {
        fetchData() {

            this.competencia_id = this.local.competencia_id;
            this.cod_corte      = this.local.cod_corte;
            this.cod_tribunal   = this.local.cod_tribunal;

            var arreglo  = [];  
            const axios = require("axios");
            const url_dot = url+"/dotaciones";
            const getData = async url_dot => {
                
            try {
                const response = await axios.get(url_dot,{
                    params: {
                        competencia_id: this.competencia_id,
                        cod_corte: this.cod_corte, 
                        cod_tribunal: this.cod_tribunal,
                        ano: 2018,
                    }                      
                });
                const data = response.data;
                Object.values(data.data.count).map((type) => {

                    arreglo.push(type.count);  

                    this.options[1].series[0].data.push([type._id,type.count,true]); 
                    this.options[0].xAxis.categories.push(type._id);
                }) 
                
                this.options[0].series.push({data: arreglo, name: 2018});

            } catch (error) {
                console.log(error);
            }
        }
        console.log(this.options[1].series[0].data.push());
        getData(url_dot);
       }
    }   
}
</script>
