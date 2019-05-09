<div class="jumbotron">
  <header class="text-center">
    <h1 style="font-weight: 300;">{{ .Get "titre" }}</h1>
    <p class="lead">{{ .Get "texte" | markdownify }}</p>
  </header>
</div>
