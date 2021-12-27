---
layout: default
title: Publications
---

<h1> Publications </h1>
<ol reversed>
{%- for entry in site.data.publications reversed -%}
    <li class="publication-entry">
    {%- for author in entry.authors -%}
        {%- if author == "Dean, J." -%}
            <u>{{author}}</u>
        {%- else -%}
            {{author}}
        {%- endif -%}
        {%- if forloop.last == false -%}
            ;
        {% endif %}
    {%- endfor -%}
    {{" "}}{{ entry.title }}.
    <i>{{ entry.journalLong}}</i>
    <b>{{ entry.year }}</b>
    {%- if entry.volume %}
        <i>{{ entry.volume }}
        {% if entry.issue %}
            ({{ entry.issue }})
        {%- endif %}</i>
    {% endif %}
    {% if entry.pages -%}
    {{ entry.pages }}
    {%- endif -%}.
    {% if entry.DOI %}
    DOI: <a href="https://doi.org/{{entry.DOI}}">doi.org/{{entry.DOI}}</a>
    {% else if entry.URL %}
    URL: <a href="{{entry.URL}}">{{entry.URL}}</a>
    {% endif %}
    </li>
{%- endfor -%}
</ol>

<h1>Conference Presentations</h1>
<ol reversed>
    {% for entry in site.data.conferences reversed %}
    <li class="conference-entry">
    {{entry.title}},
    <i>{{entry.conference}}</i>
    <b>{{entry.year}}</b>
    ({{entry.type | capitalize}} Presentation).
    </li>
    {% endfor %}
</ol>