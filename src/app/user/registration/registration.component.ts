import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      (res:any) => {
        if(res.succeded)
        {
          this.service.formModel.reset();
        }
        else {
          res.errors.forEach(element => {
            switch(element.code){
              case 'DuplicateUserName':
                  //UserName Exists 
                break;

                default:
                    //Registration Failed 
                  break;
            }
            
            
          });
        }
      },
      err => {
        console.log(err);
      }
    )
  }


}
