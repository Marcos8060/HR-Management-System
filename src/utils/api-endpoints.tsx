//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    // LOGIN: '/api/v1/sponsorauth/login',
    LOGIN: '/api/login/',
    REFRESH_TOKEN: '/api/token/refresh/',
    GET_USER_PERMISSIONS: '/api/permissions',
    CREATE_USER: '/api/create_account',
    FETCH_ROLES: '/api/roles',
    FETCH_PROJECTS: '/api/project',


    /***************** CLIENT APIS **********************/
    FETCH_CLIENTS: '/api/clients',

}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    LOGIN: '/api/auth',
    REFRESH_TOKEN: '/api/auth/refresh',
    GET_USER_PERMISSIONS: '/api/auth/user-permissions',
    CREATE_USER: '/api/auth/register-user',
    FETCH_ROLES: '/api/auth/fetch-roles',
    FETCH_PROJECTS: '/api/projects',

      /***************** CLIENT APIS **********************/
      FETCH_CLIENTS: '/api/clients',
   

}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
