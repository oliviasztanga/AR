// import React from 'react'
import Firebase from 'firebase'
import {config} from './firebaseConfig'


let app = Firebase.initializeApp(config);
export const db = app.database();

var exhibitsRef = db.ref("exhibits")


// 

var biggieExhibitsRef = db.ref("exhibits") //when we add more collections, will we have to add exhibits/fullstack, exhibits/washingtonSquarePark

// exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
//     var newPost = snapshot.val()
//     console.log("fullstack borough" + newPost.borough) //returns Manhattan (can only return single value keys)
//     var keys = Object.keys(newPost)
//     var values = Object.values(newPost)
//     console.log('KEYS', keys) //gives 6 keys as an ARRAY
//     console.log('VALUES', values) //gives us all values at each key
   
//     console.log(newPost, "newpost")// gives all keys (6) as an OBJECT
    

// })

exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
            var newPost = snapshot.val()
            console.log("fullstack menuImage" + newPost.borough) //returns object object
            var keys = Object.keys(newPost)
            var values = Object.values(newPost)
            console.log('KEYS', keys) //gives artwork, details
            console.log('VALUES', values[0]) //gives us paintings
           
            console.log(newPost, "newpost")// full object
            

        })
    
export const getArtwork = () => {
      exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
            var exhibit = snapshot.val()
            var keys = Object.keys(exhibit)
            var values = Object.values(exhibit)
            console.log('VALUES', values[0]) //gives us full paintings
            const paintingObjs = values[0]
            
            return paintingObjs //returns object
})
}

export const getCoordinates = () => {

      exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
            var exhibit = snapshot.val()
            var values = Object.values(exhibit)
            const coordinates = values[1].coordinates
            return coordinates
       
})
}

//gives all images 
export const getArtworkImages = () => {
      exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
      var exhibit = snapshot.val()
      var keys = Object.keys(exhibit)
      var values = Object.values(exhibit)
      const paintingObjs = values[0]
      var result = Object.keys(paintingObjs).map(function(key) {
        return [Number(key), paintingObjs[key]];
      });
      const arrayOfArt = []
      for (let i = 0; i < result.length; i++) {
        arrayOfArt.push(result[i][1].image)
      }
      // console.log(arrayOfArt)
      return arrayOfArt
})
}

export const getNavImage = () => {
      exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
      var exhibit = snapshot.val()
      var keys = Object.keys(exhibit)
      var values = Object.values(exhibit)
      const navImage = values[1].navImage
      return navImage
})
}

export const getExhibitName = () => {
      exhibitsRef.on("value", function(snapshot, prevChildKey) {
            var exhibit = snapshot.val()
            var key = Object.keys(exhibit)
            const exhibitName = key
            console.log(exhibitName)
            return exhibitName
})
}




// exhibitsRef.on("child_added", function(snapshot, prevChildKey) {
      //     var newPost = snapshot.val()
      //     console.log("Biggie" + newPost.biggie) //returns object object
      //     console.log("borough "+ newPost.borough) //gives the value AT borough (manhattan)
      //     console.log("frida" + newPost.frida)//returns object object
      //     console.log("coordinates " + newPost.coordinates) //gave us array
      //     console.log('menuimage' + newPost.menuImage) //gave us png
      
      // })