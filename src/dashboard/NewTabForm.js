import React, {useState, useContext} from "react";
import styled from 'styled-components';
import uuid from 'uuid';
import dashboardContext from '../context/dashboardContext';
//importing components
import { NewFormPlaceHolder, Input, Padded, Button, Flex, CloseButton} from "../components";

const NewTabFormContainer = styled.div`
    width: 300px;
`;
const NewTabFormContentContainer = styled.div`
    background-color: #A7FBC3;
`;

const NewTabForm = props => {
    const [isFormFocused, setIsFormFocused] = useState(false);
    const [title, setTitle] = useState("");
    const context = useContext(dashboardContext);

    const submitTab = () => {
        context.addTab({
            id: 'tab-'+uuid(),
            title,
            items: [],
        });
        setTitle("");
        setIsFormFocused(false);
    };

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            submitTab();
        }
    }

    return (
        <Padded size='small'>
            <NewTabFormContainer>
                {!isFormFocused 
                    ? <NewFormPlaceHolder placeholder='Add New Bucket' onClick={() => setIsFormFocused(true)} /> 
                    : (
                        <NewTabFormContentContainer>
                            <Padded size="verySmall">
                                <Input onKeyDown={handleKeyDown} value={title} onChange={e => setTitle(e.target.value)} />
                                <Padded size="verySmall" />
                                <Flex>
                                    <Button onClick={submitTab} label='Add New Bucket' />
                                    <CloseButton onClick={() => setIsFormFocused(false)}>X</CloseButton>
                                </Flex>
                            </Padded>
                        </NewTabFormContentContainer>
                    )
                }
            </NewTabFormContainer>
        </Padded>
    );
};

export default NewTabForm;
