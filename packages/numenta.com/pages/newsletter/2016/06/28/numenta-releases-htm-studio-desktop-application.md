---
author: Christy Maver
brief: Since I arrived at Numenta 9 months ago, one of the most common requests I’ve heard is that people want an easy way to experiment with HTM without having to dive deep into our code and algorithms
date: 2016/06/28
image: ../images/htm-studio.png
org: Director of Marketing
tags: numenta releases htm studio desktop application anomaly detection htm school nupic
title: Numenta Releases HTM Studio Desktop Application
type: post
---

### Numenta Newsletter &mdash; June 28, 2016

Since I arrived at Numenta 9 months ago, one of the most common requests I’ve
heard is that people want an easy way to experiment with [HTM][1] without having
to dive deep into our code and algorithms. Well, I’m happy to share that this
week we addressed that request when we announced the [release of HTM Studio][2],
a desktop tool that allows you to test whether HTM finds interesting anomalies
in your own numeric, time-series data.

The ability to detect anomalies as soon as possible in streaming data has value
across a wide variety of applications – from health monitoring to preventative
maintenance to geospatial tracking and more. Yet early detection is easier said
than done, and traditional methods like thresholds often miss the subtle
anomalies common within streaming data. Because HTM learns continuously and
without supervision, it finds these types of anomalies very well.

[HTM Studio][3] provides a way for anyone, even non-technical people, to
experiment with HTM for anomaly detection on their own data, without having to
upload anything to the cloud. After downloading HTM Studio, you can import a
local csv file, and with a few clicks, HTM analyzes your data and displays any
anomalies it finds.  For those who don’t have streaming data sets, HTM Studio
comes with pre-loaded sample data.

We hope that this release encourages broad experimentation with our technology.
Try it on your home automation data to uncover anomalies in your usage patterns,
or your sleep data to find abnormalities in your sleep-wake cycles, or your
company’s sensors to see where unusual activity is occurring in the office. All
you need is a csv file with one Date/Time column, one header row and at least
400 rows of numeric data listed in chronological order.  For more on how to
ensure your data is in the right format for HTM Studio, watch this
[short tutorial video][4].  HTM Studio provides an easy way to do a proof of
concept before fully implementing or deploying HTM. It also removes the
technical hurdle and steep learning curve that typically accompanies HTM
experimentation.

As a company with a scientific mission to understand how the brain learns, it’s
been hard for us to make this technology accessible, which is why we are so
proud of this release. If you’d like to try it, you can download the Windows or
Mac version, view our tutorials and give us feedback at
[http://numenta.com/htm-studio/](/htm-studio/). Feel free to write us about
interesting anomalies that you find – we hope to share guest blog posts of the
best ones.

While many of you are likely planning summer trips, Numenta will be traveling
the globe this summer as well.  Our Research Engineer, [Yuwei Cui][5], just
returned from speaking at two academic conferences in Greece ([Dendrite][6] and
[Areadne][7]), and will be in Vancouver, BC next month to speak at the
[IEEE World Congress on Computational Intelligence][8]. [Subutai Ahmad][9], VP
of Research, is headed to speak at the [Playfair AI Summit][10] in London, before
returning to speak in San Francisco at the [Data Science Summit][11].  We’ll be
exhibiting at Data Science Summit as well, so if you’re planning to attend, be
sure to stop by our table for a demo of HTM Studio.

For those of you who follow our open source project, you may have seen that we
migrated our HTM mailing lists to the [HTM Forum][12].  With its clean,
intuitive design, this new forum provides a better platform for fostering
discussions as the community continues to grow. It categorizes content and
allows you to choose which topics to follow. Moderated by our open source flag
bearer, [Matt Taylor][13], HTM Forum is open to anyone, so I encourage you to
read the posts and join the conversation at https://discourse.numenta.org/.

In other news, our partners have some exciting updates to share. [Grok][14] has
made several product improvements over the past few months. Grok now supports
workflow automation, features improvements to the anomaly dashboard and includes
many new design enhancements.  As Grok continues to grow, the company is looking
to expand as well.  If you know anyone who would make a great community manager
or full stack developer, particularly in the Southern California area, contact
[tarun@grokstream.com][15].  

Cortical.io was recently named an IDC Innovator for the
[2016 Machine-Learning based Text Analytics market][16]. Much like Numenta,
Cortical.io has been traveling the globe and will be speaking at several
upcoming [events][17], including the [AI O’Reilly Conference][18] in New York
September 26-27.

Lastly, we are in the final countdown of our Numenta Anomaly Benchmark (NAB)
competition. This [short video][19] explains how easy it is to win up to $5,000.

[1]: /machine-intelligence-technology/
[2]: http://www.businesswire.com/news/home/20160627005453/en/Numenta-Releases-HTM-Studio
[3]: /htm-studio/
[4]: http://youtu.be/f80ewxLvgks
[5]: mailto:ycui@numenta.com
[6]: /events/2016/06/18/dendritic-anatomy-molecules-and-function-heraklion-crete/
[7]: /events/2016/06/22/areadne-2016-research-in-encoding-and-decoding-of-neural-ensembles/
[8]: /events/2016/07/26/ieee-wcci-2016/
[9]: mailto:sahmad@numenta.com
[10]: /events/2016/07/01/the-playfair-ai-summit-2016/
[11]: /events/2016/07/13/data-science-summit/
[12]: https://discourse.numenta.org/
[13]: mailto:matt@numenta.org
[14]: http://www.grokstream.com/
[15]: mailto:tarun@grokstream.com
[16]: http://www.cortical.io/news.html#lead_1
[17]: http://www.cortical.io/company/events/
[18]: http://conferences.oreilly.com/artificial-intelligence/ai-deep-learning-bots-ny/public/content/about
[19]: https://youtu.be/Wdr_s9Bdi3I
