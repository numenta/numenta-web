---
author: "Numenta"
brief:
date: 2016/07/24
event:
  what: "Numenta Anomaly Benchmark Competition for Real-time Anomaly Detection @ IEEE WCCI 2016"
  when:
    begin: 2016/07/24
    end: 2016/07/29
  where:
    desc: "IEEE WCCI 2016"
    city: "Vancouver"
    state: "British Columbia"
    country: "Canada"
    web: http://numenta.com/numenta-anomaly-benchmark/
  who:
  why:
image: ../images/image.png
org: "Event"
tags: numenta anomaly benchmark competition nab ieee wcci world congress computational intelligence 2016
title: "IEEE WCCI 2016 - Numenta Anomaly Benchmark Competition"
type: post
---

---

> **UPDATE:** *The Numenta Anomaly Benchmark (NAB) Competition concluded in
  July 2016. You can read about the [contest winners here][win].*

---

Welcome to the [Numenta Anomaly Benchmark (NAB)][nab] Competition for Real-Time
Anomaly Detection at [IEEE WCCI 2016][wcci] (World Congress on Computational
Intelligence).

### About Competition

Do you have an algorithm that detects anomalies in streaming data? Or a dataset
of real-world, time-series data with labeled anomalies? If so, you’re encouraged
to enter the Numenta Anomaly Benchmark (NAB) Competition.

Read more on the Numenta company blog: <br />
http://numenta.com/blog/2016/02/11/numenta-anomaly-benchmark-contest-ieee-wcci-2016/

### What is NAB?

The Numenta Anomaly Detection Benchmark (NAB) attempts to provide a controlled
and repeatable environment of open-source tools to test and measure anomaly
detection algorithms on streaming data.

* NAB is available at: http://numenta.com/numenta-anomaly-benchmark/
* Learn More about NAB in this paper: http://arxiv.org/abs/1510.03336
* NAB Video Presentation: https://www.youtube.com/watch?v=SxtsCrTHz-4

### Why is it important?

Much of the world’s data is streaming, time-series data, where anomalies give
significant information in often-critical situations; examples abound in domains
such as finance, IT, security, medical, and energy. Yet detecting anomalies in
streaming data is a difficult task, requiring detectors to process data in
real-time, not batches, and learn while simultaneously making predictions.

### What is the NAB competition?

[Numenta][nta] is conducting this competition in association with the IEEE WCCI
(World Congress on Computational Intelligence). The WCCI NAB competition has two
categories:

1. **Algorithms:** what is the best algorithm for detecting anomalies in
  streaming data?
1. **Datasets:** what is the best data contribution to the benchmark corpus?

### How do I enter?

You may submit to either the algorithms or datasets components, or both. Please
send all submissions to [nab@numenta.org][email].

#### Algorithms Category

To enter the Algorithms category, you must submit your anomaly detection
algorithm and the results of running it on NAB. Deliverables include:

* Detailed description of algorithm(s), including NAB results
* Code to run your algorithm and recreate the results (link to Github repository
  is fine)
* List of contributors and contact information

We will evaluate your algorithm by running your code on NAB v1.0, given it meets
the requirements described above. Final results will be disclosed at the
conference, and then posted to the NAB repository scoreboard.

#### Dataset Category

To enter the Dataset category, you must submit real-world, time-series data with
labeled anomalies. Deliverables include:

* Data file(s) in CSV format
  * One header row
  * Fields for "timestamp" (time at the end of the metric collection window) and
    "value" (the metric as either float or integer)
* Anomaly labels &mdash; timestamps at which the anomalies start
* Description of the data and anomalies

We will evaluate your dataset against the following characteristics:

* Meeting the requirements described above
* Interesting types of anomalies
* Relevance to real applications
* Accuracy/quality of anomaly labels
* Good challenges for detection algorithms
* Quantity of data &mdash; the more files in your submission the better
* Feasibility for algorithms to detect anomalies
  * We can not expect noisy data without temporal patterns to be valuable in
    evaluating algorithms, and thus this type of data will not be useful in NAB.

### What are some example entries?

We’ve provided two example entries to give you an idea of what a submission in
each category would look like.

#### Dataset Category

Attached with this entry are two data files of satellite data. These are
station-keeping metrics for a Planet Labs “Dove”, an Earth-imagery
cubesat<sup>[1,2]</sup> currently in orbit! The file `dove_array_temp.csv`
contains 10,000 records of the satellite’s external temperature, where the
metric is degrees Celsius. The file `dove_p.csv` is 6,610 records of the p-axis
vector (in radians); this is one axis of a 4x1 quaternion that is used to orient
the spacecraft<sup>[3]</sup>. Both files have a column for timestamps in
`m/d/yy h:mm` format, and one column for the metric values. The accompanying
JSON file `dove_labels.json` contains anomaly labels for both of these files in
the NAB format, where timestamps denote the start of each anomaly. The
temperature data shows three anomalies: the first and third anomalies are
fluctuations in the normal periodicity that correspond to attitude correction
maneuvers as the satellite rotates in its nadir-pointing orbit<sup>[4]</sup>,
and the spike anomaly is where the temperature sensor has been exposed to direct
sunlight. The quaternion data shows four anomalies, each representing rotational
drag of the spacecraft due to the solar arrays; these are deployed like wings
from the spacecraft and feel a pushing force from solar rays. Also included are
plots showing the data and anomaly points.

