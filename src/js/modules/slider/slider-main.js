import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor (container, btns, prevmodele, nextmodule) {
        super(container, btns, prevmodele, nextmodule);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        } 

        if ( n < 1) {
           this.slideIndex = this.slides.length;
        }
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

		try {
			this.hanson.style.opacity = '0';

			if (n === 3) {
				this.hanson.classList.add('animated');
				setTimeout(() => {
					this.hanson.style.opacity = '1';
					this.hanson.classList.add('slideInUp');
				}, 3000);
			} else {
				this.hanson.classList.remove('slideInUp');
			}
		} catch(e){}

        this.slides[this.slideIndex - 1].style.display = 'block';
        // if (n === 3) {
        //     let divHanson = this.slides[2].querySelector('.hanson');
        //     divHanson.style.display = 'none'; // прячем
        //     setTimeout(() => {
        //       divHanson.style.display = 'block';
        //     }, 3000);
        //   }
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n)
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });
    
        item.parentNode.previousElementSibling.addEventListener('click', (e) => {
            e.preventDefault();
            this.slideIndex = 1;
            this.showSlides(this.slideIndex);
            });
         });

        this.prevmodule.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1)
            });
         });


       this.nextmodule.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });

    }

        render() {
            if (this.container) {       
                try  {
                this.hanson = document.querySelector('.hanson');
            }   catch(e) {}
        
            this.showSlides(this.slideIndex);
            this.bindTriggers();


            } 
        }
}