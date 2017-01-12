---
author: "Jeff Hawkins & Subutai Ahmad"
brief: "Foundational paper describing core HTM theory for sequence memory and its relationship to the neocortex. Written with a neuroscience perspective, the paper explains why neurons need so many synapses and how networks of neurons can form a powerful sequence learning mechanism."
category: neuroscience
date: 2016/03/30
hideImage: true
image: ../images/why-neurons-have-thousands.png
link: http://journal.frontiersin.org/article/10.3389/fncir.2016.00023/abstract
org: "Published in Frontiers in Neural Circuits Journal"
sort: a
title: "Why Neurons Have Thousands of Synapses, A Theory of Sequence Memory in Neocortex"
type: post
---

| | |
|-|-|
| **Authors** | J. Hawkins and S. Ahmad |
| **Journal** | Frontiers in Neural Circuits, 10 (2016) 1–13, `doi:10.3389/fncir.2016.00023` |
| **Online** | [Read or Download this Paper][1] |
| **Published** | March 30, 2016 |

All sensory inputs and all behavior comprise complex sequences of patterns. In
this paper we propose that the most fundamental operation of all neocortical
tissue is learning and recalling sequences of patterns, what Karl Lashley
famously called “the most important and also the most neglected problem of
cerebral physiology”. We first show how a biologically detailed model of
pyramidal neurons with thousands of synapses and active dendrites can learn
transitions of patterns. We then show how a network of such neurons can form a
powerful and robust sequence memory. In the paper we also describe various
properties of the model and compare it with several other neural network models.
Given the prevalence and similarity of pyramidal neurons throughout the
neocortex, and the importance of sequence memory, we propose that this form of
sequence memory could be a universal property of all neocortical tissue.

![Real, HTM, and Deep Learning neurons](../images/why-neurons-have-thousands.png)
> ***Image from the paper.*** *Visual comparison of Biological, HTM, and Deep
  Learning neurons.*

## Frequently asked questions about this research

### Q. What was the purpose of this study?

The purpose of this study was to explore and understand how sequences are
modeled in the neocortex. We believe sequence modeling is a fundamental property
underlying intelligent behavior, and that it must be occurring everywhere in the
neocortex. This study is part of our larger effort to reverse engineer the
neocortex, and improve our overall understanding of how the brain learns.

### Q. What are the key takeaways?

* Biological neurons are significantly more complex than the simple models used
  in most artificial neural networks. Understanding these differences is
  important.

* A network incorporating more realistic pyramidal neurons can learn complex
  sequences in a surprisingly robust and flexible manner. The model learns in a
  completely unsupervised manner and is far more adaptable than traditional
  machine learning techniques.

* Our model incorporates a large number of findings from experimental
  neuroscience. As such the model is able to make detailed predictions that we
  hope can guide future experimental research.

### Q. How does this research differ from other studies?

There are two key differences:

1. Most models that are used today in Machine Learning differ greatly from the
  model offered in this paper. They are mathematically derived and have very
  little in common with biology.

1. Unlike most models in Computational Neuroscience, the algorithm described
  here is not restricted to a small set of neuroscience experiments. The
  algorithm has been tested and validated in several commercially valuable
  tasks, such as anomaly detection on streaming data.

### Q. How were the simulations conducted?

For this paper, we wrote simulation code in Python to demonstrate various
properties of sequence memory. We used the reference HTM implementation
available in the open source project NuPIC.

### Q. Can I replicate these simulations?

Yes! In keeping with Numenta’s [open research philosophy][2], the source code
for replicating the graphs in the paper can be found [here][3]. We also welcome
questions and discussion about the paper on the [HTM Forum][4].

### Q. How will this paper make contributions in neuroscience?

This paper offers a computational model of pyramidal neurons and an explanation
of how a neuron uses thousands of synapses and computationally active dendrites
to learn sequences. The paper also lists several detailed predictions that can
be used to guide experimental neuroscientists interested in studying sequence
memory.

### Q. How does this paper make contributions in machine learning?

This research offers a new sequence memory algorithm that machine learning
experts can test, experiment with, and verify. We have already created software
that demonstrates how the theory works in several applications. We believe
others can use this algorithm to build a broad range of applications.

### Q. What are the key machine learning properties of the model?

The model described in the paper demonstrate the following key properties:

1. On-line learning

1. High-order sequences

1. Multiple simultaneous predictions

1. Local unsupervised learning rules

1. Robustness

1. Use of sparse distributed representations

A [companion paper][5], to appear in Neural Computation in November 2016,
provides more detailed machine learning comparisons of the above properties.

### Q. Where can I find out more?

The [HTM Forum][4] is a great resource for further questions and discussion on
HTM theory. The authors of this paper are active participants in the forum.

### Q. What is next for this research?

This research forms the foundation to our overall goal of reverse-engineering
the neocortex. Our current research builds on this theory and focuses on
sensorimotor learning, how the neocortex learns and builds a model of the world
through movement.

[1]: http://journal.frontiersin.org/article/10.3389/fncir.2016.00023/full
[2]: http://numenta.com/blog/2014/09/17/increasing-research-transparency/
[3]: https://github.com/numenta/nupic.research/tree/master/projects/sequence_learning
[4]: https://discourse.numenta.org/
[5]: https://arxiv.org/abs/1512.05463
