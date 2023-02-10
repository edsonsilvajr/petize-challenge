import { User } from '../src/app/models/user.model';
import { DataService } from '../src/app/services/data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    service = new DataService();
  });

  it('should set data', () => {
    const user = { name: 'edson' };
    service.setData(user as User);
    expect(service.getData()).toEqual(user as User);
  });

  it('should return null for data before it is set', () => {
    expect(service.getData()).toBeNull();
  });
});
