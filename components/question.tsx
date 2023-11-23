import {Question} from '../type';
import Answers from './Answers';

type Props = {
    question:Question;
    onSubmit: (correct:boolean) => void
}

const QuestionComp = (props:Props) => {
    return (
        <div>
            <h3>{props.question.question}</h3>
            <Answers question={props.question} onSubmit={props.onSubmit}/>

        </div>
    )
}

export default QuestionComp