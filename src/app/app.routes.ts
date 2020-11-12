import {Route, RouterModule} from '@angular/router';

import { UserNamesComponent } from './user-names/user-names.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Route[] = [
    {path: '', component: HomeComponent},
    {path: 'userList', component: UserListComponent},
    {path: 'userName', component: UserNamesComponent}
  ];

  export const Routes = RouterModule.forRoot(routes);