import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Declare the title variable with a value
    title: string = 'Avengers';    
   // Boolean variable to indicate some status                      
    iss=true;
    // Path variable to store the selected image URL

    path='';

    // Array of image URLs to store multiple image paths

    pathArray=['https://th.bing.com/th/id/OIP.cOV3YShazjLg-R0K2qzZjAHaNK?w=1125&h=2000&rs=1&pid=ImgDetMain','https://i.pinimg.com/736x/03/63/cb/0363cb8b86fae29e01f6c49af060c411.jpg','https://wallpapers.com/images/hd/thor-pictures-19vj5w60l1w34gcm.jpg','https://i.pinimg.com/736x/e8/d5/b3/e8d5b3ddd59d25f41d0651fea6b6a537.jpg','https://i.pinimg.com/736x/03/63/cb/0363cb8b86fae29e01f6c49af060c411.jpg'];
    // Function to set the path variable to the image URL based on the index 
    showImage(n:number){
      this.path=this.pathArray[n-1];
     }
    //   Declare a username variable with a value of 'Assemble'
     userName: string = 'Assemble';
   }