import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent} from "./home/home.component"
import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./login/login.component";
import { TeacherRegisterComponent} from "./teacher-register/teacher-register.component"
import { StudentRegisterComponent} from "./student-register/student-register.component"

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "teacherRegister",
    component: TeacherRegisterComponent,
  },
  {
    path: "studentRegister",
    component: StudentRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
