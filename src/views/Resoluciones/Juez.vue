<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="row m-0">
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{cant_registros.toLocaleString()}}</h3>
                        <p class="info-text font-12">Total Resoluciones</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Target<span class="label label-rounded label-success">300</span></p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-comment-text-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{prom_crecimiento}}%</h3>
                        <p class="info-text font-12">Comparativo 2017</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">&#36;175.195.627</h3>
                        <p class="info-text font-12">PRESUPUESTO ASIGNADO</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Total Pending<span class="label label-rounded label-danger">154</span></p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">&#36;175.195.627</h3>
                        <p class="info-text font-12">PRESUPUESTO UTILIZADO</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Total Pending<span class="label label-rounded label-danger">154</span></p> -->
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
                                            <h6 class="p-l-30 font-bold">Cantidad de Resoluciones Firmadas y Validadas por Juez, Información almacenada en el sistema de gestion respectivo durante el 2018.</h6>
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
                <Highcharts :options="options" />                
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
import store from 'store'
import Observacion from '@/views/Resoluciones/Observacion'
export default {
   name: 'Resoluciones',  
   data() {
        return {
            cant_registros: 0,
            prom_crecimiento: 0,
            grafinal:[],
            options: {
                        chart: {
                            type: 'spline',
                         },
                        title: {
                            text: 'Resoluciones por Juez',
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
                        series: [],
                        
            },
            local: store.get('user')       
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

                var arreglo  = [0,0,0,0,0,0,0,0,0,0,0,0];  
                var arregloT = [0,0,0,0,0,0,0,0,0,0,0,0]; 
                var juez     = '';
                var cod_tribunal = this.local.cod_tribunal;

            	const axios = require("axios");
		        const url = "http://localhost:3000/resoluciones";
                const getData = async url => {

                try {
                    const response = await axios.get(url,{
                        params: {
                        cod_tribunal: cod_tribunal
                        }  
                    });
                    const data = response.data;

                    Object.values(data.data.resoluciones).map((type) => {

                        if (juez != type._id.juez && juez != ''){
                            this.options.series.push({data: arreglo, name: juez, visible: false});
                            arreglo = [0,0,0,0,0,0,0,0,0,0,0,0];
                        }

                        juez = type._id.juez;

                        this.cant_registros      = this.cant_registros + type.count;
                        arreglo[--type._id.mes]  = type.count;
                        arregloT[type._id.mes]   += type.count;

                    }) 

                    this.options.series.push({data: arregloT, name: 'Total', visible:  true});
                    // this.options.series.push(this.grafinal);


                } catch (error) {
                    console.log(error);
                }
            }
            getData(url);
       }
    }   
}    
</script>        