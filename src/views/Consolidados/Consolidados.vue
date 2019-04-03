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
                <div class="form-group">
                    <label class="col-md-11">Observacion</label>
                    <div class="col-md-11">
                        <textarea class="form-control" rows="5" v-model="areatext" disabled></textarea>
                    </div>
                </div>                    
            </div>
                          
        </div>
        
        <button  @click="crear"
            class="btn btn-info"><i class="fa fa-check"></i> Generar
        </button>

        <div class="img">
        </div>

	</div>
</template>
<script>
import {url} from '@/config/api'
import store from 'store'
import countTo from 'vue-count-to';
import html2canvas from 'html2canvas';
export default {
    name: 'consolidados',
	data() {
		return {
            cant_registros: 0,
            cant_registros_ant: 0,
            local: store.get('user'),
             areatext: '',
		}
    },
    created(){

        this.change()
        this.cod_corte      = this.local.cod_corte;
        this.cod_tribunal   = this.local.cod_tribunal;

        const axios = require("axios");   
        const url_pre = url+"/observaciones";

        var getData = async url_pre => {
            
            try {

                const response = await axios.get(url_pre,{
                        params: {
                            formulario_id: 1,
                            competencia_id: this.competencia_id,
                            cod_corte: this.cod_corte, 
                            cod_tribunal: this.cod_tribunal,
                            ano: 2018,
                        }  
                    });
                
                console.log(response)

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
                url_ing =  url_ing+'/';
                break;
            }        

            getData = async url => {
            try {

                const response = await axios.get(url_ing,{
                    params: {
                        competencia_id: this.competencia_id,
                        cod_corte: this.cod_corte, 
                        cod_tribunal: this.cod_tribunal,
                        // ano: 2018,
                    }  
                });

                const data  = response.data;

                Object.values(data.data.ingreso).map((type) => {

                    this.cant_registros =  type.cantidad;

                })

                Object.values(data.data.ingresoAnterior).map((type) => {

                    this.cant_registros_ant =  type.cantidad;

                })



            } catch (error) {
                console.log(error);
            }
            };

            getData(url_ing);	

    },
    methods:{
        crear(){
            console.log(document.querySelector(".row"))
            html2canvas(document.querySelector(".row")).then(canvas => {
                document.querySelector(".img").appendChild(canvas)
            })
        },
        change(){
            if (typeof this.$route.params.competencia === 'undefined') {
                this.competencia_id = this.local.competencia_id[0];
            } else {
                this.competencia_id = this.competencias[this.$route.params.competencia]
            }                     
        }            
    },
    components:{
        countTo
    },      
}
</script>
