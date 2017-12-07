---
title: "Ritual"
layout: page
---

_What is the role of routine and behavior modification in commonly used interface systems? Other ritual forms can be an alternative option to how we might interface, simultaneously bringing consciousness to ways of being we slip and slide into. Jaron Lanier (REFERENCE) has suggested we move towards non-behaviour modifying systems pointing out the difference between a magician and a charlatan as that a magician isn’t trying to trick you. She/he may even tell you the trick, unlike a charlatan. Knowing how it works actually makes it more interesting and engaging. This is not a trick, it is purposeful suspension of disbelief. Interface as a means to help us be as we are rather than forcing us to become complicit and entranced._


-------------------------

<div class="toc">
  <h2>Artifacts</h2>
  <ul class="texts">
  {% assign pages_list = site.artifacts | sort:"url" %}
  {% for node in pages_list %}
  	{%if node.tags contains "ritual" %}
   <li >
	<a class="{% if page.url == node.url %} active{% endif %}" href="{{ site.baseurl }}{{ node.url }}">{{ node.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>

