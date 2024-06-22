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
	{	//Google - 2
		"name" 		: "Google",
		"url"  		: "https://google.com/search",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
		{	//Brave - 1
		"name" 		: "Brave",
		"url"  		: "https://search.brave.com/search?q=",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//The Pirate Bay - 3
		"name" 		: "Nyaa",
		"url"  		: "https://nyaa.si/?f=0&c=1_2&q=",
		"query"		: "term",
		"method"	: "get",
		"placeholder": "Nyaa",
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
		"url"  		: "https://exhentai.org",
		"query"		: "f_search",
		"method"	: "get",
		"enabled"	: true
	},
	{	//Wikipedia - 6
		"name" 		: "N Hen",
		"url"		: "https://nhentai.net/search/?q",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//ibsearch - 7
		"name" 		: "ib",
		"url"		: "https://ibsearch.xxx",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//Youtube - 9
		"name" 		: "YTube",
		"url"  		: "https://www.youtube.com/results",
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
