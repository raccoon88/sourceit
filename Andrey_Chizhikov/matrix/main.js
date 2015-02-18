var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');


multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
matrixHolder.innerHTML =  render(matrix(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
	var table = [];
	      for ( var i=0; i<size; i++) {
              
            table[i]=[];
          for (var j=0; j<size; j++) {
                table[i][j]=(i+1)*(j+1);
            }
          }
          console.log(table);
    return table;
}

function matrix (size) {
    var matrix = [];
  	for (var i=1; i<=size; i++) {
		matrix[i-1] = new Array(size);
		for(var j=1; j<=size; j++) {
			if (i==j)
				matrix[i-1][j-1] = 1;
			
			else if (j==size-i+1)
				matrix[i-1][j-1] = 2;

			else {
				if (i<size/2 && j>i-1 && j<size-i+1)
					matrix[i-1][j-1] = 3;
				else if ( i>size/2 && j>size-i+1 && j<i)
					matrix[i-1][j-1] = 5;
				
				else if ( j<size/2)
					matrix[i-1][j-1] = 6;
				
				else
					matrix[i-1][j-1] = 4;
			}			
		}		
	}	
    return matrix;
}

function pascal (size) {
    var triangle = [];
       for (var i=1; i<=size; i++) {
		triangle[i-1] = new Array(i);
		for(var j=1; j<=i; j++) {
			if (j<=i){				
				if (j>=2 && triangle[i-1-1][j-1-1] && triangle[i-1-1][j-1]){
						triangle[i-1][j-1] = triangle[i-1-1][j-1-1] + triangle[i-1-1][j-1];
				}
				else triangle[i-1][j-1] = 1;
			}			
		}		
	}	
    return triangle;
}

function render (array) {
   var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>',array[i].join(" "),'</td></tr>'].join(" ");
        result.push(row);
    }      
    return result.join(" ");

}