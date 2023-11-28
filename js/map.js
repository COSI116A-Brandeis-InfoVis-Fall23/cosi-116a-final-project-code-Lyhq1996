function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
  return "<h4>"+n+"</h4><table>"+
    "<tr><td>Homeless</td><td>"+(d.low)+"</td></tr>"+
    "<tr><td>Monthly Rent</td><td>"+(d.avg)+"</td></tr>"+
    "</table>";
}

var sampleData ={};	/* Sample random data. */	
["RI", "CT", "MA", "ME", "NH", "VT"]
  .forEach(function(d){ 
    var low=Math.round(100*Math.random()), 
      mid=Math.round(100*Math.random()), 
      high=Math.round(100*Math.random());
    sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
        avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffcc", "#800026")(low/100)}; 
  });

/* draw states on id #statesvg */	
uStates.draw("#stateMap", sampleData, tooltipHtml);
d3.select(self.frameElement).style("height", "1600px"); 
