import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  selectedImage: any = null;

  images = [
    {
      src: '../../../assets/gal1.webp',
      title: 'Annual Function',
      desc: 'Students performing at the annual cultural event.'
    },
    {
      src: '../../../assets/gal2.webp',
      title: 'Sports Day',
      desc: 'Exciting races and team activities.'
    },
    {
      src: '../../../assets/gal3.webp',
      title: 'Smart Classes',
      desc: 'Interactive digital learning in smart classrooms.'
    },
    {
      src: '../../../assets/gal4.webp',
      title: 'Science Lab',
      desc: 'Hands-on experiments by students.'
    },
    {
      src: '../../../assets/gal5.webp',
      title: 'Library Time',
      desc: 'Peaceful and resourceful reading area.'
    },
    {
      src: '../../../assets/gal6.webp',
      title: 'Library Time',
      desc: 'Peaceful and resourceful reading area.'
    },
    {
      src: '../../../assets/gal7.webp',
      title: 'Library Time',
      desc: 'Peaceful and resourceful reading area.'
    },
  ];

  openImage(img: any) {
    this.selectedImage = img;
  }
}
