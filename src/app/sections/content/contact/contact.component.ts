import {Component, OnInit} from '@angular/core';
import {first} from "rxjs/operators";
import {TranslateService} from "@ngx-translate/core";
import {CONTACT_SECTION} from "./constants/contact.constants";
import IContact from "./domain/contact.interface";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private contact: IContact;

  constructor(
    private readonly _translate: TranslateService
  ) {
  }

  public ngOnInit(): void {
    this._translate
      .get(CONTACT_SECTION)
      .pipe(
        first()
      ).subscribe((data: IContact) => {
      this.contact = data;
    });
  }


  public gotoTwitter() {
    window.location.href = this.contact.twitter;
  }

  public sendMail() {

  }

  public gotoLinkedin() {
    window.location.href = this.contact.linkedin;

  }

  public gotoGithub() {
    window.location.href = this.contact.github;

  }
}
