import { API } from './API';

export interface ICreateOrganizationParams {
  name: string;
  description?: string;
}

class Organizations {
  private _api: API;

  constructor(api: API) {
    this._api = api;
  }

  create(options: ICreateOrganizationParams) {
    return this._api.postRequest('organizations', {
      name: options.name,
      description: options.description,
    });
  }
}

export { Organizations };
