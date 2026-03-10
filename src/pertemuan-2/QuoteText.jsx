export default function QuoteText(){
      const text = "Semangat Puasa";
      const text2 = "Jangan berbuka di jam 12";
      return(
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>    
      )
}