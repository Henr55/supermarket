import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  slideIndex:number=1;
  ngOnInit() {
    this.showSlides(this.slideIndex)
  }


plusSlides(n:number) {
  this.showSlides(this.slideIndex += n);
}
currentSlide(n:number) {
  this.showSlides(this.slideIndex = n);
}

showSlides(n:number) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides)
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("block");
      slides[i].classList.add("none");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].classList.add("block");
  dots[this.slideIndex-1].className += " active";
}

}
