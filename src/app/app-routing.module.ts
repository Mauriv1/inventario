import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {path:'', pathMatch:'full', redirectTo:'add'},
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent },
  {path:'edit/:id_product', component:EditComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
