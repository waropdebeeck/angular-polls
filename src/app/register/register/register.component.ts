import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr'
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private registerservice: RegisterService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      gebruikersnaam: '',
      wachtwoord: '',
      email: ''
    }
  }
 
  OnSubmit(form: NgForm) {
    this.registerservice.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.router.navigate([''])
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }
}
