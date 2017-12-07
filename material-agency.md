---
title: "Material Agency"
layout: page
---

_Material Agency is a misnomer in a sense, as we take Lucy Suchman’s stance that the ultimate point is “not to assign agency either to persons or to things but to identify the materialization of subjects, objects, and the relations between them as an effect, more and less durable and contestable, of ongoing sociomaterial practices.” However, for the lack of a better metaphor to re-orient ideas about the centrality of human agency we have chosen to continue to play with the term._

_To return to Lucy Suchman’s idea of the “sociomaterial”, this introduction of social process allows for an expanded conception of materiality, recognizing for example that the virtual has its own materiality. The term Material points to the situatedness of reality: mineral, biological, liveness, embodiment, entanglement, the terms will continue to be expanded and contested. As Richard Grusin states in The Nonhuman Turn, “(to paraphrase Latour) that ‘we have never been human’ but that the human has always coevolved, coexisted, or collaborated with the nonhuman—and that the human is characterized precisely by this indistinction from the nonhuman."_ 


-------------------------
<div class="artifacts-list">
  <h1>Artifacts</h1>
  {% assign pages_list = site.artifacts | sort:"url" %}
  {% for node in pages_list %}
  	{%if node.tags contains "material-agency" %}
    <a class = "artifacts-list-item" href="{{ site.baseurl }}{{ node.url }}">
  	   <h2>{{ node.title }}</h2>
      <p> {{node.subtitle}} </p>
    </a>
    {% endif %}
  {% endfor %}
</div>
