import { TestBed } from '@angular/core/testing';

import { TodoCreateService } from './todo-create.service';

describe('TodoCreateService', () => {
  let service: TodoCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
