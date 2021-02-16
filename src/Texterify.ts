import { API } from './API';
import { Organizations } from './Organizations';
import { Projects } from './Projects';

export class Texterify {
  private _api: API;

  projects: Projects;
  organizations: Organizations;

  constructor(
    email: string,
    token: string,
    apiBaseUrl = 'https://app.texterify.com/api/v1'
  ) {
    this._api = new API(email, token, apiBaseUrl);

    this.projects = new Projects(this._api);
    this.organizations = new Organizations(this._api);
  }
}
