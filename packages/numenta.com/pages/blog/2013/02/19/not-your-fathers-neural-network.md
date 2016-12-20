---
author: Jeff Hawkins
brief: I am often asked, "Is Numenta’s Hierarchical Temporal Memory a neural network?" The short answer to this question is "Yes," but the problem with this short
date: 2013/02/19
image: ../images/main.jpg
org: Founder
tags: Machine Learning, Neuroscience
title: Not Your Father's Neural Network
type: post
---

I am often asked, "Is Numenta’s
[Hierarchical Temporal Memory](/machine-intelligence-technology/) a
[neural network](http://en.wikipedia.org/wiki/Neural_network)?"
(For those who don’t know, the Hierarchical Temporal Memory, or HTM, is the
heart of Grok our streaming data product.)

The short answer to this question is "Yes," but the problem with this short
answer is that the Hierarchical Temporal Memory is quite different than what most
people think of as a neural network.

The history of artificial neural networks starts with
[Warren McCulloch](http://en.wikipedia.org/wiki/Warren_McCulloch) and
[Walter Pitts](http://en.wikipedia.org/wiki/Walter_Pitts).  In 1943 they were
the first to propose creating networks of
[artificial neurons](http://en.wikipedia.org/wiki/Artificial_neuron). They
showed that artificial neurons could act like logic gates (AND, OR, etc.) and by
connecting them in precise ways we could implement any digital logic. It was
ground breaking work but biologically unrealistic.

Neural networks remained a minor research area for many years until they
resurfaced in a big way in the 1980s.  This was partly due to the rediscovery of
[back propagation](http://en.wikipedia.org/wiki/Backpropagation), which is a
method of training simple neural networks, and it was partly due to a two volume
book called
*[Parallel Distributed Processing](http://mitpress.mit.edu/books/parallel-distributed-processing).*
The PDP books ignited interest in the field.  At this time I was already
convinced that the path to machine intelligence required understanding how the
brain works so I welcomed the new interest in neural networks.  Up to that
point in time, symbolic and engineered approaches to A.I. were the dominant
approaches to machine intelligence.

However, I quickly became disillusioned with the new neural networks.  The
biggest problem was they ignored time.  Brains process flowing streams of
sensory data.  All inference, prediction, and motor behavior in a brain is built
upon memory of sequences of patterns.
The vast majority of artificial neural networks completely ignored time and
hence were unable to process changing inputs or generate behavior.  Without
embracing temporal patterns I felt we would not get close to capturing
intelligence.

There were other problems with the simplistic neural networks of the 1980s.
Biological neurons have thousands or tens of thousands of synapses arranged on
dendrites which have non-linear properties; artificial neurons typically had
just a few synapses on a cell body and ignored dendrite properties.  Biological
neural networks have detailed prototypical architectures; artificial neural
networks ignored these architectures. Neuroscience was starting to develop
overall theories of brain function but artificial neural networks were simple
HTMssifiers that didn’t fit within an overall theory.  Basically, for many years
most artificial neural network research ignored neurobiology and their
applications remained limited to simple HTMssification.  When most people think
of artificial neural networks they think about the type of neural networks
explored in the 1980s.

Today the term "artificial neural network" can refer to many different types of
networks.  Some strive for biological realism and some don’t.  So when I am
asked if Numenta’s Hierarchical Temporal Memory is a neural network, I reply
"Yes, but there many types of neural networks.  If you want to compare the HTM
to other neural networks, ask do those other networks learn sequences, do they
learn in an on-line fashion, do they incorporate neurons that have non-linear
dendrites, do they form thousands of connections, does the architecture of the
network reflect the known architecture of any part of the brain, and does the
network fit within a larger theory of brain function?"  The number of artificial
neural networks that fit these criteria is small.  The HTM is one of them.

BTW, there is one type of early artificial neural network that was applied to
sequences.  These are called auto-associative memories.  In another blog post I
will describe how the HTM and auto-associative memories are related.
