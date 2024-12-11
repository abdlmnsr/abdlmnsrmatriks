function getMatrixValues(matrixId) {
    return [
        [parseFloat(document.getElementById(`${matrixId}-00`).value), parseFloat(document.getElementById(`${matrixId}-01`).value)],
        [parseFloat(document.getElementById(`${matrixId}-10`).value), parseFloat(document.getElementById(`${matrixId}-11`).value)]
    ];
}

function displayResult(matrix) {
    document.getElementById('result').innerHTML = `
        [ ${matrix[0][0]} ${matrix[0][1]} ]<br>
        [ ${matrix[1][0]} ${matrix[1][1]} ]
    `;
}

function calculate() {
    let matrix1 = getMatrixValues('m1');
    let matrix2 = getMatrixValues('m2');
    let result = [
        [matrix1[0][0] + matrix2[0][0], matrix1[0][1] + matrix2[0][1]],
        [matrix1[1][0] + matrix2[1][0], matrix1[1][1] + matrix2[1][1]]
    ];
    displayResult(result);
}

function calculateSubtraction() {
    let matrix1 = getMatrixValues('m1');
    let matrix2 = getMatrixValues('m2');
    let result = [
        [matrix1[0][0] - matrix2[0][0], matrix1[0][1] - matrix2[0][1]],
        [matrix1[1][0] - matrix2[1][0], matrix1[1][1] - matrix2[1][1]]
    ];
    displayResult(result);
}

function calculateMultiplication() {
    let matrix1 = getMatrixValues('m1');
    let matrix2 = getMatrixValues('m2');
    let result = [
        [
            matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0],
            matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1]
        ],
        [
            matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0],
            matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1]
        ]
    ];
    displayResult(result);
}
