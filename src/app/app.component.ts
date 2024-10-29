import { Component   } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule,HttpClientModule,
  ]
})
export class AppComponent {
  title = 'messages';

  constructor(private router:Router){
    this.router.navigateByUrl("")
  }
}
