import { TestBed } from '@angular/core/testing';

import { TodoEditService } from './todo-edit.service';

describe('TodoEditService', () => {
  let service: TodoEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
