import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //arreglo con la información sobre los usuarios
  posts = [];
  //booleano para mostrar el formulario de edicion
  edit = false;
  //id del usuario a editar
  idEdit: number;
  //booleano que permite mostrar la alerta de confirmación sobre la eliminación
  confirm = false;
  //id del usuario que se va a eliminar
  idDelete: number;
  //booleano que oculta la alerta sobre los requerimentos
  error = false;

  //El arreglo posts almacena la información del servicio
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

  //función para eliminar usuarios
  deleteUser(id){
    for (let i = 0; i < this.posts.length; i++){
      if (id == this.posts[i].id){
        this.posts.splice(i, 1);
      }
    }
    this.confirm = false;
  }

  //función para mostrar el formulario de edicion
  editUser(id){
    this.edit = true;
    this.idEdit = id;
  }

  //funcion para editar usuarios, si los datos están vacíos se muestra la alerta para dar a conocer que son requeridos
  userSuccess(newUserName, newUserEmail, newUserAddress, newUserPhone){
    if(newUserName.value != '' && newUserEmail.value != '' && newUserAddress.value != '' && newUserPhone.value != ''){
      for (let i = 0; i < this.posts.length; i++){
        if (this.idEdit == this.posts[i].id){
          this.posts[i].name = newUserName.value;
          this.posts[i].email = newUserEmail.value;
          this.posts[i].address.city = newUserAddress.value;
          this.posts[i].phone = newUserPhone.value;
          this.edit = false;
        }
      }
    }
    else{
      this.error = true;
      this.edit = false;
    }
  }

  //función que cierra la alerta sobre los requerimientos
  dismiss(){
    this.error = false;
  }

  //función que muestra la alerta para confirmar la eliminación del usuario
  show(id){
    this.confirm = true;
    this.idDelete = id;
  }

  //función que cierra la alerta sobre la eliminación del usuario
  cancel(){
    this.confirm = false;
  }
}
