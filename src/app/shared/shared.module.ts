import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { AppRoutingModule } from  '../app-routing.module';


@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldComponent,
    NavigationMenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ButtonComponent,
    InputFieldComponent,
    NavigationMenuComponent
  ]
})
export class SharedModule { }
