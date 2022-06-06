import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';

//declare all routes below
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'result',component:ResultComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
