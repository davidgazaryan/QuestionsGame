import {Question} from '../type';
import {Answer} from './Answer';
import {useState} from 'react';
import {useEffect} from 'react';

type Props = {
    question:Question;
    onSubmit:(correct:boolean) => void
}

const Answers = (props:Props) => {
    const [chosen,setChosen] = useState(false);

    useEffect (() => {
        setChosen(false);
    },[props.question])

    const onPress = (idx:number) =>{
        setChosen(true);
        props.onSubmit(props.question.correct === idx)}
//     Index is what we choose and correct is just the correct answer. So index gets assigned to a number depending which answer we choose from 0-3.


     return (
        <div >
            {props.question.answers.map((correct, idx) => {

            let color = "";
            if (chosen && props.question.correct === idx) color = "green";
            else if (chosen) color = "red";
//             WE TAKE ANSWER COMPONENTS PASS TO ANSWERS AND MAP, THEN TAKE ANSWERS AND PASS TO QUESTION COMPONENT
                return (
                    <Answer
                        text = {correct}
//                         Change THIS TO SEE WHAT HAPPENS
                        onPress={() => onPress(idx)}
                        color={color}
                        disabled={chosen}
                        key={idx}

                    />
                );
            })}
        </div>
    );

    }
//



export default Answers;