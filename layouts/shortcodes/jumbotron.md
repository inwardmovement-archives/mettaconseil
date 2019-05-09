<div class="jumbotron">
  <header class="text-center">
    <h1 style="font-weight: 300;">{{ .Get "titre" }}</h1>
    <p class="lead">{{ .Inner | markdownify }}</p>
  </header>
</div>
