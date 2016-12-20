---
author: "Matthew Taylor"
brief: "Jeff Hawkins and Numenta VP of Engineering Subutai Ahmad will be at this event to go through the CLA Quiz, a serious of challenging questions about how NuPIC algorithms work"
date: 2013/11/11
hideImage: false
image: ../images/image.png
org: "Open Source Manager"
tags: htm cla quiz office hour numenta hierarchical temporal memory machine intelligence ai
title: "CLA Quiz Office Hour"
type: post
---

Tomorrow at 4PM Pacific, we're holding an Office Hour for anyone interested to
join in and talk about
[Hierarchical Temporal Memory](http://numenta.com/papers-videos-and-more/resources/hierarchical-temporal-memory-white-paper/),
as implemented by Numenta within [NuPIC](/). Jeff Hawkins and Numenta VP of
Engineering Subutai Ahmad will be at this event to go through the _CLA Quiz_, a
serious of challenging questions about how NuPIC algorithms work. These
questions were originally created for new employees and interns to research in
order to better understand the CLA. Tomorrow, we're going to be asking you!

If you're interested in taking part, or just joining in to listen, please use
your Google account and request an RSVP to our Office Hour. We'll be happy to
invite you. If you can't make it, the video will be
[posted on YouTube](http://www.youtube.com/watch?v=rSpYyUN4iP0).


### The CLA Quiz

1. Is an untrained CLA spatial pooler just a “random hash” (random mapping from
  input to output vector)?  Why or why not? What happens to the output of the
  spatial pooler if you randomly change one bit in the input.
1. Can you do spatial pooling with small numbers?  For example, is it reasonable
  to have an SP with 20 columns? If not, why are large numbers important in
  SDR's?
    * What's the difference between picking "5 columns out of 50" vs
      "50 out of 500"?  Both have 10% sparsity.
    * What's the difference between picking "50 out of 100" vs
      "50 out of 1000"? Both will output 50 1's.
1. Suppose the input vector (input to the SP) is 10,000 bits long, with 5%
  sparsity. What is the right value of `coincInputPoolPct`? How do you figure
  this out?
1. How does the SDR representation of input A in isolation, and input B in
  isolation, compare with the SDR representation of input A overlapped with B?
  Alternatively, how does the representation of a horizontal line and the
  representation of a vertical line compare with the representation of a cross?
1. Suppose we have an input vector that is 10,000 bits long.  Suppose the
  spatial pooler has 500 columns, of which 50 are active at any time.
    * Can we distinguish many patterns, or a small number? Which patterns
      are likely to be confused?
    * What happens to the SDR representation if we add noise to the
      patterns?
    * What happens if we add occlusions?
1. What are disadvantages of SDR's?
1. How does online learning happen in the SP?


#### Whoa! That's Deep

These questions a bit over your head? Looking for a primer on these technologies
before you attend? Here are some resources:

* [HTM White Paper](http://numenta.com/papers-videos-and-more/resources/hierarchical-temporal-memory-white-paper/)
* [Tutorial: CLA Basics](http://www.youtube.com/watch?v=z6r3ekreRzY)
* [CLA Deep Dive](http://www.youtube.com/watch?v=QBs-2_wl_JM)

[Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/1qdu8i/cla_quiz_office_hour/)
