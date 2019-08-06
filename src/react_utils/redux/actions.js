import { projects } from '../../data/project-page-data';
	

// All aJax requests will go from this file
export const Action = {
    showProject: function(projectName){
       
        projectName = projectName.trim();
        var data;
		
        for (let index = 0; index < projects.length; index++) {
            const project = projects[index];
            if (project.title == projectName) {
                data = project;
            }
        }
        return {
            type: "SHOW_PROJECT",
            project: data,
            direction: "BOTTOM"
        };
    },
    openProject(project){
        return {
            type: "SHOW_PROJECT",
            project: project,
            direction: "BOTTOM"
        };
    },
    nextImage(image){
        var nextImage = checkPageDataVsImage(projects, image, 1);
        return {
            type: "PREPARE_NEXT_IMAGE",
            image: nextImage,
            direction: "shiftRight"
        };
    },
    previousImage(image){
        var previousImage = checkPageDataVsImage(projects, image, -1);
        return {
            type: "PREPARE_NEXT_IMAGE",
            image: previousImage,
            direction: "shiftLeft"
        };
    },
    showImage: function(image){
        if( typeof image !== 'object'){ throw new Error('Image should be an object'); }
        return {
            type: "SHOW_IMAGE",
            image: image
        };
    },
    dismissImage:function(){
        return {
            type: "DISSMISS_IMAGE",
        };
    },
    dismissAll(){
        this.dismissImage();
        return {
            type: "DISSMISS_ALL",
        };
    },
    calibrateAppSize(widowWidth){
        return {
            type: "SET_APP_SIZE",
            mobileApp: widowWidth < 750,
            smallScreen: widowWidth < 1020
        };
    },
    renderNext(){
        return {
            type: "RENDER_NEXT_IMAGE"
        };
    },
    addTracks(tracks){
        return {
            type: "ADD_TRACKS",
            tracks: tracks
        };
    },
    showVideo(video){
        return {
            type: "SHOW_VIDEO",
            video: video
        };
    },
    dismissVideo(){
        return {
            type: "DISSMISS_VIDEO"
        };
    }
};

export const ActionIds = {
	
};

function checkImageData(element ,imageData, ) {
    return imageData.name == element.name;
}

function checkPageDataVsImage(pageData, image, returnDifference){
    for (let index = 0; index < pageData.length; index++) {
        const project = pageData[index];
        if (image){
            if (image.project == project.title){
                var currentIndex = project.screenShots.findIndex((element) => checkImageData(element, image));
                if (currentIndex >= 0) {
                    return project.screenShots[currentIndex + returnDifference];
                }
            }
        }
    }  
}