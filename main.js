
$( document ).ready(function() {
  $.ajax({
    url: "data.json",
    dataType: "json",
    success: function(response) {
      document.minedata = []; 
      console.log(response);
      //debugger;
      var mineNames = [];
      for (var i = 0 ; i <= response.length -1 ; i++) {
        mineNames.push(response[i].MINE_NAME);
        var row = document.createElement('a');
        row.href = "#";
        row.setAttribute("onclick","showPanel(this)");
        row.setAttribute("Name", response[i].MINE_NAME );
        row.setAttribute("id",response[i].MINE_NAME);
        row.setAttribute("ACTIVITY_CODE_E03", response[i].ACTIVITY_CODE_E03)
        row.setAttribute("MILL_OPERATIONPREPARATION_PLANT",response[i]["MILL OPERATION/PREPARATION PLANT"])
        row.setAttribute("INDEPENDENT_SHOPS_OR_YARDS",response[i]["INDEPENDENT SHOPS OR YARDS"])
        row.setAttribute("EVENT_NO",response[i].EVENT_NO)
        row.setAttribute("DREDGE",response[i].DREDGE)
        row.setAttribute("OFFICE_WORKERS_AT_MINE_SITE_ANN_HRS",response[i]["OFFICE WORKERS AT MINE SITE_ANN_HRS"])
        row.setAttribute("STRIP_QUARY_OPEN_PIT_ANN_HRS",response[i]["STRIP, QUARY, OPEN PIT_ANN_HRS"])
        row.setAttribute("MINE_ID",response[i].MINE_ID)
        row.setAttribute("ACTIVITY_CODE_E28",response[i].ACTIVITY_CODE_E28)
        row.setAttribute("UNDERGROUND",response[i].UNDERGROUND)
        row.setAttribute("ACTIVITY_CODE_E04",response[i].ACTIVITY_CODE_E04)
        row.setAttribute("MINE_NAME",response[i].MINE_NAME)
        row.setAttribute("INSPECTION_BEGIN_DT",response[i].INSPECTION_BEGIN_DT)
        row.setAttribute("risk",response[i].risk)
        row.innerHTML = '<div class="row tablerow"> \
        <div class="small-9 columns">'+response[i].MINE_NAME+'</div> \
        <div class="small-3 columns risky"><center>risky</center></div>\
        </div>';
        if(response[i].risk < 0.66){
          row.innerHTML = '<div class="row tablerow"> \
          <div class="small-9 columns">'+response[i].MINE_NAME+'</div> \
          <div class="small-3 columns medium"><center>medium</center></div>\
          </div>';
        } if(response[i].risk < 0.33){
          row.innerHTML = '<div class="row tablerow"> \
          <div class="small-9 columns">'+response[i].MINE_NAME+'</div> \
          <div class="small-3 columns good"><center>good</center></div>\
          </div>';
        }

        document.getElementById("maintable").appendChild(row)

      };
      $("a").click(function(event){
        event.preventDefault();
      });
      document.minedata = mineNames;
      statesFuzzy = FuzzySet(document.minedata);
      var resultsHtml = '';
      var values = statesFuzzy.values();

      $('#example').on('keyup', function(evt) {

        if ($(this).val()) {
          var results = statesFuzzy.get($(this).val()) || [];
          var $results = $('#results');
          var resultsHtml = '';
          if (!results.length) {
            $results.html('No results found :(');
          } else {
            $results.html('');
            for (var i = 0; i < results.length; ++i) {
              var list = document.createElement('a');
              showPanel(document.getElementById(results[i][1]));

              //list.innerHTML = "<li>"+results[i][1]+"</li>";
              //resultsHtml += '<li><a onclick="showPanel(document.getElementById("'+String(results[i][1])+'"))">'+ results[i][1] +'</a></li>\n';
            }
            //$results.append(list);
          }
        } 
      });
    }
  });
})


