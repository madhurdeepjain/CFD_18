// ---------------- Flood stats from here ------------------

var ctx = document.getElementById('floodline').getContext('2d');
      var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
            datasets: [{
                label: "Yearwise Flood Count",
                borderColor: 'rgb(255, 99, 132)',
                data: [69, 47, 45, 111, 112, 105, 122, 109, 99, 107, 115, 100, 159, 183, 97, 102, 172, 260, 297, 194, 171, 232, 242, 180, 156, 177, 124, 124, 102, 102, 102, 113, 123, 159],
            }]
        },
    });

var ctx = document.getElementById('floodBar').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['USA', 'China', 'India', 'Indonesia', 'Philippines', 'Australia', 'Vietnam', 'Russia', 'Brazil', 'Bangladesh'],
        datasets: [{
            label: "Top 10 Countries with most Floods",
            backgroundColor:['blue','green','red','yellow','orange','brown','purple','black','pink','magenta'],
            data: [450, 317, 231, 192, 166, 130, 99, 96, 92, 86],
        }]
    },
});

 var ctx = document.getElementById('floodPie').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Heavy Rain', 'Torrential Rain', 'Tropical cyclone', 'Monsoonal rain', 'Brief torrential rain', 'Snowmelt', 'Rain and snowmelt'],
        datasets: [{
            label: "Main Causes of Flood",
            backgroundColor:['blue','green','red','yellow','orange','purple','pink'],
            data: [2812,471, 292, 428, 206, 69, 46],
        }]
    },

    // Configuration options go here
    
});





// ------------------------ Tsunami Stats from here ----------------------------
var tsureg01 = document.getElementById('tsubar').getContext('2d');

data_tsu = {
    datasets: [{
        data: [1870,13,93,14,1,119,9,89,11],
        backgroundColor : ['#E74C3C', '#9B59B6','#3498DB','#1ABC9C','#F1C40F','#E67E22','#2ECC71','#F0F3F4','#F1948A'],
        borderColor : 'white'
    }],

    labels: [
    	'Earthquake',
    	'Questionable Earthquake',
    	'Volcano and Earthquake',
    	'Volcano, Earthquake, and Landslide',
    	'Volcano',
    	'Volcano and Landslide',
    	'Landslide',
    	'Meteorological',
    	'Explosion',
    	'Astronomical Tide'
    ]
};

new Chart(tsureg01, {
    type: 'horizontalBar',
    data: data_tsu,
    options: {}
});


data_tsu02 = {
    datasets: [{
        data: [10, 1, 113, 4, 2, 5, 50, 1, 111, 23, 473, 6, 154, 80, 166, 163, 44, 128, 159, 88, 356, 197, 247],
        backgroundColor : ['#E74C3C', '#9B59B6','#3498DB','#1ABC9C','#F1C40F','#E67E22','#2ECC71','#F0F3F4','#F1948A',
        				    '#E74C3C', '#9B59B6','#3498DB','#1ABC9C','#F1C40F','#E67E22','#2ECC71','#F0F3F4','#F1948A',
        				    '#E74C3C', '#9B59B6','#3498DB','#1ABC9C','#F1C40F','#E67E22','#2ECC71','#F0F3F4','#F1948A'],
        borderColor : 'white'
    }],

    labels: ['West Coast of Africa', 'Central Africa', 'Northeast Atlantic Ocean', 
    'Northwest Atlantic Ocean', 'Southeast Atlantic Ocean', 'Southwest Atlantic Ocean', 
    'E. Coast USA and Canada, St Pierre and Miquelon', 'Gulf of Mexico', 'Caribbean Sea',
    'Black Sea and Caspian Sea', 'Mediterranean Sea', 'Red Sea and Persian Gulf', 
    'Indian Ocean (including west coast of Australia)', 'Alaska (including Aleutian Islands)', 
    'China, North and South Korea, Philippines, Taiwan', 'E. Coast Australia, New Zealand, South Pacific Is.', 
    'Hawaii, Johnston Atoll, Midway I', 'E. Indonesia (Pacific Ocean) and Malaysia', 
    'New Caledonia, New Guinea, Solomon Is., Vanuatu', 'Kamchatka and Kuril Islands', 'Japan', 
    'West Coast of North and Central America', 'West Coast of South America'
    ]
};


var tsureg02 = document.getElementById('tsuPie').getContext('2d');

