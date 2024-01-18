const rows = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

for(let i=0;i<rows.length;i++)
{
    const row = rows[i]
}

function isvalidSudoku(rows){
    const rowSet = new Set()
    const columnSet = new Set()
    const boxSet = new Set()

    for(let i=0;i<rows.length; i++){
        const row = rows[i]

        for(let j=0;j<row.length;j++){
            const rowNumber = row[j]
            const columnNumber = rows[j][i]
            const boxCharacter = rows[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]

            if(rowNumber !== '.'){
                if(rowSet.has(rowNumber)) return false
                rowSet.add(rowNumber)
            }

            if(columnNumber !== '.'){
                if(columnSet.has(columnNumber)) return false
                columnSet.add(columnNumber)
            }

            if(boxCharacter !== '.'){
                if(boxSet.has(boxCharacter)) return false
                boxSet.add(boxCharacter)
            }
        }
        rowSet.clear()
        columnSet.clear()
        boxSet.clear()
    }
    return true
}
