const returnPlacePosition = (position) => {
    const places = document.querySelectorAll('div.place');
    let res;
    places.forEach(place => {
        let dataPosition = Number.parseInt(place.getAttribute('data-position'));
        if (dataPosition === position) {
            res = place;
        }
    })
    return res;
}

const animate = (direction) => {
    const places = document.querySelectorAll('div.place');
    //remove all effects classes 
    //add effect class
    if (direction === "right") {
        if (places.length <= 2) {
            returnPlacePosition(1).setAttribute('class','place onEnter')
            returnPlacePosition(2).setAttribute('class','place onExit2items');
        } else {
            returnPlacePosition(1).setAttribute('class','place onEnter')
            returnPlacePosition(2).setAttribute('class','place preparation');
            returnPlacePosition(3).setAttribute('class','place exiting');
        }

        
    } else {
        if (places.length <= 2) {
            returnPlacePosition(1).setAttribute('class','place onEnter')
            returnPlacePosition(2).setAttribute('class','place onExit2items');
        } else {
            returnPlacePosition(1).setAttribute('class', 'place exitingRev');
            returnPlacePosition(2).setAttribute('class', 'place onEnterRev')
            returnPlacePosition(3).setAttribute('class', 'place preparationRev');
        }
    }
}
const nextPlace = () => {
    const places = document.querySelectorAll('div.place');
    places.forEach(place => {
        let dataPosition = Number.parseInt(place.getAttribute('data-position'));
        if (dataPosition === 1) {
            place.setAttribute('data-position', places.length);
        } else {
            place.setAttribute('data-position', dataPosition - 1);
        }
    })
    animate('right')
}
const prevPlace = () => {
    const places = document.querySelectorAll('div.place');
    places.forEach(place => {
        let dataPosition = Number.parseInt(place.getAttribute('data-position'));
        if (dataPosition === places.length) {
            place.setAttribute('data-position', 1);
        } else {
            place.setAttribute('data-position', dataPosition + 1);
        }
    })
    animate('left')
}
document.addEventListener('load', nextPlace())
