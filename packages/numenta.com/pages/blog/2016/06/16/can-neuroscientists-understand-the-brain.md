---
author: Subutai Ahmad
brief: Eric Jonas and Konrad Kording just released a provocative paper, "Could a neuroscientist understand a microprocessor?". In their paper, they ask whether current neuroscience techniques could discover the operations of a simple microprocessor.
date: 2016/06/16
hideImage: false
image: ../images/image.png
org: VP of Research
tags: neuroscientist understand microprocessor
title: Can Neuroscientists Understand the Brain?
type: post
---

Eric Jonas and Konrad Kording just released a provocative paper, "Could a
neuroscientist understand a microprocessor?"<sup>[[1]](#1)</sup> In their
paper, they ask whether current neuroscience techniques could discover the
operations of a simple microprocessor<sup>[[2]](#2)</sup>.

Their reasoning is as follows. The field of neuroscience is trying to understand
the computational properties of the brain. If we think current neuroscience
techniques are sufficient to understand something as complex as the brain,
surely they will be able to handle a small microprocessor. If, on the other
hand, current techniques are insufficient to understand even this simple CPU, it
raises serious questions about the current approaches in the field. True, the
brain is not a silicon processor but there are similarities (they list several
in the paper). So let's apply these techniques to this simpler computational
system as a litmus test.  

Their methodology includes applying an array of traditional techniques such as
lesioning, examining statistics of bit patterns, analyzing tuning properties of
transistors, dimensionality reduction, etc. They studied the microprocessor "in
vivo" while playing a variety of video games (you can tell they had a lot of fun
with this project!) They were able to discover that transistors exhibited very
low pairwise correlations but were not actually independent (very similar to
behavior of neurons<sup>[[3]](#3)</sup>). They showed strong spatiotemporal
structure in the activity of various processor components. The resulting plots
and charts look remarkably similar to those in neuroscience papers. Yet these
techniques did not uncover the true computational nature of the microprocessor
nor its functional structure.  

Of course, in this process what they are really asking is "Could a
neuroscientist understand the brain"?<sup>[[4]](#4)</sup> Their conclusion: an
unequivocal "NO".

We all know that "correlation does not imply causation". Current statistical
techniques report all sorts of correlations, but little regarding true
underlying structure.


### What does it mean to understand the brain?

So what does it really mean to understand the brain? Unfortunately the paper
does not answer this question. They do make vague comments that the field should
understand "how the output relates to the inputs", and that it should reward
"those who innovate methodologically." These statements are unsatisfactory at
best.

I propose a much stronger answer. As a computer scientist, I believe the only
way to be certain you understand something is to build it. Write the program for
it. We don't need to create an exact replica, just a system that demonstrates
the important properties.  This methodology is harder but demands that you
uncover underlying structure and function.

Let me give an analogy using a different paradigm. Suppose cars didn't exist.
Humans somehow get access to a luxury Mercedes sedan and the race is on to
understand how it works.  Let's consider two alternative approaches.

The first approach involves calculating a number of statistical measures and
building predictive models. These models might accurately predict the car's gas
mileage under different conditions, such as going uphill vs downhill. They might
be able to plot precise acceleration profiles under different loads.  They would
know exactly how long it takes the air conditioning to cool the car in different
climates. Scientists would publish thousands of peer-reviewed papers with all
sorts of equations and charts proving the accuracy of these models. But would
they really understand how the car works?

The second approach involves using the car to deduce fundamental mechanisms such
as a power source, transmission, and steering. It would focus on the function of
these subsystems, and less on details such as the strength of bolts or the
efficiency of water pumps. To test our theories of function we would build a
much simpler machine from scratch, perhaps something like a Ford
Model T<sup>[[5]](#5)</sup>. This car would have a super simple engine and hand
cranked starter. The controls might be awkward, the tires bad, and the seats
uncomfortable. It would definitely have no air conditioning. It might not even
be as fast as a horse! But, you could actually drive this car. Because we
understand how our simple car works, over time we can improve it and eventually
build vehicles even better than the Mercedes prototype.


### What is our approach?

At Numenta we are using this second approach to understanding the brain.  We are
building the Model T equivalent of the neocortex.  

We use neuroscience discoveries and details to deduce the fundamental components
of intelligence. For example, we know that the neocortex learns a predictive
model of the world. It learns continuously without supervision. We know that
behavior and sensory inference are not separate processes, but are intimately
integrated such that learning cannot be achieved without behavior. Our theories
are constrained by and consistent with a great many neurosciences details, but
our software simulations only capture the functional properties of the brain and
not all the details.  We are often asked, “How do you decide what neuroscience
details to include in your simulations and which to leave out?”  The answer is
we include neuroscience details when they are essential for function. When we
hit stumbling blocks we return to experimental neuroscience to provide clues and
hard constraints on how to solve problems. Our simulations also provide insights
into the structure of cortex<sup>[[6]](#6)</sup><sup>[[7]](#7)</sup>.

Compared to the brain, our software is at an early stage and primitive, like a
Model T. But, you can actually take it for a spin, see how it performs, and then
know what areas need improvement.

Can we understand the brain? We have made excellent progress with our approach.
If we stay focused on large-scale functional theories and building systems based
on those theories, the answer to this question is an unequivocal “YES”!


### Footnotes and Citations

<span id="1" class="anchor"></span>
**[1]** Jonas, E., and Kording, K. (2016). Could a neuroscientist understand a
  microprocessor? Cold Spring Harbor Labs Journals bioRxiv doi:10.1101/055624.  
  http://biorxiv.org/content/early/2016/05/26/055624.abstract

<span id="2" class="anchor"></span>
**[2]** Specifically Motorola 6507, similar to what was used in the Apple I and
  Atari video game consoles 40 years ago.

<span id="3" class="anchor"></span>
**[3]** Schneidman, E., Berry, M. J., Segev, R., and Bialek, W. (2006). Weak
  pairwise correlations imply strongly correlated network states in a neural
  population. Nature 440, 1007–12. doi:10.1038/nature04701.

<span id="4" class="anchor"></span>
**[4]** Note that the paper specifically targets computational neuroscience
  techniques, not experimental neuroscience. The amount of experimental data
  in neuroscience has been exploding exponentially, but without good
  theoretical guidance uncovering value is like finding a needle in a
  haystack.

<span id="5" class="anchor"></span>
**[5]** https://en.wikipedia.org/wiki/Ford_Model_T

<span id="6" class="anchor"></span>
**[6]** Hawkins, J., and Ahmad, S. (2016). Why Neurons Have Thousands of
  Synapses, a Theory of Sequence Memory in Neocortex. Front. Neural
  Circuits 10. doi:10.3389/fncir.2016.00023.
  http://journal.frontiersin.org/article/10.3389/fncir.2016.00023/full

<span id="7" class="anchor"></span>
**[7]** Ahmad, S., and Hawkins, J. (2016). How do neurons operate on sparse
  distributed representations? A mathematical theory of sparsity, neurons and
  active dendrites. arXiv:1601.00720 [q–bio.NC]. Available at:
  http://arxiv.org/abs/1601.00720.