new Chart(tsureg02, {
    type: 'pie',
    data: data_tsu02,
    options: {}
});




Chart.defaults.global.defaultFontColor = "#2ECC71";

var radarData = {
  labels: ['JAPAN','USA','INDONESIA',
          'GREECE','CHILE','ITALY','RUSSIA',
          'PHILIPPINES','NEW ZEALAND','PAPUA NEW GUINEA'],
  datasets: [
   {
      label: false,
      data: [356, 256, 244, 166, 163, 154, 92, 91, 79, 73],
      borderColor: "#5DADE2",
      borderWidth: 1
    }
  ]
};

var radarOptions = {
       scale:{
         pointLabels: {
        fontSize: 20
      },
       },

  responsive: true,
  maintainAspectRatio: true,
  title: {
  display: false
  },
  legend: {
  display: false,
  }
};

var ctx5 = document.getElementById("radarChart").getContext("2d");

new Chart(ctx5, { type: 'radar', data: radarData, options: radarOptions });


// ------------ Tsunami Stats Ends here ------------------------------------


// from python script in resources folder...
let regions = {'South America': 197, 'Indonesia': 145, 'Japan, Taiwan, Marianas': 143, 'Africa and Red Sea': 141, 'Kamchatka and Mainland Asia': 140, 'Mexico and Central America': 118, 'Alaska': 92, 'Melanesia and Australia': 83, 'Canada and Western USA': 70, 'Philippines and SE Asia': 59, 'Middle East and Indian Ocean': 56, 'New Zealand to Fiji': 56, 'Kuril Islands': 48, 'Mediterranean and W Asia': 46, 'Atlantic Ocean': 37, 'Hawaii and Pacific Ocean': 34, 'Iceland and Arctic Ocean': 33, 'Antarctica': 32, 'West Indies': 16};
let countries = {'United States': 176, 'Russia': 153, 'Indonesia': 142, 'Japan': 114, 'Chile': 78, 'Papua New Guinea': 56, 'Ethiopia': 54, 'Philippines': 47, 'Mexico': 39, 'Ecuador': 34}
let x = {1: 197, 2: 638, 3: 157, 4: 178, 5: 187, 6: 128, 7: 61}

$.getJSON("https://data.humdata.org/dataset/a60ac839-920d-435a-bf7d-25855602699d/resource/7234d067-2d74-449a-9c61-22ae6d98d928/download/volcano.json", function(result){
	// console.log(result['features'][0]);
	for(var i = 0 ; i < result['features'].length; i++){
		let temp = result['features'][i]['properties']['Region'];
		// console.log(temp);
	}
	// this data is processed in the python script in resources folder...
});

var reg = document.getElementById('region').getContext('2d');
var con = document.getElementById('con').getContext('2d');
var pei = document.getElementById('pei').getContext('2d');
var scatter = document.getElementById('scatter').getContext('2d');
var lineg = document.getElementById('lineg').getContext('2d');

data1 = {
    datasets: [{
        data: [197,145,143,141,140,118,92,83,70,59,56,56,48,46,37,34,33,32,16],
        backgroundColor : ['#E74C3C', '#9B59B6','#3498DB','#1ABC9C','#F1C40F','#E67E22','#2ECC71','#F0F3F4','#F1948A','#BB8FCE','#85C1E9','#A3E4D7','#F7DC6F','#F0B27A','#16A085','#1B4F72','#784212','#76448A','#F39C12'],
        borderColor : 'white'
    }],

    labels: [
        'South America',
        'Indonesia',
        'Japan, Taiwan, Marianas',
        'Africa and Red Sea',
        'Kamchatka and Mainland Asia',
        'Mexico and Central America',
        'Alaska',
        'Melanesia and Australia',
        'Canada and Western USA',
        'Philippines and SE Asia',
        'Middle East and Indian Ocean',
        'New Zealand to Fiji',
        'Kuril Islands',
        'Mediterranean and W Asia',
        'Atlantic Ocean',
        'Hawaii and Pacific Ocean',
        'Iceland and Arctic Ocean',
        'Antarctica',
        'West Indies'
    ] // regions
};


