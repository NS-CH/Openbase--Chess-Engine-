/*

Evaluation file: contains all necessary information (when finished) to evaluate a position

*/

export const MaterialEvaluate = (whiteMaterialCount: number, blackMaterialCount: number) => {
    let materialEvaluation: number = whiteMaterialCount - blackMaterialCount;
    const winningByMaterialEvaluation = materialEvaluation * 1;
    if (materialEvaluation < 0) {
        console.log("Black is winning.")
        console.log(`Winning by ${winningByMaterialEvaluation}`)
    } else if (materialEvaluation > 0) {
        console.log("White is winning.")
        console.log(`Winning by ${winningByMaterialEvaluation}`)
    } else {
        console.log('Game is drew.')
    }
}