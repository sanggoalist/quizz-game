import style from "./index.module.scss";
import { NextPage } from "next";
import { Button, Card, Radio, Result, Space } from "antd";
import { CaretLeftOutlined, CheckOutlined, LeftOutlined, RightOutlined, SmileOutlined } from "@ant-design/icons";

const QuizzPage: NextPage = () => {

    const handleSelectAnwser = (event: any) => {

    }

    const handleNextQuestion = () => {

    }

    const handlePreviousQuestion = () => {

    }

    const handleSubmit = () => {

    }
    
    const handleReturn = () => {

    }
    return <div className={style.layout}>
        <div className= {style.wrapper}>
            <div className={style.container}>
                <h1>Quizz Game</h1>
                <p>1/<b>12</b></p>
                <div className={style.content}>
                    <p><b>Q.1: </b>This is a question ?</p>
                    <Card>
                        <Radio.Group onChange={handleSelectAnwser}>
                            <Space direction="vertical">
                                <Radio value="1">A</Radio>
                                <Radio value="2">B</Radio>
                                <Radio value="3">C</Radio>
                                <Radio value="4">D</Radio>
                            </Space>
                        </Radio.Group>
                    </Card>
                    <div className={style.button_group}>
                    <Button type="primary" icon = {<LeftOutlined />}
                            disabled = {false} 
                            onClick = {handlePreviousQuestion}>
                            Previous Question
                    </Button>
                    {false && <Button type="primary" danger icon = {<CheckOutlined />} onClick = {handleSubmit}>
                            Submit
                    </Button>}
                    <Button type="primary"  
                            icon = {<RightOutlined />} 
                            disabled = {false}
                            onClick = {handleNextQuestion} >
                            Next Question
                    </Button>
                    </div> 
                </div>
            </div>
            {false && <div className={style.container}>
                    <Result
                        icon={<SmileOutlined />}
                        title={<div>
                            <p>Great, you have passed the quizz!</p>
                            <p>Result: <span className={style.color_green}>12</span>/12</p>
                        </div>}
                        extra={<Button type="primary" onClick={handleReturn} icon = {<CaretLeftOutlined />}>Do quizz again!</Button>}
                    />
            </div>}
            {false && <div className={style.container}>
                    <Result
                        status="error"
                        title={<div>
                            <p color="red">Failure!!!</p>
                            <p>Result: <span className={style.color_red}>1</span>/12</p>
                        </div>}
                        extra={<Button type="primary" onClick={handleReturn} icon = {<CaretLeftOutlined /> }>Do quizz again!</Button>}
                    />
            </div>}
        </div>
    </div>
}

export default QuizzPage;