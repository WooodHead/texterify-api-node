import { ICreateOrganizationParams } from '../../src/Organizations';
import { ICreateProjectParams } from '../../src/Projects';

export const Asserters = {
  assertProject: (data: any, options: ICreateProjectParams) => {
    expect(data.type).toEqual('project');
    expect(data.attributes.name).toEqual(options.name);
    if (options.description) {
      expect(data.attributes.description).toEqual(options.description);
    }
    if (options.organizationId) {
      expect(data.relationships.organization.data.id).toEqual(
        options.organizationId
      );
    }
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('attributes');
    expect(data).toHaveProperty('relationships');
  },

  assertOrganization: (data: any, options: ICreateOrganizationParams) => {
    expect(data.type).toEqual('organization');
    expect(data.attributes.name).toEqual(options.name);
    if (options.description) {
      expect(data.attributes.description).toEqual(options.description);
    }
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('attributes');
    expect(data).toHaveProperty('relationships');
  },
};
