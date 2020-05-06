
         document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);
        });

        // Or with jQuery

        $(document).ready(function(){
            $('.carousel').carousel({
                duration: 50,
                shift: 60
            });

            $('.next').click(function(){
                $('.carousel').carousel('next');
            });
            
            $('.prev').click(function(){
                $('.carousel').carousel('prev');
            });

        });