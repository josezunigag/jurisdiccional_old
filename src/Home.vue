<template>
    <div id="wrapper">
        <div class="preloader">
            <div class="cssload-speeding-wheel"></div>
        </div>

        <Navbar v-show="!contentOnly" />

        <Sidebar v-show="!contentOnly" />

        <router-view/>

        <RightSidebar v-show="!contentOnly" />
    </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/RightSidebar'

export default {
  data () {
    return {
      contentOnly: false
    }
  },
  methods: {
    checkLayout (route) {
      if (route && route.meta && route.meta.contentOnly) { this.contentOnly = true } else { this.contentOnly = false }
    },
    setMiniSidebar () {
      $('body').trigger('resize')
      $('.scroll-sidebar, .slimScrollDiv').css('overflow-x', 'visible').parent().css('overflow', 'visible')
      $('body').addClass('mini-sidebar')
      $('.top-left-part span').hide()
      $('.sidebartoggler i').removeClass('fa fa-bars')
    }
  },
  mounted () {
    $('.slimscrollright').slimScroll({
      height: '100%',
      position: 'right',
      size: '5px',
      color: '#dcdcdc'
    })
    $('.scroll-sidebar').slimScroll({
      position: 'right',
      size: '5px',
      height: '100%',
      color: '#dcdcdc'
    })
    $('.slimscrollsidebar').slimScroll({
      height: '100%',
      position: 'right',
      size: '5px',
      color: '#dcdcdc'
    })
    $('.chat-list').slimScroll({
      height: '100%',
      position: 'right',
      size: '5px',
      color: '#dcdcdc'
    })

    // add mini sidebar
    // this.setMiniSidebar()
    $('.preloader').fadeToggle()
  },
  created () {
    this.checkLayout(this.$router.currentRoute)
    this.$router.beforeEach((to, from, next) => {
      this.checkLayout(to)
      next()
    })
  },
  components: {
    Navbar,
    Sidebar,
    RightSidebar
  }
}
</script>
