---
author: Jeff Hawkins
brief: I’ve written a paper that explains how we have applied the science of the CLA to the technology of anomaly detection.  It illustrates how a simple-to-use product
date: 2014/03/20
image: ../images/image.png
org: Founder
tags: science, anomaly, detection, grok
title: The Science of Anomaly Detection
type: post
---

I just finished writing a new [whitepaper]. It is about the science of
detecting anomalies.

As followers of Numenta know, we have worked for many years to understand how
the neocortex works.  As I described in *On Intelligence*, the brain is a
prediction machine, one that builds models from streaming data and constantly
makes predictions.  A large part of our research has been to understand exactly
how the neocortex learns and makes predictions. The Cortical Learning Algorithm
(CLA), included in our NuPIC open source project, was a major advance in that
direction.

We also feel it is imperative to find valuable applications for brain-based
technology today.  So for the past two years we built a prediction engine based
on the CLA and started the process of investigating commercial applications.
Although we found applications for prediction in many industries, and the CLA
worked well in those applications, there were substantial barriers to being able
to act on predictions within existing business processes.  Further, we learned
that there was equal or greater interest in anomaly detection, the “flip side”
of prediction.

With this knowledge we looked at the state-of-the-art in anomaly detection
technology.  We also interviewed many people who use anomaly detection products
in their daily routines.  We quickly learned two things.  One is that simple-to-
use products, ones that don’t require machine learning experts, didn’t perform
well.  Every person we talked to told us about getting too many false positives
and/or too many false negatives.  The second thing we learned is that existing
tools are designed to be used in data centers, but they caused frustration when
people were away from the data center or away from the office.  A surprising
number of people we interviewed told us that they turned off alerts altogether.

We realized that by using the CLA and applying our understanding of
neuroscience, we could take a fresh approach, and create a substantially better
anomaly detection engine.  We also felt we could reinvent how anomalous events
are reported and explored, by creating a new type of mobile interface.  Our
product, Grok, is the result.  Grok advances the state-of-the-art in anomaly
detection technology and it replaces SMS’s, and email alerts with a fun and
powerful mobile application.  In just a few seconds on your mobile phone you can
see which of your applications and servers are acting unusually and if they need
further attention.

I’ve written a paper that explains how we have applied the science of the CLA to
the technology of anomaly detection.  It illustrates how a simple-to-use product
can detect anomalies with subtlety and sophistication by using cortical models.
I hope you’ll read it and see why I’m so excited.  In my view, this is one of
the first products based on neocortical principles, a system that learns
patterns from its temporal data stream, makes predictions, and identifies
anomalies.  Just what your brain does every moment of every day.

[whitepaper]: /assets/pdf/whitepapers/Numenta%20White%20Paper%20-%20Science%20of%20Anomaly%20Detection.pdf
