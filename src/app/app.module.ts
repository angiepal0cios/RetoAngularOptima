import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditosHipotecariosComponent } from './creditos-hipotecarios/creditos-hipotecarios.component';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { DetallePagosComponent } from './creditos-hipotecarios/detalle-pagos/detalle-pagos.component';


@NgModule({
  declarations: [
    AppComponent,
    CreditosHipotecariosComponent,
    DetallePagosComponent
  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    TableModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
