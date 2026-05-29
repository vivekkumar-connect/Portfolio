function updateTimelineLine() {
  var experienceContainerElement = document.querySelector(".experience-container");
  var timelineList = document.querySelectorAll(".experience-card-timeline");
  //Getting height/width properties of full exp container
  const experienceContainerHeight = experienceContainerElement.getBoundingClientRect();
  //Getting height/width properties (also include wrt screen) of first and last timeline element
  const firstTimelineHeight = timelineList[0].getBoundingClientRect();
  const lastTimelineHeight = timelineList[timelineList.length-1].getBoundingClientRect();
  //Getting height of first and last timeline element
  const firstTimelineCenterPosition = (firstTimelineHeight.top - experienceContainerHeight.top) + firstTimelineHeight.height / 2;
  const lastTimelineCenterPosition = (lastTimelineHeight.top - experienceContainerHeight.top) + lastTimelineHeight.height / 2;
  //calcuclating line height, whose top is  
  const timelineHeight = lastTimelineCenterPosition - firstTimelineCenterPosition;

  //Getting mid postion of timeline element wrt screen
  experienceContainerElement.style.setProperty("--first-timeline-center", firstTimelineCenterPosition + "px");
  experienceContainerElement.style.setProperty("--timeline-line-height", timelineHeight + "px");
  console.log("Runign")
}

// Run on page load
updateTimelineLine();

// Run every time screen width changes
window.addEventListener("resize", updateTimelineLine);