import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CriarContaComponent } from './component/criar-conta/criar-conta.component';
import { RecuperarSenhaComponent } from './component/recuperar-senha/recuperar-senha.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AnunciosComponent } from './component/anuncios/anuncios.component';
import { AnuncioComponent } from './component/anuncio/anuncio.component';
import { AreaProdutorComponent } from './component/area-produtor/area-produtor.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CriarContaComponent,
    RecuperarSenhaComponent,
    HomeComponent,
    AnunciosComponent,
    AnuncioComponent,
    AreaProdutorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonToggleModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
