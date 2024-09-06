import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
  };

  signinForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder) {
    this.email = fb.control('', [Validators.required, Validators.email]);
    this.password = fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]);

    this.signinForm = fb.group({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  handleSubmit() {
    console.log('====================================');
    console.log(this.signinForm.valid);
    console.log('====================================');
  }
}
