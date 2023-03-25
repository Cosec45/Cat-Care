import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { CatPageComponent } from './cat-page/cat-page.component'
import { ContactComponent } from './contact/contact.component'
import { ProcessComponent } from './process/process.component'
import { AdoptCatComponent } from './adopt-cat/adopt-cat.component'
import { NoPageFoundComponent } from './no-page-found/no-page-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'CatCare', component: CatPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Adoptcat', component: AdoptCatComponent },
  { path: 'Adoptcat/:id', component: AdoptCatComponent },
  { path: 'Process', component: ProcessComponent },
  { path: 'Process/:id', component: ProcessComponent },

  { path: '**', component: NoPageFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
