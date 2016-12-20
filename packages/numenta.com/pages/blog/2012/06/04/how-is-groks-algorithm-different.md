---
author: Subutai Ahmad
brief: There is a well known truism in machine learning, the "No Free Lunch Theorem," which states that no algorithm is inherently better than any other algorithm.
date: 2012/06/04
image: ../images/image.png
org: VP Research
tags: Machine Learning
title: How is Grok's algorithm different?
type: post
---

> **NOTE:** *Numenta has [announced a strategic partnership with Avik
  Partners](/press/2015/08/19/numenta-announces-licensing-of-grok-for-it-to-avik-partners/),
  please read more about the future of
  [Grok for IT Analytics](http://grokstream.com).*

A question we get all the time from machine learning fans is: "How does
Numenta's [Hierarchical Temporal Memory](/machine-intelligence-technology/) (the HTM)
compare to traditional machine learning algorithms?" There are many ways to
answer this question. In this blog entry, I will focus on one specific
difference, perhaps the most fundamental one.

First a bit of background: There is a well known truism in machine learning, the
"No Free Lunch Theorem," which states that no algorithm is inherently better
than any other algorithm. What distinguishes one algorithm from the next are the
inherent assumptions and how well those assumptions fit the problem domain. For
example, if you are predicting data that lies on a straight line, nothing is
going to beat linear fitting. If the data lies on a circle, it's hard to imagine
a worse technique.

By far the most common assumption made in machine learning is the "i.i.d"
assumption. In statistics, i.i.d. stands for
[independently and identically distributed](http://en.wikipedia.org/wiki/Independent_and_identically_distributed_random_variables),
which states that every input record comes from the same probability
distribution and is statistically independent of previous and future records.
This is a very useful assumption - it makes the math easier, leads to
the Central Limit Theorem, allows you to derive accuracy bounds, etc. Just about
every popular technique, such as regression, support vector machines, neural
networks, Bayesian networks, random forests, and decision trees rely on this
assumption.

Unfortunately, when you think about the real world of streaming data, this
assumption is just plain wrong. Your weekly revenue numbers are not i.i.d. Last
week's numbers are a better predictor than the numbers from 13 weeks ago.
Yesterday's weather is correlated with today's. The web log for a customer
navigating an e-commerce website is likely to follow specific sequences. Your
GPS coordinates from 5 minutes ago are an excellent predictor of your current
location. The list is endless. Streaming temporal patterns are the very
antithesis of i.i.d.

The HTM is an inherently temporal learning algorithm, and doesn't care about
i.i.d. It greedily constructs sequences and does not assume independence. If you
saw a particular revenue pattern the last two weeks, it assumes you are more
likely to see it this week. If you haven't seen a pattern for several years, it
will likely forget it. Also, HTM assumes that the underlying distribution can
change. This is what makes it online or adaptive. If your revenue jumps because
you just added an important customer, it will adapt. It inherently assumes your
data stream contains sequences and is constantly changing. We didn't invent
this - the core ideas are inherent in the neocortex of the brain and lend
themselves well to streaming data analytics.

HTM is not the only technique to break the i.i.d. assumption. Other algorithms,
such as Hidden Markov Models and many time series algorithms, also relax that
assumption. So, how is HTM different from HMMs? Good question. I guess we'll
just have to tackle that in another blog entry...stay tuned!
