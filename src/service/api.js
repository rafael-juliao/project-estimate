const appHeaders = require('../service/headers.config').headers
const axios = require('axios');

let API_ENDPOINT = ""
exports.ENDPOINT = newEndpoint => { API_ENDPOINT = newEndpoint};
const buildUrl = (endpoint, query = {}) =>  `${API_ENDPOINT}${endpoint}${buildQuery(query)}`;

const buildQuery = (query = {}) => {

    if( !query ) return;
    
    queryKeys = Object.keys(query).filter(key => query[key] !== null && query[key] !== '');

    queryString = ''
    queryKeys.forEach((key, index) => queryString += (index === 0 ? '?' : '&') + key + '=' + query[key] )

    return queryString
}
exports.buildQuery = buildQuery;




const GET = (endpoint, query = {}) => {
    console.log( `[GET]  | ENDPOINT: ${API_ENDPOINT}${endpoint} |  QUERY: ${JSON.stringify(query)}`)
    return axios.get(
        buildUrl(endpoint, query),
        { method: 'GET', headers: appHeaders }
    );
}
exports.GET = GET;


const POST = async (endpoint, data = {}) => {
    console.log( `[POST] ${API_ENDPOINT}${endpoint} | BODY: ${JSON.stringify(data)}`)
    return axios.post( 
        buildUrl(endpoint), 
        { method: 'POST', headers: appHeaders, body: data }
    )
}
exports.POST = POST;


const PUT = (endpoint, data = {}) => axios.put(
    buildUrl(endpoint), 
    { method: 'PUT', headers: appHeaders, body: data }
)
exports.PUT = PUT;


const DELETE = (endpoint, data = {}) => axios.delete(
    buildUrl(endpoint), 
    { method: 'DELETE', headers: appHeaders }
)
exports.DELETE = DELETE;