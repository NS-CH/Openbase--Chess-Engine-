// Imports

import * as PiecesImport from "./Importables/pieces";
import * as Evaluation from "./Importables/evaluate";

const Pieces = new PiecesImport.Pieces();
const Squares = new Array(64);

function Board() {
    // Row 1

    Squares[1] = Pieces.Rook;
    Squares[2] = Pieces.Knight;
    Squares[3] = Pieces.Bishop;
    Squares[4] = Pieces.Queen;
    Squares[5] = Pieces.King;
    Squares[6] = Pieces.Bishop;
    Squares[7] = Pieces.Knight;
    Squares[8] = Pieces.Rook;

    // Row 2

    Squares[9] = Pieces.Pawn;
    Squares[10] = Pieces.Pawn;
    Squares[11] = Pieces.Pawn;
    Squares[12] = Pieces.Pawn;
    Squares[13] = Pieces.Pawn;
    Squares[14] = Pieces.Pawn;
    Squares[15] = Pieces.Pawn;
    Squares[16] = Pieces.Pawn;

    // Row 7

    Squares[49] = Pieces.B_Pawn;
    Squares[50] = Pieces.B_Pawn;
    Squares[51] = Pieces.B_Pawn;
    Squares[52] = Pieces.B_Pawn;
    Squares[53] = Pieces.B_Pawn;
    Squares[54] = Pieces.B_Pawn;
    Squares[55] = Pieces.B_Pawn;
    Squares[56] = Pieces.B_Pawn;

    // Row 9

    Squares[57] = Pieces.B_Rook;
    Squares[58] = Pieces.B_Knight;
    Squares[59] = Pieces.B_Bishop;
    Squares[60] = Pieces.B_Queen;
    Squares[61] = Pieces.B_King;
    Squares[62] = Pieces.B_Bishop;
    Squares[63] = Pieces.B_Knight;
    Squares[64] = Pieces.B_Rook;

    for (let l = 17; l < 49; l++) {
        Squares[l] = null;
    }
}

console.log(Squares);

Board();

function checkValidMoves(piece: any, currentSquare: number, colour: string) {
    let allowedMoves = new Array();
    if (piece === Pieces.Pawn) {
        if (Squares[currentSquare + 8] === null) {
            allowedMoves.push(currentSquare + 8)
        }
        if (Squares[currentSquare + 9] !== null) {
            if (colour === "black") {
                if (
                    Squares[currentSquare + 9] === Pieces.Bishop ||
                    Squares[currentSquare + 9] === Pieces.King ||
                    Squares[currentSquare + 9] === Pieces.Knight ||
                    Squares[currentSquare + 9] === Pieces.Pawn ||
                    Squares[currentSquare + 9] === Pieces.Queen ||
                    Squares[currentSquare + 9] === Pieces.Rook
                ) {
                    allowedMoves.push(currentSquare + 9);
                }
            } else {
                if (
                    Squares[currentSquare + 9] === Pieces.B_Bishop ||
                    Squares[currentSquare + 9] === Pieces.B_King ||
                    Squares[currentSquare + 9] === Pieces.B_Knight ||
                    Squares[currentSquare + 9] === Pieces.B_Pawn ||
                    Squares[currentSquare + 9] === Pieces.B_Queen ||
                    Squares[currentSquare + 9] === Pieces.B_Rook
                ) {
                    allowedMoves.push(currentSquare + 9);
                }
            }
        }
        if (Squares[currentSquare + 7] !== null) {
            if (colour === "black") {
                if (
                    Squares[currentSquare + 9] === Pieces.Bishop ||
                    Squares[currentSquare + 9] === Pieces.King ||
                    Squares[currentSquare + 9] === Pieces.Knight ||
                    Squares[currentSquare + 9] === Pieces.Pawn ||
                    Squares[currentSquare + 9] === Pieces.Queen ||
                    Squares[currentSquare + 9] === Pieces.Rook
                ) {
                    allowedMoves.push(currentSquare + 7);
                }
            } else {
                if (
                    Squares[currentSquare + 9] === Pieces.B_Bishop ||
                    Squares[currentSquare + 9] === Pieces.B_King ||
                    Squares[currentSquare + 9] === Pieces.B_Knight ||
                    Squares[currentSquare + 9] === Pieces.B_Pawn ||
                    Squares[currentSquare + 9] === Pieces.B_Queen ||
                    Squares[currentSquare + 9] === Pieces.B_Rook
                ) {
                    allowedMoves.push(currentSquare + 7);
                }
            }
        }
        if (colour === "black") {
            if (Squares[currentSquare] === 49, 50, 51, 52, 53, 54, 55, 56) {
                allowedMoves.push(currentSquare + 16)
            }
        } else {
            if (Squares[currentSquare] === 49, 50, 51, 52, 53, 54, 55, 56) {
                allowedMoves.push(currentSquare + 16)
            }
        }
    }
    console.log(allowedMoves)
}

checkValidMoves(Pieces.Pawn, 14, "white")

console.log(Squares)