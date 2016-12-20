---
author: Numenta
brief: We are frequently asked how we distinguish our technology from others. This task is made difficult by the fact that there is not an agreed vocabulary; everybody uses the above terms (and other associated terms) differently
date: 2016/01/11
image: ../images/image.png
org: Jeff Hawkins & Donna Dubinsky
tags: numenta machine intelligence learning deep artificial ai htm brain neurons
title: What is Machine Intelligence vs. Machine Learning vs. Deep Learning vs. Artificial Intelligence (AI)?
type: post
---

We are frequently asked how we distinguish our technology from others. This
task is made difficult by the fact that there is not an agreed vocabulary;
everybody uses the above terms (and other associated terms) differently.  In
addition, the commonly understood meaning of some of these terms has evolved
over time.  What was meant by AI in 1960 is very different than what is meant
today.

In our view, there are three major approaches to building smart machines.  Let’s
call these approaches *Classic AI*, *Simple Neural Networks*, and *Biological
Neural Networks*.  The rest of this blog post will describe and differentiate
these approaches.  At the end, we’ll include an example as to how each approach
might address the same problem.  This analysis is intended for a business rather
than technical audience, so we simplify somewhat and thus beg the indulgence of
technical experts who might quibble with the details.

### *Classic AI* Approach

The earliest approaches to AI were computer programs designed to solve problems
that human brains performed easily, such as understanding text or recognizing
objects in an image. Results of this work were disappointing and progress was
slow.  For many problems, researchers concluded that a computer had to have
access to large amounts of knowledge in order to be “smart”.  Thus they
introduced “expert systems”, computer programs combined with rules provided by
domain experts to solve problems, such as medical diagnoses, by asking a series
of questions.  If the disease was not properly diagnosed, the expert adds
additional questions/rules to narrow the diagnosis.  A *Classic AI* system is
highly tuned for a specific problem.  

IBM’s Watson could be viewed as a modern version of a *Classic AI* system.  It
focuses on creating a sophisticated knowledge base on a particular issue.
Although Watson doesn’t rely on encoded rules, it requires the close involvement
of domain experts to provide data and evaluate its performance.  *Classic AI*
has solved some clearly defined problems but is limited by its inability to
learn on its own and by the need to create specific solutions to individual
problems.  In this regard, in spite of it being called artificial intelligence,
it has very little in common with general human intelligence.

### *Simple Neural Network* Approach

Some early researchers explored the idea of neuron models for artificial
intelligence. When the limits of *Classic AI* became clear, this notion picked
up steam and with the addition of back propagation techniques, started proving
useful. The resulting technology, artificial neural networks (ANNs), was created
over 50 years ago when very little was known about how real neurons worked.
Since then, neuroscientists have learned a great deal about neural anatomy and
physiology, but the basic design of ANNs has changed very little. Therefore,
despite the name neural networks, the design of ANNs has little in common with
real neurons.  Instead, the emphasis of ANNs moved from biological realism to
the desire to learn from data without human supervision. Consequently, the big
advantage of *Simple Neural Networks* over *Classic AI* is that they learn from
data and don’t require an expert to provide rules.  Today ANNs are part of a
broader category called “machine learning” which includes other mathematical and
statistical techniques. Machine learning techniques, including ANNs, look at
large bodies of data, extract statistics, and classify the results.

ANNs have recently evolved into Deep Learning networks, whose advances have been
enabled by access to fast computers and vast amounts of data for training.  Deep
Learning has successfully addressed many problems such as image classification,
language translation and identifying spam in email.

Although Simple Neural Network systems can solve many problems that were not
solvable using *Classic AI*, they have limitations.  For example, they don’t
work well when there is limited data for training, and they don’t handle
problems where the patterns in the data are constantly changing. Essentially,
the Simple Neural Network approach is a sophisticated mathematical technique
that finds patterns in large, static data sets.

There is a deeper and more important issue beyond the current limitations of
*Classic AI* and of *Simple Neural Networks*. In our view, both of these
approaches are not on a path to achieve true machine intelligence; they don’t
provide a roadmap to get there, which brings us to the third approach.

### *Biological Neural Network* Approach

Everyone agrees that the human brain is an intelligent system; in fact it is the
only system everyone agrees is intelligent.  We believe that by studying how the
brain works we can learn what intelligence is and what properties of the brain
are essential for any intelligent system. For example we know the brain
represents information using sparse distributed representations (SDRs), which
are essential for semantic generalization and creativity. We are confident that
all truly intelligent machines will be based on SDRs. SDRs are not something
that can be added to existing machine learning techniques; they are more like a
foundation upon which everything else depends. Other essential attributes
include that memory is primarily a sequences of patterns, that behavior is an
essential part of all learning, and that learning must be continuous.  In
addition, we now know that biological neurons are far more sophisticated than
the simple neurons used in the Simple Neural Network approach -- and the
differences matter. We believe you can’t get to machine intelligence by
incrementally building upon the simple neuron approach, but instead must throw
it away and start over with a more realistic biological approach.

