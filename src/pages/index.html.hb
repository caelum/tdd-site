---
layout: page
referencesOthers: true
---

<main class="container">
	<section id="intro">
		{{intro}}
	</section>
	{{#each sections}}
		<section class="section">
			<h2 class="title section-title">{{name}}</h2>
			<div class="section-content"
			{{{content}}}
		</section>
	{{/each}}
</main>
<footer class="container">
	<section class='participants-container'>
		<h2 class="title section-title">participantes</h2>
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
</footer>