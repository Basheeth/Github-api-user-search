


console.log("hello");
// fetch("https://api.github.com/users/ba").then((response)=>{
// console.log(response);    
// console.log("hello")
// return response})

// a.innerText="hh";
let arr =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    fetch("https://api.github.com/users/Octocat").then((response)=>{
        console.log(response);    
        console.log("hello")
        return response.json()}).then((data)=>{
            console.log(data)
            data.avatar_url != null?profileImage.src=data.avatar_url:null;
            userName.innerText = data.login;
            let dat = new Date(data.created_at);
            date.innerText = "Joined "+dat.getDate()+" "+arr[dat.getMonth()]+" "+dat.getFullYear() ;
            login.innerText = "@"+data.login;
            (data.bio != null)?bio.innerText = data.bio:bio.innerText = "This profile has no bio";
            repos.innerText = data.public_repos;
            followers.innerText = data.followers;
            following.innerText = data.following;
            (data.location != null)?locational.innerText = data.location:locational.innerText = "Not Available";
            (data.blog)?website.innerText = data.blog:website.innerText = "Not Available";
            (data.twitter_username)?twitter.innerText = data.twitter_username:twitter.innerText = "Not Available";
            (data.company)?company.innerText = data.company:company.innerText = "Not Available";
            login.href= data.html_url;
            return data;
        });

        console.log(login.firstElementChild);


        function fetchData(){
           console.log( input.value);
           fetch(`https://api.github.com/users/${input.value}`).then((response)=>{
            if(response.status != 200){
                throw new Error
            }
        console.log(response);    
        console.log("hello")
        return response.json()}).then((data)=>{
            data.avatar_url != null?profileImage.src=data.avatar_url:null;
            userName.innerText = data.login;
            let dat = new Date(data.created_at);
            date.innerText = "Joined "+dat.getDate()+" "+arr[dat.getMonth()]+" "+dat.getFullYear() ;
            login.innerText = "@"+data.login;
            (data.bio != null)?bio.innerText = data.bio:bio.innerText = "This profile has no bio";
            repos.innerText = data.public_repos;
            followers.innerText = data.followers;
            following.innerText = data.following;
            (data.location != null)?locational.innerText = data.location:locational.innerText = "Not Available";
            (data.blog)?website.innerText = data.blog:website.innerText = "Not Available";
            (data.twitter_username)?twitter.innerText = "@"+data.twitter_username:twitter.innerText = "Not Available";
            (data.company)?company.innerText = data.company:company.innerText = "Not Available";
            (data.twitter_username)?twitter.href= "https://twitter.com/"+data.twitter_username: twitter.href = ""; 
            login.href= data.html_url;
            return data;
        }).catch((err)=>{
              document.getElementsByClassName("renderingDiv")[0].innerHTML = "<p style='margin-left:35[0px;margin-top:150px;color:red;width:300px;font-size:40px;font-weight:bolder'>Not Available</p>";
        })
        }


        function themeChange(){
            (sun.src ==  "http://localhost:3090/assets/moon.svg")?((sun.src = "http://localhost:3090/assets/icon-sun.svg") && (light.innerText = "LIGHT")):((sun.src = "http://localhost:3090/assets/moon.svg") &&(light.innerText = "DARK"));
            // fetch(".data",{
            //     method:'POST',
            //     headers:
            // })
            (lin.href == "http://localhost:3090/css/Dark.css")?(lin.href="http://localhost:3090/css/main.css") : (lin.href = "http://localhost:3090/css/Dark.css");
        }

