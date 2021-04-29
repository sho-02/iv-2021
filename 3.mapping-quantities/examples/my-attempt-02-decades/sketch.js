var CSV = `Year,United States,Russia,France,United Kingdom,China,North Korea,India,Pakistan,Total:
1940-1949,6,1,0,0,0,0,0,0,7
1950-1959,188,84,0,21,0,0,0,0,293
1960-1969,478,284,31,19,10,0,0,0,822
1970-1979,232,243,69,5,16,0,1,0,566
1980-1989,155,187,92,12,8,0,0,0,454
1990-1999,29,14,18,2,14,0,2,2,81
2000-2009,13,5,0,2,4,2,0,0,26
2010-2019,0,0,0,0,0,4,0,0,4
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

//Nothing,Shot1,Shot2       Time, 0, 5    Time, 0, 0

function setup(){
  createCanvas(1000, 630)
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
  var colWidth = 100

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-55, y)
    y += rowHeight
  }

  // draw year labels in the header row
  x = 253
  y = 100
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

  // print out the total for each country, one column at a time
  x = 220
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
