const mobilTeam=["Talha","Burcu"];
const webTeam=["Emine","Zehra"];
const iosTeam=["Sümeyye","Ahmet","Mehmet"];


const allDeveloper=[...mobilTeam,...iosTeam,...webTeam]; //[ 'Talha', 'Burcu', 'Sümeyye', 'Ahmet', 'Emine', 'Zehra' ]


const allDeveloperV2=[mobilTeam,iosTeam,webTeam]; // [ [ 'Talha', 'Burcu' ], [ 'Sümeyye', 'Ahmet' ], [ 'Emine', 'Zehra' ] ]
//console.log(allDeveloper);

const composedTeam=(allDeveloper)=>{    // Burada ise gelen verinin içinde değeri yoksa bunu diziye ekliyor 
    if (allDeveloper.indexOf("Kısa")<0) {
        return [...allDeveloper,"Kısa"];
    }
    return allDeveloper;
}

console.log(composedTeam(allDeveloper));
