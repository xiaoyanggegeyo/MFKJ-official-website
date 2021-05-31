import Vue                  from 'vue';
import Router               from 'vue-router';
import Home                 from '@/views/Home';
import Application          from '@/views/Application';
import BigData              from '@/views/BigData';
import ECommerce            from '@/views/ECommerce';
import SystemIntegration    from '@/views/SystemIntegration';

Vue.use( Router );


export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home
        }, {
            path: '/Home',
            name: 'Home',
            component: Home
        }, {
            path: '/Application',
            name: 'Application',
            component: Application
        }, {
            path: '/BigData',
            name: 'BigData',
            component: BigData
        }, {
            path: '/ECommerce',
            name: 'ECommerce',
            component: ECommerce
        }, {
            path: '/SystemIntegration',
            name: 'SystemIntegration',
            component: SystemIntegration
        }
    ]
});
