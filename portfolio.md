---
layout: default
title: Portfolio
---

<html>
    <h1> Portfolio </h1>
    <p>While at Pitt, I became really interested in rendering and 3D graphics. The main tool I use for these is <a href="https://blender.org">Blender</a>, a free (and open-source under the GPL license!) 3D editor and renderer. Seriously, go check it out!</p>
    <p>The banners on this site were all made by me. I've also included on this page a few selected renders:</p>

    {% for entry in site.data.portfolio %}
        <hr>
        <div class="portfolio-image"><img src="/assets/portfolio/{{entry.filename}}" alt="{{entry.alt-text}}">
        <p>{{entry.caption}}</p>
        </div>
    {% endfor %}
</html>