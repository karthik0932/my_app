import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AdminComponent } from './admin/admin.component';


//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'fridge',component:RefrigeratorComponent},
  {path:'washingmach',component:WashingmachineComponent},
  {path:'micro',component:MicroovenComponent},
  {path:'deals',component:AmazondealsComponent},
  {path:'Contact',component:ContactComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
