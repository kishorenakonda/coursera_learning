import { Component, OnInit, ViewChild } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  private photographyImages: Array<any> = [];
  photographyModel: boolean = false;
  showCaption: boolean = false;
  constructor(private _lightbox: Lightbox) {

  }

  ngOnInit() {
    // this.photographyImages = [
    //   "./assets/2.jpg",
    //   "./assets/3.jpg",
    //   "./assets/photography/ravikumaran/4.jpg",
    //   "./assets/photography/ravikumaran/5.jpg",
    //   "./assets/photography/ravikumaran/6.jpg"
    // ]
    for (let i = 4; i <= 6; i++) {
      const src = './assets/photography/ravikumaran/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const album = {
        src: src,
        caption: caption,
      };

      this.photographyImages.push(album);
    }
  }

  showPhotoModel() {
    console.log("inside show photo model");
    this.photographyModel = !this.photographyModel;
  }

  @ViewChild('videoPlayer') videoplayer: any;

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.photographyImages, index);
    this.showCaption = !this.showCaption
  }
}
