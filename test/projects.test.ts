import { Texterify } from '../src/Texterify';
import { TEST_USER } from './fixtures/user';
import { DatabasUtils } from './utils/DatabaseUtils';
import { Asserters } from './utils/Asserters';
import { TEST_API_BASE_URL } from './utils/TestConstants';
import { ICreateProjectParams } from '../src/Projects';

describe('projects', () => {
  const texterify = new Texterify(
    TEST_USER.EMAIL,
    TEST_USER.TOKEN,
    TEST_API_BASE_URL
  );

  beforeEach(async () => {
    await DatabasUtils.cleanDatabase();
    await DatabasUtils.seedDatabase();
  });

  test('get projects', async () => {
    const data = {
      name: 'Test',
      description: 'This is my test project',
    };

    await texterify.projects.create(data);

    const projects = await texterify.projects.getAll();

    expect(projects.data.length).toEqual(1);
    expect(projects.included.length).toEqual(0);
    expect(projects.meta.total).toEqual(1);
    Asserters.assertProject(projects.data[0], data);
  });

  test('create private project with name', async () => {
    const data: ICreateProjectParams = {
      name: 'Test',
    };

    const project = await texterify.projects.create(data);

    expect(project).toMatchObject({ data: {} });
    Asserters.assertProject(project.data, data);
  });

  test('create private project with name and description', async () => {
    const data: ICreateProjectParams = {
      name: 'Test',
      description: 'This is my test project',
    };

    const project = await texterify.projects.create(data);

    expect(project).toMatchObject({ data: {} });
    Asserters.assertProject(project.data, data);
  });

  test('create organization projects', async () => {
    const organization = await texterify.organizations.create({
      name: 'Test Organization',
    });

    const data_1: ICreateProjectParams = {
      name: 'Test',
      description: 'This is my test project',
      organizationId: organization.data.attributes.id,
    };

    const project_1 = await texterify.projects.create(data_1);

    expect(project_1).toMatchObject({ data: {} });
    Asserters.assertProject(project_1.data, data_1);

    const data_2: ICreateProjectParams = {
      name: 'Test 2',
      organizationId: organization.data.attributes.id,
    };

    const project_2 = await texterify.projects.create(data_2);

    expect(project_2).toMatchObject({ data: {} });
    Asserters.assertProject(project_2.data, data_2);
  });
});
