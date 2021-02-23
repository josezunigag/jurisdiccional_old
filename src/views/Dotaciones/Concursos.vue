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
                      <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                          <!-- <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
                          <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
                          <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li> -->
                          <li class="pull-right"><button class="btn btn-info" @click="crear()" >Generar PDF</button></li>
                      </ul>                      
                        <form class="form-horizontal" role="form" @submit.prevent="submit()">
                            <div class="table-responsive">
                                <table class="table color-table info-table">
                                    <thead>
                                        <tr>
                                            <th>Cargo</th>
                                            <th>FECHA PUBLICACIÓN</th>
                                            <th>RESULTADO</th>
                                            <th>FECHA ASUNCIÓN {{this.year}}</th>
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
import { url } from '@/config/api'
import { en, es } from 'vuejs-datepicker/dist/locale'
import Datepicker from 'vuejs-datepicker'
import store from 'store'
import { mapState } from 'vuex'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import  "jspdf-autotable"
import { Table } from 'jspdf-autotable'

export default {
  name: 'DotacionesConcursos',
  data () {
    return {
      validated: 1,
      en: en,
      es: es,
      funcionario: Array(30).fill().map(u => ({
        cargo: '',
        publicacion: new Date(2019, 0, 1),
        resultado: '',
        asunsion: new Date(2019, 0, 1),
        demora: 0,
        estado_observacion_id: 1
      })),
      gls_tribunal: '',      
      index: 0,
      show: false,
      local: store.get('user')
    }
  },
  mounted () {
    this.loadData()
  },
  computed: {
    ...mapState([
      'year'
    ])
  },  
  components: {
    Datepicker
  },
  watch:{
    year(){
      this.loadData();
    }
  },
  methods: {
    submit: function () {
      var observacion = []

      this.competencia_id = this.setCompetencia()
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const axios = require('axios')
      const url_sub = url + '/obsingresos'

      this.funcionario.map((type, index) => {
        observacion.push(type)
      })

      axios.post(url_sub, {
        formulario_id: 14,
        competencia_id: this.competencia_id,
        cod_corte: this.cod_corte,
        cod_tribunal: this.cod_tribunal,
        ano: this.year,
        observacion: observacion

      })
        .then(response => {})
        .catch(e => {
          console.log(e)
        })
    },
    loadData () {
      var url_ant = ''
      this.competencia_id = this.setCompetencia()
      this.tribunal() // Llamada al metodo.
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal

      const axios = require('axios')

      if (!this.local.competencia_id[0].competencia_id) {
        url_ant = url + '/observaciones'
      } else {
        url_ant = url + '/observaciones_v2'
      }

      const getData = async url_ant => {
        try {
          const response = await axios.get(url_ant, {
            params: {
              formulario_id: 14,
              competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          })

          const data = response.data
        
          if (Object.keys(data.data.observaciones).length === 1) {
              Object.values(data.data.observaciones).map((type) => {
                
                if(type.observacion.length === 1){
                   console.log("aqui no");
                  Object.values(type.observacion[0]).map((element, index) => {
                    this.validated = element.estado_observacion_id
                    this.funcionario[index].cargo = element.cargo
                    this.funcionario[index].publicacion = new Date(element.publicacion)
                    this.funcionario[index].resultado = element.resultado
                    this.funcionario[index].asunsion = new Date(element.asunsion)
                    this.funcionario[index].demora = element.demora
                  })
                }else{
                    console.log("aqui");
                    Object.values(type.observacion).map((element, index) => {
                      this.validated = element.estado_observacion_id
                      this.funcionario[index].cargo = element.cargo
                      this.funcionario[index].publicacion = new Date(element.publicacion)
                      this.funcionario[index].resultado = element.resultado
                      this.funcionario[index].asunsion = new Date(element.asunsion)
                      this.funcionario[index].demora = element.demora
                    })
                }
            })
          }else{
            this.funcionario= Array(30).fill().map(u => ({
              cargo: '',
              publicacion: new Date(this.year, 0, 1),
              resultado: '',
              asunsion: new Date(this.year, 0, 1),
              demora: 0,
              estado_observacion_id: 1
            }))
          }

        } catch (error) {
          console.log(error)
        }
      }
      getData(url_ant)
    },
    crear () {
      window.scrollTo(0,0) // Desplaza hacia arriba
      let doc = new jsPDF('l', 'mm');
      var width = doc.internal.pageSize.width; // ancho 297
      var height = doc.internal.pageSize.height; // altura 210
      let img = new Image()
          img.src = "/img/logo_pjud.c7377675.jpg"
      doc.addImage(img, 'JPEG', 15, 5, 30, 30) // Imagen Logo Pjud

      let table = [];
      table.push(['N°','CARGO','FEC. PUBLICACIÓN','RESULTADO','FEC. ASUNSION','DEMORA']);
      for (const propiedades in this.funcionario) {
        if(this.funcionario[propiedades].cargo != ''){
           console.log(this.funcionario[propiedades].cargo)
           table.push([
                      Number(propiedades) + 1,
                      this.funcionario[propiedades].cargo, 
                      this.funcionario[propiedades].publicacion.toLocaleDateString(),
                      this.funcionario[propiedades].resultado,
                      this.funcionario[propiedades].asunsion.toLocaleDateString(),
                      this.funcionario[propiedades].demora

           ])
        }
      }

        doc.setFontSize(12);
        doc.text(140,20, 'Informe Jurisdiccional' ,{ align: 'center' });
        doc.autoTable({
            tableLineColor: [0, 0, 0],
            tableLineWidth: 0.5,
            theme: 'grid',
            bodyStyles: {
              lineColor: [0, 0, 0]},
              styles: { padding: 0 , halign: 'center'},
              // columnStyles: { fillColor: [100, 255, 255] }, // Cells in first column centered and green
              margin: { top: 40 },
              body: table
          })

        doc.save('Informe Jurisdiccional.pdf');

      // })
    },    
    beforeEnter: function (el) {
      setTimeout(() => {
        this.show = false
      }, 700 * 10)
    },
    calculaDias (index) {
      var diff = this.funcionario[index].asunsion.getTime() - this.funcionario[index].publicacion.getTime()
      var diffDays = Math.ceil(diff / (1000 * 3600 * 24))

      console.log(diff)
      return this.funcionario[index].demora = diffDays
    },
    setCompetencia () {
      const obj = []

      if (!this.local.competencia_id[0].competencia_id) {
        obj.push(this.local.competencia_id[0])
      } else {
        this.competencia_id = this.local.competencia_id
        this.competencia_id.forEach(element => {
          obj.push(element.competencia_id)
        })
      }

      return obj
    },
    tribunal () {
      const axios = require('axios')

      let url_ing = url + '/detalle_tribunal'

      const get = async url_ing => {
        try {
          const response = await axios.get(url_ing, {
            params: {
              cod_tribunal: this.local.cod_tribunal
            }
          })

          const data = response.data
          this.gls_tribunal = data.data.tribunal.gls_tribunal
          
        } catch (error) {
          console.log(error)
        }
      }
      get(url_ing)
    }    
  }
}
</script>
