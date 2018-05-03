import { Routes } from "@angular/router";
import { PhoneListComponent } from "./phone-list/phone-list.component";
import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";

export const routes: Routes = [
  { path: '', component: PhoneListComponent },
  { path: 'phone/:id', component: PhoneDetailComponent },
  { path: '**', redirectTo: '' }
];
