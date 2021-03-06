import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// Assigns action objects and action types
// Directly interacts with the redux store's master states
export default function deltaReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_FRONTEND_TEST: {
      return Object.assign({}, state, { ...state, frontEndTest: true });
    }

    case types.SIGN_IN: {
      return Object.assign({}, state, { ...state, signedIn: true });
    }

    case types.SIGN_OFF: {
      return Object.assign({}, state, { ...state, signedIn: false });
    }

    case types.SET_CURRENT_QUESTION: {
      return Object.assign({}, state, {
        ...state,
        currentQuestion: action.currentQuestion
      });
    }

    case types.SET_QUESTION_QUEUE: {
      return Object.assign({}, state, {
        ...state,
        questionQueue: action.questionObject
      });
    }

    case types.SET_COMPLETED_QUESTIONS: {
      return Object.assign({}, state, {
        ...state,
        completedQuestions: action.completedQuestions
      });
    }

    case types.ADD_COMPLETED_QUESTION: {
      return Object.assign({}, state, {
        ...state,
        completedQuestions: [
          ...state.completedQuestions,
          action.completedQuestions
        ]
      });
    }

    case types.SET_QUESTION_OBJECT: {
      // console.log(state)
      return Object.assign({}, state, {
        ...state,
        questionsObject: state.questionsObject.concat(action.questionObject)
      });
    }

    case types.SET_USERNAME: {
      return Object.assign({}, state, { ...state, username: action.username });
    }

    case types.SET_UID: {
      return Object.assign({}, state, { ...state, uid: action.uid });
    }

    case types.SET_CURRENT_MODE: {
      return Object.assign({}, state, {
        ...state,
        currentMode: action.currentMode
      });
    }

    case types.SET_MOCKINTERVIEW_TIME: {
      return Object.assign({}, state, {
        ...state,
        mockInterviewTime: action.mockInterviewTime
      });
    }

    case types.TIME_FINISHED: {
      return Object.assign({}, state, {
        ...state,
        timeFinished: action.timeFinished
      });
    }

    case types.SET_COUNTDOWN_REF: {
      return Object.assign({}, state, {
        ...state,
        countdownRef: action.countdownRef
      });
    }

    default:
      return state;
  }
}
