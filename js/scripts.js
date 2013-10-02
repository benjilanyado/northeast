$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px", "3135px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
        setTimeout(function(){
        $('#tooltip2').fadeOut() }, 5000);

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 6)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut();
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 


 $("#explore").click(function(event) {       

    event.preventDefault();

    $("#slider").animate({"left": "-940px"}, 1000, function(){

      $("#buttons").fadeIn()
      $("#tooltip1").fadeIn()
    })

  });




var boxs = [
    {
        selector: '#cover3',
        headline: 'Paper Moon Diner',
        copy: "The <a href='http://papermoondiner24.com/'>Paper Moon Diner</a> is an explosion of colour. Inside it's like a bizarre toy store, with dolls and toy cars hanging from the ceiling. A wacky, nutty cafe run by Mike, the manager.",
        address: '• Paper Moon Diner, 227 West 29th St, Baltimore, MD, <a href="http://papermoondiner24.com">papermoondiner24.com</a>',
        content: "<img src='images/northeast.jpg'>"
    },

    {
        selector: '#cover2',
        headline: 'The waterfront',
        copy: "We just met Jared and Alex in their boat, moored by the pier. They're planning to take it - and its Grateful Dead flag - around the world. We're jumping aboard and going for a sail to see Baltimore from the other side - from out on the water. 'Ooh, it's like series two of the Wire,' I say.",
        content: '<img src="images/flag.jpg">',
        address: "• Fells Point, Baltimore"
    },

    {
        selector: '#cover6',
        headline: "Johnny Brenda's",
        copy: "We have made it to the reader bar of choice, Johnny Brenda's. A band called Tin Horses are playing upstairs. The blurb says they have Kurt Vile sound. 'He's from just up the road, too,' says George. I like a bit of Kurt Vile, so we are heading up to check them out. ",
        content: '<img src="images/jonnybrendas.jpg">',
        address: "• Johhny Brenda's, 1201 Frankford Ave, Philadelphia, PA, <a target='_blank' href='johnnybrendas.com'>johnnybrendas.com</a>"
    },

    {
        selector: '#cover4',
        headline: 'Station North',
        copy: "Street art in the Station North neighbourhood, aka Charles North. It's another area undergoing revitalisation. There are murals on the floor, too.",
        content: '<img src="images/stationnorth.jpg">',
        address: "• Station North, Baltimore"
    },

    {
        selector: '#cover1',
        headline: 'Faidley Seafood',
        copy: "Wow. The Faidley crab cakes deserve the hype. Fleshy and full of flavour. There are no seats in here. You just stand up at the counter. Over one million clams and oysters are served annually.",
        content: '<img src="images/faidley.jpg">',
        address: "• Faidley Seafood, Lexington Market, 203 North Paca St, Baltimore, MD,  <a target='_blank' href='http://faidleyscrabcakes.com'>faidleyscrabcakes.com</a>"
    },

    {
        selector: '#cover7',
        headline: "Cheasapeake Bay",
        copy: "Hats off for the tips to cross the Bay Bridge. No traffic today, so we cruised along it, looking out over the Cheasapeake Bay. We looked out longingly at the few sail boats dotting the water. We're just pulling into the yacht club now, on the other side, for a better view.",
        content: '<img src="images/baybridge.jpg">',
        address: ''
    },

    {
        selector: '#cover8',
        headline: "Maxamillion's",
        copy: "On our way to a coffee stop, a particularly stylish barber shop caught our eye. We met Maxamillion, the owner. He proudly showed us his 1930s chairs, 'like the Rolls Royce of barber chairs'.",
        content: '<img src="images/barber.jpg">',
        address: "• Maxamillion's Gentlemens Quarters Barber Parlor, 2035 Chestnut St, Philadelphia, PA"
    },

    {
        selector: '#cover9',
        headline: "Mütter Museum",
        copy: "We've raced over to the Mütter Museum before it closes as tipped by <a target='_blank' href='https://witness.theguardian.com/user/miquon'>@miquon</a> and others. It's a medical museum, filled with oddities. This place is fascinating, but not sure it's a great after-lunch stop. Oh, look, here are some pieces of Einstein's brain. Just a bit, kept on a slide.",
        content: '<img src="images/mutter.jpg">',
        address: '• Mütter Museum, 19 S 22nd St,  Philadelphia, PA, <a target="_blank" href="collegeofphysicians.org/mutter-museum">collegeofphysicians.org/mutter-museum</a>'
    },

    {
        selector: '#cover10',
        headline: 'On the road',
        copy: "It's a big day on the road today. Kylie is in the driving seat and Greta is snapping pics through the window as we push through Pennsylvania, New Jersey, New York, and Connecticut to Boston, Massachusetts.",
        content: '<img src="images/road.jpg">',
        address: ''

    },

    {
        selector: '#cover11',
        headline: 'Love Park',
        copy: "Driveby tourism in Philly... Love Park, with the 'Love' sculpture, designed by <a href='http://en.wikipedia.org/wiki/Robert_Indiana' target='_blank'>Robert Indiana</a>, and installed in 1976 as part of the <a href='http://en.wikipedia.org/wiki/United_States_Bicentennial' target='_blank'>Bicentennial</a> celebration.",
        content: '<img src="images/love.jpg">',
        address: '• Love Park, 1599 John F Kennedy Blvd, Philadelphia, PA'
    },

    {
        selector: '#cover12',
        headline: 'Beinecke Library',
        copy: "We're at the Beinecke Rare Book and Manuscript Library at Yale University. One of their most prized objects: a Lewis and Clark map from 1810. They hand drew it as they travelled on the first expedition across the American west.",
        content: '<img src="images/Beinecke.jpg">',
        address: '• Beinecke Rare Book and Manuscript Library, 121 Wall St, New Haven, CT, <a target="_blank" href="http://beinecke.library.yale.edu/" target="_blank">beinecke.library.yale.edu</a>'
    },

    {
        selector: '#cover13',
        headline: "Pez Museum",
        copy: "As we drive through Connecticut, we see the Pez Museum in Orange. We are going to have to swing by. The visitors centre opened 1.5 years ago and received 100,000 visitors in its first year. ",
        content: '<img src="images/pez.jpg">',
        address: '• Pez Museum, 35 Prindle Hill Rd, Orange, CT, <a target="_blank" href="http://pez.com/visit_us">pez.com/visit_us</a>'
    },

    {
        selector: '#cover14',
        headline: "Louis' Lunch",
        copy: "Jeff, great grandson of the owner, swears by Louis' Lunch's claim that they're the oldest burger joint in the US, as they have been operating in the same area since 1885. They flame grill the burgers in their original 1898 cast-iron stoves.The rules: strictly no ketchup.",
        content: '<img src="images/louis.jpg">',
        address: "• Louis' Lunch, 263 Crown St, New Haven, CT, <a target='_blank' href='http://louislunch.com'>louislunch.com</a>"
    },

    {
        selector: '#cover15',
        headline: 'Southie',
        copy: 'Scotty, our cab driver,  becomes our impromptu tour guide. "Southie is one of  our signature neighbourhoods. It was the Irish catholic heart of Boston. It was poor, working class and there was a stigma attached to that for years. But it has been gentrified now." ',
        content: '<img src="images/southie.jpg">',
        address: ""
    },

    {
        selector: '#cover16',
        headline: 'Essex',
        copy: "Essex, Massachusetts, is a picturesque harbour town, full of typical wooden New England houses. We are down at the water's edge talking to the shipbuilders. Plenty of clammers and shipbuilders live here, but also execs who commute to Boston, sports stars and one of New Kids On the Block. ",
        content: '<img src="images/essex.jpg">',
        address: ''
    },

    {
        selector: '#cover18',
        headline: 'Flour Bakery',
        copy: "Shout out to <a target='_blank' href='http://www.theguardian.com/travel/2013/sep/26/twitter.com/loganpass/status/383219340750778368?screen_name=loganpass'>@loganpass</a>, who recommended Flour Bakery, in the South End of Boston, for breakfast. The cupcakes look good, but I picked the twice-baked brioche, dipped in almonds. 'It's out-of-control-good,' says the server. 'Just look at it. Isn't it beautiful?'<br/>",
        content: '<img src="images/flour.jpg">',
        address: "• Flour Bakery, 1595 Washington St, Boston, MA, <a target='_blank' href='http://flourbakery.com'>flourbakery.com</a>"
    },

    {
        selector: '#cover17',
        headline: 'Clam Box',
        copy: "We've stopped off at the Clam Box in Ipswich. It's a cute little wooden place, painted red and white, and dating back to the 1930s. Inside are red-cushioned booths, while the walls are decorated with maritime paraphernalia (fishing nets, plastic lobsters, a ship's wheel).",
        content: '<img src="images/clambox.jpg">',
        address: "• Clam Box, 246 High St, Ipswich, MA, <a target='_blank' href='http://ipswichma.com/clambox'>ipswichma.com/clambox</a>"
    },

    {
        selector: '#cover19',
        headline: "Portland Head Light",
        copy: "Portland Head Light sits proudly on its little rocky headland, surveying its territory and the scattering of boats below. There are patches of yellow and purple wild flowers all around.",
        content: '<img src="images/headland.jpg">',
        address: "• Portland Head Light, Cape Elizabeth, ME, <a target='_blank' href='http://portlandheadlight.com'>portlandheadlight.com</a>"
    },

    {
        selector: '#cover20',
        headline: 'Cadillac Mountain',
        copy: "Powering through to get to the top of Cadillac Mountain, racing against the setting sun. We need pics from the top! The Eye of the Tiger is back on the stereo to see us through. And we make the top just as the sun sets.",
        content: '<img src="images/cadillacmount.jpg">',
        address: "• Cadillac Mountain , Acadia National Park, ME, <a target='_blank' href='http://acadia.ws/cadillac-mountain.htm'>acadia.ws/cadillac-mountain.htm</a>"
    },

    {
        selector: '#cover21',
        headline: 'Union, NE',
        copy: "We hit the small town of Union in Maine and there's a farmers' market going on (crates of vegetables, raw honey, goat meat and goat-milk soap). Some of the traders are bartering.",
        content: '<img src="images/union.jpg">',
        address: ""
    },

    {
        selector: '#cover22',
        headline: "Side Street Cafe",
        copy: "There's really no better way to end a New England road trip. Just look at this guy! He's delicious. Top tip, folks. Loving the Side Street Cafe, a one-storey wooden detached building with a veranda wrapping around the front, lined with fairy lights. You can really add lobster to just about anything on our menu.",
        content: '<img src="images/lobster.jpg">',
        address: "• Side Street Cafe, 49 Rodick St, Bar Harbor, ME, <a target='_blank' href='http://sidestreetbarharbor.com'>sidestreetbarharbor.com</a>"
    }


 ]

 function processPlaceClick(box) {

    $("#buttons").fadeOut();
    $(".dayofweek").fadeOut();
    $("#tooltip1").fadeOut();
    $("#lightbox").fadeIn(function(event){      
      $("#content").html(box.content);
      $("#copyheader").html(box.headline)
      $("#copy").html(box.copy)
      $("#address").html(box.address)
    });

 }

 $.each(boxs, function(i, box) {
        $(box.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClick(box);
        });
    });


  $("#close").click(function(event) {        

    event.preventDefault();


    $("#lightbox").fadeOut(function(event){
       $("#buttons").fadeIn();
      $("#content").html('');
      $("#copyheader").html('');
      $("#copy").html('');
      $("#address").html('')
       $(".dayofweek").fadeIn();

    })

  });



}); //ready

