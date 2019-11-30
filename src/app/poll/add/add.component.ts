import { Component, OnInit } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { NgForm } from '@angular/forms';
import { AddService } from '../add.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from "@angular/router"

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  poll: Poll;
  constructor(private addService: AddService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.poll = {
      naam: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.addService.registerPoll(form.value)
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
