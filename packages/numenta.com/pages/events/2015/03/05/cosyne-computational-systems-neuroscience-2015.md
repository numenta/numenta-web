---
author: Subutai Ahmad
brief:
date: 2015/03/05
event:
  what: Maintaining Stable Perception During Active Exploration
  when:
    begin: 2015/03/05
    end: 2015/03/08
  where:
    desc: Hilton Salt Lake City Center
    city: Salt Lake City
    state: UT
    country: USA
    web: http://www.cosyne.org/c/index.php?title=Cosyne_15
  who: Yuwei Cui, Subutai Ahmad, Chetan Surpur, and Jeff Hawkins
  why: Authors
image: ../images/image.png
org: VP Research
tags: computational systems neuroscience cosyne 2015 numenta nupic machine intelligence
title: Computational and Systems Neuroscience (Cosyne) 2015
type: post
---

## Abstract

#### Maintaining Stable Perception During Active Exploration

Our sensory input changes dramatically as the result of our own behavior,
including eye movements, head turns, and body movements. Despite these rapid
sensory changes, our perception of the world is amazingly stable, and we can
reliably discriminate between different patterns. This suggests that we learn
stable but distinct representations through active exploration. There is reason
to believe that efference copy, an internal copy of the motor signal, is
critical for such sensorimotor learning. However the exact brain mechanisms
underlying these computations remain unknown. In this study, we propose a
computational model of sensorimotor learning and prediction. Sparse distributed
representations of visual scenes are built up incrementally by pooling together
predictable temporal transitions during exploration. To enable accurate
predictions during active exploration, we modified the Hierarchical Temporal
Memory sequence-learning algorithm to use both sensory inputs and efference copy
signals. To enable forming stable representations of scenes, we implemented a
novel temporal pooling learning rule that allows downstream neurons to form
connections with upstream neurons that are predicting correctly.

The overall model is unsupervised and the architecture is consistent with
several important aspects of thalamocortical circuits. We tested the algorithm
on a set of simulated environments, as well as a robotics test bed. In both
cases the model achieves two desired properties: 1) prediction of future sensory
inputs during behavior, and 2) emergence of stable and distinct representations
for learned patterns. After learning, the sparse activity of cells in downstream
regions is stable despite sensor movements, while different images lead to
distinct representations. These results demonstrate how efference copy can be
used in sensory cortex to make predictions during behavior. We propose temporal
pooling as a novel computational principle for forming invariant representations
during unsupervised learning and active exploration.
