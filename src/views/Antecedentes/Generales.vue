<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="white-box col-md-12">
            <div class="ribbon-wrapper">
                <div class="ribbon ribbon-bookmark ribbon-info">Antecedentes</div>
                <p class="ribbon-content">
                    En cumplimiento con los establecido en el artículo 24 letra d,
                    del Código de Tribunales, se presenta a continuación la cuenta anual de
                    la gestión jurisdiccional y administrativa del Tribunal, para el periodo comprendido
                    entre 01 de enero y el 31 de diciembre de {{this.year}}
                </p>
            </div>
        </div>
        <div class="container-fluid">
        <div class="row colorbox-group-widget"
             v-for="(indicator, index) in indicators" :key="index" >
            <p class="ribbon-content">{{indicator.ingresos.competencia}}</p>
            <Totales
                v-for="(value, index) in indicator"
                :key="index"
                :title="value.name"
                :ammount="value.value"
                :icon="value.icon"
                :link="value.link"
                :classtext="value.classtext"
                />
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
import store from 'store'
import Totales from '@/components/Totales'
import {mapState} from 'vuex'
export default {
  name: 'Generales',
  data () {
    return {
      local: store.get('user'),
      indicators: [],
      texto: [],
      competencia_id: 0,
      competencias: {
        2: 'Cobranza',
        3: 'Familia',
        4: 'Laboral',
        5: 'Penal'
      }
    }
  },
  components: {
    Totales
  },
  computed:{
    ...mapState([
      'year'
    ])
  },
  watch:{
    year() {
      this.indicators = []
      this.texto = []
      if (!this.local.competencia_id[0].competencia_id) {
        this.send(this.local.competencia_id)
      } else {
        this.competencia_id = this.local.competencia_id

        Object.values(this.local.competencia_id).map((type) => {
          this.send(type.competencia_id)
        })
      }
    }
  },   
  mounted () {
    if (!this.local.competencia_id[0].competencia_id) {
      this.send(this.local.competencia_id)
    } else {
      this.competencia_id = this.local.competencia_id

      Object.values(this.local.competencia_id).map((type) => {
        this.send(type.competencia_id)
      })
    }
  },
  methods: {
    send (id_competencia) {
      const axios = require('axios')

      let url_ing = url + '/resumenes'
      this.cod_corte = this.local.cod_corte
      this.cod_tribunal = this.local.cod_tribunal
      this.competencia_id = id_competencia

      const getData = async url_ing => {
        try {
          const response = await axios.get(url_ing, {
            params: {
              competencia_id: this.competencia_id,
              cod_corte: this.cod_corte,
              cod_tribunal: this.cod_tribunal,
              ano: this.year
            }
          }
          )
          const data = response.data
          Object.values(data.data.count).map((type) => {
            this.indicators.push({
              ingresos: {
                name: 'Ingresos',
                value: type.ingresos,
                link: '/ingresos/ingreso/' + this.competencias[id_competencia].toLowerCase(),
                icon: 'icon-fingerprint',
                classtext: 'media bg-info',
                competencia: this.competencias[id_competencia]
              },
              resoluciones: {
                name: 'Resoluciones',
                value: type.resoluciones,
                link: '/resoluciones/juez/' + this.competencias[id_competencia].toLowerCase(),
                icon: 'icon-report',
                classtext: 'media bg-success'
              },
              terminos: {
                name: 'Terminos',
                value: type.terminos,
                link: '/terminos/materia/' + this.competencias[id_competencia].toLowerCase(),
                icon: 'icon-access_alarms',
                classtext: 'media bg-danger'
              }
            })
            this.$forceUpdate()
          })
        } catch (error) {
          console.log(error)
        }
      }
      getData(url_ing)
    }
  }
}
</script>
