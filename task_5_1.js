/*
    1. Создать функцию, генерирующую шахматную доску. 
    При этом можно использовать любые html-теги по своему желанию. 
    Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
    Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

const settings = {
	rowCount: 10,
	colCount: 10,
    rowNames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 0],
    colNames: [0,'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0],
};

const chessВoard = {
	settings,
    tabelBlock: null,
    cellsArray: [],
    init() {
        this.tabelBlock = document.getElementById('chessВoard');
        this.createCells();
    },
    createCells() {
        this.tabelBlock.innerHTML = '';
        this.cellsArray = [];

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.tabelBlock.appendChild(trElem);
            
            for (let col = 0; col < this.settings.colCount; col++) {
                const cellElem = document.createElement('td');
                trElem.appendChild(cellElem);

                this.cellsArray.push(cellElem);

                if (this.settings.rowNames[row] == 0 && this.settings.colNames[col] != 0) {
                    cellElem.innerHTML = this.settings.colNames[col];
                } else if (this.settings.colNames[col] == 0 && this.settings.rowNames[row] != 0) {
                    cellElem.innerHTML = this.settings.rowNames[row].toString();
                } 
                if (row == 0 || col == 0 || row == 9 || col == 9) {
                    cellElem.style.backgroundColor = 'white';
                } else if ((row % 2 === 1 && col % 2 === 0) || (row % 2 === 0 && col % 2 === 1)) {
                    cellElem.style.backgroundColor = 'black';
                }
            }
        }

    }
}

chessВoard.init()