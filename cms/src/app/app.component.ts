import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';



@Component({
  selector: 'router-outlet',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Make the component standalone
  imports: [HeaderComponent, ContactsComponent] 
})
export class AppComponent {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
}
