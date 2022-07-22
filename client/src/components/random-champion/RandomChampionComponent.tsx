import { FC, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ChampionService from "../../services/ChampionService";
import { ChampionSummary } from "../../services/Types";



const RandomChampionComponent: FC = () => {
    const [championCountSelection, setChampionCountSelection] = useState<number>(1);
    const [randomChampions, setRandomChampions] = useState<ChampionSummary[]>([]);

    const randomChampionElements = randomChampions.map((championSummary, key) => {
        return (
            <div key={key}>Player {key + 1}: {championSummary.name}<br></br></div>
        )
    });

    const handleChampionCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = parseInt(event.target.value);
        setChampionCountSelection(selectedValue);
        console.log(selectedValue);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        setRandomChampions(ChampionService.getRandomChampions(championCountSelection));
    }

    return (
        <>
            <h2>Generate random champions</h2>

            <Form onSubmit={handleSubmit} className="random-champion-form py-3">
                <Form.Group controlId="championCount" as={Row} className="pb-3">
                    <Form.Label column sm="2">Number of Champions</Form.Label>

                    <Col sm="2">
                        <Form.Select value={championCountSelection} onChange={handleChampionCountChange}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" className="random-champion-button mb-3">
                    Generate
                </Button>

                {randomChampions && <div>{randomChampionElements}</div>}

            </Form>
        </>
    );
}

export default RandomChampionComponent;