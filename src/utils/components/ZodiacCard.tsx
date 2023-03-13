import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AppService } from '../../services/app.service.ts';
import axios from "axios";

export interface Zodiac {
    sign: string;
    emoji: number;
    description: string;
}

export type ZodiacCardProps = {
    zodiac: Zodiac;
};

export interface ZodiacResponse {
    color: string;
    compatibility: string;
    current_date: string;
    date_range: string;
    description: string;
    lucky_number: string;
    lucky_time: string;
    mood: string;
}

const Header: React.FC<ZodiacCardProps> = React.memo(
  ({zodiac}) => {
    
    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // API call
   
    
    
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <span className="card col-3 d-flex justify-content-center m-3">
                <div className="card-body">
                    <h5 className="card-title">{`${String.fromCodePoint(zodiac.emoji) } ${zodiac.sign}`}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{`${zodiac.description}`}</h6>
                    <p className="card-text">{`toto`}</p>
                    <a onClick={handleShow} className="card-link">Read more</a>
                </div>
            </span>
        </>
    );
  }
);

export default Header;