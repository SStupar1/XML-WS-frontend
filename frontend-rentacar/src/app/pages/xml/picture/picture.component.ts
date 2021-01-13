import { Component, OnInit } from '@angular/core';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  
  constructor(private pService: PictureService) { }

  ngOnInit(): void {
  }

  //Choose file
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //createAd
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.pService.uploadImage(uploadImageData).subscribe(response => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }, error => {
      alert("Error");
    })
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //233-327 pixela velicina
    //Make a call to Sprinf Boot to get the Image Bytes.
      this.pService.getImage(this.imageName).subscribe(response => {
          this.retrieveResonse = response;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }, error => {
        alert("Error");
      })
    }

}
