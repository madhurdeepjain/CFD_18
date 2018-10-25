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