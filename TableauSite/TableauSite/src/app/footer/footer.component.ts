import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  emailSubject: string = "Contacting You from Tableau Website";
  myEmailAddress: string = "DunnBC22@gmail.com";
  myPhoneNumber: string = "262-923-0473";

  constructor() {}

  ngOnInit() {}
}
