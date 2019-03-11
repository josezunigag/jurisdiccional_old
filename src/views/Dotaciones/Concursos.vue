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
                                                    <input type="text" v-model="funcionario[index - 1].cargo" id="state-success" :name="index" class="form-control" placeholder="">
                                                </div>                                                            
                                            </td>
                                            <td class="input-group">
                                                <datepicker :language="es"  input-class="form-control" v-model="funcionario[index - 1].publicacion" name="fecha_publicacion"></datepicker> <span class="input-group-addon"><i class="icon-calender"></i></span>
                                            </td >
                                            <td>
                                                <select class="form-group col-md-12" v-model="funcionario[index - 1].resultado">
                                                    <option value="Resuelto" selected="selected">Resuelto</option>
                                                    <option value="Pendiente">Pendiente</option>
                                                    <option value="Declaracion Desierto">Declaracion Desierto</option>
                                                    <option value="Concurso Anulado">Concurso Anulado</option>
                                                </select>
                                            </td>
                                            <td class="input-group">
                                                <datepicker  :language="es" input-class="form-control" v-model="funcionario[index - 1].asunsion" name="fecha_asuncion"></datepicker> <span class="input-group-addon"><i class="icon-calender"></i></span>
                                            </td> 
                                            <td >
                                                <div class="form-group">
                                                    <input type="text" id="state-success" :name="index" class="form-control" placeholder="">
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
    name: 'DotacionesConcursos',    
    data(){
        return{
            en: en,
            es: es,
            funcionario: Array(10).fill().map(u => ({
                cargo: '',
                publicacion: new Date(2018, 0,  1),
                resultado: '',
                asunsion: new Date(2018, 0,  1),              
            })),           
            index: 0,
            show: false,
            local: store.get('user')              
        }
    },
    components: {
        Datepicker
    },
    methods:{
        submit: function () {
            this.competencia_id = this.local.competencia_id;
            this.cod_corte      = this.local.cod_corte;
            this.cod_tribunal   = this.local.cod_tribunal;

            const axios = require("axios");
            const url_sub = url+"/obsingresos";       

            var obj = [];

            this.funcionario.map((type,index) => {
                obj.push(type);
            });

            axios.post(url_sub, {
                formulario_id: 14,
                competencia_id: this.competencia_id,
                cod_corte: this.cod_corte, 
                cod_tribunal: this.cod_tribunal,
                ano: 2018,
                observacion: [obj]
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
            
        }    
    }
}
</script>
