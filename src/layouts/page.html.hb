<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<meta name="og:title" content="{{site.title}}">
	<meta name="og:site_name" content="{{site.title}} | {{site.publisher.name}}">
	<meta name="og:description" content="{{site.description}}">
	<meta name="og:url" content="{{site.url}}">
	<meta name="og:type" content="article">
	<meta name="article:publisher" content="{{site.publisher.facebook_page}}">
	<!-- TODO authors and time metadata & microdata -->
	{{{getMetas}}}
	<title>{{site.title}} | {{site.publisher.name}}</title>
	{{{getStylesAndAdd "http://fonts.googleapis.com/css?family=Oxygen:400,300,700" "style.css"}}}
</head>
<body>
	{{{content}}}
</body>
</html>
