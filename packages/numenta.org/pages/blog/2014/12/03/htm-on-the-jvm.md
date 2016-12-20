---
author: "Matthew Taylor"
brief: "Bringing NuPIC to Java is an important milestone in NuPIC technology due to the size and significance of Java's user base. Because Java is the world's most used programming language, HTM now has the advantage"
date: 2014/12/03
hideImage: false
image: ../images/image.png
org: "Open Source Manager"
tags: htm java hierarchical temporal memory open source community project
title: "HTM in Java!"
type: post
---

**[Introducing the feature-complete htm.java project!](https://github.com/numenta/htm.java)**
Thanks to a _**lot**_ of effort by [David Ray](https://github.com/cogmission),
the [NuPIC hacker community](/community/), and Numenta's own development staff,
a fully usable version of NuPIC (minus swarming and OPF functionality ➟ _coming
soon!_) is now available in **Java**.

This port is 100% functionally equivalent to
[NuPIC's Network API](https://github.com/numenta/nupic/wiki/NuPIC-Architecture).

[See the **complete javadocs** here!](http://numenta.org/docs/htm.java/)

Bringing NuPIC to Java is an important milestone in NuPIC technology due to the
size and significance of Java's user base. Because Java is the world's most used
programming language, HTM now has the advantage of being exposed to an
extraordinary amount of new developers and users.

**[htm.java](https://github.com/numenta/htm.java)** is easy to setup and
configure, and because the JVM is such a common runtime, that means instant
availability on platforms like Windows and all Linux flavors without the use of
a virtual machine (not to mention mobile devices!)

The community is fully committed to adding all the support tools and
infrastructure the Python version enjoys, and those are the next milestones to
be worked on. There is already a
"[HelloSP](https://github.com/numenta/htm.java-examples/blob/master/src/main/java/org/numenta/nupic/examples/sp)"
example created by a community member. Here is the constructor:

```java
/**
 *
 * @param inputDimensions   The size of the input.  {m, n} will give a size of m x n
 * @param columnDimensions  The size of the 2 dimensional array of columns
 */
HelloSP(int[] inputDimensions, int[] columnDimensions) {
  inputSize = 1;
  columnNumber = 1;
  for (int x : inputDimensions) {
    inputSize *= x;
  }
  for (int x : columnDimensions) {
    columnNumber *= x;
  }
  activeArray = new int[columnNumber];

  parameters = Parameters.getSpatialDefaultParameters();
  parameters.setParameterByKey(KEY.INPUT_DIMENSIONS, inputDimensions);
  parameters.setParameterByKey(KEY.COLUMN_DIMENSIONS, columnDimensions);
  parameters.setParameterByKey(KEY.POTENTIAL_RADIUS, inputSize);
  parameters.setParameterByKey(KEY.GLOBAL_INHIBITIONS, true);
  parameters.setParameterByKey(KEY.NUM_ACTIVE_COLUMNS_PER_INH_AREA, 0.02*columnNumber);
  parameters.setParameterByKey(KEY.SYN_PERM_ACTIVE_INC, 0.01);
  parameters.setParameterByKey(KEY.SYN_PERM_TRIM_THRESHOLD, 0.005);

  sp = new SpatialPooler();
  mem = new Connections();
  parameters.apply(mem);
  sp.init(mem);
}
```


And here is the usage:

```java
public static void main(String args[]) {
  HelloSP example = new HelloSP(new int[]{32, 32}, new int[]{64, 64});

  // Lesson 1
  System.out.println("\n \nFollowing columns represent the SDR");
  System.out.println("Different set of columns each time since we randomize the input");
  System.out.println("Lesson - different input vectors give different SDRs\n\n");

  //Trying random vectors
  for (int i = 0; i < 3; i++) {
    example.createInput();
    example.run();
  }

  //Lesson 2
  System.out.println("\n\nIdentical SDRs because we give identical inputs");
  System.out.println("Lesson - identical inputs give identical SDRs\n\n");

  for (int i = 0; i < 75; i++) System.out.print("-");
  System.out.print("Using identical input vectors");
  for (int i = 0; i < 75; i++) System.out.print("-");
  System.out.println();

  //Trying identical vectors
  for (int i = 0; i < 2; i++) {
    example.run();
  }

  // Lesson 3
  System.out.println("\n\nNow we are changing the input vector slightly.");
  System.out.println("We change a small percentage of 1s to 0s and 0s to 1s.");
  System.out.println("The resulting SDRs are similar, but not identical to the original SDR");
  System.out.println("Lesson - Similar input vectors give similar SDRs\n\n");

  // Adding 10% noise to the input vector
  // Notice how the output SDR hardly changes at all
  for (int i = 0; i < 75; i++) System.out.print("-");
  System.out.print("After adding 10% noise to the input vector");
  for (int i = 0; i < 75; i++) System.out.print("-");
  example.addNoise(0.1);
  example.run();

  // Adding another 20% noise to the already modified input vector
  // The output SDR should differ considerably from that of the previous output
  for (int i = 0; i < 75; i++) System.out.print("-");
  System.out.print("After adding another 20% noise to the input vector");
  for (int i = 0; i < 75; i++) System.out.print("-");
  example.addNoise(0.2);
  example.run();
}
```


Running this example code prints out the resulting SDRs to the console like this:

```java
Now we are changing the input vector slightly.
We change a small percentage of 1s to 0s and 0s to 1s.
The resulting SDRs are similar, but not identical to the original SDR
Lesson - Similar input vectors give similar SDRs

---------------------------------------------------------------------------After adding 10% noise to the input vector-----------------------------------------------------------------------------------------------------------------------------------------------------------Computing the SDR----------------------------------------------------------------------
[63, 197, 286, 360, 400, 517, 518, 559, 561, 587, 590, 611, 619, 645, 704, 811, 1022, 1065, 1184, 1407, 1461, 1554, 1574, 1652, 1686, 1704, 1765, 1772, 1849, 1871, 1945, 2090, 2125, 2159, 2203, 2213, 2233, 2288, 2358, 2367, 2415, 2434, 2462, 2599, 2609, 2617, 2755, 2862, 2889, 2938, 2967, 2976, 2995, 3010, 3018, 3057, 3104, 3126, 3226, 3341, 3370, 3373, 3394, 3398, 3399, 3479, 3484, 3540, 3637, 3662, 3669, 3712, 3754, 3817, 3875, 3915, 3941, 3977, 3989, 4034, 4082]
---------------------------------------------------------------------------After adding another 20% noise to the input vector-----------------------------------------------------------------------------------------------------------------------------------------------------------Computing the SDR----------------------------------------------------------------------
[63, 197, 286, 310, 360, 400, 418, 517, 518, 559, 561, 587, 611, 619, 704, 811, 1022, 1065, 1184, 1248, 1461, 1485, 1552, 1554, 1574, 1611, 1652, 1669, 1686, 1704, 1772, 1849, 2090, 2125, 2159, 2203, 2213, 2233, 2367, 2415, 2434, 2462, 2545, 2599, 2609, 2617, 2755, 2846, 2862, 2889, 2938, 2967, 2976, 2995, 3008, 3010, 3018, 3057, 3104, 3106, 3126, 3226, 3264, 3341, 3370, 3394, 3399, 3479, 3484, 3540, 3637, 3664, 3669, 3712, 3875, 3915, 3959, 3977, 3989, 4034, 4082]
```


This is an outstanding milestone for Numenta, NuPIC and the NuPIC community
because of all the advantages the Java language brings with it. It shows that
the NuPIC community contains a full and vibrant user base that is very committed
to the success of NuPIC and HTM technologies. The development of the Java
version by the NuPIC community also validates the choice of making NuPIC open
source, showing that its community desires a fully compliant version of NuPIC
that is easy to manage, install and widely applicable.

### Want to get involved?

Are you a Java programmer interested in neocortically-inspired machine
intelligence? Check out the
[**htm.java** road map](https://github.com/numenta/htm.java/wiki/Roadmap)
and find out where we need help. Create some sample applications and get your
feet wet with HTM on the JVM.


### Thanks

On a personal note, I'd like to give a big thank you to David Ray. He came to us
earlier this year with a plan for this Java port and the full intention of
giving the codebase over to Numenta for management. Over the past several
months, he has worked tirelessly reading the NuPIC codebase and painstakingly
creating Java versions of all our algorithms. Congratulations to David for
reaching this milestone and creating a complete port of NuPIC.

[Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/2o5zp3/htm_in_java/)
