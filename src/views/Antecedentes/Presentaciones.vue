<template>
    <div class="page-wrapper">
        <div class="container-fluid">
        <!-- ===== Page-Container ===== -->
            <div class="white-box">
                <div class="row">
                    <transition v-on:before-enter="beforeEnter">
                        <div v-if="show" class="alert alert-success" role="alert">
                            <p>La informacion ha sido Guardada</p>
                        </div>
                    </transition>                       
                    <form class="form-horizontal" @submit.prevent="submit()">
                        <div class="form-group">
                            <h5><span class="col-md-12"> Palabras de Juez Presidente</span><hr></h5>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Observacion:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs1" id="obs1" v-model="areatext[0]"></textarea>
                            </div>
                        </div>                        
                        <div class="form-group">
                            <label class="col-md-12">Observaciones Generales:</label>
                            <div class="col-md-12">
                                <textarea class="form-control" rows="5" name="obs2" id="obs2" v-model="areatext[1]"></textarea>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button v-on:click="show = !show" 
                                class="btn btn-info"><i class="fa fa-check"></i> Guardar
                            </button>
                    </div>                    
                    </form>
                </div>
            </div>
        </div>
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>                        
</template>
<script>
import store from 'store'   
export default {
    name: 'Presentaciones',
    data(){
        return {
        areatext: [],
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
        const url = "http://localhost:3000/observaciones";

        const getData = async url => {
            
            try {

            const response = await axios.get(url,{
                    params: {
                        formulario_id: 7,
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
                            this.areatext.push(obs.descripcion);
                        })
                    })

                    console.log(this.areatext);

                }         
              
            } catch (error) {
                console.log(error);
            }            
        } 
        getData(url);
    },  
   methods:{
            submit: function () {
                    // console.log(this.areatext);

                    this.competencia_id = this.local.competencia_id;
                    this.cod_corte      = this.local.cod_corte;
                    this.cod_tribunal   = this.local.cod_tribunal;

                    const axios = require("axios");
                    axios.post(`http://localhost:3000/obsresoluciones`, {
                        formulario_id: 7,
                        competencia_id: this.competencia_id,
                        cod_corte: this.cod_corte, 
                        cod_tribunal: this.cod_tribunal,
                        ano: 2018,
                        observacion: [{id: 1, descripcion: this.areatext[0], estado_obervacion_id: 1},
                                      {id: 2, descripcion: this.areatext[1], estado_obervacion_id: 1}
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
