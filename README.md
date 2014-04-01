# Quasi

## Getting it to work
  1. Install node (tested with v0.10.26);
  2. Clone quasi;
  3. Iside project root directory execute: npm install;
  4. To run locally, execute this on project root directory: docpad run;

## Writing things
  - Any file in src/articles will be rendered as an article if it has a header like this:  
  
    ```
    ---  
    section: foo  
    ---  
    ```  

    This article will be rendered inside a section foo in the main page.

  - You can add multiple articles to the same section and diff them with a heading property:
    
    Article 1:  
    ```
    ---
    section: foo
    heading: 1
    ---
    ```  
    
    Article 2:
    ```
    ---
    section: foo
    heading: 2
    ---
    ```
    
    The heading will appear in the main page as a little title describing each piece of article.

  - Article content goes after the header:  
  
    ```
    ---
    section: foo
    ---
    Text goes here :)
    ```
  
  - If you want to use html within your articles, be aware that your file has .html extension.

## Inserting Participants, authors and etc
  - There is a ```participants.js``` file, there we have a participants array. For each kind/group of participant follow this structure:  
  
    ```
  	{ name: "organizers",
      people: [  
        {name: "Fulano da Silva", email: "fulano@quasi.com"},
        {name: "Cicrano do Santos", email: "cicrano@quasi.com"}  
      ]  
    }  
    ```  
    Each participant in ```people``` will be rendered in the main page grouped, with the value of property ```name``` as a title.

## Inserting sponsors
  - There is a ```sponsors.js``` file, there we have a sponsors array. For each kind of participant follow this structure: 
  
    ````
    { name: "Caelum",
      website: "http://www.caelum.com.br",
      img: "img/caelum_logo.svg",
      description: [
  		  {content: "Curso de Java", url: "http://www.caelum.com.br/cursos/java/"},
  		  {content: "Curso de Android", url: "http://www.caelum.com.br/curso-android/"},
  		  {content: "Curso de JavaScript", url: "http://www.caelum.com.br/curso-javascript-jquery/"},
  		  {content: "Curso de .NET", url: "http://www.caelum.com.br/cursos/dotnet/"},
  		  {content: "Curso de Agile", url: "http://www.caelum.com.br/cursos/agile/"},
  		  {content: "Curso de HTML e CSS", url: "http://www.caelum.com.br/curso-html-css-javascript/"}
      ]
    },
    ```

  - The ```description``` will be rendered as a list of links underneath the image specified by ```img```.
