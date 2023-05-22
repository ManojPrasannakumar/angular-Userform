import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-userform',
  templateUrl: './reactive-userform.component.html',
  styleUrls: ['./reactive-userform.component.scss']
})
export class ReactiveUserformComponent implements OnInit {

  loginForm:FormGroup;
  check: boolean
  apidemo={
    email:'test1@g.com',
    tech:'php'
  }
  ngOnInit(){
    this.loginForm= new FormGroup({
      userData: new FormGroup({
        email:new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(4)])
      }),
      tech:new FormControl('',[Validators.required,this.techNotAllowed]),
      skills:new FormArray([
        new FormControl('Java'),
        new FormControl('Python'),
      ])
    });

    setTimeout(() => {
      this.loginForm.patchValue({
        userData:{
          email:this.apidemo.email
        },
        tech:this.apidemo.tech
      })
    }, 5000);

    this.loginForm.valueChanges.subscribe((formvalue)=>{
      const {tech} = formvalue;
      this.check = tech.includes('css');
      if(this.check){
        alert('entered tech is invalid');
      }
    })
  }

  submitUser(){
    console.log('from submit button',this.loginForm);
  }

  get techSkills(){
    return (this.loginForm.get('skills') as FormArray).controls;
  }

  addNewTech(){
    const newSkill = new FormControl(this.loginForm.get('tech')?.value,Validators.required);
   (<FormArray>this.loginForm.get('skills')).controls.push(newSkill);
  }

  reset(){
    this.loginForm.reset(this.loginForm.valueChanges);

    const emp = this.loginForm.get('skills')?.value===' ';
    if(!emp){console.log(emp);
      alert('Enter tech skills');
    }
    /*this.loginForm.patchValue({
      eamil:'test1@g.com'
    }); */
  }

  techNotAllowed(control:FormControl):{[val:string]:boolean}|null{
    if(control?.value?.includes('php')){
      return { techNotAllowed:true};
    }
    else{
      return null;
    }
  }
}
