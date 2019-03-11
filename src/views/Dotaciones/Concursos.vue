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
                                        <tr v-for="index in 10" :key="index">
                                            <td >
                                                <div class="form-group">
                                                    <input type="text" v-model="funcionario[0].cargo[index]" id="state-success" :name="index" class="form-control" placeholder="">
                                                </div>                                                            
                                            </td>
                                            <td class="input-group">
                                                <datepicker :language="es"  input-class="form-control" v-model="funcionario[0].fechas_p[index]" name="fecha_publicacion"></datepicker> <span class="input-group-addon"><i class="icon-calender"></i></span>
                                            </td >
                                            <td>
                                                <select class="form-group col-md-12">
                                                    <option>Seleccione</option>
                                                    <option>Resuelto</option>
                                                    <option>Pendiente</option>
                                                    <option>Declaracion Desierto</option>
                                                    <option>Concurso Anulado</option>
                                                </select>
                                            </td>
                                            <td class="input-group">
                                                <datepicker  :language="es" input-class="form-control" v-model="fechas_a[index]" name="fecha_asuncion"></datepicker> <span class="input-group-addon"><i class="icon-calender"></i></span>
                                            </td> 
                                            <td >
                                                <div class="form-group">
                                                    <!-- <label class="col-md-3 control-label" for="state-success">Success</label> -->
                                                    <!-- <div class="col-md-6"> -->
                                                    <input type="text" id="state-success" :name="index" class="form-control" placeholder="">
                                                    <!-- </div> -->
                                                </div>                                                            
                                            </td>                                                                                                                                                                        
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="form-actions">
                                    <button v-on:click="show = !show" 
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
    data(){
        return{
            en: en,
            es: es,
            funcionario: [{  
            cargo:[
            ],        
            fechas_p: [
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),                                                                                                
                ]
            }],
            fechas_a: [
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),
                new Date(2018, 0,  1),                                                                                                
            ],            
            index: 0,
            show: false,
            local: store.get('user')              
        }
    },
    name: 'DotacionesConcursos',
    components: {
        Datepicker
    },
    methods:{
        submit: function () {
            this.competencia_id = this.local.competencia_id;
            this.cod_corte      = this.local.cod_corte;
            this.cod_tribunal   = this.local.cod_tribunal;

            const axios = require("axios");
            const url_find = url+"/concursos";       

            const obj = [];
            var   aux = 1;

            // console.log(this.funcionario[0].fechas_p[1]);

            Object.values(this.funcionario[0]).map((type) => {
                console.log(type);
                // console.log(index);
                // console.log(type.fechas_p[index]);
                // obj.push({cargo: element,fecha_publicacion: this.fechas_p[aux]});

                // aux = aux + 1;

            });

            // console.log(obj);

        },
        beforeEnter: function (el) {
            setTimeout(() => {
              this.show = false;
            }, 700 * 10)            
            
        }    
    }
}
</script>
