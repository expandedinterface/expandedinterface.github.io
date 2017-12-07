---
title: "Transparency"
layout: page
---

_Inke Arns in “Transparent World: Minoritarian tactics in the age of transparency” talks of the “software-assisted disappearance of the world". She describes "transparent interfaces” as “one(s) that the user can neither detect nor notice.” Ease of use as an objective in design and engineering can be linked to Heidegger’s philosophies around tool use, namely aiming to make tools or interfaces that are “ready-to-hand." Creating tools that feel like second nature to use is by no means something that should be entirely abandoned. However, as ubiquitous computing becomes more prevalent--its embedded nature perhaps magnifying this already strong drive--we ask, do we really want to forget that we are using an interface? Can we, as Arns posits, restore “to the IT-based notion of transparency the original meaning of clearness and controllability through visibility?”_

-------------------------

<div class="artifacts-list">
  <h1>Artifacts</h1>
  {% assign pages_list = site.artifacts | sort:"url" %}
  {% for node in pages_list %}
  	{%if node.tags contains "transparency" %}
    <a class = "artifacts-list-item" href="{{ site.baseurl }}{{ node.url }}">
  	   <h2>{{ node.title }}</h2>
      <p> {{node.subtitle}} </p>
    </a>
    {% endif %}
  {% endfor %}
</div>
