var CSV = `Year,United States,Russia,United Kingdom,France,China,India,Pakistan,North Korea
1945,1,0,0,0,0,0,0,0
1946,2,0,0,0,0,0,0,0
1947,0,0,0,0,0,0,0,0
1948,3,0,0,0,0,0,0,0
1949,0,1,0,0,0,0,0,0
1950,0,0,0,0,0,0,0,0
1951,16,2,0,0,0,0,0,0
1952,10,0,1,0,0,0,0,0
1953,11,5,2,0,0,0,0,0
1954,6,10,0,0,0,0,0,0
1955,18,6,0,0,0,0,0,0
1956,18,9,6,0,0,0,0,0
1957,32,16,7,0,0,0,0,0
1958,77,36,5,0,0,0,0,0
1959,0,0,0,0,0,0,0,0
1960,49,12,4,3,0,0,0,0
1961,11,72,6,2,0,0,0,0
1962,96,79,2,1,0,0,0,0
1963,47,13,4,3,0,0,0,0
1964,45,9,2,3,1,0,0,0
1965,38,17,1,4,1,0,0,0
1966,48,18,0,7,3,0,0,0
1967,42,22,0,3,2,0,0,0
1968,56,18,0,5,1,0,0,0
1969,46,24,0,0,2,0,0,0
1970,39,20,0,8,1,0,0,0
1971,24,24,0,5,1,0,0,0
1972,27,25,0,4,2,0,0,0
1973,24,19,0,6,1,0,0,0
1974,22,22,1,9,1,1,0,0
1975,22,21,0,2,1,0,0,0
1976,20,21,1,5,4,0,0,0
1977,20,28,0,9,1,0,0,0
1978,19,31,2,11,3,0,0,0
1979,15,32,1,10,1,0,0,0
1980,14,25,3,12,1,0,0,0
1981,16,23,1,12,0,0,0,0
1982,18,19,1,10,1,0,0,0
1983,18,29,1,9,2,0,0,0
1984,18,29,2,8,2,0,0,0
1985,17,10,1,8,0,0,0,0
1986,14,0,1,8,0,0,0,0
1987,14,27,1,8,1,0,0,0
1988,15,16,0,8,1,0,0,0
1989,11,9,1,9,0,0,0,0
1990,8,1,1,6,2,0,0,0
1991,7,0,1,6,0,0,0,0
1992,6,0,0,0,2,0,0,0
1993,0,0,0,0,2,0,0,0
1994,0,0,0,0,2,0,0,0
1995,0,1,0,5,3,0,0,0
1996,0,0,0,1,2,0,0,0
1997,2,0,0,0,0,0,0,0
1998,3,5,0,0,0,2,2,0
1999,3,7,0,0,1,0,0,0
2000,5,5,0,0,0,0,0,0
2001,2,0,0,0,4,0,0,0
2002,3,0,1,0,0,0,0,0
2003,2,0,0,0,0,0,0,0
2004,0,0,0,0,0,0,0,0
2005,0,0,0,0,0,0,0,0
2006,1,0,1,0,0,0,0,1
2007,0,0,0,0,0,0,0,0
2008,0,0,0,0,0,0,0,0
2009,0,0,0,0,0,0,0,1
2010,0,0,0,0,0,0,0,0
2011,0,0,0,0,0,0,0,0
2012,0,0,0,0,0,0,0,0
2013,0,0,0,0,0,0,0,1
2014,0,0,0,0,0,0,0,0
2015,0,0,0,0,0,0,0,0
2016,0,0,0,0,0,0,0,2
2017,0,0,0,0,0,0,0,1
`


function buildTable(str){
  let table = new p5.Table()
  str.trim().split(/\n/).forEach((line, i) => {
    let row = new p5.TableRow(line)
    if (i==0){
      row.arr.forEach(col => table.addColumn(col))
    }else{
      table.addRow(row)
    }
  })
  return table
}

function setup(){
  createCanvas(3900, 600)
  background(230)

  // pick one of the three data files to work with and call it 'table'
  var table = buildTable(CSV)

  // log the whole dataset to the console so we can poke around in it
  print(table)

  // set up typography
  textFont("Monospace")
  textSize(15)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 50

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }


  // draw year labels in the header row
  x = 200
  y = 100
  textStyle(BOLD)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

  // print out the total for each country, one column at a time
  x = 200
  textStyle(NORMAL)
  textAlign(RIGHT)
  for (var r=0; r<table.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }

}
