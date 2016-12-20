---
author: "David Ray"
brief: "They say in order to lead, one must have someplace to go. It's also true that in order to arrive, one must have departed from someplace (duh! :-P). In software optimization, knowing where it is one came from"
date: 2015/02/10
hideImage: false
image: ../images/image.png
org: "Community Contributor"
tags: htm java receives benchmark harness
title: "HTM.java Receives Benchmark Harness"
type: post
---

They say in order to lead, one must have someplace to go. It's also true that in
order to arrive, one must have departed from someplace (duh! :-P). In software
optimization, knowing where it is one came from, (and establishing baselines),
is a very large part of the battle; and the same things that make
[Java™](http://www.oracle.com/technetwork/java/javase/overview/java8-2100321.html)
such an attractive and ubiquitous platform, also make it one of the hardest
environments to benchmark.

Unlike C, which is a statically compiled language, Java is very dynamic and
undergoes very aggressive optimization and runtime profiling while it compiles
down to native code on the fly! As such, there are many pitfalls one can come
across when benchmarking Java code; which is why
[JMH](http://openjdk.java.net/projects/code-tools/jmh/) was chosen for
HTM.java's benchmark tool. JMH was developed as part of the OpenJDK project (the
incubator Oracle draws from to create their "official" JDK), and while it
doesn't make benchmarks infallible, it will help surmount some of the hardest
issues benchmarking Java can present (such as accounting for optimizations: see
[Loop Unrolling](http://en.wikipedia.org/wiki/Loop_unrolling),
[Dead Code Elimination](http://en.wikipedia.org/wiki/Dead_code), and
[Escape Analysis](http://en.wikipedia.org/wiki/Escape_analysis)).

For more detailed information about benchmarking Java please watch:
[the talk by Aleksey Shipilev](http://vimeo.com/78900556),
it's a crucial and informative watch.


### Uhm... Back to [HTM.java](https://github.com/numenta/htm.java), right?

Right! :)

HTM.java's new benchmarking package is not the end of the road - it is just the
beginning. It is a place to "depart" (using the previously established
vernacular). The package can be found in the
["src/jmh/java"](https://github.com/numenta/htm.java/tree/master/src/jmh)
directory, and is comprised of 4 classes to start off with:

* [AbstractAlgorithmBenchmark](https://github.com/numenta/htm.java/blob/master/src/jmh/java/org/numenta/nupic/benchmarks/AbstractAlgorithmBenchmark.java) -
  Base class containing basic setup boilerplate code necessary to initialize the
  [NuPIC](https://github.com/numenta/nupic/wiki) algorithms.

* [SpatialPoolerGlobalInhibitionBenchmark](https://github.com/numenta/htm.java/blob/master/src/jmh/java/org/numenta/nupic/benchmarks/SpatialPoolerGlobalInhibitionBenchmark.java) -
  Loops through 7 encoded (days of the week) inputs multiple times using the
  global inhibition parameter of the SpatialPooler set to true. It is *not* a
  benchmark of a single compute call or "micro benchmark", it is set in place in
  order to detect crucial changes in performance during builds. (The same goes
  with the following two benchmarks).

* [SpatialPoolerLocalInhibitionBenchmark](https://github.com/numenta/htm.java/blob/master/src/jmh/java/org/numenta/nupic/benchmarks/SpatialPoolerLocalInhibitionBenchmark.java) -
  Same as above except with the global inhibition flag set to false.

* [TemporalMemoryBenchmark](https://github.com/numenta/htm.java/blob/master/src/jmh/java/org/numenta/nupic/benchmarks/TemporalMemoryBenchmark.java) -
  Exercises the TemporalMemory using the 7 SDR's obtained from the SpatialPooler
  output (though it is stand alone and can be run by itself), performing the
  same loop as the SpatialPooler benchmarks.


### Gradle Build Integration

The [build.gradle](https://github.com/numenta/htm.java/blob/master/build.gradle)
file, is configured to run the above benchmarks (they only take one minute)
during Travis CI, continuous integration builds.

> Fun Fact: The SpatialPooler benchmark is run 1000 times for the "warm up" and
> 1000 times for the "timing run"; likewise the TemporalPooler is run 45,000
> times for each) A lot can happen in one minute!

These can also be run on the command line using:

* `gradle check` - Will build the sources and then run the benchmark at
  the end of the build run.

* `gradle -Pskipbench check` - Will **skip** the benchmark run at the
  end of the build (for those times when you simply want a quick check of the build).

Human readable results can be found in:
"\<git source dir\>/build/reports/jmh/human.txt".

The jar file created by the "gradle check" command can be found at:
"\<source dir\>/build/libs/htm.java-0.40-jmh.jar". The following command can be
executed (from inside the "\<source dir\>/build/libs" directory) to simply run
the benchmarks **after** "gradle check" has been run **at least once**.

    java -jar htm.java-0.40-jmh.jar

The "0.40" part of the file name may change when new versions of HTM.java
are released.

### You can contribute too!

In addition, any classes found in the "src/jmh/java" directory will be
*automagically* run during "gradle check".

The "src/jmh/java" directory was chosen by the author of the jmh gradle plugin
as a means of allowing the integration of benchmarks into any project without
having to create a separate project directory structure. (Big Kudos to
[Cedric Champeau](https://github.com/melix/jmh-gradle-plugin)) Thanks!

In addition, there is a text file located
[here](https://github.com/numenta/htm.java/tree/master/src/jmh/resources)
entitled "jmh_defaults.txt" which lists all the jmh command line flags the
gradle plugin supports - for your convenience!

**Happy Benchmarking!**

[Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/2vghup/htmjava_receives_benchmark_harness/)
