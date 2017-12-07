---
title: "Framework"
layout: page
---

_Speculative methods as spaces to re-frame, re-imagine and poke at sociocultural presumptions and biased expectations on larger scale forces within culture and societies that affect our thoughts, feelings and behaviors implicitly or explicitly guided through interface creation and use. Reflecting on the continuing place and role of sci-fi as an option and expression of alternative modes of interacting with technology._


-------------------------
<div class="toc">
  <h2>Artifacts</h2>
  <ul class="texts">
  {% assign pages_list = site.artifacts | sort:"url" %}
  {% for node in pages_list %}
  	{%if node.tags contains "framework" %}
   <li >
	<a class="{% if page.url == node.url %} active{% endif %}" href="{{ site.baseurl }}{{ node.url }}">{{ node.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
