(function ($) {
    Weipan = function() {
        this.init();
    };
    $.extend(Weipan.prototype, {
        init: function(data) {
            this.queue = new createjs.LoadQueue(true);
            this.$timer = new Array();

            this.$loading = $('.loading');
            this.$loading_p = this.$loading.find('p');

            this.$cover = $('.cover');
            this.$scroll = $('.scroll');

            this.$s1 = $('.section1');
            this.$s1_t1 = this.$s1.find('.scene1-t1');
            this.$s1_t2 = this.$s1.find('.scene1-t2');
            this.$s1_t3 = this.$s1.find('.scene1-t3');
            this.$s1_desc = this.$s1.find('.text-btn');

            this.$s2 = $('.section2');
			this.$s2_t1 = this.$s2.find('.scene2-t1');
            this.$s2_t2 = this.$s2.find('.scene2-t2');
            this.$s2_t3 = this.$s2.find('.scene2-t3');
			this.$s2_t4 = this.$s2.find('.scene2-t4');
            this.$s2_desc = this.$s2.find('.text-btn');
			
            this.$s3 = $('.section3');
			this.$s3_t1 = this.$s3.find('.scene3-t1');
            this.$s3_t2 = this.$s3.find('.scene3-t2');
            this.$s3_t3 = this.$s3.find('.scene3-t3');
            this.$s3_desc = this.$s3.find('.text-btn');

            this.$s4 = $('.section4');
			this.$s4_t1 = this.$s4.find('.scene4-t1');
            this.$s4_t2 = this.$s4.find('.scene4-t2');
            this.$s4_t3 = this.$s4.find('.scene4-t3');
			this.$s4_t4 = this.$s4.find('.scene4-t4');
            this.$s4_desc = this.$s4.find('.text-btn');

            this.$s5 = $('.section5');
			this.$s5_t1 = this.$s5.find('.scene5-t1');
            this.$s5_t2 = this.$s5.find('.scene5-t2');
            this.$s5_t3 = this.$s5.find('.scene5-t3');
            this.$s5_desc = this.$s5.find('.text-btn');

            this.initSection1();
            this.initSection2();
            this.initSection3();
            this.initSection4();
            this.initSection5();

            this.loadImage();
        },

        loadImage: function() {
            var self = this;
            self.queue.on('progress', function() {
                var per = Math.ceil(self.queue.progress * 100);
                self.$loading_p.text(per + '%');
            });
            self.queue.on('complete', function() {
                $.each(PRELOAD_MANIFEST.manifest, function(i, n) {
                    var el = $('.' + n.id);
                    if(el.length > 0) {
                        el.attr('src', n.src);
                    }
                });
                self.start();
            });
            self.queue.loadManifest(PRELOAD_MANIFEST);
        },

        start: function() {
            var self = this;

            $.fn.fullpage({
                verticalCentered: false,
                anchors: ['s1', 's2', 's3', 's4', 's5'],
                //anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                navigation: true,
                afterRender: function() {
                    self.$loading.fadeOut(function() {
                        self.appearSection1();
                    });
                },
                afterLoad: function(link, index) {
                    switch(index) {
                        case 1: self.appearSection1(); break;
                        case 2: self.appearSection2(); break;
                        case 3: self.appearSection3(); break;
                        case 4: self.appearSection4(); break;
                        case 5: self.appearSection5(); break;
                    }
                },
                onLeave: function(index, nextIndex) {
                    self.$scroll.hide();
                    self.clearTimer();
                    setTimeout(function() {
                        switch(index) {
                            case 1: self.resetSection1(); break;
                            case 2: self.resetSection2(); break;
                            case 3: self.resetSection3(); break;
                            case 4: self.resetSection4(); break;
                            case 5: self.resetSection5(); break;
                        }
                    }, 1000);
                }
            });
        },

        clearTimer: function() {
            $.each(this.$timer, function(i, n) {
                clearTimeout(n);
            });
            this.$timer = new Array();
        },


        //---------------------------------section 1----------------------------------//
        initSection1: function() {
            this.$s1_t1.data('pos', { width: '40vw', right: '30vw', height: '15vh', top: '32vh' });
            this.$s1_t2.data('pos', { width: '40vw', right: '30vw', height: '18vh', top: '52vh' });
            this.resetSection1();
        },
        resetSection1: function() {
            this.$cover.hide();
            this.$s1_t1.hide().removeClass('animated duration05 fadeInDown').css(this.$s1_t1.data('pos'));
            this.$s1_t2.hide().removeClass('animated duration05 fadeInUp').css(this.$s1_t2.data('pos'));
            this.$s1_t3.hide().removeClass('animated zoomIn');
            this.$s1_desc.hide().removeClass('animated slideInRight');
        },
        appearSection1: function() {
            var self = this;

            self.$timer.push(setTimeout(function() {
                self.$cover.fadeIn(1200);
            }, 500));
            self.$timer.push(setTimeout(function() {
                self.$s1_t1.show().addClass('animated duration05 fadeInDown');
            }, 1000));
            self.$timer.push(setTimeout(function() {
                self.$s1_t2.show().addClass('animated duration05 fadeInUp');
            }, 1700));
            self.$timer.push(setTimeout(function() {
                self.$cover.fadeOut(1200);
                self.$s1_t1.animate({ width: '21vw', right: '8vw', height: '7vh', top: '7vh' }, 1000);
                self.$s1_t2.animate({ width: '21vw', right: '8vw', height: '9vh', top: '16vh' }, 1000);
            }, 3000));
            self.$timer.push(setTimeout(function() {
                self.$s1_t3.show().addClass('animated zoomIn');
            }, 3700));
            self.$timer.push(setTimeout(function() {
                self.$s1_desc.show().addClass('animated slideInRight');
            }, 4500));
            self.$timer.push(setTimeout(function() {
                self.$scroll.fadeIn();
            }, 5500));
        },

		
    	//---------------------------------section 2----------------------------------//
        initSection2: function() {
            this.$s2_t1.data('pos', { width: '40vw', left: '30vw', height: '10vh', top: '32vh' });
            this.$s2_t2.data('pos', { width: '40vw', left: '30vw', height: '13vh', top: '52vh' });
            this.resetSection2();
        },
        resetSection2: function() {
            this.$cover.hide();
            this.$s2_t1.hide().removeClass('animated duration05 fadeInRight').css(this.$s2_t1.data('pos'));
            this.$s2_t2.hide().removeClass('animated duration05 fadeInLeft').css(this.$s2_t2.data('pos'));
            this.$s2_t3.hide().removeClass('animated rollIn');
            this.$s2_t4.hide().removeClass('animated rollIn');
            this.$s2_desc.hide().removeClass('animated slideInUp');
        },
        appearSection2: function() {
            var self = this;

            self.$timer.push(setTimeout(function() {
                self.$cover.fadeIn(1200);
            }, 500));
            self.$timer.push(setTimeout(function() {
                self.$s2_t1.show().addClass('animated duration05 fadeInRight');
            }, 1000));
            self.$timer.push(setTimeout(function() {
                self.$s2_t2.show().addClass('animated duration05 fadeInLeft');
            }, 1700));
            self.$timer.push(setTimeout(function() {
                self.$cover.fadeOut(1200);
                self.$s2_t1.animate({ width: '31vw', left: '0', height: '7vh', top: '7vh' }, 1000);
                self.$s2_t2.animate({ width: '31vw', left: '0', height: '9vh', top: '16vh' }, 1000);
            }, 3000));
            self.$timer.push(setTimeout(function() {
                self.$s2_t3.show().addClass('animated rollIn');
            }, 3700));
            self.$timer.push(setTimeout(function() {
                self.$s2_t4.show().addClass('animated rollIn');
            }, 4000));
            self.$timer.push(setTimeout(function() {
                self.$s2_desc.show().addClass('animated slideInUp');
            }, 4500));
            self.$timer.push(setTimeout(function() {
                self.$scroll.fadeIn();
            }, 5500));
        },


        //---------------------------------section 3----------------------------------//
        initSection3: function() {
            this.$s3_t1.data('pos', { width: '40vw', right: '30vw', height: '25vh', top: '32vh' });
            this.resetSection3();
        },
        resetSection3: function() {
            this.$cover.hide();
            this.$s3_t1.hide().removeClass('animated duration05 flipInX').css(this.$s3_t1.data('pos'));
            this.$s3_t2.hide().removeClass('animated duration05 lightSpeedIn');
            this.$s3_t3.hide().removeClass('animated duration05 lightSpeedIn');
            this.$s3_desc.hide().removeClass('animated rotateInUpRight');
        },
        appearSection3: function() {
            var self = this;

            self.$timer.push(setTimeout(function() {
                self.$cover.fadeIn(1200);
            }, 500));
            self.$timer.push(setTimeout(function() {
                self.$s3_t1.show().addClass('animated duration05 flipInX');
            }, 1000));
            self.$timer.push(setTimeout(function() {
                self.$cover.fadeOut(1200);
                self.$s3_t1.animate({ width: '31vw', right: '0', height: '19vh', top: '6vh' }, 1000);
            }, 2400));
            self.$timer.push(setTimeout(function() {
                self.$s3_t2.show().addClass('animated duration05 lightSpeedIn');
            }, 3400));			
            self.$timer.push(setTimeout(function() {
                self.$s3_t3.show().addClass('animated duration05 lightSpeedIn');
            }, 3700));
            self.$timer.push(setTimeout(function() {
                self.$s3_desc.show().addClass('animated rotateInUpRight');
            }, 4200));
            self.$timer.push(setTimeout(function() {
                self.$scroll.fadeIn();
            }, 5200));
        },


        //---------------------------------section 4----------------------------------//
        initSection4: function() {
            this.$s4_t1.data('pos', { width: '40vw', left: '30vw', height: '10vh', top: '32vh' });
            this.$s4_t2.data('pos', { width: '40vw', left: '30vw', height: '13vh', top: '52vh' });
            this.resetSection4();
        },
        resetSection4: function() {
            this.$cover.hide();
            this.$s4_t1.hide().removeClass('animated duration05 rotateInDownRight').css(this.$s4_t1.data('pos'));
            this.$s4_t2.hide().removeClass('animated duration05 rotateInUpLeft').css(this.$s4_t2.data('pos'));
            this.$s4_t3.hide().removeClass('animated rollIn');
            this.$s4_t4.hide().removeClass('animated rollIn');
            this.$s4_desc.hide().removeClass('animated slideInLeft');
        },
        appearSection4: function() {
            var self = this;

            self.$timer.push(setTimeout(function() {
                self.$cover.fadeIn(1200);
            }, 500));
            self.$timer.push(setTimeout(function() {
                self.$s4_t1.show().addClass('animated duration05 rotateInDownRight');
            }, 1000));
            self.$timer.push(setTimeout(function() {
                self.$s4_t2.show().addClass('animated duration05 rotateInUpLeft');
            }, 1700));
            self.$timer.push(setTimeout(function() {
                self.$cover.fadeOut(1200);
                self.$s4_t1.animate({ width: '31vw', left: '0', height: '7vh', top: '7vh' }, 1000);
                self.$s4_t2.animate({ width: '31vw', left: '0', height: '9vh', top: '16vh' }, 1000);
            }, 3000));
            self.$timer.push(setTimeout(function() {
                self.$s4_t3.show().addClass('animated rollIn');
            }, 3800));
            self.$timer.push(setTimeout(function() {
                self.$s4_t4.show().addClass('animated rollIn');
            }, 4100));
            self.$timer.push(setTimeout(function() {
                self.$s4_desc.show().addClass('animated slideInLeft');
            }, 4600));
            self.$timer.push(setTimeout(function() {
                self.$scroll.fadeIn();
            }, 5600));
        },


        //---------------------------------section 5----------------------------------//
        initSection5: function() {
            this.resetSection5();
        },
        resetSection5: function() {
            this.$cover.hide();
            this.$s5_t1.hide().removeClass('animated duration05 fadeInDown');
            this.$s5_t2.hide().removeClass('animated duration05 fadeInRight');
            this.$s5_t3.hide().removeClass('animated duration05 bounceIn');
            this.$s5_desc.hide().removeClass('animated slideInUp');
        },
        appearSection5: function() {
            var self = this;

            self.$timer.push(setTimeout(function() {
                self.$s5_t1.show().addClass('animated duration05 fadeInDown');
            }, 600));
            self.$timer.push(setTimeout(function() {
                self.$s5_t2.show().addClass('animated duration05 fadeInRight');
            }, 1200));
            self.$timer.push(setTimeout(function() {
                self.$s5_t3.show().addClass('animated duration05 bounceIn');
            }, 1800));
            self.$timer.push(setTimeout(function() {
                self.$s5_desc.show().addClass('animated slideInUp');
            }, 2400));
        }
    });
})(jQuery);

$(function() {
    $(window).bind('orientationchange', function(e) {
        orient();
    });
    var weipan = new Weipan();
});

function orient() {
    if(window.orientation == 90 || window.orientation == -90) {
        $('.orient').show();
    }
    else{
        $('.orient').hide();
    }
    return false;
}