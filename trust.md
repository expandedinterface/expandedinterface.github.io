---
title: "Trust"
layout: page
---

_Technology is your friend, your educator, your slave, and your lover. Moving away from the features of interfaces, and towards emotional activity, the role trust plays in affecting these intimate relationships becomes apparent. Lucy Suchman in “Figuring the Human in AI and Robotics” establishes that “machines must in some sense be granted agency to be brought into relationship with us.” When we analyse this relationship, it is apparent that it often isn’t a healthy one. There is no framework, nor any social rules or expectations like the ones we share with other humans. Intimacy through computers demonstrates how much we are ready to push boundaries that we wouldn’t with other humans. What are the ethical implications in the trust component of our exchange and can we codify trust mechanisms with interfacing?_

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
