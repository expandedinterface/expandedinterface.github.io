---
title: "Trust"
layout: page
---

_Technology is your friend, your educator, your slave, and your lover. . Moving away from the features of interfaces and towards emotional activity analysing the effects on our emotions these intimate relationships and exchanges have between us and our technologies. The relationship with our computers doesn’t have a framework, there are no social rules or expectations like the one we share with other humans. Lucy Suchman (REFERENCE) Intimacy through computers demonstrates how much we are ready to push boundaries that we wouldn’t with other humans. What are the ethical implications in the trust component of our exchange and can we codify trust mechanisms with interfacing? Animism(? REFERENCE)_

_Lucy Suchman quote → “The point in the end is not to assign agency either to persons or to things but to identify the materialization of subjects, objects, and the relations between them as an effect, more and less durable and contestable, of ongoing sociomaterial practices.”_

-------------------------

<div class="artifacts-list">
  <h1>Artifacts</h1>
  {% assign pages_list = site.artifacts | sort:"url" %}
  {% for node in pages_list %}
  	{%if node.tags contains "trust" %}
    <a class = "artifacts-list-item" href="{{ site.baseurl }}{{ node.url }}">
  	   <h2>{{ node.title }}</h2>
      <p> {{node.subtitle}} </p>
    </a>
    {% endif %}
  {% endfor %}
</div>
