import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from './json-form/json-form.component';
import { JsonFormComponent } from './json-form/json-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public formData: JsonFormData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('./assets/my-form.json')
      .subscribe((formData: any) => {
        this.formData=formData;
      });
}
}