type Props ={
    onPress: () => void;
    text:string | any;
    color?:string;
    disabled?: boolean;
}

export function Answer(props:Props){
    const style = props.color? {color: props.color} : {};


    return (
        <button onClick={props.onPress} disabled={props.disabled}>
            <span style={style}>{props.text}</span>
        </button>
    )
}