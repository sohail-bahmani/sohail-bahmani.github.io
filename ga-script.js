(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		  ga('create', 'UA-43731016-1', 'gatech.edu');
		  ga('send', 'pageview');

		window.onload = function() {
		 var elements = document.getElementsByClassName('marked');
		for(var i = 0, len = elements.length; i < len; i++) {
	    elements[i].exonclick = elements[i].onclick;
	    		elements[i].onclick = function(){
									if (this.exonclick) {
										this.exonclick();
									}
										if (this.hasAttribute("href")){
											ga('send','event', 'link','click',this.getAttribute("href"));
										} else {
											ga('send','event', 'link','click',this.innerHTML);
										}										    									    								
	    						}
	    }
}