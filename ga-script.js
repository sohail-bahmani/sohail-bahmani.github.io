<!--(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		  ga('create', 'UA-43731016-1', 'github.io');
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
}-->

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-C2N17QEGVE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C2N17QEGVE');
</script>

head
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NBJNM3C');</script>
<!-- End Google Tag Manager -->

body
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NBJNM3C"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
