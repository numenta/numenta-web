---
author: Jared Casner
brief: Like most engineering managers, I like to know when someone is manually touching one of our servers. That’s especially true for production systems, but also
date: 2014/04/22
image: ../images/image.png
org: Director, Product Development
tags: science, anomaly, detection, grok, aws
title: Caught Red Handed
type: post
---

> **NOTE:** *Numenta has
  [announced a strategic partnership with Avik Partners](/press/2015/08/19/numenta-announces-licensing-of-grok-for-it-to-avik-partners/),
  please read more about the future of
  [Grok for IT Analytics](http://grokstream.com).*

Like most engineering managers, I like to know when someone is manually touching
one of our servers.  That’s especially true for production systems, but also
applies to QA servers.  So, imagine my chagrin when Grok caught me red handed,
not just once, but twice this week!

![Grok Screenshot](../images/1.png "Grok Screenshot")

![Grok Screenshot](../images/2.png "Grok Screenshot")

This first example was when I upgraded one of our QA servers to Grok 1.3
(shameless plug – it’s [available now](http://grokstream.com)!)
In this example, you can see a very slight increase in the number of bytes
received by the server, which was flagged very quickly.  At the same time, the
CPU utilization starts to drop slightly, which Grok marked as yellow. Notice
that Grok picked up the update on 2 metrics at the same time, both right as the
process starts, before the metrics get into ranges that could be identified as
abnormal by most statistical techniques!  Having a leading indicator – even by a
few minutes – that things are starting to behave atypically is a huge advantage!

Luckily for us, this was a totally innocuous change.  And, investigation was
even easier because when I got the alert about the anomaly, I was still in the
middle of the update.

The second example from this week was when I decided doing some recovery testing
would be a good idea.  I manually stopped all of the services on the QA server
and watched the CPU load drop rapidly again.  This time, Grok picked up the
change very rapidly.  But, notice that the new pattern also stabilizes very
quickly at ~20% CPU load, with the Grok anomaly score dropping back into the
green quickly.  Grok then flags an anomaly around 12 hours later when I turned
the services back on and the CPU jumped back up to the ~85% mark.  Now, if
you’re like me, you’ll have noticed a 3rd anomaly in the chart on the left,
right around 10PM.  I drilled into that one and noticed that, sure enough, the
pattern is just slightly different at 10PM than it is at 9PM.  It’s a visibly
subtle difference, but important nonetheless.

![Grok Screenshot](../images/3.png "Grok Screenshot")

![Grok Screenshot](../images/4.png "Grok Screenshot")

Stay tuned for our next “Anomaly of the Week”!