<sup>[1]</sup> https://www.planet.com/
<br />
<sup>[2]</sup> https://en.wikipedia.org/wiki/CubeSat
<br />
<sup>[3]</sup> https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation
<br />
<sup>[4]</sup> https://en.wikipedia.org/wiki/Nadir

#### Algorithms Category

The table below shows the results of running my algorithm, “BAD”, on NAB.

|   | Standard profile | Reward low-FP profile | Reward low-FN profile |
| - | ---------------- | --------------------- | --------------------- |
| **NAB score** | 38.3 | 33.3 | 42.0 |

The algorithm bags together two outlier detectors, “outliers”<sup>[1]</sup> and
“extremevalues”<sup>[2]</sup>, which are both open-source R packages. To bag
them they are run independently, each producing a probability that a given data
point is anomalous, and the mean of these probabilities is the final anomaly
likelihood. Running the NAB threshold optimization step, my algorithm has a
detection threshold of 0.89 for all three scoring profiles. More info, along
with the open-sourced code and NAB results files, can be found in the GitHub
repository<sup>[3]</sup>. This repo includes directions on how to run the R
code, which will generate CSV files with anomaly detections that you can then
run through the NAB scoring system.

<sup>[1]</sup> https://cran.r-project.org/web/packages/outliers/index.html
<br />
<sup>[2]</sup> https://cran.r-project.org/web/packages/extremevalues/index.html
<br />
<sup>[3]</sup> https://github.com/numenta/NAB

### What are the rules?

* Entrants may make more than one submission in each category, but the
  algorithms/datasets must be unique (i.e. not just a tweak in the parameters).
* Results from submitted algorithms must be reproducible; either the algorithm
  code is open source or accompanied with a sufficient documentation detailing
  the algorithm.
* Submitted algorithms must meet the following criteria:
  * Any sort of look ahead is not allowed. Detections by the algorithm must be
    made on the fly, one record at a time.
  * There must be no batch, or per data file, manual parameter tuning. The
    algorithm must be fully automated with a single set of parameters across all
    data files. Any further parameter tuning required by the algorithm must be
    done on the fly. For example, it is not possible to look through a dataset,
    set a threshold, and then run through the data again. (One exception to this
    rule is that we allow the algorithm to know the range of data values for
    each data file. In the NAB detector code, the min/max value of each data
    file is passed in automatically when each algorithm is initialized.)
  * The algorithm treats each file independently. The algorithm is initialized
    from scratch for each stream using a single constant set of parameters.
  * It is not required to use NAB code to run your algorithm, but the reported
    scores must have been generated using the NAB scoring code. There are
    several ways to do this as detailed in the NAB wiki [3].
* Submitted data must meet the following criteria:
  * Data files must be consistent with the existing NAB format and work with the
    existing codebase
  * Univariate time-series data, from a real-world source.
  * Each stream must be greater than 1000 records, where each record represents
    an equal amount of time (e.g. 5-minute intervals), and records are in
    chronological order.
  * Any submission, regardless of eventual competition outcome, may be included
    in NAB. As such the data must be freely sharable; anyone will be able to
    view and download it from the NAB repository. Appropriate acknowledgment
    will be given.
  * The data must be accompanied by a set of anomaly labels, along with a
    description of the data source.
* Official contest entrants must be participants of WCCI, however non-attendees
  are still eligible to win prizes outside of the conference. Numenta will judge
  submissions in two separate groups:
  * WCCI attendees will be eligible for cash prizes and winners will be
    announced by conference staff during the event.
  * Non-WCCI attendees will be eligible for cash prizes and will be announced
    separately by Numenta after WCCI.

### What are the prizes?

For entrants participating in WCCI, Numenta will award cash prizes of $2,500 for
the algorithm component, and $2,500 for the dataset component. A single entrant
is eligible to win both. Prizes for each category will only be awarded if there
are at least three entrants in the category. For a submission in the algorithms
component to be eligible for prize money, its NAB score must be greater than
that of a random detector.

For entrants not participating in WCCI, Numenta will award the same amounts
under the same guidelines.

### When is the deadline?

Submissions are due July 1, 2016 to allow the judges ample time to validate the
results. Yet we encourage early submissions and questions such that we may help
ensure the submissions qualify. Please send submissions and questions to us at
[nab@numenta.org][email].

### About Conference

IEEE WCCI has traditionally been the largest technical event in the field of
computational intelligence, hosting three separate prestigious conferences
(IJCNN, FUZZ-IEEE, IEEE CEC) under one roof. Over the years the event has
provided a platform for highly acclaimed intellectuals from all over the world
to discuss and present their research findings on computational intelligence.
The organizing committee will put in place a rich and varied technical program
which is designed to engage participants in cross-fertilization of ideas among
the three big areas in computational intelligence. The event will also offer a
series of social functions, such as welcome reception, conference banquet etc.,
which will serve as a good channel to establish new connections and foster
everlasting friendship among fellow counterparts.

[email]: mailto:nab@numenta.org
[nab]: /numenta-anomaly-benchmark/
[nta]: /
[wcci]: http://www.wcci2016.org/programs.php?id=home
[win]: /blog/2016/08/10/numenta-anomaly-benchmark-nab-competition-2016-winners/
