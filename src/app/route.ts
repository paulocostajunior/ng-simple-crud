import { Routes } from "@angular/router";
import { TripListComponent } from "./trip/trip-list.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: '/trip-list', pathMatch: 'full' },
    { path: 'trip-list', component: TripListComponent },
]