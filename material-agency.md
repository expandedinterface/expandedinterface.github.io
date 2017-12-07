---
title: "Material Agency"
layout: page
---

_“Immersed in her work, the CAD interface becomes for the engineer a simulacrum of the site, not in the sense of a substitute for it but rather of a place in which to work with its own specific materialities, constraints, and possibilities.” (Lucy Suchman)_

_"The nonhuman turn, on the other hand, insists (to paraphrase Latour) that “we have never been human” but that the human has always coevolved, coexisted, or collaborated with the nonhuman—and that the human is characterized precisely by this indistinction from the nonhuman."_

-------------------------
<div class="toc">
  <h2>Artifacts</h2>
  <ul class="texts">
  {% assign pages_list = site.artifacts | sort:"url" %}
  {% for node in pages_list %}
  	{%if node.tags contains "material-agency" %}
   <li >
	<a class="{% if page.url == node.url %} active{% endif %}" href="{{ site.baseurl }}{{ node.url }}">{{ node.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
