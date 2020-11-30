import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  email: string;
  tokendata: any;
  url: string | ArrayBuffer;
  selectedFile: ImageSnippet;

  constructor(public router: Router, private route: ActivatedRoute, public authService: AuthenticationService) { }
  username = this.router.url;

  ngOnInit(){
    this.tokenization();
  }

  async tokenization()
  {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.tokendata = decodedToken.data;
    console.log(this.tokendata);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        this.selectedFile = new ImageSnippet(event.target.result, file);
      });
      reader.readAsDataURL(file);
    }
  }

  // Function to Update Profile Image
  updateImage() {
    console.log('Save Image', this.selectedFile);
    console.log(this.tokendata._id);
    this.authService.updateUser(this.tokendata._id, this.selectedFile.file).subscribe((res) => {
      console.log('Subscribed data: ', res);
    });

  }
}
