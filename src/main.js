let Storage = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    },
    SendData: {},
    Brands: {},
    Departs: null,
    Users: null,
    Sources: null,
    EContacts: null,
    UserQuery: null,
    BossQuery: null,
    DepartQuery: null,
    DepNameQuery: null,
    State: {
        brand_id: false,
        model: null,
        site: null,

        Locations: null,
        loc_id: false,
        loc_link: null,
        loc_sms: {
            status: false,
            show: false,
            sms: [],
            selected: 0,
            result: false
        },

        depart_id: null,
        depart_guid: null,
        depart_name: 'Не указан',
        depart_bossmail: null,
        depart_1c_result: null,

        clientName: null,
        clientPhone: null,
        clientGuid: null,
        clientBlocked: false,
        clientInBlackList: false,
        operatorGuid: null,
        operatorName: null,
        date: null,
        comment: null,

        source_id: null, //(!!_GET.expert) ? '105638' : null,
        source_name: null, //(!!_GET.expert) ? 'Прочее / Интернет' : null,
        source_opened: null, //(!!_GET.expert) ? '2024' : null,
        source_guid: null, //(!!_GET.expert) ? '75C8FC67-6C4F-4C68-B9A6-0F9AB1B13CF9' : null,

        econtact_id: null,
        econtact_name: null,
        econtact_opened: null,
        econtact_guid: null,

        Modals: {
            Users: {
                status: true,
                error_message: null,
                show: false,
                result: null
            },
            GroupNumber: {
                status: true,
                error_message: null,
                result: null
            },
            Boss: {
                status: true,
                error_message: null,
                result: null
            },
            Depart: {
                SECTION_CODE: null,
                SECTION_NAME: null,
                NAME: null,
                GUID: null,
                GUID_1C: null,
                DEPARTAMENT_ID: null,
                DEPARTAMENT_NAME: null,
                status: true,
                error_message: null,
                show: false,
                result: null,
                name_result: null
            },
            MODELS: {
                status: true,
                error_message: null,
                show: false,
            },
            QUESTIONS: {
                status: true,
                error_message: null,
                show: false,
            },
            Data: {
                model: null,
                question: null,
                group_number: null,
                USER: null,
            },
            SMS: {
                show: false,
                status: true,
                error_message: null,
            }
        },

        not_processed: null,
        ToBlock: {
            status: false,
            show: false,
            comment: null,
            result: null
        },
        ToCRM: true,

        calltouchInfo: null,
        locInfo: null,

        cons: null,

        current_action: null,

        expert_mode: null,
    }
}

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
// import Axios from 'axios'

Vue.use(Vuex)

// Axios("https://apps.yug-avto.ru/API/get/widgets/?"+encodeURI('token='+window.yappstoken+'&r='+location.href))
//     .then(response => {
        
//         if ( response.data.Development ) console.log( response.data );
//         const Store = new Vuex.Store({
//             state: response.data
//         });
//         new Vue({
//             render: h => h(App),
//             store: Store,
//         })
//         .$mount('#app');
// })
new Vue({
    render: h => h(App),
    store: Storage,
})
.$mount('#app');
