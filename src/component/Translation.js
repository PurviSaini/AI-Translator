import "./Translation.css"
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

let response="";
let lang="";
let sourceText="";

const Translation = () => {

  const translateText = async () => {
    response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Translate this into ${lang} :\n\n${sourceText}\n\n1.`,
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
    console.log(response["data"]["choices"][0]["text"]);
    document.getElementById("translatedText").textContent=response["data"]["choices"][0]["text"];
  };

  return (
    <div className="container-fluid text-center fs-2 text-warning">
    
      <h1 className='container py-3'>AI <span className="cookie" >Translator</span> </h1>
      <label className='container py-3'  htmlFor="sourceText">Enter text to translate:</label>
      <textarea className='container mb-5'
        id="sourceText"
        onChange={(e) => sourceText=(e.target.value)}
      />

      <label htmlFor="targetLanguage" className='mx-3'>Target Language:</label>
      <select className='mb-4 text-dark border border-3 rounded border-warning'
        id="targetLanguage"
        onChange={(e) => lang=(e.target.value)}
      >
        <option value="">Select</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Korean">Korean</option>
        <option value="Mandarin Chinese">Mandarin Chinese</option>
        <option value="Hindi">Hindi</option>
        <option value="Arabic">Arabic</option>
        <option value="Bengali">Bengali</option>
        <option value="Russian">Russian</option>
        <option value="Portuguese">Portuguese</option>
        <option value="Indonesian">Indonesian</option>
        <option value="Japanese">Japanese</option>
        <option value="Turkish">Turkish</option>
        <option value="Urdu">Urdu</option>
        <option value="Marathi">Marathi</option>

      </select>
        <div className="container mb-5">
      <button onClick={translateText} className="mt-3 rounded py-1 px-3" id="btn" >Translate</button>
      </div>
      <p id="translatedText" className="p-3 container">Here comes your Translated Text!!</p>

    </div>
  );
};

export default Translation;
