<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <!-- ===== Page-Container ===== -->
        <div class="container-fluid">
            <div class="white-box">
                <!-- <transition v-on:before-enter="beforeEnter">
                    <div v-if="show" class="alert alert-danger" role="alert">
                        <p>Usuario Creado</p>
                    </div>
                </transition> -->
                <form class="form-horizontal" id="loginform" action="/"  @submit.prevent="submit()" > <!-- @submit.prevent="submit()" -->
                    <div class="form-group">
                        <div class="col-sm-6 col-sm-offset-3">
                            <label for="checkbox-signup">Cortes</label>
                            <select class="form-control" @change="onChange($event)">
                               <option v-for="corte in cortes" :key="corte.cod_corte" :value="corte.cod_corte">
                                    {{ corte.gls_corte }}
                                </option>                                
                            </select>
                        </div>                     
                    </div>   
                    <div class="form-group">
                        <div class="col-sm-6 col-sm-offset-3">
                            <label for="checkbox-signup">Tribunal</label>
                           <select class="form-control" @change="onChangeTri($event)">
                               <option v-for="tribunal in tribunales" :key="tribunal.cod_tribunal" :value="tribunal.cod_tribunal">
                                    {{ tribunal.gls_tribunal }}
                                </option>                                
                            </select>
                        </div>                     
                    </div>   
                    <div class="form-group">
                        <div class="col-sm-6 col-sm-offset-3">
                            <!-- <label class="checkbox-inline" for="civil" >
                                <input type="checkbox" class="form-check-input" id="civil" value="1" v-model="competencias">
                                Civil
                            </label> -->
                            <label class="checkbox-inline" for="cobranza">
                                <input type="checkbox" class="form-check-input" id="cobranza" value="2" v-model="competencias">
                                Cobranza
                            </label>
                            <label class="checkbox-inline" for="familia" >
                                <input type="checkbox" class="form-check-input" id="familia" value="3" v-model="competencias">                            
                                Familia
                            </label>
                            <label class="checkbox-inline" for="laboral" >
                                <input type="checkbox" class="form-check-input" id="laboral" value="4" v-model="competencias">                            
                                Laboral
                            </label>
                            <label class="checkbox-inline" for="penal" >
                                <input type="checkbox" class="form-check-input" id="penal" value="5" v-model="competencias">
                                Penal
                            </label>          
                        </div>               
                    </div>                                                                         
                    <div class="form-group">
                        <div class="col-sm-6 col-sm-offset-3">
                            <label for="checkbox-signup">Usuario</label>
                            <input v-model="usuario" class="form-control" type="text" required="" >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-6 col-sm-offset-3">
                            <label>Mail</label>
                            <input v-model="mail" class="form-control" type="email" required="" >
                        </div>
                    </div>                    
                    <div class="form-group">
                        <div class="col-sm-6 col-sm-offset-3">
                            <label for="checkbox-signup">Contraseña</label>
                            <input v-model="password" class="form-control" type="password" required="" >
                        </div>
                    </div>
                    <div class="form-group text-center m-t-20">
                        <div class="col-sm-6 col-sm-offset-3">
                            <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Crear</button>
                        </div>
                    </div>
                    <div class="form-group m-b-0">
                        <div class="col-sm-12 text-center">
                            <!-- <p>Don't have an account? <a href="register.html" class="text-primary m-l-5"><b>Sign Up</b></a></p> -->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- ===== Page-Content-End ===== -->
</template>
<script>
import { url } from '@/config/api'
import store from 'store'
import { mapState } from 'vuex'
export default {
    name: 'Agregar',
    data () {
    return {
        cortes: [
            {
            value: '',
            gls_corte: 'Seleccione una corte'
            }
        ],
        tribunales: [
            {
            value: '',
            gls_tribunal: 'Seleccione un tribunal'
            }
        ],
        cselected: 0,
        tselected: 0,
        competencias: [],
        usuario: '',
        password: '',
        mail: '',
        show: false
    }
    }, 
    created(){
    let urlRep = url + '/all'
    const axios = require('axios')

    const getData = async urlRep => {
        try {
            const response = await axios.get(urlRep)

            const data = response.data

            Object.values(data.data.cortes).map((type) => { 
                this.cortes.push({cod_corte: type.cod_corte, gls_corte:type.gls_corte})
            })

        } catch (error) {
            console.log(error)
        }
        }
        getData(urlRep)
    },
    mounted(){

    },
    methods: {
        onChange(event) {
            let urlRep = url + '/tricortes'
            const axios = require('axios')

            this.cselected = event.target.value;

            const getData = async urlRep => {
                try {
                    const response = await axios.get(urlRep,{
                        params:{
                            cod_corte: event.target.value
                        }
                    })

                    const data = response.data;
                    
                    (this.tribunales.length > 1) ?  this.tribunales = [{value: '',gls_tribunal: 'Seleccione un tribunal'}] : false

                    Object.values(data.data.tribunal).map((type) => { 
                        this.tribunales.push({cod_tribunal: type.cod_tribunal, gls_tribunal:type.gls_tribunal})
                    })

                } catch (error) {
                    console.log(error)
                }
            }
            getData(urlRep)            
         },
         onChangeTri(event){
            this.tselected = event.target.value;
         },
         submit: function () {
             console.log("submit")
             console.log(this.cselected,this.tselected,this.competencias,this.usuario,this.mail,this.password)

            let urlRep = url + '/addUser'
            const axios = require('axios')

            const getData = async urlRep => {
                try {
                    const response = await axios.get(urlRep,{
                        params:{
                            cod_corte: this.cselected,
                            cod_tribunal: this.tselected,
                            competencia_id : this.competencias,
                            usuario: this.usuario,
                            contrasena: this.password,
                            email: this.email,
                            perfil_id: 1
                        }
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            getData(urlRep)              
         }
    }     
}
</script>