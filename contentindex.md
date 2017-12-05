---
layout: page
title: Index
published: true
---

This will be our list of content page. We can maybe do the more categorized table thing here? But also just have links to all the separate pieces in the menu? It never hurts to have more than one way to navigate a site.

<form id="site_search">
<div>Search:</div>
<input id="search" type="text"/>
</form>


<div id="results"></div>
<ul id="search_results"></ul>
<script src="{{site.baseurl}}/assets/js/elasticlunr.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="{{site.baseurl}}/assets/js/search.js"></script>

<div class="toc">
  <h2>Texts</h2>
  <ul class="texts">
  {% for item in site.texts %}
  
    <li class="text-title">
      <a href="{{ site.baseurl }}{{ item.url }}">
        {{ item.title }}
      </a>
    </li>
  {% endfor %}
  </ul>
</div>