import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  result: any[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/api/heroes').subscribe(
      data => this.result = data.json(),
      err => console.log(err)
    );
  }
}