data2 = {
    datasets: [{
        data: [176,153,142,114,78,56,54,47,39,34],
        backgroundColor : ['#E74C3C', '#9B59B6','#3498DB','#1ABC9C','#F1C40F','#E67E22','#2ECC71','#F0F3F4','#F1948A','#BB8FCE'],
        borderColor : 'white'
    }],

    labels: [
    	'USA',
    	'Russia',
    	'Indonesia',
    	'Japan',
    	'Chile',
    	'Papua New Guinea',
    	'Ethiopia',
    	'Philippines',
    	'Mexico',
    	'Ecuador'
    ] // countries top 10
};


data3 = {
    datasets: [{
        data: [81,44,167,146,126,77,39,6],
        borderColor : '#45B39D'
    }],

    labels: [
    	'VEI-0',
    	'VEI-1',
    	'VEI-2',
    	'VEI-3',
    	'VEI-4',
    	'VEI-5',
    	'VEI-6',
    	'VEI-7'
    ] // regions
};

var myChart = new Chart(con, {
    type: 'pie',
    data: data1,
    options: {}
});

var myDoughnutChart = new Chart(reg, {
    type: 'horizontalBar',
    data: data2,
    options: {}
});

var histogram = new Chart(pei, {
    type: 'line',
    data: data3,
    options: {
        elements: {
            line: {
                tension: 0,
            }
        }
    }
});

// ---------------------- earthquake stats------------------

let counters = 1;
let xmax = 8;
let xmin = 4.5;

