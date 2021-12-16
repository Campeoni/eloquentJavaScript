const size = 15;
let tablero = "";

//este se encarga de filas
for (let i=1; i <= size; i++)
{
  //este se encarga de las columnas
  for (let j=1; j <= size; j++)
  {
    if ((i+j)%2==0)
    {
      tablero += " "
    }else
    {
      tablero += "#"
    }
  }
  tablero += "\n";
}
console.log (tablero);