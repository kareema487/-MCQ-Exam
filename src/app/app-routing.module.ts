import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './Modul/view/component/home/home.component';
import { AboutComponent } from './Modul/view/component/about/about.component';
import { ContactComponent } from './Modul/view/component/contact/contact.component';
import { LoginComponent } from './Modul/auth/Component/login/login.component';
import { RegisterComponent } from './Modul/auth/Component/register/register.component';
import { NotfoundComponent } from './Modul/view/component/notfound/notfound.component';
import { InstructionsComponent } from './Modul/exam/Component/instructions/instructions.component';
import { QuestionComponent } from './Modul/exam/Component/question/question.component';
import { SummaryComponent } from './Modul/exam/Component/summary/summary.component';
import { TopicComponent } from './Modul/view/component/topic/topic.component';
import { AuthguardService } from './service/authguard.service';
import { ForgetPasswordComponent } from './Modul/auth/Component/forget-password/forget-password.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent,resolve:[AuthguardService]},
  {path:'about', component:AboutComponent},
  // {path:'topics/:id', component:InstructionsComponent},
  {path:'contact', component:ContactComponent,
    canDeactivate:[(component:ContactComponent)=>component.canExit()]
  },

  {path:'login', component:LoginComponent, canDeactivate: [(component: LoginComponent) => component.canExit()]},
  {path:'register', component:RegisterComponent,canDeactivate:[(component:RegisterComponent)=>component.canExit()]},
  {path:'forget-password',component:ForgetPasswordComponent},
  // {path:'topics',canActivateChild:[AuthguardService],children:[
    {path:'topics',canActivateChild:[AuthguardService],children:[
    {path:'', component:TopicComponent},
    {path:':id',component:InstructionsComponent},
    {path:':id/question', component:QuestionComponent,
  canDeactivate:[(component:QuestionComponent)=>component.flag]
  },
    {path:':id/question/summary/:summaryId', component:SummaryComponent},
  ]},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
