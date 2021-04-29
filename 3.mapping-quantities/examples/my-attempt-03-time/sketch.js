var CSV = `Time,United States,Russia,France,United Kingdom,China
Average Test Time,15.59,5.47,17.25,15.01,5.16
AM Tests,54,770,19,9,42
PM Tests,1073,59,191,36,1
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
  createCanvas(750, 385)
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
  var colWidth = 150

  // draw country name labels on the left edge of the table //COUNTRY NAMES
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-10, y)
    y += rowHeight
  }

  // draw year labels in the header row //AVERAGE TEST TIME AM PM
  x = 260
  y = 100
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x+100, y-rowHeight)
    x += colWidth
  }

  // print out the total for each country, one column at a time //AVG TIME DATA
  x = 220
  textStyle(NORMAL)
  textAlign(CENTER)
  for (var r=0; r<table.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      text(value, x+100, y)
      y += rowHeight
    }
    x += colWidth
  }

}