Numenta’s technology, Hierarchical Temporal Memory (HTM), is the best example of
the *Biological Neural Network* approach.  Today, HTM systems are able to learn
the structure of streaming data, make predictions and detect anomalies. They
learn continuously from unlabeled data. By taking a robust biological approach,
the brain gives us a roadmap of where to direct our work in the future, such as
completing our understanding of behavior, attention and short term memory.  This
roadmap distinguishes HTM from other techniques and makes it the best candidate
for creating intelligent machines.

### An Example

Let’s take a problem and think about how it might be addressed in the three
different approaches.  Again, we oversimplify a bit in order to distinguish the
main differences of the three approaches.

We have been asked to detect rogue behavior of an employee within an
organization.  For example, companies with confidential information want to know
if people with internal access are abusing that information.  A change in
employee behavior might be totally legitimate – the employee has changed roles,
and now has new responsibilities – or it could be a problem.  

Rogue behavior is difficult to identify.  The *Classic AI* approach would
address this problem with a series of rules.  For example, let’s consider an
analyst who works with confidential customer data.  The *Classic AI* system
would need a human to figure out likely problem scenarios then program the
system to look for those scenarios.  This solution might flag any instance where
the analyst has accessed the customer file more than 10 times in the month.  As
the *Classic AI* system is deployed, and false positives and false negatives are
examined, the rules would be strengthened.  The new rule might say that an
analyst accessing customer data in the first few days of the month is not
flagged, but it is for the remainder of the month.

The *Simple Neural Network* approach would start with lots of historical data,
namely a large database of known problem scenarios.  The *Simple Neuron Network*
system might figure out, for example, that abuse of this information only
happens in the last week of the month.  The system identifies such features and
then classifies an individual as “unusual” or “not unusual”.  Although it sounds
similar to the *Classic AI* approach, in this case, the features are learned
from the data, not from an expert.  

Both approaches have some problems.  With the *Classic AI* solution you need to
know what you are looking for.  But criminals constantly change strategies to
avoid detection and the rules don’t adapt. The *Simple Neural Network* approach
requires a lot of labeled data to be able to find common features, but this kind
of data generally doesn’t exist for unusual behavior.  Both approaches are
unsuitable for modeling individual behaviors and require the system to be
retrained when new patterns arise.

The *Biological Neural Network* approach would stream the data from each analyst
(such as the details of the files routinely accessed, numbers of emails, numbers
of postings, etc.) and would automatically build individual models of normal
behavior for each person.  The system would then predict what would be normal
for each analyst and would flag anything abnormal.  One could stream a lot of
different metrics without knowing which will be important – all the modeling is
automated.  The *Biological Neural Network* system does not need to know what it
is looking for, can model each individual separately, and continuously learns as
data changes.

In summary, below are the characteristics of the three different approaches:

|   | *Classic AI* | *Simple Neural Network* | *Biological Neural Network* |
| - |------------| --------------------- | ------------------------- |
| **Examples** | Watson |	Deep Learning	| Hierarchical Temporal Memory (HTM) |
| **Associated terms** | Expert systems	| Artificial Neural Nets (ANN) <br/> Machine learning | Machine intelligence |
| **Data sources** | Rules from experts	| Large datasets	| Data streams |
| **Training** | Programmed by experts | Derived from labeled databases	| Derived from unlabeled data streams |
| **Outputs**	| Answers to questions | Classification	| Prediction <br/> Anomaly detection <br/> Classification |
| **Batch vs. continuous learning**	| Batch	| Batch	| Continuous |
| **Need to know what you are looking for**	| Yes |	Requires labeled data	| No |
| **Many individual models** | Hard |	Hard | Easy |
| **Biological basis** | None | Simple | Realistic |
| **Provides roadmap to machine intelligence** | No |	No | Yes |

### Summary

We return to the question of terminology that we started this post with.  Our
feeling is that the term “artificial intelligence” has been used in so many ways
that it is now confusing.  People use AI to refer to all three approaches
described above, plus others, and therefore has become almost meaningless.  The
term “machine learning” is a more narrowly defined term for machines that learn
from data, including simple neural models such as ANNs and Deep Learning.  We
use the term “machine intelligence” to refer to machines that learn but are
aligned with the *Biological Neural Network* approach.  Although there still is
much work ahead of us, we believe the *Biological Neural Network* approach is
the fastest and most direct path to truly intelligent machines.

*This blog entry was modified on Thu Mar 24 2016 to clarify the timing of neural
network research.*
