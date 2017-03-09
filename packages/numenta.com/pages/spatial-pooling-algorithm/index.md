Spatial Pooling Algorithm
========================

The neocortex is composed of a hierarchy of regions. The feedforward input to
each region consists of millions of nerve axons which come from sensory organs
and other regions. Most regions in the neocortex receive input from multiple
sources; it is not uncommon for a region to receive input from six or more other
regions. These inputs are generally mixed together, so a region doesn’t “know”
where the inputs originated or what they represent. Confusing the picture, the
number of input axons doesn’t correlate closely with the size of the region. How
can a region process inputs from many different sources without any prior
knowledge of what these inputs represent, how many input bits there will be, and
what spatial patterns may exist in the input? Spatial Pooling, a learning
mechanism fundamental to both the neocortex and Hierarchical Temporal Memory
(HTM), is the answer to this problem. While we are working on a standalone
chapter for BAMI that will detail the Spatial Pooling algorithm, for now you can
explore the following resources to learn more:

- **HTM School episodes about Spatial Pooling** • [HTM School](https://numenta.org/htm-school/) is a video tutorial series that explains concepts of HTM with an emphasis on visualizations and examples.  These episodes talk about Spatial Pooling and related functions.
    - [Spatial Pooling: Input Space & Connections (Episode 7)](https://www.youtube.com/watch?v=R5UoFNtv5AU)
    - [Spatial Pooling: Learning (Episode 8)](https://www.youtube.com/watch?v=rHvjykCIrZM)
    - [Boosting (Episode 9)](https://www.youtube.com/watch?v=MSwoNAODrgk)

- **Peer-reviewed paper** • This document, authored by Yuwei Cui, Subutai Ahmad and Jeff Hawkins, is a pre-print of a paper submitted to a peer-reviewed journal. The paper contains a detailed description of the Spatial Pooling algorithm, including mathematical derivations and experimental results.
    - [The HTM Spatial Pooler: a neocortical algorithm for online sparse distributed coding](http://biorxiv.org/content/early/2017/02/16/085035)

- **Overview presentation** • This recorded presentation, given by Yuwei Cui, gives an overview of the Spatial Pooling algorithm, following the outline of the peer-reviewed paper previously mentioned. Viewing this presentation in conjunction with reading the paper is recommended. A link to the slide deck used in the presentation is also given.
    - [HTM Spatial Pooler Overview Presentation](https://www.youtube.com/watch?v=1r6GxDsEdd0)
    - [HTM Spatial Pooler Overview Slide Deck](/assets/pdf/spatial-pooling-algorithm/HTM-Spatial-Pooler-Overview.pdf)

- Spatial Pooling algorithm pseudocode • Pseudocode implementing the version of the Spatial Pooling algorithm that is published in NuPIC, Numenta’s open source HTM platform.
    - [Spatial Pooling Algorithm Details](/assets/pdf/spatial-pooling-algorithm/Spatial-Pooling-Algorithm-Details.pdf)
