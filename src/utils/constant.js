
export const LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXSPhPf2I09aEyIHn8h1bHyWyTz4TU_Glfg&s"


export const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;


export const YOUTUBE_VIDEOS_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=";



export const LIVE_CHAT_COUNT = 50;


export const COMMENT_USER_DATA = [
    {
        name : "Gautham",
        comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
        replies:[
            {
                name : "Rahul",
                comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                replies:[
                    {
                        name : "Arjun",
                        comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                        replies:[ 
                            {
                            name : "Ramu",
                            comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                            replies:[
                                {
                                    name : "Rohit",
                                    comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                                    replies:[]
                                    
                                 },
                            ]
                            
                         },
                        ]
                        
                     },
                     {
                        name : "Gautham",
                        comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                        replies:[]
                        
                     },
                ]
                
             },
             {
                name : "Rohan",
                comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                replies:[ 
                    {
                    name : "Albert",
                    comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                    replies:[ 
                        {
                        name : "Gautham",
                        comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                        replies:[]
                        
                     },]
                    
                 },]
                
             },

        ]
        
     },
     {
        name : "Donlee",
        comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
        replies:[]
        
     },
     {
        name : "Khan",
        comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
        replies:[
            {
                name : "Akshay",
                comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                replies:[]
                
             },
             {
                name : "Zimbu",
                comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
                replies:[]
                
             },
        ]
        
     },
     {
        name : "Gautham",
        comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
        replies:[]
        
     },
     {
        name : "Gautham",
        comment: "Hello world loremipsum fhfhhelo ddnont slajfhfld",
        replies:[]
        
     },
    
    ]



// Random Name generator



    const nameList = [
      'Time', 'Past', 'Future', 'Dev',
      'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
      'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
      'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
      'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'Rahul', 'Bandit',
      'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
      'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
      'Game', 'Arjun', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
      'Gayathri', 'Assault', 'Rayan', 'Trap', 'Trapper', 'Redeem', 'Code',
      'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
      'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
      'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
      'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
      'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
      'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
      'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
      'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
      'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
      'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
      'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
      'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
    ];
   export  function RandomNameGenerate() {
    const finalName = nameList[Math.floor(Math.random() * nameList.length)];
          return finalName;
        };



// Random string generator 




     export   function randomString(length) {
         if ( length <= 0 ) return "";
         let getChunk = function(){
            let i, //index iterator
                 rand = Math.random()*10e16, //execute random once
                 bin = rand.toString(2).substr(2,10), //random binary sequence
                 lcase = (rand.toString(36)+"0000000000").substr(0,10), //lower case random string
                 ucase = lcase.toUpperCase(), //upper case random string
                 a = [lcase,ucase], //position them in an array in index 0 and 1
                 str = ""; //the chunk string

             for ( i=0; i<10; i++ )
                 str += a[bin[i]][i]; //gets the next character, depends on the bit in the same position as the character - that way it will decide what case to put next
             return str;
         },
         str = ""; //the result string
         while ( str.length < length  )
             str += getChunk();
         str = str.substr(0,length);
         return str;
     }




     // Random number generator 



   export  function getRandomInteger(min = 1, max= 100000) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

