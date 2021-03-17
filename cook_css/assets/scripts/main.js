

document.addEventListener('DOMContentLoaded', function () {   
    const main = new Message();
});

class Message {
    constructor() {
        this.DOM = {};
        this.DOM.close = document.querySelector('.close');
        this.DOM.alert = document.querySelector('.alert');
        this.DOM.fade = document.querySelector('.fade');
        this.DOM.mobile_button = document.querySelector('.mobile-menu_button');
        this.DOM.menu = document.querySelector('.header__bottom');
        this.DOM.outview = document.querySelector('.outview');
        this.eventType = this._getEventType();
        if (this.DOM.close != null) {
            this._addEvent_close();
        }
        this._addEvent();
        
        
    }

    _getEventType() {
        return  window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.alert.classList.add('fade');
    }

    _inviewAnimation() {
        console.log('ha')
        if(this.DOM.outview.classList.value.includes('outview')) {
            console.log('ya')
            this.DOM.menu.classList.remove('outview');
        }else {
            console.log('yu')
            this.DOM.menu.classList.add('outview');
        }
    }

    _addEvent_close() {
        this.DOM.close.addEventListener('click', this._toggle.bind(this), {once: false});
        window.addEventListener("scroll", this._toggle.bind(this), {once: false});
    }

    _addEvent() {
        this.DOM.mobile_button.addEventListener('click', this._inviewAnimation.bind(this), {once: false});


    }
}



