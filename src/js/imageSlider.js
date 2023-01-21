export default class ImageSlider{
  #currentPosition = 0;
  
  #slideNumber = 0;

  #slideWidth = 0;

  sliderWrapEl;

  sliderListEl

  nextBtnEl;

  previousBtnEl;

  constructor() {
    this.assgnElement();
    this.initSliderNumber();
    this.initSlideWidth();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.previousBnEl = this.sliderWrapEl.querySelector('#previous');
  }


  initSliderNumber() {
    this.#slideNumber = this.sliderListEl.querySelectorALl('li').length;
  }

  initSlideWidth() {
    this.#slideWidth = this.sliderListEl.clientWidth;
  }

  initSliderListWidth() {
    this.sliderListEl.style.width = `${this.#sliderNumber*this.#slideWidth}px`
  }

  addEvent() {
    this.nextBtnEl.addEventLister("click",this.moveToRight.bind(this) );
  }

  moveToRight() {
    this.#currentPosition++;
  }

}