function showPanel(element){
  var bhtml = '<div class="row"> \
  <div class="small-12"> \
  <h4><strong>'+element.getAttribute('Name')+'</strong></h4> \
  <table>\
  <tbody>\
  <tr>\
  <td>     <span data-tooltip aria-haspopup="true" class="has-tip" title="Probability of accident occurance">Risk</span> </td>\
  <td>      '+element.getAttribute('risk')+' </td>\
  </tr>\
  <tr>\
  <td>    <span data-tooltip aria-haspopup="true" class="has-tip" title="Date of the last mine inspection">Last Inspection Date</span> </td>\
  <td>     '+element.getAttribute('INSPECTION_BEGIN_DT')+'  </td>\
  <tr>\
  </tr>\
  <td>  <span data-tooltip aria-haspopup="true" class="has-tip" title="Operation Crew Size">MILL_OPERATION/PREPARATION_PLANT</span></td>\
  <td> '+element.getAttribute('MILL_OPERATIONPREPARATION_PLANT')+'</td>\
  </tr>\
  <tr>\
  <td>  <span data-tooltip aria-haspopup="true" class="has-tip" title="Independent shop crew size">INDEPENDENT_SHOPS_OR_YARDS</span></td>\
  <td>'+element.getAttribute('INDEPENDENT_SHOPS_OR_YARDS')+'</td>\
  </tr>\
  <tr>\
  <td>  <span data-tooltip aria-haspopup="true" class="has-tip" title="Total time workers are on site">OFFICE_WORKERS_AT_MINE_SITE_ANN_HRS</span></td>\
  <td>  '+element.getAttribute('OFFICE_WORKERS_AT_MINE_SITE_ANN_HRS')+' </td>\
  </tr>\
  <tr>\
  <td>  <span data-tooltip aria-haspopup="true" class="has-tip" title="Hours mine is operational">STRIP_QUARY_OPEN_PIT_ANN_HRS</span></td>\
  <td>  '+element.getAttribute('STRIP_QUARY_OPEN_PIT_ANN_HRS')+'</td>\
  </tr>\
  <tr>\
  <td>  <span data-tooltip aria-haspopup="true" class="has-tip" title="MHSA Mine ID number">MINE_ID</span></td>\
  <td>  '+element.getAttribute('MINE_ID')+'</td>\
  </tr>\
  <tr>\
  <td>   <span data-tooltip aria-haspopup="true" class="has-tip" title="Underground Crew size">UNDERGROUND</span> </td>\
  <td>    '+element.getAttribute('UNDERGROUND')+' </td>\
  </tr>\
  <tr>\
  <td>    <span data-tooltip aria-haspopup="true" class="has-tip" title="Dredge Crew Size">DREDGE</span>  </td>\
  <td>      '+element.getAttribute('DREDGE')+' </td>\
  </tr>\
  <tr>\
  <td>     <span data-tooltip aria-haspopup="true" class="has-tip" title="Verbal Hazard Complaint Inspections">ACTIVITY_CODE_E04</span> </td>\
  <td>     '+element.getAttribute('ACTIVITY_CODE_E04')+' </td>\
  </tr>\
  <tr>\
  <td>  <span data-tooltip aria-haspopup="true" class="has-tip" title="Mine Idle Activity">ACTIVITY_CODE_E28</span> </td>\
  <td>  '+element.getAttribute('ACTIVITY_CODE_E28')+' </td>\
  </tr>\
  <tr>\
  <td>  <span data-tooltip aria-haspopup="true" class="has-tip" title="Written Notification Hazard Complaint Inspection">ACTIVITY_CODE_E03</span></td>\
  <td>'+element.getAttribute('ACTIVITY_CODE_E03')+'</td>\
  </tr>\
  </tbody>\
  </table>\
  <div id="chart_div"></div>';
  document.getElementById("breakoutPanel").innerHTML= bhtml;
  var data = google.visualization.arrayToDataTable([
    ['Factor', element.getAttribute('Name'), 'Average'],
    ['ACTIVITY_CODE_E28',  Number(element.getAttribute('ACTIVITY_CODE_E28'))/0.0288369206,      1],
    ['DREDGE',  Number(element.getAttribute('DREDGE'))/0.2495496152,      1],
    ['INDEPENDENT SHOPS OR YARDS',  Number(element.getAttribute('INDEPENDENT_SHOPS_OR_YARDS'))/0.0544002333,1],
    ['MILL OPERATION/PREPARATION PLANT',  Number(element.getAttribute('MILL_OPERATIONPREPARATION_PLANT'))/11.7765466682,1],
    ['STRIP, QUARY, OPEN PIT_ANN_HRS',  Number(element.getAttribute('STRIP_QUARY_OPEN_PIT_ANN_HRS'))/17665.8063397515,1],
    ['UNDERGROUND',  Number(element.getAttribute('UNDERGROUND'))/54.3359714253,1],
    ['OFFICE WORKERS AT MINE SITE_ANN_HRS',  Number(element.getAttribute('OFFICE_WORKERS_AT_MINE_SITE_ANN_HRS'))/8888.2326172302,1],
    ['ACTIVITY_CODE_E03',  Number(element.getAttribute('ACTIVITY_CODE_E03'))/0.0154902664,1],
    ['ACTIVITY_CODE_E04',  Number(element.getAttribute('ACTIVITY_CODE_E04'))/0.0291085095,1]
    ]);

var options = {
  title: 'What should this title be?',
  vAxis: {title: 'Factors',  titleTextStyle: {color: '#AAA'}},
  hAxis: {title: 'Relative Performance',  logScale: false},
  backgroundColor: {fill: "transparent"},
  colors: ['rgb(43, 166, 203)','#AAA'],
  legend: {position: 'in'}
};

var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

chart.draw(data, options);
$(document).foundation();
}

