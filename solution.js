/**
 * Ended up just destroying and recreating the button on click.
 * Inelegant, but it's already just jQuery.
 */
 
// Make the paging buttons stay buttonized
var pagingNav = $("div.paging-nav a");
pagingNav.button();
pagingNav.click(function hardRefreshButton()
{
	pagingNav.button( "destroy" );
	pagingNav.button();
});
