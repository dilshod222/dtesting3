import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Roll, Slide} from "react-awesome-reveal";
import 'animate.css'


class SolveQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: ["I have to understand this lesson",
                "I read a book",
                "bread and milk",
                "I have got a family"],
            answer1: ['Men,bu,darsni,tushunishim,kerak',
                "men,kitob,o'qidim",
                "non,va,sut",
                "meni,oilam,bor"],
            answer2: ['Men,tushunishim,kerak,bu,darsni', "kitob,o'qidim", "", ""],
            answer3: ["", "kitob,o'qidim,men", "", ""],
            options:
                [["Siz", 'Men', "tushunishim", "nima", "kerak", "hop", "bu", "do'stim", "darsni"],
                    ["men", "siz", "u", "kitob", "daftar", "o'qidim", "o'qidi"],
                    ["non", "va", "qoshiq", "qatiq", "qaymoq", "sut"],
                    ["meni", "seni", "aka", "bor", "hovli", "ko'cha", "oilam"]

                ],

            userAnswer: [[], [], [], []],
            selected: 0,
            selectedIndexs: [],
            disabled: true,
        }


    }


    render() {
        const addUserAnswer = (item, index) => {
            let arr = [...this.state.userAnswer];
            arr[this.state.selected].push(item);
            this.setState({userAnswer: arr})
            this.setState({disabled: false});
            let arr2 = this.state.selectedIndexs
            arr2.push(index)
            arr2.map(function (index) {
                document.getElementsByClassName('btn-options').item(index).classList.add('disabled', 'bg-secondary', 'text-secondary')

            })

            this.setState({selectedIndexs: arr2})

        }
        const editUserAnswer = (item, index) => {
            let arr2 = [...this.state.selectedIndexs]
            document.getElementsByClassName('btn-options').item(arr2[index]).classList.remove('disabled', 'bg-secondary', 'text-secondary')
            arr2.splice(index, 1)
            this.setState({selectedIndexs: arr2})
            this.state.userAnswer[this.state.selected].splice(index, 1)
            this.setState({userAnswer: this.state.userAnswer})
            if (this.state.userAnswer[this.state.selected].length === 0) {
                this.setState({disabled: true})
            }


        }


        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-8 offset-2">
                            <div className="progress">
                                <div className="progress-bar" id="progress"></div>
                            </div>
                            <div className="mt-5">
                                <h1>Write this in Uzbek </h1>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h3 className="m-5">{this.state.questions[this.state.selected]}</h3>
                                </div>
                            </div>


                            <div className="border-top btn-user border-bottom mt-3 d-flex align-items-center"
                                 style={{"height": "100px"}}>
                                <Roll>
                                    {this.state.userAnswer[this.state.selected].map((item, index) =>
                                        <button type="button" className="btn m-2 btn-edit btn-outline-success"
                                                onClick={() => editUserAnswer(item, index)}
                                                key={index}> {item} </button>
                                    )}
                                </Roll>

                            </div>

                            <div className="options d-flex justify-content-center mt-3">


                                {this.state.options[this.state.selected].map((item, index) =>
                                    <button type="button"
                                            className="btn btn-options m-2 btn-outline-primary"
                                            onClick={() => addUserAnswer(item, index)} key={index}> {item} </button>
                                )}


                            </div>

                            <div className="checking mt-5 d-flex align-items-center justify-content-between"
                                 id="checking">
                                <button type="button" className="btn btn-outline-danger m-5" id="skip">SKIP</button>
                                <h6 id="true_answer" className="true_answer text-white m-5"></h6>
                                <button type="button" className="btn btn-success m-5"
                                        disabled={this.state.disabled} id="checkButton">Check
                                </button>
                                <button type="button" className="btn d-none btn-success m-5" id="nextButton">Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SolveQuestion;