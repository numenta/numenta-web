---
author: Rahul Agarwal
brief: Streaming data is the future of data. Businesses need real-time solutions that can keep up with the accelerating pace and scale of information they are
date: 2013/04/11
image: ../images/image.png
org: Engineering
tags: Machine Learning, Data
title: The Online Learning Advantage
type: post
---

Streaming data is the future of data. Businesses need real-time solutions that
can keep up with the accelerating pace and scale of information they are
collecting. This is why one of the key features that Grok models incorporate is
**online learning** (a technical term our marketing department has
affectionately changed to “continuous learning”). In this post, I’ll talk a
little bit about online learning and why we think it is so important for solving
the types of problems that Grok tackles.

#### What is online learning?

Most machine learning systems are what are called **batch learning systems**.
This means that they are trained once on a static set of data, called the
**training dataset**. The model that is learned from this training set is then
used to make predictions for additional data, called the **test dataset**. This
approach assumes that the data is stationary, i.e. that the statistical patterns
in the data do not change over time. By contrast, in an online learning system
there is no distinction between training and test data. Every record updates the
model with new information. Therefore, an online learning model never stops
learning and always uses the most recent information. Online learning systems do
not assume any stationarity in the data. As patterns in the data change, the
model adapts and learns these new patterns.

You might be thinking, “But Rahul, can’t you just take a batch learning system
and retrain it periodically? Wouldn’t that also allow the model to adapt?” To
this I would say two things, “1) How did you know my name? 2) Yes you can.”
However, as I will discuss below, this approach is often suboptimal or not
feasible for real-time streaming data problems

#### What are streaming data problems?

Grok builds models to make predictions on **real-time streaming data**. This is
high frequency, usually machine-generated data. These data streams measure the
change in one or many variables as they change over time. An example of
streaming data is measurements from temperature sensors placed on a piece of
industrial equipment, such as a wind turbine. Another example could be the CPU
and memory usage of a server in a server farm. Recent data is exponentially more
valuable than old data. Our founder, Jeff Hawkins, talks about this idea as the
“half-life” of data. For example, a web company may release a new feature that
dramatically increases traffic to its servers. Any external factors make
streaming data inherently non-stationary, indicating that online learning or
retraining is a necessity. Therefore, being able to incorporate the latest data
into a model as soon as possible offers a huge advantage.

#### Why online learning helps: Fast Data

One issue with retraining batch systems is that it is often too slow to be
feasible. Many batch machine learning algorithms are optimized to have long,
computationally expensive training phases in order to be faster during testing.
This is because training is assumed to happen rarely, often only once.

One of the reasons many popular batch learning algorithms are slow is that they
rely on iterative optimization techniques as a subroutine for learning. This
means that they perform the same computation over the training set for many
iterations until the parameters of the model converge (given some convergence
criteria). These iterative algorithms can potentially take a long time to run
depending on how quickly the model converges. Take the popular sequence learning
algorithm, Hidden Markov Models (HMMs). The algorithm to train a full HMM from
unlabeled data, called the **Baum-Welch algorithm**, is an iterative algorithm
where *each step* has complexity **O(K^2N)**, where **K** is the number of
states in the model, and **N** is the number of records in the training set.
This means, even for a moderate number of states, each iteration of the
optimization process could take a significant amount of time. Even algorithms
that are generally considered more efficient, such as Support Vector Machines
(SVMs), still require iterative algorithms during training, introducing an
indeterminate, potentially large amount of computation. For streaming data
problems, it would be infeasible to retrain models on every record because the
training process would be too slow to keep up with the data. Even worse, for
very high frequency cases, the data might be coming in so fast that the model is
obsolete by the time it is retrained! In an on-line training system such as Grok
each new data point is presented just once an Grok can update its model in a few
tens of milliseconds.

#### Why online learning helps: Many Models

In addition to speed, another advantage of Grok is that it allows you to easily
train and deploy hundreds and thousands of models. That means you can deploy a
separate model for each turbine in your wind farm, or for each node in your data
center. At this scale, it becomes costly to store the large amounts of data for
each model in order to retrain them. Instead, online models allow you to “fire-
and-forget” your data. An online learning algorithm learns as soon as a new
record is fed to it. After that, there is no need to keep the original record,
as the model has already incorporated the new information by updating it’s own
parameters.

Even if you can find enough storage for these records, you still have to make a
fundamental decision: how often do you retrain? This is not a trivial decision,
and it requires the modeler to make certain assumptions about how long the
sequential patterns are in the data. There is also a tradeoff between the size
of each training batch. Smaller batches allow you to update the models more
frequently, but can lead to issues with data sparsity and overfitting, which
means that the model doesn’t learn all the different patterns that are present
in the data. On the other hand, larger batches will take longer to train on, and
it will take longer for models to incorporate the most recent data. In the case
of thousands of models, it will not be feasible to customize the batch size for
each model, so some assumption must be made to suit all models. Although online
learning algorithms, such as our Cortical Learning Algorithm (CLA), generally
have some analogous “learning rate” parameter, Grok automatically determines the
best value for each model during the swarming process, removing the need for the
data scientist to select a value.

#### Conclusion

While batch learning make sense for certain problem domains, online learning is
essential for high velocity streaming intelligence applications. While it is
possible to munge batch systems into online learning systems, it’s like fitting
a square peg into a pentagonal hole. This is why Grok’s core technology
incorporates online learning from the start.  In fact, we think that for the
future of data (i.e. *streaming data*, if you were paying attention) online
learning is a must-have feature.
