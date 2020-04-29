import {environment} from '../environments/environment';


const API_HOST = environment.apiHost;
const AUTH = `${API_HOST}/auth`;
const LOGIN = `${AUTH}/knock-knock`;


export const ENDPOINTS = {
  LOGIN: LOGIN + '/'
};
