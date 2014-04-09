---
layout: page
referencesOthers: true
---
<header class="container">
	<a class="main-logo" href="{{site.company.website}}">
		<img style="width: 21.2vh" src="{{site.company.img}}" alt="{{site.company.name}}">
	</a>
	<h1 class="title main-title" style="margin-top: -.2em; margin-left: -.05em;">
		{{site.title}}
	</h1>
</header>

<main>
	{{#with intro}}
		<section class="container intro">
			<h2 class="title">{{title}}</h2>
			<article class="text">{{content}}</article>
		</section>
	{{/with}}

	{{#each sections}}
		<section class="container articles-section">
			<h2 class="title section-title">{{name}}</h2>
			<div class="section-content">
				{{{content}}}
			</div>
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
						<img class="participant-img" src="{{img}}" width="80px" height="80px">
				{{/each}}
			</ul>
		{{/each}}
	</section>
	<ul class="container sponsors">
		{{#each sponsors}}
			<li class="sponsor-box sponsor-{{@index}}">
				<a href="{{website}}" class="sponsor-logo">
					<img alt="{{name}}" src="{{img}}" class="sponsor-logo" height="53px">
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