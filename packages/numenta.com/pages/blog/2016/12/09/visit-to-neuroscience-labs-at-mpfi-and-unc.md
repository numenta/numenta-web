---
author: "Yuwei Cui"
brief: "The mission of Numenta is to discover the computational principles of the neocortex, the seat of intelligence in our brain. We believe this endeavor requires a detailed understanding of experimental neuroscience"
date: 2016/12/09
hideImage: false
image: ../images/image.png
org: "Research Engineer"
tags: neuroscience lab mpfi unc numenta research engineer brain neocortex active dendrite machine intelligence
title: "Visit to Neuroscience Labs at MPFI and UNC"
type: post
---

The mission of Numenta is to discover the computational principles of the
neocortex, the seat of intelligence in our brain. We believe this endeavor
requires a detailed understanding of experimental neuroscience, and engaging in
discussions with experimental neuroscientists. In October, our VP of Research
Subutai Ahmad and I visited two neuroscience institutes on the east coast, the
[Max Planck Florida Institute of Neuroscience][1] (MPFI) and the
[Neuroscience Center at the University of North Carolina][2] (UNC). During these
trips, we had fruitful discussions with neuroscience research group leaders,
postdoctoral researchers and graduate students.  We were also pleased that
several research groups expressed interest in collaboration. We believe such
exchanges with experimental neuroscience groups will help inform and guide
future HTM research.

We planned this trip several months ago. It originated due to our previous
presentations at academic conferences. Subutai gave a presentation at a workshop
at the HHMI Janelia Farm research campus last year, and I gave a presentation at
the Dendrite Workshop in Crete, Greece this June. Due to these presentations and
our recent [publications of HTM theory][3], researchers at MPFI and UNC became
aware of our work at Numenta and invited us to visit their institutes. We
believe our efforts to present at academic conferences and publish in scientific
journals are highly valuable, as it represents an important step to collaborate
with neuroscience researchers.

We hope to do more such trips over the next year, and look forward to increased
collaborations with experimental neuroscientists.  At Numenta we rely on
experimental findings, and it is our hope that new discoveries will continue to
inform our ongoing research efforts at Numenta.

For those interested in learning more about the details of our discussions
during our trips, I’ve included information below.   

### Experimental neuroscience, two-photon imaging, and HTM

Traditionally, learning and predicting temporal sequences has not been a focus
in studies of sensory cortical areas. However, the ability to recognize and
memorize temporal sequences from sensory input streams is critical for almost
all cortical functions, from sensory perception to behavior generation, Recent
studies suggest that even V1 can learn sequences (Gavornik and Bear, Nature
Neuroscience 2016). At MPFI and UNC, Subutai and I presented the HTM sequence
memory, a model of how sequence learning could occur in the cortex based on
nonlinear active dendrites. The neuroscientists we spoke to are excited about
the idea that the primary sensory cortices could also learn sequences, something
completely different from what is described in neuroscience textbooks. They like
the idea of testing predictions of HTM theory and using HTM as a theoretical
framework to design and interpret future experiments.

In the past few years, several major advances in experimental techniques have
allowed simultaneous recording of a large neuronal populations in awake,
behaving animals. At MPFI and UNC, we witnessed neuroscience experiments with
state-of-the-art two-photon calcium imaging techniques. When neurons become
active, calcium flows into the cell through ion channels, which causes a
transient rise in the calcium level in the postsynaptic cell. Scientists have
designed a variety of molecules that respond to the binding of calcium ions by
changing their fluorescence properties. Sounds complex, but this just means the
neurons emit light when they become active. This revolutionary technique allows
scientists to monitor hundreds of neurons, in real-time in living animals, just
by using a camera! Here is a [video][4] of calcium imaging from mouse V1 during
presentations of drifting grating stimuli.

In a [recent study published in Nature Neuroscience][5], PhD student Dan Wilson
and Postdoc David Whitney from Prof. Fitzpatrick's lab at MPFI assessed the
orientation tuning of individual dendritic spines and evaluated how the
nonlinear dendritic property shapes the computation of cortical pyramidal
neurons. Non-linear dendrites are a key component of HTM theory and we were
impressed by this ability to record live from populations of dendritic spines of
single neurons (spines are essentially synapses). Prof. Spencer Smith at UNC has
published several important [papers on active dendrites][6]. In his lab,
researchers are now developing [next generation 2-photon imaging systems][7],
which enable simultaneously recording neuronal activities from multiple brain
areas with expanded fields of view. This technique was published in
[Nature Biotechnology][7] earlier this year.

HTM theory is constrained by neuroscience evidence, and as such these
experimental techniques can be useful tools to test predictions of the theory.
We have described a set of testable experimental predictions in a
[paper published in Frontiers in Neural Circuits][8]. For example, HTM theory
predicts that each sensory input activates a sparse set of cells that are
specific to the context of a sequence. These cells will then trigger active
dendritic spikes and depolarize another set of cells that correspond to the
upcoming inputs. In the future we hope it will be possible to directly test the
presence of such "cell assemblies" with two-photon imaging or other techniques.

[1]: https://www.maxplanckflorida.org/
[2]: https://www.med.unc.edu/neuroscience
[3]: /papers/
[4]: https://www.youtube.com/watch?v=Y6DhBBWJrJU
[5]: http://www.nature.com/neuro/journal/v19/n8/full/nn.4323.html
[6]: http://www.nature.com/nature/journal/v503/n7474/full/nature12600.html
[7]: http://www.nature.com/nbt/journal/v34/n8/full/nbt.3594.html?WT.ec_id=NBT-201608&spMailingID=52025126&spUserID=MTc1NjM1OTIxMDES1&spJobID=981583612&spReportId=OTgxNTgzNjEyS0
[8]: http://journal.frontiersin.org/article/10.3389/fncir.2016.00023/full
