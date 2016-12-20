---
author: Rob Haitani
brief: We modeled Grok after the human brain because the brain is a predictive modeling system.  This is the first post in a series describing what this
date: 2013/01/03
image: ../images/image.png
org: Marketing
tags:  Neuroscience
title: The Neuroscience Behind Grok, Part 1
type: post
---

> **NOTE:** *Numenta has [announced a strategic partnership with Avik
  Partners](/press/2015/08/19/numenta-announces-licensing-of-grok-for-it-to-avik-partners/),
  please read more about the future of
  [Grok for IT Analytics](http://grokstream.com).*

We modeled Grok after the human brain because the brain is a *predictive
modeling system*.  This is the first post in a series describing what this
means: how the brain works, and how this benefits Grok.  The content is based on
lectures given by Jeff Hawkins describing his detailed, biologically accurate
model of a layer of cells in the neocortex, called the Cortical Learning
Algorithm (CLA).

Contrary to popular opinion, the brain does not compute.  Neural activity bears
little resemblance to how computers (or neural networks, for that matter)
operate.  For example, an outfielder does not catch a pop fly by computing a
projectile trajectory equation. Instead, she predicts where the ball will fall
based on sensory input, starting with the crack of the bat. She makes rapid
adjustments in speed and direction, reconciling predictions with the stream of
sensory input received as the ball approaches.

It turns out this predictive capability is a fundamental principle of
intelligence.  You constantly make small predictions of what you will see, feel
or hear. When you drink coffee, you make a series of predictions about the
sensory feedback you'll receive as you bring the cup to your mouth.  You're
usually unaware of these predictions unless they are violated.  For example if
the coffee is cold, or you accidentally grabbed a cup of pens, you are
surprised.  Detecting such anomalies is the flip side of making predictions, and
the brain uses both to drive behavior.

This activity occurs in the neocortex, the wrinkled outer part of your brain.
When you are born, your brain is essentially an empty vessel with structure but
no content.  As you are continuously bombarded with input from your senses, you
begin to build a model of the world, based on the recurring patterns that you
see.

And "bombarded" is an understatement.  Vision alone consists of an array of a
million fibers on your optic nerve, flipping on and off in milliseconds. What
you see is not "projected" inside your head.  Instead, the input from your eyes
are electrical impulses transmitted at an
[estimated 10 million bits per second](http://www.uphs.upenn.edu/news/News_Releases/jul06/retinput.htm),
translated in the darkness of your skull into our perception of images.

In sum, you take massive streams of input, learn patterns to make models of
everything in your world, and make predictions to generate action: a predictive
modeling memory system. Your brain is actually far superior to computers at the
generalized tasks of learning and pattern recognition (although obviously we
can't compete with computers at executing tasks quickly and accurately).  Grok's
goal is to combine the best of both worlds.  Future posts will summarize three
key attributes of human intelligence that we implemented in Grok: Sparse
Distributed Representations (SDRs), sequence memory and adaptive learning. For
further reading: the basic principles of intelligence are described in Jeff
Hawkins' book, *On Intelligence*. His theories of sparse distributed
representations were developed after the book was published, and are described
further in our [resources section](/papers-videos-and-more/).
