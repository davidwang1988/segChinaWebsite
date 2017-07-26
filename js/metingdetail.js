/**
 * Created by dwang on 2017/6/26.
 */
window.onload = function(){
        var spans = document.getElementById("pro-nav").getElementsByTagName("span");
        var divs = [document.getElementById("pro-det-1"),document.getElementById("pro-det-2"),document.getElementById("pro-det-3"),document.getElementById("pro-det-4"),document.getElementById("pro-det-5")];

        for(var i=0; i<spans.length; i++){
            spans[i].index = i;
            spans[i].onclick = function(){
                for(var j=0; j<spans.length; j++){
                    spans[j].className = "";
                    divs[j].style.display = "none";
                }
                this.className = "pro-nav-bg";
                divs[this.index].style.display = "block";
            }
        }
    }


