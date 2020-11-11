import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-names',
  templateUrl: './user-names.component.html',
  styleUrls: ['./user-names.component.css']
})
export class UserNamesComponent implements OnInit {
  ngOnInit(): void {
  }

  // tslint:disable-next-line: comment-format
  //Arreglo de usuarios que están registrados
  users: string[] = ['David Infante', 'Sonia Arroyo', 'Brayan Rivera'];

  // tslint:disable-next-line: comment-format
  //Booleano que permite mostrar la Alerta en el HTML
  alert = false;
  //Mensaje que mostrará la alerta
  alertMsg: string;

  confirm = false;



  /**Función que nos permite eliminar un usuario, recorriendo el arreglo mediante un for y comparando el nombre que se desea eliminar con los ya registrados mediante la función splice */
  deleteUser(nameUser){
    for (let i = 0; i < this.users.length; i++){
      if (nameUser == this.users[i]){
        //Indica en que posición y cúantos elementos serán eliminados
        this.users.splice(i, 1);
      }
    }
    this.confirm = false;
  }


  /** Función que activa la alerta en el HTML y manda el nombre del usuario a mostrar*/
  seeUser(userName){
    this.alert = true;
    this.alertMsg = userName;
  }


  /** Función que nos ayuda a agregar un nuevo usuario desde el form en HTML utilizando la herramienta push
   * para insertarlo al final del arreglo */
  addUser(newUser){
    if(newUser.value != ''){
      this.users.push(newUser.value);
    }

    //Limpia el input al crear un nuevo usuario
    newUser.value = '';
    //Mantiene el cursor en el input para agregar código
    newUser.focus();
  }

  //Cierra las alertas
  dismiss(){
    this.alert = false;
  }

  //muestra las alertas para la eliminación del usuario
  show(nameUser){
    this.alertMsg = nameUser;
    this.confirm = true;
  }

  //Función para cancelar y disminuir la alerta generada
  cancel(){
    this.confirm = false;
  }

}
