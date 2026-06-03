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
}
const accordionList = document.querySelectorAll(".accordion-card");
for (let i = 0; i < accordionList.length; i++){
    let accordionCard = accordionList[i];
    let accordionButton = accordionCard.querySelector(".accordion-button");
    let accordionDetails = accordionCard.querySelector(".accordion-details")
    let accordionDetailHeight = accordionDetails.scrollHeight;
    accordionButton.addEventListener("click",function(){
        if (accordionButton.classList.contains("rotate-down")){
            accordionDetails.style.maxHeight = accordionDetailHeight+ "px";
            accordionButton.classList.replace("rotate-down","rotate-up");
            accordionDetails.classList.replace("accordion-details-hide","accordion-details-show");
        }else{
            accordionButton.classList.replace("rotate-up","rotate-down");
            accordionDetails.style.maxHeight = 0 + "px";
            accordionDetails.style.paddingBottom  = 0 + "px";
            accordionDetails.classList.replace("accordion-details-show","accordion-details-hide");
        }   
    })
}

// Run on page load
updateTimelineLine();

// Run every time screen width changes
window.addEventListener("resize", updateTimelineLine);