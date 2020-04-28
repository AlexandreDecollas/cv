import { TestBed } from '@angular/core/testing';

import { DefaultLanguageServerService } from './default-language-server.service';

describe('DefaultLanguageServerService', () => {
  let service: DefaultLanguageServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultLanguageServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
