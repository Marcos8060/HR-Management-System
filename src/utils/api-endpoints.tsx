//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    // LOGIN: '/api/v1/sponsorauth/login',
    LOGIN: '/api/login/',
    REFRESH_TOKEN: '/api/token/refresh/',
    GET_USER_PERMISSIONS: '/api/permissions',
    CREATE_EMPLOYEE: '/api/register',
}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    LOGIN: '/api/login',
    REFRESH_TOKEN: '/api/login/refresh',
    GET_USER_PERMISSIONS: '/api/login/user-permissions',
    CREATE_EMPLOYEE: '/api/employee',
   

}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
