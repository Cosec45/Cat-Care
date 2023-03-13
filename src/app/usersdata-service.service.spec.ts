import { TestBed } from '@angular/core/testing';


import { UsersdataServiceService } from './usersdata-service.service';

describe('UsersdataServiceService', () => {
  let service: UsersdataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersdataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
