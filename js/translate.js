var t=new Array();
t['en']=new Array();
t['de']=new Array();
	t['en']['headline_1']='About us';
	t['de']['headline_1']='Über uns';
	t['en']['headline_2']='Rooms';
	t['de']['headline_2']='Räume';
	t['en']['headline_3']='Facilities';
	t['de']['headline_3']='Ausstattung';
	t['en']['headline_4']='Contact';
	t['de']['headline_4']='Kontakt';
	
	t['en']['headline_1_text']='The Living Hope Guest House offers a relaxing and peaceful accomodation characterized by a unique fusion of Nepali hospitality and German living standard. Sunita and Alexander do their best to create a place of rest for every guest in the otherwise quite noisy Kathmandu. The near Ringroad makes day trips by bus or taxi to famous sights in Kathmandu very easy. Supermarkets can be reached by walk within a few minutes. A lot of good cafés and restaurants can be found nearby in Jawalakhel and Jhamsikhel.';
	t['de']['headline_1_text']='Das Living Hope Guest House bietet eine wohltuend friedliche Unterkunft, ausgezeichnet durch eine einzigartige Fusion nepalesischer Gastfreundschaft mit deutschem Wohnstandard. Sunita und Alexander tun ihr Bestes, um jedem Gast in dem sonst so lärmigen Kathmandu einen Ort der Ruhe zu schaffen. Die naheliegende Hauptstraße ermöglicht einfache Ausflüge per Bus oder Taxi zu den beliebtesten Sehenswürdigkeiten in Kathmandu. Supermärkte sind in wenigen Minuten zu Fuß erreichbar. Auch zu den mit Cafés und Restaurants übersäten Stadtteilen Jawalakhel und Jhamsikhel ist es nicht weit.';	
	t['en']['headline_2_text']='All together there are 9 guestrooms with space for up to 21 guests. Three triple rooms, five standard double rooms and one double room with attached bathroom. The other bathrooms, kitchens and living rooms are shared by all guests.';
	t['de']['headline_2_text']='Insgesamt verfügen wir über 9 Gästezimmer mit Platz für bis zu 21 Gäste.  Drei 3er-Zimmer, fünf normale Doppelzimmer und ein Doppelzimmer mit eigenem Bad. Die anderen Badezimmer, Küchen und Aufenthaltsräume werden von allen Gästen gemeinsam genutzt.';
	t['en']['headline_2_text_2']='Double room with Attached Bathroom: 2500 NRs/Room/Night (max. 2 Persons)';
	t['de']['headline_2_text_2']='Doppelzimmer mit eigenem Bad: 2500 NRs/Zimmer/Nacht (max. 2 Personen)';
	t['en']['headline_2_text_3']='Double rooms: 2000 NRs/Room/Night (max. 2 Persons)';
	t['de']['headline_2_text_3']='Doppelzimmer: 2000 NRs/Zimmer/Nacht (max. 2 Personen)';	
	t['en']['headline_2_text_4']='Triple rooms: 1000 NRs/Person/Night';
	t['de']['headline_2_text_4']='3er-Zimmer: 1000 NRs/Person/Nacht';	
	t['en']['headline_2_text_5']='For long-term stays cheaper offers can be made.';
	t['de']['headline_2_text_5']='Für längere Aufenthalte kann über günstigere Preise gesprochen werden.';	
	
	t['en']['headline_3_text']='Further extras:';
	t['de']['headline_3_text']='Weitere Extras:';	
	t['en']['headline_3_text_2']='free WiFi';
	t['de']['headline_3_text_2']='kostenloses WLAN';
	t['en']['headline_3_text_3']='fully equipped kitchens';
	t['de']['headline_3_text_3']='voll ausgestattete Küchen zur freien Verfügung';
	t['en']['headline_3_text_4']='gym room';
	t['de']['headline_3_text_4']='Fitnessraum';	
	t['en']['headline_3_text_5']='roofterrace with space to hang out';
	t['de']['headline_3_text_5']='Dachterrasse mit Sitzmöglichkeiten';
	t['en']['headline_3_text_6']='hair dryer';
	t['de']['headline_3_text_6']='Haartrockner';
	t['en']['headline_3_text_7']='laundry service*';
	t['de']['headline_3_text_7']='Wäscheservice*';
	t['en']['headline_3_text_8']='barbecue*';
	t['de']['headline_3_text_8']='Kohlegrill*';
	t['en']['headline_3_text_9']='*for a fee';
	t['de']['headline_3_text_9']='*gegen Gebühr';

	t['en']['headline_4_text']='Phone:';
	t['de']['headline_4_text']='Telefon:';
	
	t['en']['headline_4_text_2']='design & realisation by A. Kusche © 2018';
	t['de']['headline_4_text_2']='Design & Umsetzung durch A. Kusche © 2018';
	
	t['en']['headline_4_text_3']='photos by E. Baumann © 2018';
	t['de']['headline_4_text_3']='Fotos durch E. Baumann © 2018';

$(document).ready(function() {
	//initilize the lang
	var lang = 'en';
    $('.trn').each(function(i){
        $(this).text(t[lang][ $(this).attr('key') ]);
    });
    
    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id');
        $('.trn').each(function(i){
          $(this).text(t[lang][ $(this).attr('key') ]);
        });
    } );
});
