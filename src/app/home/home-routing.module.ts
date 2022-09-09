import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { NgxMaskModule } from 'ngx-mask'


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),NgxMaskModule.forChild(),],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
