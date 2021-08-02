import akosua_konadu_img from '../../../assets/images/candidates/akosua_konadu.jpeg';
import prince_asiedu_img from '../../../assets/images/candidates/prince_asiedu.jpeg';
import prince_kankam_img from '../../../assets/images/candidates/prince_kankam.jpeg';
import lordina_img from '../../../assets/images/candidates/lordina.jpeg';
import nadia_img from '../../../assets/images/candidates/nadia.jpeg';
import prince_ando_img from '../../../assets/images/candidates/prince_ando.jpeg';
import cindy_img from '../../../assets/images/candidates/cindy.jpeg';
import cornelia_img from '../../../assets/images/candidates/cornelia.jpeg';

export const position = {
    PRESIDENT: 'SRC PRESIDENT',
    FINANCIAL_SECRETARY: 'SRC FINANCIAL SECRETARY',
    GENERAL_SECRETARY: 'SRC GENERAL SECRETARY',
    "WOMEN'S COMMISSIONER": 'WOMEN\'S COMMISSIONER'
}

export const candidates = [
    {
        id: 1,
        name: 'Prince Asiedu',
        position: position.PRESIDENT,
        avatar: prince_asiedu_img
    },
    {
        id: 2,
        name: 'Prince Kwame Kankam',
        position: position.FINANCIAL_SECRETARY,
        avatar: prince_kankam_img
    },
    {
        id: 3,
        name: 'Lordina Amo-Gyau',
        position: position.GENERAL_SECRETARY,
        avatar: lordina_img
    },
    {
        id: 4,
        name: 'Akosua Konadu Boateng',
        position: position.FINANCIAL_SECRETARY,
        avatar: akosua_konadu_img,
    },
    {
        id: 5,
        name: 'Nadia Acheampong',
        position: position["WOMEN'S COMMISSIONER"],
        avatar: nadia_img
    },
    {
        id: 6,
        name: 'Prince Ando',
        position: position.PRESIDENT,
        avatar: prince_ando_img
    },
    {
        id: 7,
        name: 'Cindy Asiedu',
        position: position.GENERAL_SECRETARY,
        avatar: cindy_img
    },
    {
        id: 8,
        name: 'Connielia Otuo',
        position: position["WOMEN'S COMMISSIONER"],
        avatar: cornelia_img
    }
];
