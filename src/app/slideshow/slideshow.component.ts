import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['code.jpg', 'robot.jpg', 'target.jpg'];
  headlines = ['Bring engineereing to the next Level', 'Born to Code', 'Let the Robots move'];
  currentImage = 0;
  showImage = true ;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++ ;
      this.currentImage = this.currentImage % this.images.length ;
      this.showImage = false ;

      setTimeout(() => {
        this.showImage = true ;
      }, 10);

    }, 8000);
  }
}
