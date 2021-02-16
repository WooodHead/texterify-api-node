import { API } from './API';

export interface ICreateProjectParams {
  name: string;
  description?: string;
  organizationId?: string;
}

class Projects {
  private _api: API;

  constructor(api: API) {
    this._api = api;
  }

  getAll() {
    return this._api.getRequest('projects');
  }

  create(options: ICreateProjectParams) {
    return this._api.postRequest('projects', {
      name: options.name,
      description: options.description,
      organization_id: options.organizationId,
    });
  }
}

export { Projects };
