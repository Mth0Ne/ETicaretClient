import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class UiModule { }
