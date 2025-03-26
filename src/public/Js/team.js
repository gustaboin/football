const teams = [
    {
        name: "Chesea",
        description: "Club de fútbol profesional con sede en Londres, Cheasea.",
        logo: "../img/chelsea.png"
    },
    {
        name: "Bournemouth",
        description: "Club de fútbol profesional Afc_Bournemouth.",
        logo: "../img/Afc_Bournemouth.png"
    },
    {
        name: "Newcastle United",
        description: "Club de fútbol profesional Newcastle United.",
        logo: "../img/Newcastle_United.png"
    },
    {
        name: "Aston Villa",
        description: "Club de fútbol profesional Aston Villa.",
        logo: "../img/Aston_Villa.png"
    },
    {
        name: "Manchester United",
        description: "Club de fútbol profesional de Inglaterra, con sede en Manchester.",
        logo: "../img/Manchester_City.png"
    },
    {
        name: "Brentford",
        description: "Club de fútbol profesional de Inglaterra, Brentford",
        logo: "../img/Brentford.png"
    },
    {
        name: "Nottingham Forest",
        description: "Club de fútbol profesional con sede en Nottingham, Inglaterra, conocido por su historia rica y por haber ganado la Copa de Europa en dos ocasiones",
        logo: "../img/Nottingham_Forest.png"
    },
    {
        name: "Arsenal",
        description: "Club de fútbol Arsenal",
        logo: "../img/Arsenal.png"
    },
    {
        name: "Manchester United",
        description: "Club de fútbol Manchester United",
        logo: "../img/Manchester_United.png"
    },
    {
        name: "Brighton & Hove Albion",
        description: "Club de fútbol Brigthon & Hove Albion",
        logo: "../img/Brighton_Hove_Albion.png"
    },
    {
        name: "Crystal Palace",
        description: "Club de fútbol Crystal Palace",
        logo: "../img/Crystal_Palace.png"
    },
    {
        name: "Fulham",
        description: "Club de fútbol Fullham",
        logo: "../img/Fulham.png"
    },
    {
        name: "Ipswich Town",
        description: "Club de fútbol Ipswich Town",
        logo: "../img/Ipswich_Town.png"
    },
    {
        name: "Leicester City",
        description: "Club de fútbol Leicister City",
        logo: "../img/Leicester_City.png"
    },
    {
        name: "Tottenham Hotspur",
        description: "Club de fútbol profesional con sede en Londres, Inglaterra.",
        logo: "../img/Tottenham_Hotspur.png"
    },
    {
        name: "West Ham United",
        description: "Club de fútbol West Ham United",
        logo: "../img/West_Ham_United.png"
    },
    {
        name: "Wolverhampton Wanderers",
        description: "Club de fútbol Wolverhampton Wanderers",
        logo: "../img/Wolverhampton_Wanderers.png"
    },
    {
        name: "Liverpool",
        description: "Club de fútbol Liverpool",
        logo: "../img/Liverpool.png"
    },
    {
        name: "Everton",
        description: "Club de fútbol Everton",
        logo: "../img/Everton.png"
    },
    {
        name: "Southampton",
        description: "Club de fútbol Southampton",
        logo: "../img/Southampton.png"
    }
];

const container = document.getElementById('team-container');

teams.forEach(team =>
{
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
                <img src="${team.logo}" alt="${team.name}">
                <div class="card-content">
                    <h2>${team.name}</h2>
                    <p>${team.description}</p>
                </div>
            `;

    container.appendChild(card);
});

