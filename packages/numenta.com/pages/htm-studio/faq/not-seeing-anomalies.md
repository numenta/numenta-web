---
section: Troubleshooting
sort: k
title: Why am I not seeing any anomalies?
---

There are many reasons why this may occur, but some of the most common are:

* If your data does not include any abnormal patterns, then HTM Studio cannot
  detect any anomalies.

* HTM Studio learns and builds models from your data during its initial learning
  period, see question “What is the initial learning period?” HTM Studio needs
  to have enough data points, at least 500, to learn patterns and detect
  anomalies. See a [full list of requirements here](/htm-studio/#start).

* HTM Studio has not detected any anomalies during a given time period for this
  data. Although some of the data may look unusual, if HTM Studio has previously
  learned a pattern then it will not find it anomalous. Try looking at older
  data in the chart to see if similar patterns have previously occurred.
