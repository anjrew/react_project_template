/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
export default function reducer(state = {}, action) {
    // console.log('IN reducer with action ', action, ' and state ', state);

    switch (action.type) {

        case "SHOW_PROJECT":
            return { 
                ...state, 
                showProject: action.project,
                currentImage: action.image 
			};
			
        case "DISSMISS_ALL":
			return { ...state, showProject: null };
			
        case "SET_APP_SIZE":
            return { 
                ...state, 
                mobileApp: action.mobileApp,
                smallScreen: action.smallScreen
			 };

        case "SHOW_IMAGE":
            return { 
                ...state, 
                currentImage: action.image,
                showImage: true
			};
			
        case "DISSMISS_IMAGE":
            return { 
                ...state, 
                showImage: false,
                currentImage: null
            };

        case "PREPARE_NEXT_IMAGE":
            if (action.image == undefined){
                return {
                    ...state,
                    showImage: false,
                    nextImage: null,
                    currentImage: null,
                    nextDirection: null
                };
            } else {
                return {
                    ...state,
                    showImage: false,
                    nextImage: action.image,
                    nextDirection: action.direction,
                    direction: action.direction
                };
            }
            
        case "RENDER_NEXT_IMAGE":
            return {
                ...state,
                currentImage: state.nextImage,
                showImage: true,
                nextImage: null,
                direction: state.nextDirection,
                nextDirection: null
			};
			
        case "ADD_TRACKS":
            return {
                ...state,
                tracks: action.tracks
			};

		case "SHOW_VIDEO":
			return {
				...state,
				video: action.video
			};

		case "DISSMISS_VIDEO":
			return {
				...state,
				video: null
			};
			
        default:
            return state;
    }
    
}