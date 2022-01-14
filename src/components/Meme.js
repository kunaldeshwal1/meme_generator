import React from "react";
export default function Meme() {


  //const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    //can use async await here
    /*async function getMemes() {
                const res = await fetch("https://api.imgflip.com/get_memes")
                const data = await res.json()
                setAllMemes(data.data.memes)
            }
            getMeme()*/

    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(item => setAllMeme(item.data.memes))
  }, [])

  function getMemeImage() {
    let randomNumber = Math.floor(Math.random() * allMeme.length)
    console.log(randomNumber);
    const url = allMeme[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const { name, type, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }


  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top"
          className="form--input1"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />


        <input type="text"
          placeholder="Bottom"
          className="form--input2"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText} />


        <button className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image
        </button>
      </div>
      <img src={meme.randomImage} className="memeImg" />
      <h2 className="meme--text-top">{meme.topText}</h2>
      <h2 className="meme--text-bottom">{meme.bottomText}</h2>
    </main>

  )
}