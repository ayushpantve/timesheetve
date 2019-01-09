import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-usertimesheet',
  templateUrl: './usertimesheet.component.html',
  styleUrls: ['./usertimesheet.component.css']
})
export class UsertimesheetComponent implements OnInit {

  timesheetForm:FormGroup = new FormGroup({
    date:new FormControl(null,[Validators.required]),
    clientname:new FormControl(null,Validators.required),
    details:new FormControl(null,Validators.required),
  })
  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit() {
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  save(){
    this._userService.register(JSON.stringify(this.timesheetForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=>console.error(error)
    )
  }
  
  register(){
    if(!this.timesheetForm.valid || (this.timesheetForm.controls.password.value != this.timesheetForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }

    this._userService.register(JSON.stringify(this.timesheetForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=>console.error(error)
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }

}
