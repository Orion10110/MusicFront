export const submittedChecker = (currentErrorState) => !Object.keys(currentErrorState)
    .some(key => currentErrorState[key] !== '');
