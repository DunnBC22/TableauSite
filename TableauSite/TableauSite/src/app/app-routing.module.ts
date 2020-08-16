import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { DelaysAndCancellationsComponent } from "./delays-and-cancellations/delays-and-cancellations.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "about-me", component: AboutMeComponent },
  {
    path: "delays-and-cancellations",
    component: DelaysAndCancellationsComponent
  },
  { path: "", redirectTo: "about-me", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
