---
author: Jeff Hawkins
brief: Today we hear so much about "big data" and the database tools you can use to sort through large amounts of data. However at Numenta we see a different future.
date: 2012/05/23
image: ../images/image.png
org: Founder
title: Streams and Lakes
tags: Machine Learning, Data, Neuroscience
type: post
---

Two weeks ago I attended a workshop at U.C. Berkeley titled, "From Data to
Knowledge: Machine-Learning with Real-time and Streaming Applications." This
was a remarkable workshop, not just because of who presented or its location,
but simply because it was a workshop on streaming analytics.  Today we hear so
much about "big data" and the database tools you can use to sort through large
amounts of data.  However at Numenta we see a different future.  The future we
see is one with billions of data sources streaming data.  Every building,
server, machine, and windmill will be equipped with multiple sensors. Data from
these sensors will flow directly to predictive models, which will make
predictions and detect anomalies.  Through these models we will take immediate
action.  This future is about billions of data streams flowing to hundreds of
millions of predictive models, not petabytes of data sitting in hard drives to
be looked at later, hence Streams and Lakes.

This isn't an either or situation.  There is plenty of opportunity mining big
data repositories, but we believe the growth will occur mostly in the
proliferation of data sources and the ability to act on data as soon as it is
created.  For example, imagine a building adjusting its energy consumption
minute-by-minute based on predictions of price and demand several hours in the
future.  If the price of electricity is predicted to go up later in the day, the
building lowers its temperature now and so it can turn off the cooling later,
saving money.  Today we may do this for a campus or building, tomorrow your
refrigerator will do the same.

Predictive models for streaming data are fundamentally different than models
used on stored data.

In my talk at the Berkeley workshop, titled "Modeling Data Streams Using Sparse
Distributed Representations," I focused on two essential and unique attributes
of streaming models.  First, they must be "online."  This means that the models
have to learn with each new record.  Online models automatically adjust, record
by record, as the patterns in the data change.  Second, streaming models also
must be "variable order" temporal models.  To make good predictions, a model
might need to take into account what happened two steps ago, four steps ago, or
ten steps ago.  Patterns over time, like a melody, are usually more important
than what is happening now.

At the heart of our product Grok is a novel learning algorithm that is
inherently online and variable order.  This isn't surprising because it models a
slice of the neocortex, which is also online and variable order.  Although much
of the detail in how these algorithms work is explained in the
[white paper](/papers-videos-and-more/) on our website, my
25-minute talk at Berkeley covered the essentials, yet is simpler and easier to
understand.  The workshop organizers recorded my talk and
[posted it online,](http://www.youtube.com/watch?v=nfUT3UbYhjM) but the audio is
separate from the visuals.  We decided to re-record it as a
[screencast.](http://youtu.be/iNMbsvK8Q8Y)

By the way, I believe the algorithms we use in Grok are key components of
machine intelligence.  I will be talking about that during my keynote speech on
June 11 at the International Symposium on Computer Architecture. More on that in
a later blog post.
