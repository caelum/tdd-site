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
			<div class="text">{{{content}}}</div>
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
		<h2 class="title section-title">Sobre o Autor</h2>

		<p class="participants-text">Mauricio Aniche é mestre em Ciência da Computação pela Universidade de São Paulo, onde pesquisou sobre os reais efeitos da prática de TDD no design de classes. Atualmente é aluno de doutorado pelo mesmo instituto. Mauricio opta por ter um pé no mundo da indústria e outro no mundo da academia. Já palestrou em diversos eventos da indústria como QCON, Agile Brazil, .NET Architects, e já publicou em conferências acadêmicas nacionais e internacionais como TDD2010 (Paris), Agile 2011 (EUA), WBMA 2011 (Brasil). O mestrado fez mal a ele, já que ele deixou de acreditar em post de blogs e twitters de aficcionados pelas metodologias ágeis.É também autor do livro “TDD: Teste e Design no Mundo Real”, o livro brasileiro mais popular sobre o assunto.</p>


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
