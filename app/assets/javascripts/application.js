// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(function() {
	
	$('#calendar').fullCalendar({
			slotMinutes: 15,
			minTime: '7:00',
			maxTime: '22:00',
			allDaySlot: false,
			monthNames: ['Styczeń','Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
			monthNamesShort: ['Sty.','Lut','Mar','Kwi.','Maj','Cze','Lip.','Sie','Wrz.','Paź.','Lis','Gru'],
			dayNames: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
			dayNamesShort: ['Nie', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'So'],
			titleFormat: {
			 	month: 'MMMM yyyy',
			 	week: "d[ MMMM][ yyyy]{ - d MMMM yyyy}", 
			 	day: 'dddd d MMMM yyyy' 
			},
			columnFormat: {
			 	month: 'ddd', 
			 	week: 'ddd d',
				day: ''
			},
			axisFormat: 'H:mm', 
			timeFormat: {
				'': 'H:mm', 
				agenda: 'H:mm{ - H:mm}'
			},
			firstDay:1, 
			header: {
				left: 'prev,next',
				center: 'title',
				right: ''
			},
			defaultView: 'agendaWeek',
			editable: false,
			droppable: false
		});
	
})

var stringToColour = function(str) {

    // str to hash
    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));

    // int/hash to hex
    for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

    return colour;
}