---
layout: page
referencesOthers: true
---
<header class="container">
	<a class="main-logo" href="http://caelum.com.br">
		<img style="width: 170px" src="{{site.company.img}}" alt="{{site.company.name}}">
	</a>
	<h1 class="title main-title" style="margin-top: -.2em; margin-left: -.05em;">
		{{site.title}}
	</h1>
</header>

<main class="container">
	{{#with intro}}
		<h2 class="title section-title">{{title}}</h2>
		<article class="text intro">
			{{content}}
		</article>
	{{/with}}

	{{#each sections}}
		<section class="section">
			<h2 class="title section-title">{{name}}</h2>
			<div class="section-content"
			{{{content}}}
		</section>
	{{/each}}
</main>
<footer>
	<section class='container participants'>
		<h2 class="title section-title">participantes</h2>
		<p class="participants-text">Agradecemos a todos os colaboradores que de alguma forma participaram da criação.</p>
		{{#each participants}}
			<h3 class='title label'>{{name}}</h3>
			<ul class="participants-list">
				{{#each people}}
					<li class="participant">
						<span class="participant-name">{{name}}</span>
						<img class="participant-img" src="{{img}}">
				{{/each}}
			</ul>
		{{/each}}
	</section>
	<ul class="container sponsors">
		{{#each sponsors}}
			<li class="sponsor-box sponsor-{{@index}}">
				<a href="{{website}}" class="sponsor-logo">
					<img src="" alt="{{name}}" src="{{img}}" class="sponsor-logo">
				</a>
				<ul class="sponsor-call">
					{{#each description}}
						<li class="call-item">
							<a href="{{url}}">{{content}}</a>
						</li>
					{{else}}
						{{#with ../this}}
						<li class="call-item">
							<a href="{{website}}">{{../description}}</a>
						</li>
						{{/with}}
					{{/each}}
				</ul>
			</li>
		{{/each}}
	</ul>
</footer>