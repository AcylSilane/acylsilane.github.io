// Credit for this code goes to Michael Cowan, from the CANELa Research Group at the University of Pittsburgh
var main = {
    init : function() {

        // Get the list of covers
        var imgs = document.getElementsByClassName('JournalCover');

        // Get the list of spans
        var spans = document.getElementsByClassName("close");

        for (var i = 0; i < imgs.length; i++) {
            (function(i){ imgs[i].onclick = function() {
                if ($(window).width() > 762) {
                    var li = this.parentElement.parentElement;
                    li.getElementsByClassName('modal')[0].style.display = 'block';
                    li.getElementsByClassName('modal-content')[0].src = this.src;
                }
            }})(i)

            imgs[i].parentElement.parentElement.style.paddingTop = '1px';
            imgs[i].parentElement.parentElement.style.paddingBottom = '1px';
    
            // When the user clicks on <span> (x), close the modal
            (function(i){ spans[i].onclick = function() { 
                this.parentElement.style.display = 'none';
            }})(i)
        }

        // Esc key closes open modal
        document.addEventListener('keyup', function (event) {

            var key = event.key || event.keyCode;

            if (key === 'Escape' || key === 'Esc' || key === 27) {
                for (var j = 0; j < spans.length; j++) {
                    spans[j].parentElement.style.display = 'none';
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', main.init);