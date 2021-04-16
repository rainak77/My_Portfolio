

import crwn_clothing_store from '../../assets/project_image/crwn_clothing_store.png';
import covid from '../../assets/project_image/covid.jpg';
import youtube_api from '../../assets/project_image/youtube_api.png';
import eiraplaza from '../../assets/project_image/eiraplaza.png';


const data_projects = [
    {
        name: 'COVID 19 tracker',
        image: covid,
        deployed_url: 'https://covidtrackerarif.netlify.app',
        github_url: 'https://github.com/rainak77/Covid-19-Tracker',
        category: ['react.js']
    },
    {
        name: ' WORKING WITH YOUTUBE API',
        image: youtube_api,
        deployed_url: 'https://arif-youtube-api.netlify.app/',
        github_url: 'https://github.com/rainak77/Searching-vedio-with-Youtube-API',
        category: ['react.js']
    },
    {
        name: 'E-commerce Clothing App',
        image: crwn_clothing_store,
        deployed_url: 'https://arif-crwn-live.herokuapp.com/',
        github_url: 'https://github.com/rainak77/React_Ecommerce-With-Firebase-Authentication',
        category: ['firebase', 'react.js']
    },
    {
        name: 'Pizza Shop',
        image: eiraplaza,
        deployed_url: 'https://arif-crwn-live.herokuapp.com/',
        github_url: 'https://github.com/rainak77/React_Ecommerce-With-Firebase-Authentication',
        category: ['Asp.net', 'c#']
    }


];

export default data_projects;