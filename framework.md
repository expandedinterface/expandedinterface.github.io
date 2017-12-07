---
title: "Framework"
layout: page
---

_If reality is socially constructed, then interfaces must follow the same rules and limitations of our personal and social understanding of reality. As we are limited by the construct in our comprehension of the possibilities of interface creation and use, we turn to speculative methods as spaces to re-frame, re-imagine and poke at sociocultural presumptions and biased expectations of what it means to interface._

_Speculative/science fiction has repeatedly proven that introducing imaginary artifacts can spur reality to catch up and materialise them. Through reflection on the place and role of fiction as expressions of alternative interface modes, we explore aspects of the interface as socio-cultural premises that can be seen as pure constructs, and substitute them with imagined artifacts that modify and subvert the liminal/interstitial space of the interface._



-------------------------


<div class="artifacts-list">
  <h1>Artifacts</h1>
  {% assign pages_list = site.artifacts | sort:"url" %}
  {% for node in pages_list %}
  	{%if node.tags contains "framework" %}
    <a class = "artifacts-list-item" href="{{ site.baseurl }}{{ node.url }}">
  	   <h2>{{ node.title }}</h2>
      <p> {{node.subtitle}} </p>
    </a>
    {% endif %}
  {% endfor %}
</div>
