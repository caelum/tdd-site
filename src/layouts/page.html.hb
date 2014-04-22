<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<meta property="og:title" content="{{site.title}}">
	<meta property="og:site_name" content="{{site.title}} | {{site.publisher.property}}">
	<meta property="og:description" content="{{site.description}}">
	<meta property="og:url" content="{{site.url}}">
	<meta property="og:type" content="article">
	<meta property="article:publisher" content="{{site.publisher.facebook_page}}">
	<!-- TODO authors and time metadata & microdata -->
	{{{getMetas}}}
	<title>{{site.title}} | {{site.publisher.name}}</title>
	{{{getStylesAndAdd "http://fonts.googleapis.com/css?family=Oxygen:400,300,700" "style.css"}}}
</head>
<body>
	{{{content}}}
	
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-270161-23', 'caelum.com.br');
	  ga('send', 'pageview');

	</script>
	
</body>
</html>
