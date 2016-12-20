---
author: "James Mnatzaganian"
brief: "Those of you subscribing to the nupic-theory mailing list are aware that a new research paper describing a mathematical model for the spatial pooler (SP) has emerged. Many of us have asked “What is the math behind the SP?”"
date: 2016/02/19
hideImage: false
image: ../images/image.png
org: "Community Contributor"
tags: mathematical math formalization htm spatial pooler hierarchical temporal memory
title: "A Mathematical Formalization of HTM’s Spatial Pooler"
type: post
---

Those of you subscribing to the
[nupic-theory](http://lists.numenta.org/mailman/listinfo/nupic-theory_lists.numenta.org)
mailing list are aware that a [new research paper](http://arxiv.org/abs/1601.06116)
describing a mathematical model for the spatial pooler (SP) has emerged. Many of
us have asked “What is the math behind the SP?” or “How can I use the SP for
machine learning”. The goal of this paper is to address those very questions,
bridging the gap between HTM and the machine learning community.

This work is part of a much larger body of work being conducted by the
[Rochester Institute of Technology’s (RIT’s)](http://www.rit.edu/)
[NanoComputing Research Lab](https://www.rit.edu/kgcoe/nanolab/). Our lab is
specifically focused on designing energy efficient hardware circuits and
architectures that are biologically inspired. One of our key strengths is the
utilization of emerging technologies such as memristors to design energy
efficient neuromorphic systems.

So why is a hardware group interested in mathematical models?! To properly
design hardware, it is imperative to build on a key mathematical model of the
overarching system. If we are able to do so, we could potentially produce a
hardware design of HTM that not only has higher performance than a
software-based solution, but also consumes much less power. We are currently
working on such a system, so please follow our work. ☺

It is [widely known](https://github.com/numenta/nupic/wiki/CLA-for-ML-AI-Researchers)
that the SP is similar to a self-organizing map (SOM). Our paper takes that idea
farther, by showing that the primary learning mechanism consists of a component
that is very similar to competitive learning. In fact, we posit that the SP is
not “a” competitive learning network, but rather many competitive learning
networks. In this construct, each column acts as a competitive learning network,
with the columns’ set of inputs determined in a manner similar to attribute
bagging. The final set of active columns is then determined by a voting scheme.
This process can be used to explain the reasoning behind the permanence
selection, but it still leaves the reasoning behind the permanence update
method.

Many people have posited that the permanence update rule is similar to Hebbian
learning, since winning columns have their active synapses positively
reinforced. While this is a nice connection, it is not sufficient for a full
mathematical model. We demonstrate how the permanence update may be modeled as
an optimization problem, through the use of a maximum-likelihood estimator
(MLE). Using this approach, it is possible to choose permanence increment and
decrement amounts best suited for the application.

In addition to the discussion on the primary learning mechanism, we show how the
SP can be used to perform feature mapping and dimensionality reduction. A method
is also provided for reconstructing the SP’s representation back in the input
space. We additionally provide full equations for every aspect of the algorithm
(including the boosting operations), optimized for matrix computations. A
discussion concerning the initialization of the network is also included.

For those of you more interested in the overall system design, we have
open-sourced our code (MIT License). You may download the full source from
[my GitHub](https://github.com/tehtechguy/mHTM) and you may browse the fully
generated API on my [personal website](http://techtorials.me/mHTM/). If you are
familiar with machine learning in Python you will be happy to know that the
implementation uses the [scikit-learn](http://scikit-learn.org/stable/)
interface. Our implementation includes support for using scikit-learn’s build in
cross-validation (CV) suite. We also have
[sample code](https://github.com/tehtechguy/mHTM/tree/master/src/examples) on
how to use this as a single process or as many processes locally or as a
plethora of process on a cluster.

It is our wish that this work helps the community to further advance the
understanding and application of HTM. We are continuing this work by studying
the temporal memory portion of HTM.

As with all work, it is important to note any contributions. K. Gomez of
[Seagate Technology](http://www.seagate.com/) [10] and J. Hawkins, S. Ahmad, and
Y. Cui of Numenta provided feedback on this work. Many members of the
NanoComputing Research Lab (namely A. Hartung and C. Merkel) also provided
critical feedback. Lastly, [RIT’s research computing](http://rc.rit.edu/)
provided the infrastructure to allow us to perform our simulations.
