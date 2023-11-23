type Props = {
    currentQuestion:number;
    totalQuestions:number;
    correct:number;
    incorrect:number;
}


export default function StatBar(props:Props) {
   return( <div style={{display:"flex",flexDirection:"row",justifyContent:'center',gap:10,padding:10,borderRadius:'10px',backgroundColor:'grey'}}>
        <p>Questions:{props.currentQuestion}/{props.totalQuestions}</p>
        <p>Correct:{props.correct}</p>
        <p>Incorrect:{props.incorrect}</p>

    </div>
    )
}