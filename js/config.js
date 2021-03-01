//---------//
// OPTIONS //
//---------//

// Set to number of preferred default search in "searches"
var default_search = 1;

// Number of columns of links per page
var grid_columns = 5;
// Number of rows of links per page
var grid_rows = 2;

// Whether or not the search bar is focused initially
var focus_search_on_load = true;
// Whether or not the retractable menu should exist
var retractable_menu = true;

//----------------//
// Search Engines //
//----------------//
var searches =
[
	{	//Google - 1
		"name" 		: "Google",
		"url"  		: "https://google.com/search",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//nibl - 2
		"name" 		: "nibl",
		"url"  		: "http://nibl.co.uk/bots.php?search=",
		"query"		: "search",
		"method"	: "post",
		"enabled"	: true
	},
	{	//The Pirate Bay - 3
		"name" 		: "Nyaa",
		"url"  		: "https://nyaa.si/?f=0&c=1_2&q=",
		"query"		: "term",
		"method"	: "get",
		"placeholder": "haruhi",
		"enabled"	: true
		
	},
	{	//What.CD - 4
		"name" 		: "Tosho",
		"url"  		: "https://animetosho.org/search",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//Youtube - 5
		"name" 		: "Panda",
		"url"  		: "http://exhentai.org",
		"query"		: "f_search",
		"method"	: "get",
		"enabled"	: true
	},
	{	//Wikipedia - 6
		"name" 		: "N Hen",
		"url"		: "http://nhentai.net/search/?q",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//ibsearch - 7
		"name" 		: "ib",
		"url"		: "http://ibsearch.xxx",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//Wolfram Alpha - 8
		"name" 		: "Yandex",
		"url"		: "https://yandex.com/search/?text=",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//Youtube - 9
		"name" 		: "YTube",
		"url"  		: "http://www.youtube.com/results",
		"query"		: "search_query",
		"method"	: "get",
		"enabled"	: true
	},
]; 

//------------//
// Menu Links //
//------------//
var menulinks =
[
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
];

//------------//
// Main Links //
//------------//
var links =
[
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
];
