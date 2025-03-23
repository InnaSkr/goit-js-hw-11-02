import axios from 'axios';

export function getImage(input) {
    const apiKey = '49113920-f9af0cc3a936c3f1f6e808981';

    return axios('https://pixabay.com/api/', {
        params: {
            key: apiKey,
            q: encodeURIComponent(input),
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });
}