/**
 * Ended up just destroying and recreating the button on click.
 * Inelegant, but it's already just jQuery.
 */
 
// Creating pagination and nav bar
$('#message_list').paging({limit:50, activePage:1});

// Nav bar buttons weren't retaining jQuery UI button widget

// Make the paging buttons stay buttonized
var pagingNav = $("div.paging-nav a");
pagingNav.button();
pagingNav.click(function hardRefreshButton()
{
	pagingNav.button( "destroy" );
	pagingNav.button();
});
