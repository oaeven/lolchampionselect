import styles from './RandomChampion.module.css';
import { FC, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import ChampionService from "../../services/ChampionService";
import { ChampionSummary } from "../../services/Types";
import VersionService from '../../services/VersionService';

const RandomChampionComponent: FC = () => {
    const [patchVersion, setPatchVersion] = useState<string | undefined>(undefined);
    const [copyToClipboardText, setCopyToClipboardText] = useState<string>('');
    const [championCountSelection, setChampionCountSelection] = useState<number>(1);
    const [randomChampions, setRandomChampions] = useState<ChampionSummary[]>([]);
    const [copyButtonText, setCopyButtonText] = useState<string>('Copy');

    useEffect(() => {
        VersionService.getLatestVersion().then(patchVersion => {
            setPatchVersion(patchVersion);
            console.log('use effect get patch version');
        });
    }, []);

    const randomChampionElements = randomChampions.map((championSummary, key) => {
        return (
            <div key={key}>Player {key + 1}: {championSummary.name}<br></br></div>
        )
    });

    const generatedChampionsText = (champions: ChampionSummary[]) => {
        let championText = '';

        champions.forEach((championSummary, index) => {
            championText += `Player ${index + 1}: ${championSummary.name} \n`;
        });

        setCopyToClipboardText(championText);
    };

    const handleChampionCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = parseInt(event.target.value);
        setChampionCountSelection(selectedValue);
        console.log(selectedValue);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const newRandomChampions = await ChampionService.getRandomChampions(championCountSelection);
        setRandomChampions(newRandomChampions);
        generatedChampionsText(newRandomChampions);
    };

    const copyText = () => {
        console.log("copy text button clicked");

        setCopyButtonText('Copied!');
        setTimeout(() => {
            setCopyButtonText('Copy');
        }, 1000)
    };

    return (
        <>
            {patchVersion && <div className="float-end ">
                <small>Patch version: {patchVersion}</small>
            </div>}

            <h2 className='pb-2'>Generate random champions</h2>

            <Form onSubmit={handleSubmit} className={styles.form}>
                <Form.Group controlId="championCount" as={Row} className="p-3">
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

                <Button variant="primary" type="submit" className="mb-3 mx-3">
                    Generate
                </Button>

                {randomChampions.length > 0 && <div className={`${styles.formRandomData} p-3`}>

                    <div className="float-end">
                        <CopyToClipboard text={copyToClipboardText} onCopy={() => copyText()}>
                            <Button variant="outline-primary" size="sm">{copyButtonText}</Button>
                        </CopyToClipboard>
                    </div>

                    <div>{randomChampionElements}</div>
                </div>}

            </Form>
        </>
    );
}

export default RandomChampionComponent;