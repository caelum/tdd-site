---
layout: page
referencesOthers: true
---

{{#each article_collections}}
	<h2>{{@key}}</h2>
	{{#each this}}
  	<h3>{{this.title}}</h3>
  	<p>{{this.content}}</p>
	{{/each}}
{{/each}}