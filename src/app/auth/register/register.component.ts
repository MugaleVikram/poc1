import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['employee', Validators.required] 
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { email, password, role } = this.registerForm.value;
      this.authService.register(email, password, role).subscribe(
        (response) => {
          
          this.router.navigate(['/login']); 
        },
        (error) => {
          
          console.error('Registration failed', error);
        }
      );
    }
  }
}
