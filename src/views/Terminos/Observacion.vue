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
                            <textarea class="form-control" rows="5" v-model="areatext"></textarea>
                        </div>
                    </div>
                    <div class="form-actions">
                        <!-- <input type="submit" value="Submit"  /> -->
                        <button v-on:click="show = !show" 
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
        areatext: '',
        local: store.get('user'),
        competencia_id: 0,
        cod_corte: 0,
        cod_tribunal: 0,
        show: false          
        }
    },
    mounted(){

        this.competencia_id = this.local.competencia_id;
        this.cod_corte      = this.local.cod_corte;
        this.cod_tribunal   = this.local.cod_tribunal;

        const axios = require("axios");   
        //const url = "http://localhost:3000/observaciones";
        const url_obs = url+'/observaciones'

        const getData = async url_obs => {
            
            try {

            const response = await axios.get(url_obs,{
                    params: {
                        formulario_id: 5,
                        competencia_id: this.competencia_id,
                        cod_corte: this.cod_corte, 
                        cod_tribunal: this.cod_tribunal,
                        ano: 2018,
                    }  
                });

                if(Object.keys(response.data.data.observaciones).length === 1){
                    const data = response.data;

                    Object.values(data.data.observaciones).map((type) => {
                        Object.values(type.observacion).map((obs) => {
                            this.areatext = obs.descripcion;
                        })
                    })

                }         
              
            } catch (error) {
                console.log(error);
            }            
        } 
        getData(url_obs);
    },
    methods:{
            submit: function () {
                    // console.log(this.areatext);

                    this.competencia_id = this.local.competencia_id;
                    this.cod_corte      = this.local.cod_corte;
                    this.cod_tribunal   = this.local.cod_tribunal;

                    const axios = require("axios");
                    const url_obs = url+'/obsresoluciones'        

                    axios.post(url_obs, {
                        formulario_id: 5,
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
        beforeEnter: function (el) {
            setTimeout(() => {
              this.show = false;
            }, 700 * 10)            
            
        },                      
    } 
}
</script>
