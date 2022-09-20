import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/user';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 // @ViewChild('loginModal') public loginModal:ModalDirective ;

  public username: string = '';
  public password: string = '';
  public currentUrl:string ='/home'

  users: User[] = [];
  loading: boolean = false;
  errorMessage: any;



  constructor(private loginService: LoginService,
    private fb: FormBuilder,private activatedRoute: ActivatedRoute,private router:Router) { }

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });


  public loggedIn: boolean=false;

  ngOnInit(): void {

    //this.loggedIn = Boolean(localStorage.getItem("loggedIn"));
    this.currentUrl = this.router.url;
    //console.log(this.router.url);

  }


  public getUser() {
    const username = this.loginForm.value['username'];
    const password = this.loginForm.value['password'];

    this.loading = true;
    this.errorMessage = "";
    this.loginService.getUser(this.username, this.password)
      .subscribe(
        (response) => {                           //next() callback
          console.log(response[0].username + "" + response[0].password);
          if(response[0].username == username && response[0].password==password)
          {
           
            localStorage.setItem("loggedIn", "true");
            this.router.navigate(['admin']);


          }else{
            localStorage.setItem("loggedIn", "false");

            alert("Your credentials are not correct. You should check your credentials!");
          }


          // //this.users = response[0];
          // for(let user in response){
          //   console.log(user);
          //   console.log(password);
          // }

        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed
          this.loading = false;
        })
  }
  loggedOut(){
    localStorage.setItem("loggedIn", "false");
    this.router.navigate(['home']);

  }
  // ngOnInit(): void {
  //   this.user = this.loginService.getUser().subscribe((response:any) => {});
  //   console.log(this.user);
  //   this.login();

  // // this.loginService(username, password) {
  // //   this.loginService.sendLogin(username, password)
  // // }

  // }

  // login() {
  //   console.log(this.user);
  //   // console.log(event.target.value);
  //   // console.log(event.value);
  // }
}
