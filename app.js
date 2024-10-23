
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension =['.com', '.net', '.us', '.io'];

function domainGenerator(pronoun, adj, noun, extension){     

    for(let i = 0; i < pronoun.length; i++){       
        for(let j = 0; j < adj.length; j++){
            for(let k = 0; k < noun.length; k++){
                for(let l = 0; l < extension.length; l++){
                    let domain = pronoun[i] + adj[j] + noun[k] + extension[l];
                    console.log(domain);
                }               
            }            
        }        
    }  
}

domainGenerator(pronoun, adj, noun, extension);