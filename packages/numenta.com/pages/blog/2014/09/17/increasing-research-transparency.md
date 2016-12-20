---
author: Subutai Ahmad
brief: I am pleased to tell you about a change we recently made to our research process. We have made our day to day experimental code public. We've already released our commercial HTM algorithm code to the
date: 2014/09/17
image: ../images/image.png
org: VP Research
tags: increasing research transparency numenta nupic machine intelligence
title: Increasing Research Transparency
type: post
---

I am pleased to tell you about a change we recently made to our research
process. We have made our day to day experimental code public.

As you may know, we already released our commercial HTM algorithm code to the
NuPIC open source community in the form of the
[NuPIC project](http://numenta.org). We use that exact codebase in our product
Grok. The [NuPIC open source community](http://numenta.org/community.html) and
Numenta actively work together to continually maintain and improve this code
base.

Within Numenta we continue to evolve and expand HTM theory. Our goal is to
create a complete cortical theory and codebase, including such topics as
sensorimotor integration, attention, hierarchy, and others. Our research ideas
are constantly in flux as we tweak and experiment. To support the research we
have, up until today, maintained a separate internal codebase that sits on top
of NuPIC.

Interest in HTM has grown tremendously and we get many questions about our
research. Over the last few months we have openly discussed fundamental ideas
around sensorimotor inference, temporal pooling, hierarchy, etc. on the
[HTM Theory Forum](https://discourse.numenta.org/c/htm-theory).
Numerous people in the NuPIC community have been actively engaged in deep
theoretical discussions.

Given this interest we wondered whether it would be possible to be more open
about our work. What if we released our day-to-day research code to a public
repository? There are potential downsides. Research code can be very rough -
would people get confused? Would they become discouraged or even skeptical about
the theory if what they see is not yet working? We might get many questions
about it - would that slow us down? On the other hand, exposing our work-in-
progress would give members of the community visibility as to our priorities,
help them understand more deeply the theory, and create an opportunity to
solicit their ideas and improvements.

We floated the idea and discussed the tradeoffs with the NuPIC developer
community. The feedback we received gave us the confidence to proceed. I’m
happy to share that we just created an experimental public
[nupic.research](https://github.com/numenta/nupic.research) repository on
GitHub. This directory is small right now, but active. The code includes our
current prototypes and experiments around sensorimotor inference.

I do want to emphasize one point; this is not code we push only after things are
working well. This is code as we are working on it. We make regular pull
requests and check-ins. We use GitHub to track our day to day tasks, and it
contains our internal conversations about the code. It provides an almost real
time view into the research being performed at Numenta.

This change is an experiment in conducting research in the open. We don’t know
how it will turn out. If this idea works out well, over time the repository will
grow to contain just about all our research code. If not, well, we’ll just stop
doing it. It’s all in the spirit of research!

P.S. There is some fine print. This code is all temporary and experimental. We
can’t make any guarantees about it. Currently we are not accepting pull
requests, though this might change down the road. However you are free to copy
and use it under the terms of the AGPL license<sup>*</sup>. Please see the
README file on GitHub for more fine print and details.

<sup>\*</sup>*This content has been updated to reflect our
[new AGPL license](http://numenta.org/blog/2015/08/17/licensing-update.html).*
