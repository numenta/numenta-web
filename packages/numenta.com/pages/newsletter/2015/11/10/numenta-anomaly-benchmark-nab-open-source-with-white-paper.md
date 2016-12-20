---
author: Donna Dubinsky
brief: As I wrote you last month, we have been working hard on creating NAB, the Numenta Anomaly Benchmark, to test the HTM learning algorithms and enable comparison with other algorithms. Now, it’s here!
date: 2015/11/10
image: ../../../../images/numenta.png
org: CEO
tags: numenta anomaly benchmark nab released open source streaming data
title: Numenta Anomaly Benchmark (NAB) is Released, Open Source with White Paper
type: post
---

### Numenta Newsletter November 2015

#### Numenta Anomaly Benchmark (NAB) is Released, Open Source with White Paper

To Numenta newsletter subscribers: As I wrote you last month, we have been
working hard on creating NAB, the Numenta Anomaly Benchmark, to test the HTM
learning algorithms and enable comparison with other algorithms. Now, it’s here!

We have found the need to create a benchmark for many reasons, including:

* We sought a benchmark that incorporated time series data, i.e. that gives
  “credit” if you find an anomaly earlier rather than later.

* We wanted a benchmark that incorporated learning … if something about the
  situation changes, and there is a “new normal”, does the algorithm keep
  finding anomalies (false positives), or does it automatically adjust?

* We wanted real-world data files that have labeled anomalies …. did a machine
  fail?  Was it taken off line?  Knowing “ground truth” is important to evaluate
  whether an algorithm correctly identifies an anomaly.

* We wanted an open dataset and code… in order for a benchmark to be accepted by
  the community, it must be accessible to everyone.

* We saw the need for a new way of scoring.  Scoring can be tricky because you
  need to think through questions such as:  if you see the anomaly TOO far in
  advance, perhaps it is not related, and you didn’t really spot it …. how far
  in advance would that be?

We are now pleased to announce that the [Numenta Anomaly Benchmark (NAB) is released](http://www.businesswire.com/news/home/20151110006297/en/Numenta-Anomaly-Benchmark-Evaluates-Anomaly-Detection-Techniques).
You can read the technical paper [here](http://arxiv.org/abs/1510.03336).
The paper describes our data files, our scoring mechanism, and the test results
of HTM algorithms along with other, publicly available anomaly detection
algorithms.  And, if you want to have a look at the code yourself, it is all in
open source.  You can [see it here](https://github.com/numenta/NAB).

For those readers less interested in technical details, we have created a more
business focused paper, which you can
[download here](/assets/pdf/numenta-anomaly-benchmark/NAB-Business-Paper.pdf).

Our hope is that we can build a community around NAB.  We’d like to collect
additional labeled data files that can be used for future versions.  We expect
that others will test their algorithms using our data files and scoring, and
compare and publish the results.  Since it is open source, companies can test
their internal algorithms without sharing the results as well, although we hope
that they will.   We have received positive feedback from the research community
so far, and we are confident that NAB will grow over time into a very useful
tool.

As a reminder, we will be presenting NAB at two conferences
([MLconf SF](http://mlconf.com/events/san-francisco-ca/) on November 13 in San
Francisco, and the
[IEEE Conference on Machine Learning and Applications](http://www.icmla-conference.org/icmla15/)
on December 9-11 in Miami), so if you are in the vicinity, we hope you will be
able to attend.

I’m happy to share a couple updates from our strategic partners:
[Avik Partners](http://www.grokstream.com/) and
[Cortical.io](http://www.cortical.io/). Avik Partners has had a successful beta
for Grok for IT and they’re getting ready to launch Grok 2.0.  Cortical.io
recently announced its latest venture capital round of $1.8M and the opening of
its San Francisco office.  We’re excited to see their progress in next
generation natural language processing.

Lastly, for any of you that are in the Bay Area, we’d love to see you at our HTM
Challenge event this weekend.  If you can’t attend in person, you can still help
choose the winner.  Public voting for the 12 applications is now open.  Read
this blog post to learn more and cast your vote:

http://numenta.org/blog/2015/11/09/vote-for-the-best-htm-challenge-submissions.html
