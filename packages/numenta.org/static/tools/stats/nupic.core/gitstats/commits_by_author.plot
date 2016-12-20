set terminal png transparent size 640,240
set size 1.0,1.0

set terminal png transparent size 640,480
set output 'commits_by_author.png'
set key left top
set yrange [0:]
set xdata time
set timefmt "%s"
set format x "%Y-%m-%d"
set grid y
set ylabel "Commits"
set xtics rotate
set bmargin 6
plot 'commits_by_author.dat' using 1:2 title "Marek Otahal" w lines, 'commits_by_author.dat' using 1:3 title "utensil" w lines, 'commits_by_author.dat' using 1:4 title "Matthew Taylor" w lines, 'commits_by_author.dat' using 1:5 title "Scott Purdy" w lines, 'commits_by_author.dat' using 1:6 title "Chetan Surpur" w lines, 'commits_by_author.dat' using 1:7 title "Richard Crowder" w lines, 'commits_by_author.dat' using 1:8 title "Austin Marshall" w lines, 'commits_by_author.dat' using 1:9 title "gshotan" w lines, 'commits_by_author.dat' using 1:10 title "David Ragazzi" w lines, 'commits_by_author.dat' using 1:11 title "DavidRagazzi" w lines, 'commits_by_author.dat' using 1:12 title "Subutai Ahmad" w lines, 'commits_by_author.dat' using 1:13 title "david-ragazzi" w lines, 'commits_by_author.dat' using 1:14 title "Utensil Song" w lines, 'commits_by_author.dat' using 1:15 title "K.Wilson" w lines, 'commits_by_author.dat' using 1:16 title "Jim Bridgewater" w lines, 'commits_by_author.dat' using 1:17 title "Christopher L. Simons" w lines, 'commits_by_author.dat' using 1:18 title "Yuwei Cui" w lines, 'commits_by_author.dat' using 1:19 title "breznak" w lines, 'commits_by_author.dat' using 1:20 title "Pradeepto Bhattacharya" w lines, 'commits_by_author.dat' using 1:21 title "Matt Keith" w lines
