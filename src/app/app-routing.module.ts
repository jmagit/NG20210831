import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosListComponent, ContactosViewComponent, ContactosEditComponent, ContactosAddComponent } from './contactos';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent, PageNotFuondComponent } from './main';
import { AuthGuard } from './security';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'inicio', component: HomeComponent },
  {path: 'demos', component: DemosComponent, data: { pageTitle: 'Demos'} },
  {path: 'chisme/de/hacer/numeros', component: CalculadoraComponent, data: { pageTitle: 'Calculadora'} },
  {path: 'contactos', component: ContactosListComponent },
  {path: 'contactos/add', component: ContactosAddComponent, canActivate: [AuthGuard] },
  {path: 'contactos/:id/edit', component: ContactosEditComponent },
  {path: 'contactos/:id', component: ContactosViewComponent },
  {path: 'contactos/:id/:kk', component: ContactosViewComponent },
  {path: 'blog', canActivate: [AuthGuard], children: [
    {path: '', component: BlogComponent },
    {path: 'add', component: BlogComponent },
    {path: ':id/edit', component: BlogComponent },
    {path: ':id', component: BlogComponent },
    {path: ':id/:kk', component: BlogComponent },
  ]},
  {path: 'antonie/hasted', redirectTo: '/contactos/27'},
  {path: 'config', loadChildren: () => import('./config').then(mod => mod.ConfigModule)},
  {path: '404.html', component: PageNotFuondComponent },
  {path: '**', component: PageNotFuondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
