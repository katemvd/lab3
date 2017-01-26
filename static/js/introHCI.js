'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("I changed it!");
        $("#testjs").text("Please wait...");
        $(".jumbotron p").addClass("active");

	});
    $(".project").click(function(e){
        projectClick(e);
    });
}
	// Add any additional listeners here
function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    $(this).css("background-color", "#7fff00");
    
    var containingProject = $(e.target).closest(".project");
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    //var containingProject = $(e.target).closest(".project");
    var description = $(containingProject).find(".project-description");
   
   if (description.length == 0) {
       containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(description).toggle();
    }

                                                       
}
