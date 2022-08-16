import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Crear variable snecesarias 
  user:string;
  password: string;

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  //metodo para ingresar a home

  login () {
    if (this.user == 'admin' && this.password == 'admin'){
      this.router.navigate(['/home']);
    }else{
      this.presentToast();
    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos!',
      duration: 3000
    });
    toast.present();
  }

}
