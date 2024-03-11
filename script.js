const sendButton = document.querySelector(".send");
const messageInput = document.querySelector(".message");
const div = document.querySelector("div");
const enter = document.querySelector(".enter");

let username = document.querySelector(".username");
let usernamevalue;
            enter.addEventListener("click",()=>{
                usernamevalue = username.value;
                username.remove();
                enter.remove();
                sendButton.style.display = "block";
                messageInput.style.display = "block";

                fetch('http://localhost:5173/api')
                .then(response => response.json())
                .then(data =>  {
                    if(data != []){
                        div.innerHTML = '';
                         for(i = 0;i<data.length;i++){
                            const messagediv = document.createElement("div");
                            div.appendChild(messagediv)
                            const dateU = document.createElement("h2");

                            dateU.innerText = `${data[i].username} at ${data[i].hour}:${data[i].min}`;
                            messagediv.appendChild(dateU)

                                const message = document.createElement("h1");
                                message.innerText = data[i].text;
                                messagediv.appendChild(message)
                         }
                    }
                })
                .catch(error => console.error('Error:', error));
            })
            



            

        sendButton.addEventListener("click",()=>{
            let obj = messageInput.value;
            let newhour = new Date().getHours();
            let newmin = new Date().getMinutes();

            fetch('http://localhost:5173/send',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({text:obj,username:usernamevalue,hour:newhour,min:newmin})
            });
            fetch('http://localhost:5173/api')
                .then(response => response.json())
                .then(data =>  {
                    if(data != []){
                        div.innerHTML = '';
                         for(i = 0;i<data.length;i++){
                            const messagediv = document.createElement("div");
                            div.appendChild(messagediv)
                            const dateU = document.createElement("h2");

                            dateU.innerText = `${data[i].username} at ${data[i].hour}:${data[i].min}`;
                            messagediv.appendChild(dateU)

                                const message = document.createElement("h1");
                                message.innerText = data[i].text;
                                messagediv.appendChild(message)
                         }
                    }
                })
                .catch(error => console.error('Error:', error));
            
        })