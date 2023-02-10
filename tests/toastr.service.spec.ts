import { TestBed } from '@angular/core/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ToastrMessageService } from '../src/app/services/toastr.service';

describe('ToastrMessageService', () => {
  let service: ToastrMessageService;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [ToastrMessageService, ToastrService],
    });
    service = TestBed.inject(ToastrMessageService);
    toastrService = TestBed.inject(ToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show success message', () => {
    spyOn(toastrService, 'success').and.callThrough();
    service.showMessage('success', 'message');
    expect(toastrService.success).toHaveBeenCalledWith('message', 'Sucesso!');
  });

  it('should show error message', () => {
    spyOn(toastrService, 'error').and.callThrough();
    service.showMessage('error', 'message');
    expect(toastrService.error).toHaveBeenCalledWith('message', 'Erro!');
  });

  it('should use custom title for success message', () => {
    spyOn(toastrService, 'success').and.callThrough();
    service.showMessage('success', 'message', 'Custom Title');
    expect(toastrService.success).toHaveBeenCalledWith(
      'message',
      'Custom Title'
    );
  });

  it('should use custom title for error message', () => {
    spyOn(toastrService, 'error').and.callThrough();
    service.showMessage('error', 'message', 'Custom Title');
    expect(toastrService.error).toHaveBeenCalledWith('message', 'Custom Title');
  });
});
