<template>
    <div class="page-wrapper">
        <div class="row m-0">
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{totalh[1]}}</h3>
                        <p class="info-text font-12">Total Horas Cursos 2018</p>    
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{totalh[0]}}</h3>
                        <p class="info-text font-12">Total Horas Cursos 2017</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Total Pending<span class="label label-rounded label-danger">154</span></p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="icon-graph"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{prom}}</h3>
                        <p class="info-text font-12">Promedio Horas Funcionario 2018</p>
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
                <div class="col-sm-6 col-sm-offset-3 text-center">
                <label class="label label-success">Funcionarios Capacitados</label>
                <div id="pie-chart" ></div>
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
import {url} from '@/config/api'
import store from 'store'  
import Observacion from '@/views/Presupuestos/ObservacionAca' 
export default {
    name: 'Academica',
    data(){
        return{
            local: store.get('user'),
            competencia_id: 0,
            cod_corte: 0,
            cod_tribunal: 0,
            totalh: [],
            prom: 0,              
        }
    },
    components:{
        Observacion
    },    
    mounted() {

        this.competencia_id = this.local.competencia_id;
        this.cod_corte      = this.local.cod_corte;
        this.cod_tribunal   = this.local.cod_tribunal;


        const axios = require("axios");
        const url_aca = url+'/capacitaciones'
        const getData = async url_aca => {
            
        try {

            const response = await axios.get(url_aca,{
                    params: {
                        competencia_id: this.competencia_id,
                        cod_corte: this.cod_corte, 
                        cod_tribunal: this.cod_tribunal,
                        ano: 2018,
                    }  
                }); 

            const data = response.data;
            console.log(data)
            var graf= [];
            var cantf= 0;

            Object.values(data.data.count).map((type) => {
                cantf += type.count;
                graf.push({label: type._id, value: type.count});

            }) 

            if(data.data.total[0]._id != 2017){
                this.totalh.push(0);
            }

            Object.values(data.data.total).map((type) => {
                
                

                this.totalh.push(type.count);
            
            }) 
          
            this.prom = Math.round(this.totalh[1] / cantf)

            Morris.Donut({
                element: 'pie-chart',
                data: graf,
                formatter: function (y, data) { return y.toLocaleString() }
            });          

        } catch (error) {
            console.log(error);
        }            
        } 
        getData(url_aca);                  
    }            
}            
</script>