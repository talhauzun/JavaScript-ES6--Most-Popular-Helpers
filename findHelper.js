const accounts = [
  {
    username: "ttalhauzun",
    password: "123456",
    nickname: "Talha Uzun",
  },
  {
    username: "bburcuayaz",
    password: "3242423",
    nickname: "Burcu Ayaz",
  },
  {
    username: "emineuzun",
    password: "234234234",
    nickname: "Emine Kübra Uzun",
  },
];

let user =(username,password)=>accounts.find((account)=>{
    return account.username===username&&account.password===password;
});

let userv2 =(username,password)=>accounts.find(account=> account.username===username&&account.password===password);

console.log(user("bburcuayaz","3242423")||"Kullanıcı yok!");  
console.log(userv2("emineuzun","234234234")||"Kullanıcı yok!");    
/* user||"Kullanıcı yok!"  
! kullanıcın olup olmadığını kontrol eder!
? user("eminekubra","234234234") listede gidip şifre doğrulaması yapar ve nesne döner.

*/
  
