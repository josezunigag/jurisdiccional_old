<template>
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- ===== Page-Container ===== -->
            <div class="white-box">
                <transition v-on:before-enter="beforeEnter">
                    <div v-if="show" class="alert alert-success" role="alert">
                        <p>La informacion ha sido Guardada</p>
                    </div>
                </transition>                   
                <div class="row">
                    <div class="col-xs-12">
                        <form class="form-horizontal" role="form" @submit.prevent="submit()">
                            <div class="table-responsive">
                                <table class="table color-table info-table">
                                    <thead>
                                        <tr>
                                            <th>Cargo</th>
                                            <th>FECHA PUBLICACIÓN</th>
                                            <th>RESULTADO</th>
                                            <th>FECHA ASUNCIÓN 2018</th>
                                            <th>DEMORA EN ASUNCIÓN</th>                       
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="index in 30" :key="index">
                                            <td >
                                                <div class="form-group">
                                                    <input type="text" v-model="funcionario[index - 1].cargo" id="state-success" :name="index" class="form-control" placeholder="" :disabled="validated == 2">
                                                </div>                                                            
                                            </td>
                                            <td class="input-group">
                                                <datepicker :language="es"  @closed="calculaDias(index - 1)" input-class="form-control" v-model="funcionario[index - 1].publicacion" name="fecha_publicacion" :disabled="validated == 2"></datepicker> <span class="input-group-addon"><i class="icon-calender"></i></span>
                                            </td >
                                            <td>
                                                <select class="form-group col-md-12" v-model="funcionario[index - 1].resultado" :disabled="validated == 2">
                                                    <option value="Resuelto" selected="selected">Resuelto</option>
                                                    <option value="Pendiente">Pendiente</option>
                                                    <option value="Declaracion Desierto">Declaracion Desierto</option>
                                                    <option value="Concurso Anulado">Concurso Anulado</option>
                                                </select>
                                            </td>
                                            <td class="input-group">
                                                <datepicker  :language="es" @closed="calculaDias(index - 1)" input-class="form-control" v-model="funcionario[index - 1].asunsion" name="fecha_asuncion" :disabled="validated == 2"></datepicker> <span class="input-group-addon"><i class="icon-calender"></i></span>
                                            </td> 
                                            <td >
                                                <div class="form-group">
                                                    <input type="text" id="state-success" v-model="funcionario[index - 1].demora" class="form-control" placeholder="" :disabled="validated == 2">
                                                </div>                                                            
                                            </td>                                                                                                                                                                        
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="form-actions">
                                    <button v-on:click="show = !show" :disabled="validated == 2"
                                        class="btn btn-info"><i class="fa fa-check"></i> Guardar
                                    </button>
                                </div>                                   
                            </div>
                        </form>
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
import {url} from '@/config/api'
import {en, es} from 'vuejs-datepicker/dist/locale'
import Datepicker from 'vuejs-datepicker';
import store from 'store'   
export default {
    name: 'DotacionesConcursos',    
    data(){
        return{
            validated: 1,
            en: en,
            es: es,
            funcionario: Array(30).fill().map(u => ({
                cargo: '',
                publicacion: new Date(2018, 0,  1),
                resultado: '',
                asunsion: new Date(2018, 0,  1), 
                demora: 0             
            })),           
            index: 0,
            show: false,
            local: store.get('user')              
        }
    },
    mounted(){      
        this.loadData()
    },  
    components: {
        Datepicker
    },
    methods:{
        submit: function () {

            var observacion = [];
            
            this.competencia_id = this.setCompetencia()
            this.cod_corte      = this.local.cod_corte;
            this.cod_tribunal   = this.local.cod_tribunal;

            const axios = require("axios");
            const url_sub = url+"/obsingresos";       

            this.funcionario.map((type,index) => {
                observacion.push(type);
            });

            axios.post(url_sub, {
                formulario_id: 14,
                competencia_id: this.competencia_id,
                cod_corte: this.cod_corte, 
                cod_tribunal: this.cod_tribunal,
                ano: 2018,
                observacion: [observacion]
            })
            .then(response => {})
            .catch(e => {
                console.log(e);
            })

        },
        loadData(){

            var url_ant = ''; 
            this.competencia_id = this.setCompetencia()
            this.cod_corte      = this.local.cod_corte;
            this.cod_tribunal   = this.local.cod_tribunal;

            const axios = require("axios");   

            if (!this.local.competencia_id[0].competencia_id) {     
                url_ant = url+"/observaciones"; 
            } else {
                url_ant = url+"/observaciones_v2";     
            }

            const getData = async url_ant => {               
                try {

                    const response = await axios.get(url_ant,{
                            params: {
                                formulario_id: 14,
                                competencia_id: this.competencia_id,
                                cod_corte: this.cod_corte, 
                                cod_tribunal: this.cod_tribunal,
                                ano: 2018,
                            }  
                    });
                
                    const data = response.data;

                    if(data.data.observaciones){
                        Object.values(data.data.observaciones).map((type) => {
                            Object.values(type.observacion[0]).map((element,index) => {
                                this.validated                      =  element.estado_observacion_id;
                                this.funcionario[index].cargo       =  element.cargo;
                                this.funcionario[index].publicacion =  new Date(element.publicacion);
                                this.funcionario[index].resultado   =  element.resultado;
                                this.funcionario[index].asunsion    =  new Date(element.asunsion);
                                this.funcionario[index].demora      =  element.demora;
                            })
                        })
                    }                  
                    
                } catch (error) {
                    console.log(error);
                }            
            } 
            getData(url_ant);    
        },
        beforeEnter: function (el) {
            setTimeout(() => {
              this.show = false;
            }, 700 * 10)            
            
        },
        calculaDias(index){

            var diff = this.funcionario[index].asunsion.getTime() - this.funcionario[index].publicacion.getTime();
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 

             console.log(diff);
            return this.funcionario[index].demora =  diffDays;
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

        }                      
    }
}
</script>