function fu1(){
	counters == 1;
	let ys = [0.4742162640762552, 1.0034605321095065, 0.07188200730612536, 0.6127838567197355, 0.4742162640762552, 0.9242792860618817, 1.044539760392411, 0.8438554226231612, 0.2787536009528289, -0.46852108295774486, -0.585026652029182, 0.43456890403419873, -0.2218487496163564, -1.0969100130080565, -1.3979400086720375, 0.1931245983544616, -0.44369749923271273, -0.494850021680094, -1.3979400086720375, -0.9208187539523752, -0.6989700043360187, -1.0, -1.3979400086720375, -1.3979400086720375, -1.6989700043360187];
	let xs = [5.1, 4.6, 5.5, 4.9, 5.0, 4.7, 4.5, 4.8, 5.3, 5.8, 6.0, 5.2, 5.6, 6.6, 6.4, 5.4, 5.7, 5.9, 7.5, 6.2, 6.1, 6.3, 7.2, 6.5, 7.0];
	let bfl1 = 5.57;
	let bfl2 = -1.02;
	dataForm(xs,ys,bfl1,bfl2);
	let label1 = ['1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
	let data1 = [10, 76, 118, 90, 107, 113, 206, 129, 115, 73, 113, 78, 107, 140, 134, 134, 102, 98, 111, 159, 114, 93, 110, 157, 123, 113, 495, 1237, 245, 151, 288, 186, 199, 115, 161, 168, 216, 264, 130, 136, 125]
	dataFor(data1,label1);
	setup(5.974,35.539,61.699,100.195,230, 126, 34);
}
function fu2(){
	counters == 2;
	let ys = [0.33845649360460484, 1.1251558295805302, 0.8438554226231612, 0.7323937598229685, 0.38021124171160603, 0.568201724066995, 0.22010808804005508, -1.0969100130080565, 0.9929950984313415, 0.18184358794477254, 0.0, -1.0969100130080565, -1.0, -0.14266750356873156, -0.3010299956639812, -0.6575773191777937, -1.3979400086720375, -0.045757490560675115, -0.8538719643217619, -1.0969100130080565, -0.6575773191777937, -0.42021640338318983, -0.7958800173440752, -0.619788758288394, -1.6989700043360187, -1.6989700043360187, -1.2218487496163564];
	let xs = [5.1, 4.5, 4.7, 4.8, 5.0, 4.9, 5.2, 6.8, 4.6, 5.3, 5.5, 6.6, 6.3, 5.6, 5.7, 6.1, 6.2, 5.4, 6.5, 6.9, 6.0, 5.8, 6.4, 5.9, 7.0, 7.2, 6.7];
	let bfl1 = 5.47;
	let bfl2 = -1.00;
	dataForm(xs,ys,bfl1,bfl2);
	let label1 =  ['1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
	let data1 = [1, 8, 2, 1, 2, 28, 42, 62, 115, 64, 58, 84, 94, 94, 65, 140, 85, 73, 58, 43, 45, 59, 47, 38, 40, 43, 35, 85, 55, 75, 42, 48, 41, 48, 53, 78, 51, 46, 51, 52, 44, 60, 41, 53, 85, 62, 108, 54, 78, 74, 50];
	dataFor(data1,label1);
	setup(36.315,-11.25,58.723,29.355,230, 126, 34);
}
function fu3(){
	counters == 3;
	let ys = [1.8475726591421122, 0.6334684555795865, 1.9253120914996495, 1.57287160220048, 1.9283958522567137, 1.0934216851622351, 1.3404441148401183, 1.7015679850559273, 0.9084850188786497, -0.3979400086720376, 0.7781512503836436, 0.6720978579357175, 1.2041199826559248, 0.04139268515822508, 0.8633228601204559, 0.47712125471966244, 0.2304489213782739, 0.17609125905568124, 0.568201724066995, 0.3010299956639812, -0.6989700043360187, -0.6989700043360187, -1.0, -0.3979400086720376, -0.3010299956639812, -1.0, -0.6989700043360187, -0.3010299956639812, -1.0];
	let xs = [4.7, 5.6, 4.5, 4.9, 4.6, 5.2, 5.0, 4.8, 5.3, 6.6, 5.5, 5.7, 5.1, 6.3, 5.4, 5.9, 6.0, 6.2, 5.8, 6.1, 6.9, 7.0, 6.8, 6.7, 6.5, 7.1, 7.3, 6.4, 7.7];
	let bfl1 = 5.52;
	let bfl2 = -0.86;
	dataForm(xs,ys,bfl1,bfl2);
	let label1 = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
	let data1 = [41, 114, 104, 3365, 770, 430, 409, 299, 446, 243, 207];
	dataFor(data1,label1);
	setup(31.735 , 129.463, 45.712, 146.953 ,230, 126, 34);
}
function fu4(){
	counters == 4;
	let ys = [1.2933625547114456, 1.0511525224473812, 1.1598678470925667, 0.7201593034059569, -0.022276394711152253, 0.5185139398778874, 0.5622928644564748, 0.8750612633917001, 0.43933269383026263, 0.24303804868629444, 0.3521825181113625, -0.3979400086720376, 0.09691001300805642, -0.12493873660829995, -0.2596373105057561, -0.6989700043360187, -1.0, -0.8239087409443188, -0.8239087409443188, -0.5228787452803376, -1.3010299956639813, -1.3010299956639813, -1.3010299956639813, -1.3010299956639813];
	let xs = [4.5, 4.7, 4.6, 4.9, 5.8, 5.1, 5.0, 4.8, 5.2, 5.4, 5.3, 6.3, 5.5, 5.6, 5.7, 6.4, 6.1, 6.0, 6.2, 5.9, 6.8, 7.8, 6.5, 6.6];
	let bfl1 = 5.57;
	let bfl2 = -1.02;
	dataForm(xs,ys,bfl1,bfl2);
	let label1 = ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
	let data1 = [19, 85, 97, 136, 141, 90, 143, 189, 190, 260, 158, 164, 169, 181, 188, 224, 486, 221, 205, 197, 152];
	dataFor(data1,label1);
	setup(-35.174, -71.191, 2.285 , -33.047 ,230, 126, 34);
}
function fu5(){
	counters == 5;
	let ys = [0.4742162640762552, 1.0034605321095065, 0.07188200730612536, 0.6127838567197355, 0.4742162640762552, 0.9242792860618817, 1.044539760392411, 0.8438554226231612, 0.2787536009528289, -0.46852108295774486, -0.585026652029182, 0.43456890403419873, -0.2218487496163564, -1.0969100130080565, -1.3979400086720375, 0.1931245983544616, -0.44369749923271273, -0.494850021680094, -1.3979400086720375, -0.9208187539523752, -0.6989700043360187, -1.0, -1.3979400086720375, -1.3979400086720375, -1.6989700043360187];
	let xs = [5.1, 4.6, 5.5, 4.9, 5.0, 4.7, 4.5, 4.8, 5.3, 5.8, 6.0, 5.2, 5.6, 6.6, 6.4, 5.4, 5.7, 5.9, 7.5, 6.2, 6.1, 6.3, 7.2, 6.5, 7.0];
	let bfl1 = 5.57;
	let bfl2 = -1.02;
	dataForm(xs,ys,bfl1,bfl2);
	let label1 = ['1970', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
	let data1 = [2, 1, 4, 1, 2, 1, 1, 2, 11, 5, 2, 4, 4, 3, 9, 5, 8, 25, 8, 4, 7, 5, 1, 4, 3, 9, 4, 4, 2, 3, 11, 9, 4, 2, 8, 2, 4, 1, 9, 5, 8, 4, 2, 4, 6, 9, 4, 5]
	dataFor(data1,label1);
	setup(-43.069 , 112.5, -12.49, 155.391 ,230, 126, 34);
}
function fu6(){
	counters == 6;
	let ys = [-0.045757490560675115, -0.4559319556497244, -0.3010299956639812, -1.0, -0.5228787452803376, -0.6020599913279624, -0.2596373105057561, -0.5228787452803376, -0.8239087409443188, -0.6989700043360187, -0.6989700043360187, -1.3010299956639813, -1.3010299956639813, -1.3010299956639813, -0.8239087409443188, -1.3010299956639813, -1.0];
	let xs = [4.5, 4.9, 4.8, 6.0, 5.0, 5.3, 4.6, 4.7, 6.3, 5.2, 5.1, 5.5, 5.8, 5.6, 5.4, 6.7, 5.7];
	let bfl1 = 2.05;
	let bfl2 = -0.52;
	dataForm(xs,ys,bfl1,bfl2);
	let label1 = ['1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
	let data1 = [18, 82, 87, 84, 102, 58, 72, 57, 51, 113, 73, 98, 79, 80, 99, 193, 129, 211, 108, 89, 350, 129, 101, 110, 119, 113, 88, 118, 141, 94, 75]
	dataFor(data1,label1);
	setup(31.653 , 73.125, 71.856, 129.551,230, 126, 34);
}
function fu7(){
	counters == 7;
	let ys = [0.760924848409133, 0.5797835966168101, 0.965358514344786, 1.1117104708745449, 0.8573324964312685, 0.21307482530885122, 1.0086001717619175, 0.27106677228653797, 0.5947607525864629, -0.11539341870206953, 0.37413709399941286, -0.5228787452803376, -1.0, -0.02996322337744321, -0.3979400086720376, -1.1760912590556813, -0.6320232147054056, -0.3309932190414244, -0.1983676537668335, -1.1760912590556813, -0.5740312677277188, -0.8750612633917001, -1.1760912590556813, -0.3309932190414244, -1.4771212547196624, -1.4771212547196624, -1.4771212547196624];
	let xs = [4.9, 5.1, 4.7, 4.5, 4.8, 5.4, 4.6, 5.3, 5.0, 5.5, 5.2, 6.3, 6.5, 5.6, 6.0, 6.6, 6.4, 5.9, 5.7, 6.9, 6.1, 6.2, 6.7, 5.8, 7.2, 7.3, 7.8];
	let bfl1 = 5.14;
	let bfl2 = -0.92;
	dataForm(xs,ys,bfl1,bfl2);
	let label1 = ['1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
	let data1 = [22, 96, 107, 76, 75, 145, 70, 82, 80, 85, 85, 85, 93, 83, 115, 74, 98, 152, 165, 117, 100, 126, 165, 135, 112, 129, 91, 162, 127, 123, 213]
	dataFor(data1,label1);
	setup(-33.082 ,-16.875, 28.362, 54.141,230, 126, 34);
}
function fu8(){
	counters == 8;
	let ys = [0.7269987279362623, 0.09108046934733258, 0.4471580313422192, 0.6266824662362944, 0.43136376415898736, -0.3979400086720376, 0.7829501332654123, 0.785329835010767, 0.6163004304425727, 0.3082085802911046, 0.3862016054007934, -0.8750612633917001, -0.24667233334138852, -0.0791812460476248, -1.1760912590556813, -0.8750612633917001, -1.4771212547196624, -0.7781512503836436, -0.3010299956639812, -1.0, -1.0, -1.4771212547196624, -1.4771212547196624];
	let xs = [4.6, 5.4, 5.0, 4.9, 5.2, 5.8, 4.8, 4.7, 4.5, 5.3, 5.1, 5.9, 5.6, 5.5, 6.1, 6.6, 7.1, 6.3, 5.7, 6.0, 6.2, 6.9, 6.4];
	let bfl1 = 5.57;
	let bfl2 = -1.02;
	dataForm(xs,ys,bfl1,bfl2);
	let label1 = ['1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
	let data1 = [5, 27, 20, 16, 23, 11, 9, 11, 17, 17, 11, 8, 23, 40, 65, 21, 33, 24, 21, 21, 58, 17, 22, 25, 95, 39, 37, 31, 9, 33, 31]
	dataFor(data1,label1);
	setup(44.088 , -146.25, 70.634, -76.641,230, 126, 34);
}

// counter corresponds to the region division we made...

function dataForm(xs,ys,bfl1,bfl2){
	ymax = (bfl1) + (bfl2*xmax);
	ymin = (bfl1) + (bfl2*xmin);

	data4 = [];

	for(var i = 0 ; i < xs.length;i++){
		temp = xs[i];
		temp2 = ys[i];
		temp3 = {
				label: ["Scatter-Plot"],
		        backgroundColor: "#1ABC9C",
		        borderColor: "#2E86C1",
				data : [{
					x:temp,
					y:temp2,
					r:3
				}]
			};
		data4.push(temp3);
	}

	data4.push({
        label: "Best Fit Line",
        borderColor: "red",
		data : [{
	        x: xmin,
	        y: ymin
	    }, {
	        x: xmax,
	        y: ymax
	    }],
		type : 'line',

	});



new Chart(document.getElementById("scatter"), {
    type: 'bubble',
    data: {
      datasets: data4
    },
    options: {
	  legend: {
	   	display: false
	  },
	  tooltips: {
	       callbacks: {
	       label: function(tooltipItem) {
	              return tooltipItem.yLabel;
	           }
	        }
	    },
      title: {
        display: true,
        text: 'N = Number of occuerences of Earthquakes per year.'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "log(N)"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Magnitude of Earthquakes"
          }
        }]
      }
    }
});
}

function dataFor(data1,label1){
	data5 = {
    datasets: [{
        data:  data1, //[1, 8, 2, 1, 2, 28, 42, 62, 115, 64, 58, 84, 94, 94, 65, 140, 85, 73, 58, 43, 45, 59, 47, 38, 40, 43, 35, 85, 55, 75, 42, 48, 41, 48, 53, 78, 51, 46, 51, 52, 44, 60, 41, 53, 85, 62, 108, 54, 78, 74, 50],
        borderColor : '#45B39D'
    }],

    labels: label1// ['1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
};

var histogram = new Chart(lineg, {
    type: 'line',
    data: data5,
    options: {
        elements: {
            line: {
                tension: 0,
            }
        }
    }
});

}

// -----------map display sectoring------------------

let mapimg;
var data = {};
var clon = 0;
var clat = 0;
var zoom = 1;

function preload() {
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0/1024x512?access_token=pk.eyJ1IjoidmlzaGFsMjYwNzAwIiwiYSI6ImNqbHNtb3Z3cTBncmQzcWxieHVnaDFpdXgifQ.tLV__alrVz7n0LIUOc9R2w");
}

function setup(lat1,lon1,lat2,lon2,r,g,b) {
	createCanvas(1024,460);
	translate(width/2,height/2);
	imageMode(CENTER)
	image(mapimg,0,0);

	var cx = mercX(clon);
	var cy = mercY(clat);

	var x1 = mercX(lon1) - cx;
	var y1 = mercY(lat1) - cy;

	var x2 = mercX(lon2) - cx;
	var y2 = mercY(lat2) - cy;

	var sizeX = (x2-x1);
	var sizeY = (y2-y1);

	stroke(r,g,b);
	fill(color(241, 196, 15,0.3));
	rect(x1,y1,sizeX,sizeY);

	// canDraw(5.974,61.699,35.539,100.195,230, 126, 34,cx,cy)
}

function mercX(lon){
	lon = radians(lon);
	var a = (256 / PI)*(pow(2,zoom));
	var b = lon + PI;
	return a*b;
}

function mercY(lat){
	lat = radians(lat);
	var a = (256 / PI)*(pow(2,zoom));
	var b = (PI-log(tan(PI/4 + lat/2)));
	return a*b;
}
/*
function canDraw(lat1,lon1,lat2,lon2,r,g,b,cx,cy){
	var x1 = mercX(lon1) - cx;
	var y1 = mercY(lat1) - cy;

	var x2 = mercX(lon2) - cx;
	var y2 = mercY(lat2) - cy;

	var sizeX = (x2-x1);
	var sizeY = (y2-y1);

	stroke(r,g,b);
	fill(color(241, 196, 15,0.3));
	rect(x1,y1,sizeX,sizeY);
}
*/