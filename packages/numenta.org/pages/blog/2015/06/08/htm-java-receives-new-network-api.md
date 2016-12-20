---
author: "David Ray"
brief: "Until now, Java users of NuPIC had to be content with piecing together individual algorithmic components by supplying their own duct-tape, stitching and glue. This is no longer necessary, as the NAPI is very robust; has lots of"
date: 2015/06/08
hideImage: false
image: ../images/image.png
org: "Community Contributor"
tags: htm java network api update
title: "HTM.java Receives New Network API"
type: post
---

Greetings Earthlings! (...and otherwise affiliated) :-) We're
_[ insert understatement here ]_ "_**excited**_?" to announce the completion of
the Network API **(NAPI)** for the
[Java™](http://www.oracle.com/technetwork/java/javase/overview/java8-2100321.html)
port of [NuPIC](https://github.com/numenta/nupic/wiki). This addition to
[HTM.java](https://github.com/numenta/htm.java) will usher in a whole new realm
of possibilities for application integration and for streaming data
applications.

**Stream of consciousness you say? Maybe someday... :-)** For now let us be
content with easy integration of [Numenta's](http://numenta.com) learning,
prediction, and anomaly detection algorithms into new forward-thinking Java
applications; distributed data applications; and enterprise ecosystems.

Until now, Java users of NuPIC had to be content with piecing together
individual algorithmic components by supplying their own duct-tape, stitching
and glue. This is no longer necessary, as the NAPI is very robust; has lots of
features, and most importantly - is **hypnotizing-ly easy to work with!**

Here's an example of the code it takes to get a full featured network up and
running:

```java
Parameters p = NetworkDemoHarness.getParameters();
p = p.union(NetworkDemoHarness.getNetworkDemoTestEncoderParams());

Network network = Network.create("Network API Demo", p)
  .add(Network.createRegion("Region 1")
  .add(Network.createLayer("Layer 2/3", p)
  .alterParameter(KEY.AUTO_CLASSIFY, Boolean.TRUE)
  .add(Anomaly.create())
  .add(new TemporalMemory())
  .add(new SpatialPooler())
  .add(Sensor.create(FileSensor::create, SensorParams.create(
    Keys::path, "", ResourceLocator.path("rec-center-hourly.csv"))))));

network.start();
```

**...and that's it!**  

For less "ear-chattering" and more "quick-starting", see the
[Quick Start Guide & Docs](https://github.com/numenta/htm.java/wiki/NAPI-Quick-Start-Guide).


### Decided to stick around eh?

Well, since you're here, let's talk more about how the NAPI is designed and a
bit more about its features.

In **HTM.java**, the hierarchical entities seek to provide corollaries to actual
biological structures. A Network can be thought of like a single neocortex,
while a Region can be thought of as a location in the neocortex that is
sensitized to a particular function, behavior or memory. Lastly, Layers are
metaphors for actual layers in the neocortex such as the 6 layers identified by
neurological researchers. Thus, in HTM.java, the Layer is the container for the
_**Connections**_ object and eventually will hold the column/cell matrix that
the Connections object now holds. (**Hint!:** Work to be done here). The
SpatialPooler and TemporalMemory describe how connections are formed and their
associations, and algorithmic data flow - but are not physical members of a
hierarchy - they describe **how** data **flows**.

At the top level there is the Network. A Network is a container of Regions,
which in turn contain Layers, which in turn contain _**Columns**_, _**Cells**_,
_**Dendrites**_ and _**Synapses**_ - and are acted upon by the different
algorithms (i.e. SP, TM etc.). A Network can be both listened to and it can have
data submitted to it. In fact, this is its normal usage pattern.

Regions are collections of Layers. While they are not an optional construct
within a Network, they also don't do all that much. Regions are best thought of
as "groups" of algorithmic hierarchies that may in the future, specialize on
types of knowledge or types of behavior or other functionality. They are here
mostly to provide a corollary to Regions in the neocortex - but mostly they are
meant to identify and distinguish layers of functionality specialized for a
particular purpose.

The last level in the hierarchy is the _**Layer**_. Layers contain the
column/cell matrix (_**Connections**_) and house all the algorithmic and
functional components. This is where the heart of the NAPI beats. Layers house
most of the functionality - automatically forming computational units
implemented via RxJava Observables which know how to connect one algorithm to
another, transforming its data in the process in order to input data to the next
succeeding algorithm (whatever it may be) in the format that that algorithm
expects. Layers emit _**Inference**_ objects when subscribed to (either via
their `Layer.subscribe()` method or by retrieving their `Observable<Inference>`
object, and calling `Observable.subscribe()` on it); and may have data directly
submitted to them via the `onNext()` method of their `Observable`. To retrieve
their `Observable`, simply call `Layer.observe()` which returns an
`Observable<Inference>` object. While the `Layer` object is flexible enough to
function this way, the typical usage pattern will be to create a _**Network**_
object (with a _**Sensor**_ connected at the bottom), start it; then subscribe
to it via its `Observable` (`Network.observe()`), in order to receive its
emitted `Inference` objects. All hierarchy objects may be "listened" to by
calling (_**Network.observe()**_, _**Region.observe()**_, or
_**Layer.observe()**_ / _**Layer.subscribe()**_).

The _**Inference**_ object emitted contains a vast amount of information such as
the predicted columns, the previously predicted columns, the activated columns
etc. In addition data may be retrieved from a given `Layer` following each cycle
also.


### Usage (A bit of FRP)

First, as you can see above, entire networks can be constructed using the
"fluent" style of declaration (all one method call chain). This reduces
boilerplate typing and clarifies the hierarchical structure of the api's
constructs.

Secondly, the whole framework is designed with Streaming data and Asynchronous
usage in mind. The network's _**Sensors**_ were implemented using the Java 8
Streams API and will be totally asynchronous ready when work on the various
_**Encoders**_ is completed to make them thread safe.

> HTM.java's `Stream` usage has been customized to include "batching" of input -
> speeding up parallel processing by up to 30 or 40%. The
> [`BatchedCsvStreamBenchmark`](https://github.com/numenta/htm.java/blob/master/src/test/java/org/numenta/nupic/network/sensor/BatchedCsvStreamBenchmark.java)
> test class can be run as a demonstration. (Your mileage may vary.)

Finally, the
[RxJava Reactive Extensions library](http://reactivex.io/documentation/observable.html)
was used throughout to simplify the connection of algorithms within
a _**Layer**_.

Think about it...

> _Each Layer can contain one or more components, and it is unknown which ones
> will exist in any given Layer. Next, these components all output different
> data and take in different data in different combinations. So a framework that
> allows for all of this must be adaptable and able to transform data based on
> the dynamic existence or non-existence of any particular algorithm
> or component!_

Additionally, because at all levels (except the bottom input level),
_**Inference**_ objects are passed between components, layers and regions;
RxJava Observables can be obtained at any point in the hierarchy, and subscribed
to to receive output data --or-- they can be combined, operated upon and
manipulated in Map-Reduce form! **How exciting is that?**

> _**This means that you can take output from any point and operate on it
> (combine, zip, merge, delay etc.) in your own applications using RxJava
> idioms!**_


### A bit about input / output (FEED ME!)

This is discussed in more detail in the wiki linked below, but we just wanted to
touch on this briefly.

Networks can be fed either by connecting them to receive streaming data
"automatically" by declaring a _**FileSensor**_ or _**URLSensor**_. Additionally
you can call _**Layer.compute()**_ directly with either an **int[]**,
**String[]** (not fully implemented), **Map** (like an encoder mapping), or
**ManualInput** object. Lastly, you can use an _**ObservableSensor**_ to either
feed in data manually/programmatically **--or--** connect to other Observable
emitters within your applications!

> `ManualInput` objects inherit from `Inference` (the interface received on
> output and passed between layers, regions, and other components)

At the other end, _**Networks**_ can be subscribed to in order to receive data
"out of the top" (And so can Regions, and Layers - see _**Region.observe()**_
and _**Layer.observe()**_ ).

Here's a brief look at the Observable interface's simplicity:

```java
Observable<Inference> o = network.observe();
// This Observable can be used a million different ways!
o.subscribe(new Subscriber<Inference>() {
  @Override public void onCompleted() {
    // Do finalization work here if desired
  }

  @Override public void onError(Throwable e) {
    // Error handling here
  }

  @Override public void onNext(Inference i) {
    // Called on every cycle of the Network - work is done here
  }
});
```


### Where do I fit in?

Now that the ground work has been laid, there is a **TON** of things to do! If
you would like to get your name in bright lights, or simply help out with
HTM.java drop a line to the **hackers** mailing list and offer to help - all are
welcome (at any level!).

For more in depth information (Work in progress), start here with the
[NAPI - In-Depth Component Overview](https://github.com/numenta/htm.java/wiki/NAPI-In-Depth-Component-Overview);
which leads into a tutorial series of wiki pages and docs.

To dig right in, look at the [Quick Start
Guide](https://github.com/numenta/htm.java/wiki/NAPI-Quick-Start-Guide)

### Lastly...

I'd like to mention that I've had a lot of help from my team members and the
leadership at Cortical.io with organizing my work, and also being generously
granted the time to work on this project! (I have such a **great** job!) - Thank
you!

Happy Hacking!

**Next:**

* [Quick Start Guide](https://github.com/numenta/htm.java/wiki/NAPI-Quick-Start-Guide)
* [Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/392kao/htmjava_receives_new_network_api/)
