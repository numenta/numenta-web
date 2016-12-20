---
title: HTM Studio - Supported Date/Time Formats
---

The following document gives details on the supported date/time formats which
HTM Studio can input. This file is auto-generated and will be updated
periodically.

◄ [Back to HTM Studio](/htm-studio/)


### UNIX

HTM Studio supports UNIX timestamps in seconds and milliseconds. If you are
using a UNIX timestamp, you must have a header row in your data file. The header
of the column with date/time needs to contain either the word "**date**" or
"**time**".

---

*Last Generated*: Thu Jun 23 2016 09:07:21 GMT-0700 [Source](https://raw.githubusercontent.com/numenta/numenta-apps/master/unicorn/app/config/momentjs_to_datetime_strptime.json)

### ISO 8601

| Format | Example |
| ------ | ------- |
| YYYY-MM-DDTHH:mm:ss.SSSZ | 2016-06-23T09:07:21.205-07:00 |
| YYYY-MM-DDTHH:mm:ss.SSZ | 2016-06-23T09:07:21.20-07:00 |
| YYYY-MM-DDTHH:mm:ss.SZ | 2016-06-23T09:07:21.2-07:00 |
| YYYY-MM-DDTHH:mm:ss.SSS | 2016-06-23T09:07:21.205 |
| YYYY-MM-DDTHH:mm:ss.SS | 2016-06-23T09:07:21.20 |
| YYYY-MM-DDTHH:mm:ss.S | 2016-06-23T09:07:21.2 |
| YYYY-MM-DDTHH:mm:ssZ | 2016-06-23T09:07:21-07:00 |
| YYYY-MM-DDTHH:mm:ss | 2016-06-23T09:07:21 |
| YYYY-MM-DDTHH:mmZ | 2016-06-23T09:07-07:00 |
| YYYY-MM-DDTHH:mm | 2016-06-23T09:07 |
| YYYY-MM-DDTHHZ | 2016-06-23T09-07:00 |
| YYYY-MM-DDTHH | 2016-06-23T09 |

### Variation of ISO 8601

| Format | Example |
| ------ | ------- |
| YYYY/MM/DDTHH:mm:ss.SSSZ | 2016/06/23T09:07:21.205-07:00 |
| YYYY/MM/DDTHH:mm:ss.SSZ | 2016/06/23T09:07:21.20-07:00 |
| YYYY/MM/DDTHH:mm:ss.SZ | 2016/06/23T09:07:21.2-07:00 |
| YYYY/MM/DDTHH:mm:ss.SSS | 2016/06/23T09:07:21.205 |
| YYYY/MM/DDTHH:mm:ss.SS | 2016/06/23T09:07:21.20 |
| YYYY/MM/DDTHH:mm:ss.S | 2016/06/23T09:07:21.2 |
| YYYY/MM/DDTHH:mm:ssZ | 2016/06/23T09:07:21-07:00 |
| YYYY/MM/DDTHH:mm:ss | 2016/06/23T09:07:21 |
| YYYY/MM/DDTHH:mmZ | 2016/06/23T09:07-07:00 |
| YYYY/MM/DDTHH:mm | 2016/06/23T09:07 |
| YYYY/MM/DDTHHZ | 2016/06/23T09-07:00 |
| YYYY/MM/DDTHH | 2016/06/23T09 |

### ISO 8601 no T

| Format | Example |
| ------ | ------- |
| YYYY-MM-DD HH:mm:ss.SSSZ | 2016-06-23 09:07:21.205-07:00 |
| YYYY-MM-DD HH:mm:ss.SSZ | 2016-06-23 09:07:21.20-07:00 |
| YYYY-MM-DD HH:mm:ss.SZ | 2016-06-23 09:07:21.2-07:00 |
| YYYY-MM-DD HH:mm:ss.SSS | 2016-06-23 09:07:21.205 |
| YYYY-MM-DD HH:mm:ss.SS | 2016-06-23 09:07:21.20 |
| YYYY-MM-DD HH:mm:ss.S | 2016-06-23 09:07:21.2 |
| YYYY-MM-DD HH:mm:ssZ | 2016-06-23 09:07:21-07:00 |
| YYYY-MM-DD HH:mm:ss | 2016-06-23 09:07:21 |
| YYYY-MM-DD HH:mmZ | 2016-06-23 09:07-07:00 |
| YYYY-MM-DD HH:mm | 2016-06-23 09:07 |
| YYYY-MM-DD HHZ | 2016-06-23 09-07:00 |
| YYYY-MM-DD HH | 2016-06-23 09 |
| YYYY-MM-DD | 2016-06-23 |

### Variation of ISO 8601 no T

| Format | Example |
| ------ | ------- |
| YYYY/MM/DD HH:mm:ss.SSSZ | 2016/06/23 09:07:21.205-07:00 |
| YYYY/MM/DD HH:mm:ss.SSZ | 2016/06/23 09:07:21.20-07:00 |
| YYYY/MM/DD HH:mm:ss.SZ | 2016/06/23 09:07:21.2-07:00 |
| YYYY/MM/DD HH:mm:ss.SSS | 2016/06/23 09:07:21.205 |
| YYYY/MM/DD HH:mm:ss.SS | 2016/06/23 09:07:21.20 |
| YYYY/MM/DD HH:mm:ss.S | 2016/06/23 09:07:21.2 |
| YYYY/MM/DD HH:mm:ssZ | 2016/06/23 09:07:21-07:00 |
| YYYY/MM/DD HH:mm:ss | 2016/06/23 09:07:21 |
| YYYY/MM/DD HH:mmZ | 2016/06/23 09:07-07:00 |
| YYYY/MM/DD HH:mm | 2016/06/23 09:07 |
| YYYY/MM/DD HHZ | 2016/06/23 09-07:00 |
| YYYY/MM/DD HH | 2016/06/23 09 |
| YYYY/MM/DD | 2016/06/23 |

### US Date, 12h AM/PM time

| Format | Example |
| ------ | ------- |
| MM-DD-YYYY hh:mm:ss.SSS A | 06-23-2016 09:07:21.205 AM |
| MM-DD-YYYY hh:mm:ss.SS A | 06-23-2016 09:07:21.20 AM |
| MM-DD-YYYY hh:mm:ss.S A | 06-23-2016 09:07:21.2 AM |
| MM-DD-YYYY hh:mm:ss A | 06-23-2016 09:07:21 AM |
| MM-DD-YYYY hh:mm A | 06-23-2016 09:07 AM |
| MM/DD/YYYY hh:mm:ss.SSS A | 06/23/2016 09:07:21.205 AM |
| MM/DD/YYYY hh:mm:ss.SS A | 06/23/2016 09:07:21.20 AM |
| MM/DD/YYYY hh:mm:ss.S A | 06/23/2016 09:07:21.2 AM |
| MM/DD/YYYY hh:mm:ss A | 06/23/2016 09:07:21 AM |
| MM/DD/YYYY hh:mm A | 06/23/2016 09:07 AM |

### US Date, 24h time

| Format | Example |
| ------ | ------- |
| MM-DD-YYYY HH:mm:ss.SSS | 06-23-2016 09:07:21.205 |
| MM-DD-YYYY HH:mm:ss.SS | 06-23-2016 09:07:21.20 |
| MM-DD-YYYY HH:mm:ss.S | 06-23-2016 09:07:21.2 |
| MM-DD-YYYY HH:mm:ss | 06-23-2016 09:07:21 |
| MM-DD-YYYY HH:mm | 06-23-2016 09:07 |
| MM/DD/YYYY HH:mm:ss.SSS | 06/23/2016 09:07:21.205 |
| MM/DD/YYYY HH:mm:ss.SS | 06/23/2016 09:07:21.20 |
| MM/DD/YYYY HH:mm:ss.S | 06/23/2016 09:07:21.2 |
| MM/DD/YYYY HH:mm:ss | 06/23/2016 09:07:21 |
| MM/DD/YYYY HH:mm | 06/23/2016 09:07 |

### US Date, no time

| Format | Example |
| ------ | ------- |
| MM-DD-YYYY | 06-23-2016 |
| MM-DD-YY | 06-23-16 |
| MM/DD/YYYY | 06/23/2016 |
| MM/DD/YY | 06/23/16 |

### US Date, time (excel default on OSX)

| Format | Example |
| ------ | ------- |
| MM/DD/YY H:mm | 06/23/16 9:07 |
| MM/DD/YY H:mm:SS | 06/23/16 9:07:20 |
| MM/DD/YY HH:mm | 06/23/16 09:07 |
| MM/DD/YY HH:mm:SS | 06/23/16 09:07:20 |
| MM/DD/YY H | 06/23/16 9 |
| MM/DD/YY HH | 06/23/16 09 |
| MM/D/YY H:mm | 06/23/16 9:07 |
| MM/D/YY H:mm:SS | 06/23/16 9:07:20 |
| MM/D/YY HH:mm | 06/23/16 09:07 |
| MM/D/YY HH:mm:SS | 06/23/16 09:07:20 |
| MM/D/YY H | 06/23/16 9 |
| MM/D/YY HH | 06/23/16 09 |
| MM/D/YY | 06/23/16 |
| M/DD/YY H:mm | 6/23/16 9:07 |
| M/DD/YY H:mm:SS | 6/23/16 9:07:20 |
| M/DD/YY HH:mm | 6/23/16 09:07 |
| M/DD/YY HH:mm:SS | 6/23/16 09:07:20 |
| M/DD/YY H | 6/23/16 9 |
| M/DD/YY HH | 6/23/16 09 |
| M/DD/YY | 6/23/16 |
| M/D/YY H:mm | 6/23/16 9:07 |
| M/D/YY H:mm:SS | 6/23/16 9:07:20 |
| M/D/YY HH:mm | 6/23/16 09:07 |
| M/D/YY HH:mm:SS | 6/23/16 09:07:20 |
| M/D/YY H | 6/23/16 9 |
| M/D/YY HH | 6/23/16 09 |
| M/D/YY | 6/23/16 |

### US Date, time (excel default on Windows)

| Format | Example |
| ------ | ------- |
| MM/DD/YYYY H:mm | 06/23/2016 9:07 |
| MM/DD/YYYY H:mm:SS | 06/23/2016 9:07:20 |
| MM/DD/YYYY HH:mm | 06/23/2016 09:07 |
| MM/DD/YYYY HH:mm:SS | 06/23/2016 09:07:20 |
| MM/DD/YYYY H | 06/23/2016 9 |
| MM/DD/YYYY HH | 06/23/2016 09 |
| MM/D/YYYY H:mm | 06/23/2016 9:07 |
| MM/D/YYYY H:mm:SS | 06/23/2016 9:07:20 |
| MM/D/YYYY HH:mm | 06/23/2016 09:07 |
| MM/D/YYYY HH:mm:SS | 06/23/2016 09:07:20 |
| MM/D/YYYY H | 06/23/2016 9 |
| MM/D/YYYY HH | 06/23/2016 09 |
| MM/D/YYYY | 06/23/2016 |
| M/DD/YYYY H:mm | 6/23/2016 9:07 |
| M/DD/YYYY H:mm:SS | 6/23/2016 9:07:20 |
| M/DD/YYYY HH:mm | 6/23/2016 09:07 |
| M/DD/YYYY HH:mm:SS | 6/23/2016 09:07:20 |
| M/DD/YYYY H | 6/23/2016 9 |
| M/DD/YYYY HH | 6/23/2016 09 |
| M/DD/YYYY | 6/23/2016 |
| M/D/YYYY H:mm | 6/23/2016 9:07 |
| M/D/YYYY H:mm:SS | 6/23/2016 9:07:20 |
| M/D/YYYY HH:mm | 6/23/2016 09:07 |
| M/D/YYYY HH:mm:SS | 6/23/2016 09:07:20 |
| M/D/YYYY H | 6/23/2016 9 |
| M/D/YYYY HH | 6/23/2016 09 |
| M/D/YYYY | 6/23/2016 |
