import { TestBed } from '@angular/core/testing';

import { DefaultLanguageBrowserService } from './default-language-browser.service';

describe('DefaultLanguageBrowserService', () => {
  let service: DefaultLanguageBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultLanguageBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
