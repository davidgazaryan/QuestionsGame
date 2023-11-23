type Props = {
    totalQuestions:number;
    correctQuestions:number;
    onPress: () => void;

}

export default function Reset(props:Props){
    return (
    <div>
        <h1>You scored {(props.correctQuestions / props.totalQuestions) * 100 } %</h1>
        <button onClick={props.onPress}>Click to Restart</button>

    </div>

    )
}