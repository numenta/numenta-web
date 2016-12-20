set terminal png transparent size 640,240
set size 1.0,1.0

set terminal png transparent size 640,480
set output 'lines_of_code_by_author.png'
set key left top
set yrange [0:]
set xdata time
set timefmt "%s"
set format x "%Y-%m-%d"
set grid y
set ylabel "Lines"
set xtics rotate
set bmargin 6
plot 'lines_of_code_by_author.dat' using 1:2 title "David Ray" w lines, 'lines_of_code_by_author.dat' using 1:3 title "solovyevk" w lines, 'lines_of_code_by_author.dat' using 1:4 title "utensil" w lines, 'lines_of_code_by_author.dat' using 1:5 title "Matthew Taylor" w lines, 'lines_of_code_by_author.dat' using 1:6 title "Sambit Gaan" w lines, 'lines_of_code_by_author.dat' using 1:7 title "Sean Connolly" w lines, 'lines_of_code_by_author.dat' using 1:8 title "cogmission" w lines, 'lines_of_code_by_author.dat' using 1:9 title "Neal Miller" w lines, 'lines_of_code_by_author.dat' using 1:10 title "Anubhav Chaturvedi" w lines, 'lines_of_code_by_author.dat' using 1:11 title "Dylan Wilson" w lines, 'lines_of_code_by_author.dat' using 1:12 title "antidata" w lines, 'lines_of_code_by_author.dat' using 1:13 title "ptkweller" w lines, 'lines_of_code_by_author.dat' using 1:14 title "Tim Boudreau" w lines, 'lines_of_code_by_author.dat' using 1:15 title "wilsondy" w lines, 'lines_of_code_by_author.dat' using 1:16 title "Pravin Sonawane" w lines
