import React, { useState } from "react";
import './Garden.css';
import { useContext } from 'react';
import ThemeContext from "../ThemeContext"
import SpeedContext from "../SpeedContext";

export default function Garden(props) {
    
    let Grille = [
        //0 //1 //2 //3 //4
        ['', '', '', '', ''], //0
        ['', '', '', '', ''], //1
        ['', '', '', '', ''], //2
        ['', '', '', '', ''], //3
        ['', '', '', '', ''] //4
    ];

    const [grille, setGrille] = useState(Grille);
    const  theme  = useContext(ThemeContext);
    const speed = useContext(SpeedContext)
    console.log(theme)

    //supprimer Emoji
    const handleRemoveEmoji = (i, j) => {
        let copy = [...grille]
        copy[i][j] = ''
        setGrille(copy)
    }

    //ajouter Emoji
    const addEmoji = () => {
        let copy = [...grille]
        boucle: for (let i = 0; i < copy.length; i++) { //déclarer une variable "boucle" pour break
            for (let j = 0; j < copy[i].length; j++) {
                if (copy[i][j] === "") { //aller chercher position index [i], [j]
                    copy[i][j] = theme.emoji1;
                    setGrille(copy)
                    grow(i, j) //établir des paramètres i, j pour grow, qui seront des index dans la fonction.
                    break boucle
                }
            }
        }
    }


    //faire grandir Emoji
    const grow = (i, j) => { //créer une const qui se déclenchera pour chaque emoji crée dans le addEmoji
        const timer = setTimeout(() => {
            let copy = [...grille]
            if (copy[i][j] === theme.emoji1) {
                copy[i][j] = theme.emoji2
            }
            setGrille(copy)
            setTimeout(() => { //inclure un setTimeout dans un setTimeout pour qu'il se déclenche à la suite du 1er
                let copy2 = [...grille] //par sécurité, déclarer nouvelle variable copy2
                if (copy2[i][j] === theme.emoji2) {
                    copy2[i][j] = theme.emoji3
                }
                setGrille(copy2)
            }, speed);
        }, speed);
    };


    //my garden(s)
    return (
        <div className="d-flex flex-column align-items-center">
            <table className="garden mt-5">
                <tbody>
                    {grille.map((row, i) => {
                        return (
                            <tr key={i}>
                                {row.map((cell, j) => {
                                    return <td key={j} onClick={() => handleRemoveEmoji(i, j)}>{cell}</td>;
                                })}
                            </tr>)
                    })}
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary mt-5" onClick={addEmoji}>Plant an emoji</button>
        </div>
    )
}
