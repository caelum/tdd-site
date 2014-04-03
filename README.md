# Quasi

## Getting it to work
  1. [Install node](http://nodejs.org/) (tested with v0.10.26);
  2. Clone quasi project;
  3. Inside project root directory execute: ```npm install```;
  4. To run locally, go to project root directory and execute: ```docpad run```;

## Writing things
  - Any file in ```src/articles``` will be rendered as an article if it has a header like this:

    ```
    ---
    section: foo
    ---
    ```

    This article will be rendered inside a section named foo in the main page.

  - You can add multiple articles to the same section and diff them with a heading property:

    article-1.hmtl:
    ```
    ---
    section: foo
    heading: 1
    ---
    ```

    article-2.html:
    ```
    ---
    section: foo
    heading: 2
    ---
    ```

    Both will be inside the section foo and with a little title (```heading``` value) describing each piece of article.

  - Article content goes after the header:

    ```
    ---
    section: foo
    ---
    Text goes here :)
    ```

  - If you want to use html within your articles, be aware that your file has .html extension.

## Writing an introduction
  - An article will be rendered as the introduction if it has a header like this:

  ```
  ---
  isIntro: true
  ---
  ```

  - If you want to put a title in your introduction:

  ```
  ---
  isIntro: true
  title: lorem
  ---
  ```

  - If you put a ```section``` property, it will be ignored.

## Inserting Participants, authors and etc
  - There is a ```participants.js``` file in ```src/```, there we have a participants array. For each kind/group of participant follow this structure:

    ```
  	{ name: "organizers",
      people: [
        {name: "Fulano da Silva", email: "fulano@quasi.com"},
        {name: "Cicrano do Santos", email: "cicrano@quasi.com"}
      ]
    }
    ```
    Each participant in ```people``` will be rendered in the main page grouped, with the value of property ```name``` of the group as a title.

## Inserting sponsors
  - There is a ```sponsors.js``` file in ```src/```, there we have a sponsors array. For each sponsor follow this structure:

    ````
    { name: "Caelum",
      website: "http://www.caelum.com.br",
      img: "img/caelum_logo.svg",
      description: [
  		  {content: "Curso de Java", url: "http://www.caelum.com.br/cursos/java/"},
  		  {content: "Curso de Android", url: "http://www.caelum.com.br/curso-android/"},
  		  {content: "Curso de JavaScript", url: "http://www.caelum.com.br/curso-javascript-jquery/"}
    },
    ```

  - The ```description``` will be rendered as a list of links underneath the image specified by ```img```.

## Site level information and configuration
  - There is a ```site_config.js``` file, there you can set some site level informations like:

    - ```name``` : The site name. It will appear in browser tabs and as the title in the main page.

    - ```company``` :
      - ```img``` : Url for the company logo. It will appear next to the site title in the main page.
      - ```name``` : The company name. It will appear in browser tabs and as a alt fot the company img.

    - ```participants``` : Path to the participants file, default is ```participants.js```.
    - ```sponsors``` : Path to the sponsors file, default is ```sponsors.js```.

## Deploy on [github-pages](https://pages.github.com/)

- Run locally: ```docpad deploy-ghpages --env static```

- Your can acces it on: http://_yourusername_.github.io/_this-project-name_

- For [custom domain](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) put your ```CNAME``` file in ```src/assets/```