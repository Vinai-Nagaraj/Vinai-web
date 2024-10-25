// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
	button.addEventListener('click', () => {
		// Add logic here for what happens when a button is clicked
	});
});

// Add event listeners to projects
document.querySelectorAll('.project').forEach(project => {
	project.addEventListener('mouseover', () => {
		// Add logic here for what happens when a project is hovered over
	});
	project.addEventListener('mouseout', () => {
		// Add logic here for what happens when a project is no longer hovered over
	});
});
