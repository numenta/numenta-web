---
author: "Yuwei Cui, Subutai Ahmad & Jeff Hawkins"
brief: "Analysis of HTM sequence memory applied to various sequence learning and prediction problems. Written with a machine learning perspective, the paper contains some comparisons to statistical and Deep Learning techniques."
category: machine-learning
date: 2015/12/17
hideImage: true
image: ../images/continuous-online-sequence-learning.png
link: http://www.mitpressjournals.org/doi/abs/10.1162/NECO_a_00893#.WCEj8uErI18
org: Preprint of journal submission
sort: d
title: "Continuous Online Sequence Learning with an Unsupervised Neural Network Model"
type: post
---

| | |
|-|-|
| **Authors** | Y. Cui, S. Ahmad, and J. Hawkins |
| **Journal** | Neural Computation 28, `2474–2504` (2016) |
| **Online** | [Read or Download this Paper][1] |
| **Published** | November 1, 2016 |

This paper demonstrates how HTM sequence memory, a recently proposed theoretical
framework for sequence learning in the cortex, helps us understand how the brain
can solve sequence learning problems and how we can apply this understanding to
real-world sequence learning problems with continuous data streams. In this
paper, we show how various properties of HTM sequence memory are applied to
sequence learning and prediction on streaming data. We then show comparisons
between HTM sequence memory and other sequence learning algorithms. These
include statistical methods, (autoregressive integrated moving average),
feedforward neural networks (time delay neural network and online sequential
extreme learning machine), and recurrent neural networks (long short-term memory
and echo-state networks). HTM achieves comparable results while displaying
several important properties like continuous online learning, the ability to
handle multiple predictions, robustness to sensor noise and fault tolerance, and
good performance without the need for task-specific tuning.

![Taxi passenger predictions](../images/continuous-online-sequence-learning.png)
> ***Image from the paper.*** *We used HTM and other algorithms to predict taxi
  passenger count in the New York City.
  **LEFT:** Overall prediction error for various algorithms.
  **RIGHT:** After a new pattern is introduced (black dashed line), HTM quickly
  learns the new pattern and gives better prediction accuracy than LSTM due to
  its ability of continuous learning.*

## Frequently Asked Questions About This Research

### Q. What was the purpose of this study?

The purpose of this study was to compare HTM sequence memory to other sequence
learning algorithms. This is a companion paper to
[Why Neurons Have Thousands of Synapses, A Theory of Sequence Memory in Neocortex][2],
which appeared in Frontiers in Neural Circuits, in March 2016.

### Q. What are the key takeaways?

HTM performs comparably well and displays other important properties that apply
to both biological systems and real-world streaming applications:

* Continuous online learning
  * Because continuous data streams often have dynamic statistics, the ability
    to recognize and learn new patterns quickly is important. Yet this property
    has not been well studied in machine learning. Applying machine learning
    algorithms to continuous data stream analysis often requires compute and
    storage-intensive resources, due to the need for keeping a buffered data set
    of past records and regular retraining. By contrast, online sequential
    algorithms can learn sequences in one pass.
* Ability to handle multiple predictions
  * When information is ambiguous or changing, sequence learning algorithms
    should be able to make multiple predictions simultaneously and evaluate each
    one’s likelihood as opposed to making a single prediction based on maximum
    likelihood.
* Robustness to sensor noise and fault tolerance
  * Sequence learning involves dealing with noisy, inaccurate and often missing
    data. A good sequence learning algorithm should be able to learn regardless
    of noise or system faults.
* Good performance without the need for task-specific tuning
  * While most machine learning algorithms require optimizing a set of
    hyperparamaters for each task, an ideal sequence algorithm should display
    good performance on a wide range of problems without task-specific tuning.

### Q. How does this research differ from other studies?

The HTM sequence memory algorithm is unlike most machine learning algorithms.
Rather than focusing solely on HTM, however, this study offers performance
comparisons to a wide variety of techniques.

### Q. How were the simulations conducted?

For this paper, we wrote simulation code in Python to demonstrate various
properties of sequence memory. We used the reference HTM implementation
available in the open source project NuPIC.

### Q. Can I replicate these simulations?

Yes! In keeping with Numenta’s [open research philosophy][3], the source code
for replicating the graphs in the paper can be found [here][4]. We also welcome
questions and discussion about the paper on the [HTM Forum][5].

### Q. How does this paper make contributions in machine learning?

The HTM sequence memory algorithm is something that machine learning experts can
test and incorporate into a broad range of applications. Any Additional
Technical Questions we should add?

### Q. Where can I find out more?

The [HTM Forum][5] is a great resource for further questions and discussion on
HTM theory. The authors of this paper are active participants in the forum.

### Q. What is next for this research?

Although HTM is still at a very early stage compared to other traditional neural
network models, it shows promising results on real-time sequence learning
problems. We would like to explore other applications of HTM for future
research. Potential research directions include solving high-dimensional
sequence learning problems and online sequence classification problems with HTM.

[1]: http://www.mitpressjournals.org/doi/abs/10.1162/NECO_a_00893#.WCEj8uErI18
[2]: http://journal.frontiersin.org/article/10.3389/fncir.2016.00023/full
[3]: http://numenta.com/blog/2014/09/17/increasing-research-transparency/
[4]: https://github.com/numenta/nupic.research/tree/master/projects/sequence_prediction
[5]: https://discourse.numenta.org/
