---
title: "NuPIC FAQ"
#redirect_from: "/faq.html"
---

## Is there a specific application for NuPIC?

The algorithm lends itself well to high-speed temporal data, but it could
potentially be applied to many different fields and endeavors.

## What's the difference between your contributor license and Apache's?

Not much, really. Here's a [diff](http://www.diffchecker.com/tas54ez4). We've
also made a change to the contributor license that diverges from slightly from
the Apache version, you can read more about it
[on our blog](/blog/2013/09/03/numenta-contributor-license-v1-1/).

## What's the difference between this and your old offering?

It is important to emphasize that the old and new NuPIC algorithms are
completely different.  This isn't an enhancement.  It might be a bit confusing
that we are using the same name but we figured only a few people would be aware
of the old NuPIC offering. The main differences are: a) NuPIC today includes HTM
whereas the old NuPIC had our previous algorithms, b) old NuPIC was tuned for
vision whereas new NuPIC is tuned for
[our apps](http://numenta.com), and c) old NuPIC ran on Windows.

## Can I add an external library to NuPIC?

You can add external libraries to NuPIC. They must have a license that permits
proprietary use of the library. External libraries licensed under AGPL, for
instance, will not be accepted.

## Does NuPIC implement hierarchy?

Yes... and no. The software architecture for hierarchies exists within the
[Network API](https://github.com/numenta/nupic/wiki/NuPIC-Core-Network-API) of
[NuPIC.Core](https://github.com/numenta/nupic.core), as well as the Python
client. You can create models and link them together into a hierarchy, with
lower levels passing data up into higher levels. However, hierarchy is not
implemented in the easier to use
[Online Prediction Framework](https://github.com/numenta/nupic/wiki/Online-Prediction-Framework).
That wouldn't prevent anyone from experimenting with hierarchies themselves,
however.

The algorithmic mechanism for creating an effective learned spatiotemporal
hierarchy using the CLA is still very much a research topic. A good mechanism
for temporal pooling within a hierarchical architecture is an active area of
research for Jeff and the NuPIC community. Please search our mailing list
archives for discussion and proposals on that topic.

## What is the difference between HTM and CLA?

The neocortex is the seat of intelligent thought in the mammalian brain. High
level vision, hearing, touch, movement, language, and planning are all performed
by the neocortex. Given such a diverse suite of cognitive functions, you might
expect the neocortex to implement an equally diverse suite of specialized neural
algorithms. This is not the case. The neocortex displays a remarkably uniform
pattern of neural circuitry. The biological evidence suggests that the neocortex
implements a common set of algorithms to perform many different intelligence
functions.

Hierarchical Temporal Memory (HTM) is a term coined by Jeff Hawkins to describe
the overall space of systems that capture the structural and algorithmic
properties of the neocortex. Many of the key properties concerning HTM
algorithms were described in the book On Intelligence. These properties include
continuous learning, sequence prediction, hierarchy, feedback, attention, and
sensorimotor control. The [HTM whitepaper](http://numenta.com/papers-videos-and-more/#more)
introduced a new property, namely Sparse Distributed Representations (SDR).

There could be many different HTM algorithms but so far no one has effectively
implemented the full set of properties in a fully working system. The Cortical
Learning Algorithm (CLA) is a specific algorithm that covers some of the key
aspects of HTM. The CLA uses SDR's, is a continuously learning system, can learn
complex sequences and make temporal predictions. There are strong relationships
to what is currently known about the laminar structure in a single layer of the
neocortex. CLA does not cover all the properties of HTM but we believe it forms
a strong foundation for a more complete implementation.

Current research at Numenta is focused on temporal pooling (required for
effective spatiotemporal hierarchies) and sensorimotor control. Please see some
of the recent talks for more detail on these topics.
