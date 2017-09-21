// import Vue from "vue"
// import VueRecource from "vue-resource"
import axios from "axios"
import querystring from "querystring"

const customBaseUrl = process.env.NODE_ENV === "production" ? "/custom_web_template.html" : "http://study.merlion.ru/custom_web_template.html"

// console.log(process.env.NODE_ENV)
// Vue.use(VueRecource)

// export const postVue = (params, body) => {
//     return Vue.http.post(
//         customBaseUrl,
//         body,
//         {
//             params,
//             credentials: true,
//             emulateJSON: true
//         }
//     ).then(resp => resp.json())
// }

// export const getVue = (params) => {
//     return Vue.http.get(
//         customBaseUrl,
//         {
//             params,
//             credentials: true,
//             emulateJSON: true
//         }
//     ).then(resp => resp.json())
// }

export const getAxios = (params) => {
    return axios.get(
        customBaseUrl,
        {
            params,
            withCredentials: true
        }
    ).then(resp => resp.data)
}

export const postAxios = (params, data) => {
    return axios.post(
        customBaseUrl,
        querystring.stringify(data),
        {
            params,
            withCredentials: true
        }
    ).then(resp => resp.data)
}