//{
  //   "ACTIVITY_CODE_E28": 0.0288369206,
  //   "DREDGE": 0.2495496152,
  //   "INDEPENDENT SHOPS OR YARDS": 0.0544002333,
  //   "MILL OPERATION/PREPARATION PLANT": 11.7765466682,
  //   "STRIP, QUARY, OPEN PIT_ANN_HRS": 17665.8063397515,
  //   "UNDERGROUND": 54.3359714253,
  //   "OFFICE WORKERS AT MINE SITE_ANN_HRS": 8888.2326172302,
  //   "ACTIVITY_CODE_E03": 0.0154902664,
  //   "ACTIVITY_CODE_E04": 0.0291085095
  // }
  // function drawChart() {
    //   var data = google.visualization.arrayToDataTable([
      //     ['Age', 'Weight'],
      //     [ 8,      12],
      //     [ 4,      5.5],
      //     [ 11,     14],
      //     [ 4,      5],
      //     [ 3,      3.5],
      //     [ 6.5,    7]
      //     ]);

//   var options = {
  //     title: 'Age vs. Weight comparison',
  //     hAxis: {title: 'Age', minValue: 0, maxValue: 15},
  //     vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
  //     legend: 'none',
  //     backgroundColor: { fill:'transparent' }
  //   };

  //   var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

  //   chart.draw(data, options);
  // }

  // function drawRegionsMap() {

    //   var data = google.visualization.arrayToDataTable([
      //     ['Lat', 'Long', 'popularity'],
      //     ['Arkansas', 200],
      //     ['California', 300],
      //     ['Texas', 400],
      //     ['New York', 500],
      //     ['Arizona', 600],
      //     ['Maine', 700]
      //     ]);

//   var options = {
  //     region: 'US', 
  //     displayMode: 'markers',
  //     title: "Mining Accidents, or whatever",
  //     colorAxis: {minValue: 0,  colors: ['#FFF', '#FF0000']},
  //     backgroundColor: { fill:'transparent', stroke:"#BBB" },
  //     datalessRegionColor: 'transparent',
  //     resolution: 'provinces',
  //     legend: {textStyle: {color: '#DDD', bold: false,auraColor: 'transparent', fontSize: 16}}
  //   };

  //   var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  //   chart.draw(data, options);

  // }
  // var bhtml = '<table>\
//   <tbody>\
//   <tr>\
//   <td>  <span data-tooltip aria-haspopup="true" class="has-tip" title="Written Notification Hazard Complaint Inspection">ACTIVITY_CODE_E03</span></td>\
//   <td>'+element.getAttribute('ACTIVITY_CODE_E03')+'</td>\
//   </tr>\
//   <tr>\
//   <td>Content Goes Here</td>\
//   <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>\
//   </tr>\
//   <tr>\
//   <td>Content Goes Here</td>\
//   <td>Content Goes Here</td>\
//   </tr>\
//   </tbody>\
//   </table><div class="row"> \
//   <div class="small-12"> \
//   <h4><strong>'+element.getAttribute('Name')+'</strong></h4> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Written Notification Hazard Complaint Inspection">ACTIVITY_CODE_E03</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('ACTIVITY_CODE_E03')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">MILL_OPERATIONPREPARATION_PLANT</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('MILL_OPERATIONPREPARATION_PLANT')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">INDEPENDENT_SHOPS_OR_YARDS</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('INDEPENDENT_SHOPS_OR_YARDS')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">EVENT_NO</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('EVENT_NO')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">OFFICE_WORKERS_AT_MINE_SITE_ANN_HRS</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('OFFICE_WORKERS_AT_MINE_SITE_ANN_HRS')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">STRIP_QUARY_OPEN_PIT_ANN_HRS</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('STRIP_QUARY_OPEN_PIT_ANN_HRS')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">MINE_ID</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('MINE_ID')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Mine Idle Activity">ACTIVITY_CODE_E28</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('ACTIVITY_CODE_E28')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">UNDERGROUND</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('UNDERGROUND')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">DREDGE</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('DREDGE')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Verbal Hazard Complaint Inspections">ACTIVITY_CODE_E04</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('ACTIVITY_CODE_E04')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 2 is important">INSPECTION_BEGIN_DT</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('INSPECTION_BEGIN_DT')+' \
//   </div> \
//   </div> \
//   <div class="row"> \
//   <div class="small-6 columns"> \
//   <span data-tooltip aria-haspopup="true" class="has-tip" title="Factor 3 is important">risk</span> \
//   </div> \
//   <div class="small-6 columns values"> \
//   '+element.getAttribute('risk')+' \
//   </div> \
//   </div> \
//   <div id="chart_div"></div> \
//   </div> \
//   </div>';