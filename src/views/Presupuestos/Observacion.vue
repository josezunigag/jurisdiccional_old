<template>
    <div class="white-box">
        <div class="panel panel-info">    
        <transition v-on:before-enter="beforeEnter">
            <div v-if="show" class="alert alert-success" role="alert">
                <p>La informacion ha sido Guardada</p>
            </div>
        </transition>                              
        <form class="form-horizontal" @submit.prevent="submit()">                
            <div class="form-group">
                <label class="col-md-12">Observacion</label>
                <div class="col-md-12">
                    <textarea class="form-control" rows="5" v-model="areatext" :disabled="validated == 2"></textarea>
                </div>
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
</template>
<script>
import {url} from '@/config/api'
import store from 'store'   
export default {
	name: 'Observacion',
    data() {
        return {
        validated: 1,
        areatext: [],
        local: store.get('user'),
        competencia_id: 0,
        cod_corte: 0,
        cod_tribunal: 0,
        show: false          
        }
    },
    mounted() {
        this.loadData()        
    },
    methods:{
        submit: function () {
            var observacion = [];
            
            this.competencia_id = this.setCompetencia()
            this.cod_corte      = this.local.cod_corte;
            this.cod_tribunal   = this.local.cod_tribunal;

            const axios = require("axios");
            const url_sub = url+"/obsingresos"
            axios.post(url_sub, {
                formulario_id: 6,
                competencia_id: this.competencia_id,
                cod_corte: this.cod_corte, 
                cod_tribunal: this.cod_tribunal,
                ano: 2018,
                observacion: [{id: 1, descripcion: this.areatext, estado_obervacion_id: 1}
                ]
            })
            .then(response => {})
            .catch(e => {
                console.log(e);
            })
        },
        loadData(){

            var url_pre = ''; 
            this.competencia_id = this.setCompetencia()
            this.cod_corte      = this.local.cod_corte;
            this.cod_tribunal   = this.local.cod_tribunal;

            const axios = require("axios");   

            if (!this.local.competencia_id[0].competencia_id) {     
                url_pre = url+"/observaciones"; 
            } else {
                url_pre = url+"/observaciones_v2";     
            }

            const getData = async url_pre => {
                
                try {

                const response = await axios.get(url_pre,{
                        params: {
                            formulario_id: 6,
                            competencia_id: this.competencia_id,
                            cod_corte: this.cod_corte, 
                            cod_tribunal: this.cod_tribunal,
                            ano: 2018,
                        }  
                    });

                    const data = response.data;

                    if(data.data.observaciones){
                        Object.values(data.data.observaciones).map((type) => {
                            Object.values(type.observacion).map((element,index) => {
                                this.validated = element.estado_obervacion_id;
                                this.areatext.push(element.descripcion)
                            })
                        })
                    }          
                
                } catch (error) {
                    console.log(error);
                }            
            } 
            getData(url_pre);
        },
        setCompetencia(){
            const obj     = [];

            if (!this.local.competencia_id[0].competencia_id) {                   
                obj.push(this.local.competencia_id[0]);      
            } else {

                this.competencia_id = this.local.competencia_id;                  
                this.competencia_id.forEach(element => {
                    obj.push(element.competencia_id);
                });
            }

            return obj

        },                    
        beforeEnter: function (el) {
            setTimeout(() => {
              this.show = false;
            }, 700 * 10)            
            
        },                      
    } 
} 
</script>
