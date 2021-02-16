import fetch from 'node-fetch';
import * as queryString from 'query-string';
import { Logger } from './Logger';

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

class API {
  private _apiBaseUrl: string;
  private _email: string;
  private _token: string;

  constructor(
    email: string,
    token: string,
    apiBaseUrl = 'https://app.texterify.com/api/v1'
  ) {
    this._apiBaseUrl = apiBaseUrl;
    this._email = email;
    this._token = token;
  }

  async getRequest(
    url: string,
    queryParams?: any,
    headers?: any,
    isFileDownload?: boolean
  ) {
    return this.request(url, 'GET', headers, queryParams, isFileDownload);
  }

  async postRequest(url: string, body?: any, headers?: any) {
    return this.request(url, 'POST', headers, body, false);
  }

  async putRequest(url: string, body?: any, headers?: any) {
    return this.request(url, 'PUT', headers, body, false);
  }

  async deleteRequest(url: string, body?: any, headers?: any) {
    return this.request(url, 'DELETE', headers, body, false);
  }

  async request(
    url: string,
    method: string,
    headers: any,
    params: any,
    isFileDownload: boolean | undefined
  ) {
    try {
      params = params || {};

      const requestHeaders = { ...DEFAULT_HEADERS, ...headers };
      const apiBaseUrl = this._apiBaseUrl;
      let fullURL = `${apiBaseUrl}/${url}`;

      requestHeaders['Auth-Email'] = this._email;
      requestHeaders['Auth-Secret'] = this._token;

      // Add query params if it is a get request.
      if (method === 'GET' && params) {
        fullURL += `?${queryString.stringify(params)}`;
      }

      const options: any = {
        method: method,
        headers: requestHeaders,
      };

      if (method !== 'GET') {
        options.body = JSON.stringify(params);
      }

      let response;
      try {
        response = await fetch(fullURL, options);
        if (response.status !== 200 && response.status !== 400) {
          if (response.status === 404) {
            throw new Error(
              "The resource could not be found. Maybe your auth credentials are wrong or you don't have the permission to access this resource."
            );
          } else {
            throw new Error(
              `Invalid response status received: ${response.status}`
            );
          }
        }
      } catch (error) {
        throw error;
      }

      return response && !isFileDownload ? response.json() : response;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}

export { API };
