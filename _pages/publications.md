---
title: "Publications"
layout: single
header:
    overlay_image: assets/images/PubsBanner.jpg
    overlay_filter: 0.0
    caption: "Art © 2020 James Dean"
---

<link rel="stylesheet" href="/css/publications.css" />
{% assign thisyear = "now" | date: "%Y" %}
{% assign lastyear = "now" | date: "%Y" | int | minus: 1 %}

<ol id="pubs" class="pubs" reversed>
    {% assign year = "" %}
    {% for paper in site.data.publications %}
    {% if paper.Year != year %}
        {% assign year = paper.Year %}
        <div id="{{ year }}"></div>
        {% if year != thisyear %}
            <br />
            <br />
        {% endif %}
        <h1>{{ year }}</h1>
        <hr />
    {% endif %}
    <li>
        {% if paper.Cover %}
            <div class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" />
            </div>
        {% endif %}
        <p>
            {% if paper.Cover %}
                <img class="JournalCover" src="{{ paper.Cover }}" />
            {% endif %}
            {% for a in paper.Author %}
            {% if forloop.index == paper.Author.size %}
            {{ a }},
            {% else %}
            {{ a }};
            {% endif %}
            {% endfor %}
            {{ paper.Title }}.
            <i>{{ paper.Journal }} </i>
            <b>{{ paper.Year }}, </b>
            {% if paper.Pages != "" %}
                <i>{{ paper.Volume }}</i>{% if paper.Issue != "" %}({{ paper.Issue }}){% endif %},
                {{ paper.Pages }}.
            {% else %}
                DOI: {{ paper.DOI }}.
            {% endif %}
            <br />
            {% if paper.URL and paper.URL != "" %}
            <a href="{{ paper.URL }}">Link</a>
            {% endif %}
        </p>
    </li>
    {% endfor %}
</ol>

<!--<script type="text/javascript" src="/js/journal-cover.js"></script>-->