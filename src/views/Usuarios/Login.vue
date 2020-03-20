<template>

    <!-- ===== Page-Content ===== -->
    <section id="wrapper" class="login-register">
        <div class="login-box">
            <div class="white-box">
                <transition v-on:before-enter="beforeEnter">
                    <div v-if="show" class="alert alert-danger" role="alert">
                        <p>Usuario o contraseña incorrecta</p>
                    </div>
                </transition>
                <form class="form-horizontal" id="loginform" action="/antecedentes/generales"  @submit.prevent="submit()" > <!-- @submit.prevent="submit()" -->
                    <div class="form-group ">
                        <div class="col-xs-12">
                            <label for="checkbox-signup">Usuario</label>
                            <input v-model="usuario" class="form-control" type="text" required="" >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <label for="checkbox-signup">Contraseña</label>
                            <input v-model="password" class="form-control" type="password" required="" >
                        </div>
                    </div>
                    <div class="form-group text-center m-t-20">
                        <div class="col-xs-12">
                            <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Acceder</button>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                            <div class="social">
                                <a href="javascript:void(0)" class="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" class="fa fa-facebook"></i> </a>
                                <a href="javascript:void(0)" class="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" class="fa fa-google-plus"></i> </a>
                            </div>
                        </div>
                    </div> -->
                    <div class="form-group m-b-0">
                        <div class="col-sm-12 text-center">
                            <!-- <p>Don't have an account? <a href="register.html" class="text-primary m-l-5"><b>Sign Up</b></a></p> -->
                        </div>
                    </div>
                </form>
                <!-- <form class="form-horizontal" id="recoverform" action="index.html">
                    <div class="form-group ">
                        <div class="col-xs-12">
                            <h3>Recover Password</h3>
                            <p class="text-muted">Enter your Email and instructions will be sent to you! </p>
                        </div>
                    </div>
                    <div class="form-group ">
                        <div class="col-xs-12">
                            <input class="form-control" type="text" required="" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group text-center m-t-20">
                        <div class="col-xs-12">
                            <button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                        </div>
                    </div>
                </form> -->
            </div>
        </div>
    </section>
    <!-- ===== Page-Content-End ===== -->

</template>

<script>
import AuthService from '@/services/auth'
import store from 'store'
export default {
  name: 'Login',
  data () {
    return {
      usuario: '',
      password: '',
      show: false
    }
  },
  mounted () {
  },
  methods: {
    submit: function () {
      return new Promise(async (resolve) => {
        const success = await AuthService.login(
          this.usuario,
          this.password
        )
        if (!success) {
          this.show = true
          return resolve('Usuario o contraseña incorrecta')
        }

        if (store.get('user').perfil_id == 1) {
          this.$router.push('/antecedentes/generales')
        } else if (store.get('user').perfil_id == 2) {
          this.$router.push('/consolidados/tribunales')
        } else if (store.get('user').perfil_id == 3){
          this.$router.push('/reportes/inicio')
        }
      })
    },
    beforeEnter: function (el) {
      setTimeout(() => {
        this.show = false
      }, 700 * 10)
    }
  }
}
</script>
