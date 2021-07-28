import Vue from 'vue'
import vueRouter from 'vue-router'
import UploadingItems from '../components/UploadingItems'
import ShowingPhotos from '../components/ShowingPhotos'

Vue.use(vueRouter)

export default new vueRouter({


    routes: [
        // {
        //     path: "/",
        //     redirect: {
        //         name: "UploadingItems"
        //     }
        // },
        {
            path: '/',
            name: 'UploadingItems',
            component: UploadingItems
        },

        {
            path: '/showingPhotos',
            name: 'ShowingPhotos',
            component: ShowingPhotos
        }
    ]
})