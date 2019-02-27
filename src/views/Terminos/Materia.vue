<template>
        <div class="page-wrapper">
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
                            <!-- <Observacion/> -->
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
                    <div class="container-fluid">
                        <div class="row colorbox-group-widget">
                            <div class="col-md-3 col-sm-6 info-color-box">
                                <div class="white-box">
                                    <div class="media bg-primary">
                                        <div class="media-body">
                                            <h3 class="info-count">{{totalrit}}<span class="pull-right"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span></h3>
                                            <p class="info-text font-12">TOTAL TERMINOS X RIT</p>
                                            <p class="info-ot font-15">TOTAL Terminos X RIT<span class="label label-rounded">{{totalrit}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 info-color-box">
                                <div class="white-box">
                                    <div class="media bg-primary">
                                        <div class="media-body">
                                            <h3 class="info-count">0 <span class="pull-right"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span></h3>
                                            <p class="info-text font-12">Dato 2</p>
                                            <p class="info-ot font-15">Dato 2<span class="label label-rounded">0</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 info-color-box">
                                <div class="white-box">
                                    <div class="media bg-success">
                                        <div class="media-body">
                                            <h3 class="info-count">0<span class="pull-right"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span></h3>
                                            <p class="info-text font-12">Dato 3</p>
                                            <p class="info-ot font-15">Dato 3<span class="label label-rounded">0</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 info-color-box">
                                <div class="white-box">
                                    <div class="media bg-success">
                                        <div class="media-body">
                                            <h3 class="info-count">{{totalmat}}<span class="pull-right"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span></h3>
                                            <p class="info-text font-12">TOTAL TERMINOS X MATERIA</p>
                                            <p class="info-ot font-15">TOTAL TERMINOS X MATERIA<span class="label label-rounded">{{totalmat}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div  class="col-sm-6 text-center">
                                <label class="label label-success">Terminos RIT</label>
                                <div id="bar-chart" ></div>
                                </div>
                                <div class="col-sm-6 text-center">
                                <label class="label label-success">Terminos Materia</label>
                                <div id="stacked" ></div>
                                </div>
                                <div class="col-sm-6 col-sm-offset-3 text-center">
                                <label class="label label-success">Terminos Agrupados</label>
                                <div id="pie-chart" ></div>
                                </div>
                                <!-- <div class="col-sm-6 text-center">
                                <label class="label label-success">Terminos Agrupados</label>
                                <div id="pie-chart2" ></div>
                                </div>                        -->
                            </div>             
                        </div>  
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
import store from 'store'
export default {
    name: 'TerminosMaterias',
    data(){
        return{
            config1:[],
            config2:[],
            totalrit: 0,
            totalmat: 0
        }
    },
    mounted() {

        const local = store.get('user')
        const cod_tribunal = local.cod_tribunal;

		const axios = require("axios");
		const url = "http://localhost:3000/terminos";
		const getData = async url => {
		try {
            const response = await axios.get(url,{
                    params: {
                    cod_tribunal: cod_tribunal
                    }  
                }
            );
			const data = response.data;

            var  arr= [
                        { y: 'Enero',      a: 0,  b: 0},
                        { y: 'Febrero',    a: 0,  b: 0},
                        { y: 'Marzo',      a: 0,  b: 0},
                        { y: 'Abril',      a: 0,  b: 0},
                        { y: 'Mayo',       a: 0,  b: 0},
                        { y: 'Junio',      a: 0,  b: 0},
                        { y: 'Julio',      a: 0,  b: 0},
                        { y: 'Agosto',     a: 0,  b: 0},
                        { y: 'Septiembre', a: 0,  b: 0},
                        { y: 'Octubre',    a: 0,  b: 0},
                        { y: 'Noviembre',  a: 0,  b: 0},
                        { y: 'Diciembre',  a: 0,  b: 0}                        
            ];

            var graf= [];

            Object.values(data.data.count).map((type) => {

                arr[--type._id].a = type.cantidad;
                this.totalrit    += type.cantidad;

            })

            Object.values(data.data.total).map((type) => {

                arr[--type._id].b = type.cantidad;
                this.totalmat    += type.cantidad;

            })

            Object.values(data.data.group).map((type) => {

                graf.push({label: type._id, value: type.cantidad});

            })            

            this.totalmat = this.totalmat.toLocaleString();
            this.totalrit = this.totalrit.toLocaleString();


            $(function() {

                    this.config1 = {
                        data: arr,
                        xkey: 'y',
                        ykeys: ['a'],
                        labels: ['Total RIT'],
                        fillOpacity: 0.6,
                        hideHover: 'auto',
                        behaveLikeLine: true,
                        resize: true,
                        barColors: function (row, series, type) {
                            return '#0283cc'
                        },                           
                        pointFillColors:['#ffffff'],
                        pointStrokeColors: ['black'],
                        lineColors:['gray','red']
                    };

                    this.config2 = {
                        data: arr,
                        xkey: 'y',
                        ykeys: ['b'],
                        labels: ['Total Materias'],
                        fillOpacity: 0.6,
                        hideHover: 'auto',
                        behaveLikeLine: true,
                        resize: true,
                        barColors: function (row, series, type) {
                            return '#2ecc71'
                        },                         
                        pointFillColors:['#ffffff'],
                        pointStrokeColors: ['black'],
                        lineColors:['gray','red']
                    };                    

                    this.config1.element = 'bar-chart';
                    Morris.Bar(this.config1);
                    this.config2.element = 'stacked';
                    this.config2.stacked = true;
                    Morris.Bar(this.config2);

                // Morris.Donut({
                //     element: 'pie-chart',
                //     data: [
                //         {label: "Friends", value: 30},
                //         {label: "VI", value: 15},
                //         {label: "Enemies", value: 45},
                //         {label: "Neutral", value: 10}
                //     ]          
                // });

                    Morris.Donut({
                        element: 'pie-chart',
                        data: graf
                    });

            }); 

		} catch (error) {
			console.log(error);
		}
		};

		getData(url);


      
    }
}

</script>
<style>
    #area-chart,
    #line-chart,
    #bar-chart,
    #stacked,
    #pie-chart,#pie-chart2{
    min-height: 250px;
    }
</style>
