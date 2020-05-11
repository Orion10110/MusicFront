export const getAdditionalData = (arrayForSlide, width, initialXPosition) => {
    const { body: { offsetWidth } } = document;
    const countElem = arrayForSlide.length;

    const visibleElem = Math.floor(offsetWidth / width);
    const rightBorder = -(width * (countElem - visibleElem)
      - (offsetWidth - width * visibleElem)) - initialXPosition;

    return { rightBorder, visibleElem, countElem, width };
};
