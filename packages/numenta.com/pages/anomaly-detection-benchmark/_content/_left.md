---
---

[biz]:  /assets/pdf/numenta-anomaly-benchmark/NAB-Business-Paper.pdf
[nab]:  /numenta-anomaly-benchmark/
[peer]: http://arxiv.org/abs/1510.03336

Sensors and data streams are proliferating as the Internet of Things vision
becomes realized. However, using the data from these sensors is not so easy.
Specifically, being able to identify anomalies in streaming data is surprisingly
difficult. Most techniques are a form of thresholds, i.e. predetermined limits
that must be set to notify abnormalities. However, thresholds have some glaring
weaknesses, including often finding a problem after it has happened, not before,
and not adapting to new states, such that false positives can crowd out the
important signal.

We created the **Numenta Anomaly Benchmark (NAB)** in order to be able to
measure and compare results from algorithms designed to find anomalies in
streaming data. NAB is an open source framework consisting of:

* A dataset with real-world, labeled data files
* A scoring mechanism that rewards early detection and on-line learning

### Resources

* Business Paper: [The Numenta Anomaly Benchmark][biz]
* Technical Peer-Reviewed Paper:
  [Evaluating Real-time Anomaly Detection Algorithms – the Numenta Anomaly Benchmark][peer]
* [More Information][nab]
