import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardComponent, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons'; 4

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbButtonModule,
    NbEvaIconsModule,
    NbLayoutModule
  ]
})

export class AppModule { }
