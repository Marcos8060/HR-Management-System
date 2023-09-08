//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    // LOGIN: '/api/v1/sponsorauth/login',
    LOGIN: '/api/token/',
    REFRESH_TOKEN: '/api/token/refresh/',
    GET_USER_MENUS: '/api/Account/getMenu',
    VALIDATE_OTP: '/api/Account/ValidateOpt',

}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    LOGIN: '/api/login',
    REFRESH_TOKEN: '/api/login/refresh',
   

}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
